import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Disc, Radio, Sliders, Zap, Music } from 'lucide-react';

// Live Web Audio nodes for DJ Mixer simulation
let audioCtx: AudioContext | null = null;
let masterGainNode: GainNode | null = null;
let lowShelfEQ: BiquadFilterNode | null = null;
let midPeakingEQ: BiquadFilterNode | null = null;
let highShelfEQ: BiquadFilterNode | null = null;
let sweepFilterNode: BiquadFilterNode | null = null;
let pingpongDelayNode: DelayNode | null = null;
let pingpongGainNode: GainNode | null = null;

// Sound Generator scheduling variables
let stepCount = 0;
let synthTimerId: number | null = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    audioCtx = new AudioContextClass();
    setupSignalChain(audioCtx);
  }
  return audioCtx;
}

function setupSignalChain(ctx: AudioContext) {
  // 1. Create master volume control
  masterGainNode = ctx.createGain();
  masterGainNode.gain.setValueAtTime(0.35, ctx.currentTime);

  // 2. Create 3-band Isolator EQ (Low Shelf, Peaking Mid, High Shelf)
  lowShelfEQ = ctx.createBiquadFilter();
  lowShelfEQ.type = 'lowshelf';
  lowShelfEQ.frequency.setValueAtTime(250, ctx.currentTime); // Crossover at 250Hz for bass
  lowShelfEQ.gain.setValueAtTime(0, ctx.currentTime);

  midPeakingEQ = ctx.createBiquadFilter();
  midPeakingEQ.type = 'peaking';
  midPeakingEQ.Q.setValueAtTime(1.0, ctx.currentTime);
  midPeakingEQ.frequency.setValueAtTime(1500, ctx.currentTime); // Peak at 1.5kHz for mids
  midPeakingEQ.gain.setValueAtTime(0, ctx.currentTime);

  highShelfEQ = ctx.createBiquadFilter();
  highShelfEQ.type = 'highshelf';
  highShelfEQ.frequency.setValueAtTime(4500, ctx.currentTime); // Crossover at 4.5kHz for treble
  highShelfEQ.gain.setValueAtTime(0, ctx.currentTime);

  // 3. Dynamic Cutoff Filter Sweep (Lowpass that can sweep open)
  sweepFilterNode = ctx.createBiquadFilter();
  sweepFilterNode.type = 'lowpass';
  sweepFilterNode.frequency.setValueAtTime(8000, ctx.currentTime); // fairly open by default
  sweepFilterNode.Q.setValueAtTime(2.5, ctx.currentTime); // slight resonance accent

  // 4. Analog Ping-Pong Delay Echo
  pingpongDelayNode = ctx.createDelay(1.0);
  pingpongDelayNode.delayTime.setValueAtTime(0.32, ctx.currentTime); // synchronized to ~124 BPM
  
  pingpongGainNode = ctx.createGain();
  pingpongGainNode.gain.setValueAtTime(0.18, ctx.currentTime); // feedback volume

  // Chain routing:
  // Synth sound -> lowShelf -> midPeaking -> highShelf -> sweepFilter -> masterGain -> Destination
  // Delay Loop tapping off after EQ: sweepFilter -> Delay -> delayGain -> masterGain

  lowShelfEQ.connect(midPeakingEQ);
  midPeakingEQ.connect(highShelfEQ);
  highShelfEQ.connect(sweepFilterNode);
  sweepFilterNode.connect(masterGainNode);

  // Send to delay block
  sweepFilterNode.connect(pingpongDelayNode);
  pingpongDelayNode.connect(pingpongGainNode);
  pingpongGainNode.connect(pingpongDelayNode); // feedback loop
  pingpongGainNode.connect(masterGainNode);    // output delay to main mix

  masterGainNode.connect(ctx.destination);
}

// REALTIME AUDIO ADJUSTMENTS FROM SIMULATOR PANEL
export function updateMasterVolume(levelPercent: number) {
  try {
    const ctx = getAudioContext();
    if (masterGainNode) {
      const vol = levelPercent / 100;
      masterGainNode.gain.exponentialRampToValueAtTime(Math.max(0.0001, vol * 0.5), ctx.currentTime + 0.1);
    }
  } catch (e) {}
}

export function updateEQ(bassDb: number, midDb: number, trebleDb: number) {
  try {
    const ctx = getAudioContext();
    if (lowShelfEQ) lowShelfEQ.gain.linearRampToValueAtTime(bassDb, ctx.currentTime + 0.08);
    if (midPeakingEQ) midPeakingEQ.gain.linearRampToValueAtTime(midDb, ctx.currentTime + 0.08);
    if (highShelfEQ) highShelfEQ.gain.linearRampToValueAtTime(trebleDb, ctx.currentTime + 0.08);
  } catch (e) {}
}

export function updateFilterSweep(freqHz: number) {
  try {
    const ctx = getAudioContext();
    if (sweepFilterNode) {
      sweepFilterNode.frequency.exponentialRampToValueAtTime(Math.max(50, freqHz), ctx.currentTime + 0.08);
    }
  } catch (e) {}
}

// Play a physical analogue click of rotary rotary knob/fader
export function playRotaryClick() {
  try {
    const ctx = getAudioContext();
    if (ctx.state === 'suspended') ctx.resume();
    
    const time = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(350, time);
    osc.frequency.exponentialRampToValueAtTime(45, time + 0.015);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(400, time);
    filter.Q.setValueAtTime(3, time);

    gain.gain.setValueAtTime(0.06, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.018);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination); // Direct bypass to master destination to keep click un-eqed

    osc.start(time);
    osc.stop(time + 0.025);
  } catch (e) {}
}

// Play heavy bass-kick tap trigger for DJ hot-cues
export function playGlassTap() {
  try {
    const ctx = getAudioContext();
    if (ctx.state === 'suspended') ctx.resume();

    const time = ctx.currentTime;
    const osc = ctx.createOscillator();
    const noise = ctx.createOscillator(); // high sweep
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, time);
    osc.frequency.exponentialRampToValueAtTime(42, time + 0.08); // sub drop impact

    gain.gain.setValueAtTime(0.18, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.25);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(time);
    osc.stop(time + 0.3);
  } catch (e) {}
}

// MELODIC PROGRESSIVE TECHNO NOTE SEQUENCER ENGINE (124 BPM)
// Play rich melodic chords & rhythmic bass notes mimicking Beckerman style live set!
const CHORDS = [
  [87.31, 130.81, 174.61, 220.0], // Fmin7 base
  [87.31 * 1.5, 130.81 * 1.5, 174.61 * 1.25, 311.13], // Ab major 6 / Eb sweep
  [77.78, 116.54, 155.56, 196.0], // Eb Maj base
  [69.30, 103.83, 138.59, 174.61], // Db Maj base
];

function scheduleSynthStep(time: number, step: number) {
  if (!audioCtx || !lowShelfEQ) return;

  const chordIndex = Math.floor(step / 8) % CHORDS.length;
  const chordNotes = CHORDS[chordIndex];
  
  // 1. Synthesize atmospheric sub-bass on beat 0 and 4
  const stepInMeasure = step % 8;
  const isKickStep = stepInMeasure === 0 || stepInMeasure === 2 || stepInMeasure === 4 || stepInMeasure === 6;
  const isOffbeatChordStep = stepInMeasure === 1 || stepInMeasure === 3 || stepInMeasure === 5 || stepInMeasure === 7;

  if (isKickStep) {
    // Simulated deep melodic analog sub kick rumble
    const kickOsc = audioCtx.createOscillator();
    const kickGain = audioCtx.createGain();
    kickOsc.type = 'sine';
    kickOsc.frequency.setValueAtTime(120, time);
    kickOsc.frequency.exponentialRampToValueAtTime(38, time + 0.15);

    kickGain.gain.setValueAtTime(0.24, time);
    kickGain.gain.exponentialRampToValueAtTime(0.0001, time + 0.28);

    kickOsc.connect(kickGain);
    kickGain.connect(lowShelfEQ); // run through DJ filters!

    kickOsc.start(time);
    kickOsc.stop(time + 0.3);
  }

  // 2. Synthesize lush offbeat melodic analog synthesizer plucks / chords
  if (isOffbeatChordStep) {
    chordNotes.forEach((frequency, index) => {
      if (!audioCtx || !lowShelfEQ) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = index === 0 ? 'sine' : index === 3 ? 'sawtooth' : 'triangle';
      
      // Detune a tiny bit for fat luxury chorus sound
      osc.frequency.setValueAtTime(frequency + (index * 0.25), time);
      
      gain.gain.setValueAtTime(0.001, time);
      gain.gain.linearRampToValueAtTime(0.035, time + 0.015); // soft pluck attack
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.35);

      osc.connect(gain);
      gain.connect(lowShelfEQ); // feed directly into the first EQ cell

      osc.start(time);
      osc.stop(time + 0.4);
    });
  }

  // 3. Play rapid high-hat accent on offbeats
  if (stepInMeasure % 2 === 1) {
    const bufferSize = audioCtx.sampleRate * 0.05; // short burst
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noiseNode = audioCtx.createBufferSource();
    noiseNode.buffer = buffer;

    const noiseFilter = audioCtx.createBiquadFilter();
    noiseFilter.type = 'highpass';
    noiseFilter.frequency.setValueAtTime(6500, time);

    const noiseGain = audioCtx.createGain();
    noiseGain.gain.setValueAtTime(0.015, time);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, time + 0.04);

    noiseNode.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(lowShelfEQ);

    noiseNode.start(time);
    noiseNode.stop(time + 0.05);
  }
}

export function startSequencer(bpm: number) {
  try {
    const ctx = getAudioContext();
    if (ctx.state === 'suspended') ctx.resume();

    stopSequencer(); // prevent multiple simultaneous loops

    const stepDuration = 60 / bpm / 2; // 1/8th notes
    let nextStepTime = ctx.currentTime + 0.05;
    stepCount = 0;

    const scheduler = () => {
      const currentTime = ctx.currentTime;
      while (nextStepTime < currentTime + 0.15) {
        scheduleSynthStep(nextStepTime, stepCount);
        nextStepTime += stepDuration;
        stepCount++;
      }
      synthTimerId = window.setTimeout(scheduler, 40);
    };

    scheduler();
  } catch (e) {}
}

export function stopSequencer() {
  if (synthTimerId) {
    window.clearTimeout(synthTimerId);
    synthTimerId = null;
  }
}

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = async () => {
    try {
      const ctx = getAudioContext();
      if (ctx.state === 'suspended') {
        await ctx.resume();
      }

      if (isPlaying) {
        stopSequencer();
        setIsPlaying(false);
      } else {
        startSequencer(124);
        setIsPlaying(true);
      }
    } catch (e) {
      console.warn("Sensory engine initial block", e);
    }
  };

  useEffect(() => {
    return () => {
      stopSequencer();
    };
  }, []);

  return (
    <div id="analog-synth-widget" className="flex items-center gap-3 bg-white/5 border border-white/10 px-3 py-1.5 text-[10px] font-mono tracking-wider select-none">
      <button 
        id="synth-stream-toggle"
        onClick={togglePlayback}
        className="flex items-center gap-2 text-white hover:text-white/80 transition-colors focus:outline-none cursor-pointer"
        title="Активировать живой синтез трека"
      >
        <Zap size={11} className={`${isPlaying ? 'text-[#ff7849] animate-pulse' : 'text-white/30'}`} />
        <span>ANALOG STEMS: {isPlaying ? 'PLAYING 124BPM' : 'STOPPED'}</span>
      </button>
      {isPlaying && (
        <span className="w-1.5 h-1.5 rounded-full bg-[#ff7849] animate-[ping_1.5s_infinite]" />
      )}
    </div>
  );
}
