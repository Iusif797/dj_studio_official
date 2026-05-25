import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  ArrowRight,
  Cpu,
  Sliders,
  Radio,
  SlidersHorizontal,
  Layers,
  Sparkles,
  Hammer,
  RotateCw,
  Volume2,
  Calendar,
  Share2,
  Disc,
  X
} from 'lucide-react';

import AudioPlayer, { 
  playRotaryClick, 
  playGlassTap, 
  updateFilterSweep,
  startSequencer,
} from './components/AudioPlayer';
import SpecOverlay from './components/SpecOverlay';
import ReservationModal from './components/ReservationModal';
import PricingPanel from './components/PricingPanel';
import EventFormatsPanel from './components/EventFormatsPanel';
import VenuesSocialProof from './components/VenuesSocialProof';
import MobileSceneNav from './components/MobileSceneNav';
import NoiseOverlay from './components/NoiseOverlay';
import LivingBlocksStage from './components/LivingBlocksStage';
import StageViewport from './components/StageViewport';
import ScrollProgressBar from './components/ScrollProgressBar';
import ScrollContinueHint from './components/ScrollContinueHint';
import { useScrollController } from './hooks/useScrollController';
import { useDeviceProfile } from './hooks/useDeviceProfile';
import { POST_MIXER_SCENES, SceneKey } from './constants/scenes';

import { DJMixerState } from './types';
import { translations } from './translations';

// Spatial Hotspot targets on the Custom Analogue DJ Mixer
const HOTSPOTS = [
  {
    id: 'isolators',
    name: '01 / ATMOSPHERE, VIBE & DYNAMIC RATIO',
    title: 'Прецизионный контроль атмосферы',
    desc: 'Музыкальный концепт Beckerman соединяет плотные прогрессивные басовые линии со сверкающими синтезаторными пассами. С помощью 6-канального пульта Pioneer DJM-V10 каждая частота выстраивается вручную для максимального погружения танцпола.',
    metrics: [
      { num: '3-Band', label: 'EQ Изоляция' },
      { num: '6 Ch', label: 'Микширование' }
    ]
  },
  {
    id: 'vu-meters',
    name: '02 / FEATURED MIXSETS & PERFORMANCE',
    title: 'Живое звуковое давление',
    desc: 'Ощутите пиковые моменты сетов. Светодиодные шкалы децибел наглядно отражают мощь выходного сигнала, гарантируя безупречный баланс звука без клиппинга — от мягкого пляжного хауса до мощных клубных техно-вибраций.',
    metrics: [
      { num: '50k+', label: 'Слушателей' },
      { num: '32-bit', label: 'HD Звучание' }
    ]
  },
  {
    id: 'vinyl',
    name: '03 / SCRATCH & JOG CONTROL MATRIX',
    title: 'Ювелирный перформанс в реальном времени',
    desc: 'Выступление ведется на трех флагманах CDJ-3000. Вращайте джог на интерактивной виртуальной деке ниже или измените питч темпа, чтобы почувствовать обратную связь и идеальный отклик профессионального оборудования.',
    metrics: [
      { num: '124BPM', label: 'Грув-ритм' },
      { num: '3 Decks', label: 'Сценический сетап' }
    ]
  },
  {
    id: 'chassis',
    name: '04 / CLUB INFRASTRUCTURE & NETWORK',
    title: 'Синхронизация с топовыми площадками',
    desc: 'Высокоскоростной линк объединяет деки и отправляет аналоговый сигнал по золотым XLR трактам прямо на передовые акустические системы (Duplex Prague, Roxy, Retro Music Hall, Radost FX) для передачи чистейшей энергии.',
    metrics: [
      { num: 'Top-50', label: 'Клубы Праги' },
      { num: 'Neutrik', label: 'Балансный XLR' }
    ]
  }
];

// Left vertical structural navigation chapters HUD
const SECTIONS = [
  { label: 'DJ BECKERMAN', num: '01', key: 'intro' },
  { label: 'АТМОСФЕРА И ЗВУК', num: '02', key: 'isolators' },
  { label: 'СЕТЫ И РЕЛИЗЫ', num: '03', key: 'vu-meters' },
  { label: 'ЖИВОЙ ПЕРФОРМАНС', num: '04', key: 'vinyl' },
  { label: 'РЕЗИДЕНЦИИ', num: '05', key: 'internals' },
  { label: 'ТЕХНИЧЕСКИЙ РАЙДЕР', num: '06', key: 'cables' },
  { label: 'ТАРИФЫ И ЦЕНЫ', num: '07', key: 'pricing' }
];

export default function App() {
  const [lang, setLang] = useState<'en' | 'cs' | 'ru'>(() => {
    return (localStorage.getItem('beckerman_lang') as 'en' | 'cs' | 'ru') || 'en';
  });

  const t = translations[lang] || translations.en;

  useEffect(() => {
    localStorage.setItem('beckerman_lang', lang);
  }, [lang]);

  const getLocalizedSections = () => [
    { label: t.navIntro, num: '01', key: 'intro' },
    { label: t.navAtmosphere, num: '02', key: 'isolators' },
    { label: t.navSets, num: '03', key: 'vu-meters' },
    { label: t.navLive, num: '04', key: 'vinyl' },
    { label: t.navResidencies, num: '05', key: 'internals' },
    { label: t.navRider, num: '06', key: 'cables' },
    { label: t.navPricing, num: '07', key: 'pricing' },
    { label: t.navFormats, num: '08', key: 'formats' },
    { label: t.navVenues, num: '09', key: 'venues' },
    { label: t.navTestimonials, num: '10', key: 'testimonials' },
    { label: t.navFaq, num: '11', key: 'faq' }
  ];

  const localizedHotspots = [
    {
      id: 'isolators',
      name: t.hotspotIsolatorsName,
      title: t.hotspotIsolatorsTitle,
      desc: t.hotspotIsolatorsDesc,
      metrics: [
        { label: t.hotspotIsolatorsMetric1, num: t.hotspotIsolatorsMetric1Val },
        { label: t.hotspotIsolatorsMetric2, num: t.hotspotIsolatorsMetric2Val }
      ]
    },
    {
      id: 'vu-meters',
      name: t.hotspotSetsName,
      title: t.hotspotSetsTitle,
      desc: t.hotspotSetsDesc,
      metrics: [
        { label: t.hotspotSetsMetric1, num: t.hotspotSetsMetric1Val },
        { label: t.hotspotSetsMetric2, num: t.hotspotSetsMetric2Val }
      ]
    },
    {
      id: 'vinyl',
      name: t.hotspotScratchName,
      title: t.hotspotScratchTitle,
      desc: t.hotspotScratchDesc,
      metrics: [
        { label: t.hotspotScratchMetric1, num: t.hotspotScratchMetric1Val },
        { label: t.hotspotScratchMetric2, num: t.hotspotScratchMetric2Val }
      ]
    }
  ];

  const [activeScene, setActiveScene] = useState<SceneKey>('intro');
  const device = useDeviceProfile();
  useScrollController(setActiveScene);
  const [isLoaded, setIsLoaded] = useState(false);

  // Modals status
  const [isSpecOpen, setIsSpecOpen] = useState(false);
  const [isBookOpen, setIsBookOpen] = useState(false);

  // Real-time DJ Mixer Simulator state
  const [mixerState, setMixerState] = useState<DJMixerState>({
    masterVolume: 75,
    bassEQ: 0,      // -12 to +6 dB
    midEQ: 0,       // -12 to +6 dB
    trebleEQ: 0,    // -12 to +6 dB
    filterFreq: 8000, // 200 to 18000 Hz
    activeEffect: 'none',
    synthPlaying: false,
    bpm: 124
  });

  // Animated VU levels bouncing of master track (simulated or reactive to synth playing)
  const [vuLeft, setVuLeft] = useState(40);
  const [vuRight, setVuRight] = useState(45);

  // Premium Active Vinyl Section controls state
  const [pitchPercent, setPitchPercent] = useState(0); // -8% to +8%
  const [isScratching, setIsScratching] = useState(false);
  const [dragAngle, setDragAngle] = useState(0);
  const [vinylEffectLevel, setVinylEffectLevel] = useState(0); // sound bending feedback filter

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const mixerStageScenes: SceneKey[] = ['intro', 'isolators', 'vu-meters', 'vinyl', 'internals', 'cables'];
  const vuSceneActive = mixerStageScenes.includes(activeScene);

  useEffect(() => {
    if (!vuSceneActive && !mixerState.synthPlaying) return;

    let animId: number;
    const animateNeedles = () => {
      if (mixerState.synthPlaying) {
        // Rhythmic, pulsing needle jump with added random noise
        const basePulse = Math.sin(Date.now() * 0.015) * 20 + 55;
        // EQ factors affect the peak levels slightly
        const eqBoost = (mixerState.bassEQ + mixerState.midEQ) * 1.5;
        // Pitch distortion from vinyl scratch alters VU amplitude
        const scratchNoise = isScratching ? Math.abs(Math.sin(Date.now() * 0.1)) * 30 : 0;
        const volumeFactor = mixerState.masterVolume / 100;
        
        const nextLeft = Math.min(100, Math.max(5, (basePulse + eqBoost + scratchNoise + Math.random() * 12) * volumeFactor));
        const nextRight = Math.min(100, Math.max(5, (basePulse + eqBoost + scratchNoise + Math.random() * 12 + 4) * volumeFactor));

        setVuLeft(nextLeft);
        setVuRight(nextRight);
      } else {
        // Slow lazy acoustic room feedback drift
        setVuLeft(prev => Math.max(4, prev - 4 + Math.random() * 6));
        setVuRight(prev => Math.max(4, prev - 4 + Math.random() * 6));
      }
      animId = requestAnimationFrame(animateNeedles);
    };
    animateNeedles();
    return () => cancelAnimationFrame(animId);
  }, [mixerState.synthPlaying, mixerState.bassEQ, mixerState.midEQ, mixerState.masterVolume, isScratching, vuSceneActive]);

  // Adjust pitch fader - changes BPM of synthesizer directly
  const adjustPitch = (pitchVal: number) => {
    playRotaryClick();
    setPitchPercent(pitchVal);
    // 124 BPM base tempo offset
    const activeBPM = Math.round(124 * (1 + pitchVal / 100));
    setMixerState(prev => {
      if (prev.synthPlaying) {
        startSequencer(activeBPM);
      }
      return { ...prev, bpm: activeBPM };
    });
  };

  // Drag vinyl interaction
  const handleVinylDrag = (event: any, info: any) => {
    if (!isScratching) {
      setIsScratching(true);
    }
    const deltaX = info.delta.x;
    const nextAngle = dragAngle + deltaX * 0.8;
    setDragAngle(nextAngle);

    // Play analog scratching tick clicks
    if (Math.abs(deltaX) > 2) {
      playRotaryClick();
    }

    // Apply sound frequency sweeps temporarily while scratching
    const bendLevel = Math.max(200, Math.min(15000, 8000 - deltaX * 180));
    updateFilterSweep(bendLevel);
    setMixerState(prev => ({ ...prev, filterFreq: Math.round(bendLevel) }));
  };

  const handleVinylDragEnd = () => {
    setIsScratching(false);
    // Snap sound sweep state back to normal
    const snapBackFreq = 8000;
    updateFilterSweep(snapBackFreq);
    setMixerState(prev => ({ ...prev, filterFreq: snapBackFreq }));
  };

  const scrollToSection = (idx: number) => {
    playGlassTap();
    const target = idx * window.innerHeight;
    window.scrollTo({ top: target, behavior: 'smooth' });
  };

  return (
    <div id="landing-root" className={`relative h-[1100vh] bg-[#050505] text-[#eaeaea] overflow-x-hidden transition-opacity duration-[1200ms] ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <ScrollProgressBar />
      <NoiseOverlay />

      <StageViewport
        activeScene={activeScene}
        isMobile={device.isMobile}
        isReducedMotion={device.isReducedMotion}
        synthPlaying={mixerState.synthPlaying}
        vuLeft={vuLeft}
        vuRight={vuRight}
        t={t}
        onNavigate={scrollToSection}
      />

      {/* LEFT STATIC CHAPTER HUD VERTICAL NAVIGATOR */}
      <div id="vertical-hud-navigator" className="fixed left-6 md:left-10 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-6 pointer-events-auto select-none">
        {getLocalizedSections().map((sec, idx) => {
          const isCurrent = activeScene === sec.key;
          return (
            <button
              key={sec.num}
              onClick={() => scrollToSection(idx)}
              className="flex items-center gap-4 group text-left cursor-pointer focus:outline-none outline-none text-white border-none bg-transparent p-0"
            >
              <span className={`font-mono text-[10px] tracking-widest transition-colors duration-300 ${isCurrent ? 'text-[#ff7849] font-bold' : 'text-white/30 group-hover:text-white/60'}`}>
                {sec.num}
              </span>
              <div className="flex flex-col">
                <span className={`font-mono text-[8.5px] tracking-[0.2em] transition-all duration-300 ${isCurrent ? 'text-white font-medium pl-1' : 'text-white/20 group-hover:text-white/50'}`}>
                  {sec.label}
                </span>
                <div className={`h-[1px] bg-[#ff7849] transition-all duration-300 mt-1 ${isCurrent ? 'w-12' : 'w-0 group-hover:w-4'}`} />
              </div>
            </button>
          );
        })}
      </div>

      <div id="hud-container" className="hud-shell">
        
        <header id="top-branding-bar" className="w-full pointer-events-auto">
          <div className="flex w-full items-center justify-between gap-3">
            <div className="flex flex-col cursor-pointer min-w-0 shrink" onClick={() => scrollToSection(0)}>
              <h1 className="font-serif text-[17px] sm:text-[22px] md:text-[32px] font-light leading-none tracking-[0.14em] sm:tracking-[0.16em] md:tracking-[0.18em] text-white">BECKERMAN</h1>
              <span className="font-mono text-[7px] sm:text-[7px] md:text-[8px] tracking-[0.22em] sm:tracking-[0.28em] md:tracking-[0.34em] text-[#ff7849] uppercase mt-1 font-semibold line-clamp-1">{t.brandSub}</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <div className="lang-switcher pointer-events-auto">
                {(['en', 'cs', 'ru'] as const).map((l, index) => (
                  <span key={l} className="contents">
                    {index > 0 && <span className="lang-switcher__sep" aria-hidden>|</span>}
                    <button
                      type="button"
                      onClick={() => {
                        playRotaryClick();
                        setLang(l);
                      }}
                      className={`lang-switcher__btn ${lang === l ? 'lang-switcher__btn--active' : ''}`}
                      aria-pressed={lang === l}
                      aria-label={l.toUpperCase()}
                    >
                      {l}
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className={`hidden md:flex items-center justify-end gap-3 w-full mt-4 transition-all duration-500 ${POST_MIXER_SCENES.includes(activeScene) ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <AudioPlayer />
            <button
              onClick={() => { playGlassTap(); setIsBookOpen(true); }}
              className="px-5 py-2.5 bg-white text-black font-mono text-[9px] tracking-[0.25em] uppercase hover:bg-[#ff7849] hover:text-white transition-all duration-500 rounded-none shadow-xl outline-none focus:outline-none cursor-pointer"
            >
              {t.btnBookSystem}
            </button>
          </div>
        </header>

        {/* BOTTOM INFORMATIONAL BAR */}
        <div id="bottom-hud-bar" className="w-full flex flex-col gap-2 sm:gap-3 pointer-events-auto">
          <div className="hidden md:flex md:flex-row md:justify-between md:items-end w-full gap-4">
            <div className="flex items-center gap-3 bg-black/55 border border-white/5 backdrop-blur-md px-4 py-2.5 font-mono text-[8px] text-white/40 tracking-widest uppercase">
              <Compass size={11} className="text-[#ff7849] animate-[spin_10s_linear_infinite] shrink-0" />
              <span>{t.bottomCoordinates}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            </div>

            <ScrollContinueHint label={t.bottomScrollIntro} onContinue={scrollToSection} />

            <div className={`flex items-center gap-3 transition-all duration-500 ${POST_MIXER_SCENES.includes(activeScene) ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              <button 
                onClick={() => { playGlassTap(); setIsSpecOpen(true); }}
                className="px-6 py-3 border border-white/10 hover:border-white/25 bg-black/50 backdrop-blur-md text-white/70 hover:text-white cursor-pointer outline-none focus:outline-none font-mono text-[9px] tracking-widest uppercase transition-all duration-500"
              >
                {t.btnAudioRider}
              </button>
              <button 
                onClick={() => { playGlassTap(); setIsBookOpen(true); }}
                className="px-6 py-3 bg-white text-black hover:bg-[#ff7849] hover:text-white border border-transparent cursor-pointer outline-none focus:outline-none font-mono text-[9px] tracking-widest uppercase transition-all duration-500 flex items-center gap-1.5"
              >
                {t.btnBookSet}
                <ArrowRight size={11} />
              </button>
            </div>
          </div>

          <MobileSceneNav
            sections={getLocalizedSections()}
            activeKey={activeScene}
            onSelect={scrollToSection}
          />

          <div className={`grid grid-cols-2 gap-2 md:hidden transition-all duration-500 ${POST_MIXER_SCENES.includes(activeScene) ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <button
              onClick={() => { playGlassTap(); setIsSpecOpen(true); }}
              className="min-h-11 py-3 border border-white/10 bg-black/60 backdrop-blur-md text-white/70 cursor-pointer outline-none focus:outline-none font-mono text-[8.5px] tracking-widest uppercase transition-all duration-300 text-center active:bg-white/5"
            >
              {t.btnAudioRider}
            </button>
            <button
              onClick={() => { playGlassTap(); setIsBookOpen(true); }}
              className="min-h-11 py-3 bg-white text-black border border-transparent cursor-pointer outline-none focus:outline-none font-mono text-[8.5px] tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-1.5 active:bg-[#ff7849] active:text-white"
            >
              {t.btnBookSet}
              <ArrowRight size={11} />
            </button>
          </div>
        </div>
      </div>

      {/* DYNAMIC SCROLL CHAPTERS HOVERING OVER SCENE BACKGROUND */}
      <div id="scroll-chapters" className="scroll-chapters-shell">
        
        {/* SCENE 1: Introduction - ScrollFraction 0 to 0.5 */}
        <section className="scene-section scene-section--start">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: activeScene === 'intro' ? 1 : 0, x: activeScene === 'intro' ? 0 : -15 }}
            transition={{ duration: 0.6 }}
            className={`scene-card space-y-4 sm:space-y-6 ${activeScene === 'intro' ? 'block' : 'hidden'}`}
          >
            <div className="space-y-1.5">
              <span className="font-mono text-[8px] sm:text-[9px] tracking-[0.25em] sm:tracking-[0.3em] text-[#ff7849] uppercase block font-semibold leading-none">{t.introSub}</span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-light text-white tracking-wide leading-none">
                DJ BECKERMAN <br/>
                <span className="font-normal italic text-[#ff7849]">{t.introTitle2}</span>
              </h2>
            </div>
            
            <p className="font-sans text-[11px] sm:text-xs md:text-sm text-white/50 leading-relaxed font-light">
              {t.introDesc}
            </p>

            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/5">
              <div>
                <p className="font-mono text-[7px] sm:text-[8px] text-white/30 uppercase tracking-widest">{t.metricEvents}</p>
                <p className="font-serif text-[11px] sm:text-xs text-white mt-0.5 font-light">{t.metricEventsVal}</p>
              </div>
              <div>
                <p className="font-mono text-[7px] sm:text-[8px] text-white/30 uppercase tracking-widest">{t.metricStyle}</p>
                <p className="font-serif text-[11px] sm:text-xs text-white mt-0.5 font-light">{t.metricStyleVal}</p>
              </div>
              <div>
                <p className="font-mono text-[7px] sm:text-[8px] text-white/30 uppercase tracking-widest">{t.metricLoc}</p>
                <p className="font-serif text-[11px] sm:text-xs text-[#ff7849] mt-0.5 font-medium">{t.metricLocVal}</p>
              </div>
            </div>

            <div 
              className="pt-1 flex items-center gap-2 text-white hover:text-[#ff7849] transition-colors cursor-pointer group"
              onClick={() => scrollToSection(1)}
            >
              <span className="font-mono text-[9px] sm:text-[10px] tracking-wider uppercase font-medium">{t.btnExploreAtmosphere}</span>
              <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        </section>

        {/* SCENE 2: Isolator EQ Focus - ScrollFraction 0.5 to 1.5 */}
        <section className="scene-section scene-section--end">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: activeScene === 'isolators' ? 1 : 0, x: activeScene === 'isolators' ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className={`scene-card space-y-4 sm:space-y-6 ${activeScene === 'isolators' ? 'block' : 'hidden'} text-left`}
          >
            <div className="space-y-1.5">
              <span className="font-mono text-[8px] tracking-[0.25em] text-[#ff7849] uppercase block font-semibold">{localizedHotspots[0].name}</span>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-white tracking-wide leading-tight">
                {localizedHotspots[0].title}
              </h2>
            </div>
            
            <p className="font-sans text-xs md:text-sm text-white/50 leading-relaxed font-light">
              {localizedHotspots[0].desc}
            </p>

            {/* Spec grid */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
              {localizedHotspots[0].metrics.map((m, i) => (
                <div key={i} className="space-y-0.5">
                  <p className="font-mono text-[8px] text-white/30 uppercase tracking-wider">{m.label}</p>
                  <p className="font-serif text-sm text-white font-light">{m.num}</p>
                </div>
              ))}
            </div>

            <div 
              className="pt-2 flex items-center gap-2 text-white hover:text-[#ff7849] transition-colors cursor-pointer group"
              onClick={() => scrollToSection(2)}
            >
              <span className="font-mono text-[10px] tracking-wider uppercase font-medium">{t.btnNextToSets}</span>
              <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        </section>

        {/* SCENE 3: Amber VU Meters Focus - ScrollFraction 1.5 to 2.5 */}
        <section className="scene-section scene-section--start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: activeScene === 'vu-meters' ? 1 : 0, x: activeScene === 'vu-meters' ? 0 : -20 }}
            transition={{ duration: 0.6 }}
            className={`scene-card space-y-4 sm:space-y-6 ${activeScene === 'vu-meters' ? 'block' : 'hidden'}`}
          >
            <div className="space-y-1.5">
              <span className="font-mono text-[8px] tracking-[0.25em] text-[#ff7849] uppercase block font-semibold">{localizedHotspots[1].name}</span>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-white tracking-wide leading-tight">
                {localizedHotspots[1].title}
              </h2>
            </div>
            
            <p className="font-sans text-xs md:text-sm text-white/50 leading-relaxed font-light">
              {localizedHotspots[1].desc}
            </p>

            {/* Spec grid */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
              {localizedHotspots[1].metrics.map((m, i) => (
                <div key={i} className="space-y-0.5">
                  <p className="font-mono text-[8px] text-white/30 uppercase tracking-wider">{m.label}</p>
                  <p className="font-serif text-sm text-white font-light">{m.num}</p>
                </div>
              ))}
            </div>

            <div 
              className="pt-2 flex items-center gap-2 text-white hover:text-[#ff7849] transition-colors cursor-pointer group"
              onClick={() => scrollToSection(3)}
            >
              <span className="font-mono text-[10px] tracking-wider uppercase font-medium">{t.btnNextToPerformance}</span>
              <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        </section>

        {/* SCENE 4: Pioneer-Style Jog Wheel Platter - ScrollFraction 2.5 to 3.5 */}
        <section className="scene-section scene-section--end">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: activeScene === 'vinyl' ? 1 : 0, x: activeScene === 'vinyl' ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className={`scene-card space-y-3.5 sm:space-y-5 ${activeScene === 'vinyl' ? 'block' : 'hidden'}`}
          >
            <div className="space-y-1.5">
              <span className="font-mono text-[8px] tracking-[0.25em] text-[#ff7849] uppercase block font-semibold">{localizedHotspots[2].name}</span>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-white tracking-wide leading-tight">
                {localizedHotspots[2].title}
              </h2>
            </div>
            
            <p className="font-sans text-xs text-white/50 leading-relaxed font-light">
              {localizedHotspots[2].desc}
            </p>

            {/* INTERACTIVE MODERN JOG PLATTER SIMULATOR DISPLAY */}
            <div className="bg-black/80 border border-white/5 p-4 flex flex-col items-center gap-4 relative">
              <span className="font-mono text-[7px] text-[#ff7849] absolute top-2 left-3 uppercase tracking-widest bg-black/50 px-1.5 py-0.5 border border-[#ff7849]/20 z-10">JOG WHEEL DECK-A ACTIVE</span>
              
              <div className="relative w-36 h-36 sm:w-40 sm:h-40 bg-zinc-950 rounded-full border-[6px] border-[#1d1d23] flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.8)] select-none group touch-none">
                {/* Outer jog-feel grip indices */}
                <div className="absolute inset-0 rounded-full border border-dashed border-zinc-700 opacity-15 animate-[spin_50s_linear_infinite]" />
                <div className="absolute inset-1 rounded-full border border-zinc-800 opacity-20" />
                <div className="absolute inset-3.5 rounded-full border-2 border-zinc-900/60" />
                <div className="absolute inset-7 rounded-full border border-zinc-900" />

                {/* Cyber LED ring feedback status */}
                <div className={`absolute inset-0 rounded-full border-2 border-dashed ${mixerState.synthPlaying ? 'border-[#ff7849]/55 animate-[spin_6s_linear_infinite]' : 'border-zinc-800'} transition-colors`} />

                {/* High tech centerpiece (LCD display mimicry) */}
                <motion.div 
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.08}
                  onDrag={handleVinylDrag}
                  onDragEnd={handleVinylDragEnd}
                  animate={isScratching ? { rotate: dragAngle } : mixerState.synthPlaying ? { rotate: dragAngle + 360 } : { rotate: dragAngle }}
                  transition={isScratching ? { type: 'spring', damping: 25, stiffness: 220 } : mixerState.synthPlaying ? { repeat: Infinity, duration: 4.5, ease: 'linear' } : {}}
                  className="w-16 h-16 rounded-full bg-black border-2 border-zinc-800 flex flex-col items-center justify-center p-1 text-center shadow-md cursor-grab active:cursor-grabbing z-10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[#ff7849]/5 animate-pulse rounded-full" />
                  <span className="font-sans text-[6px] tracking-[0.2em] text-[#ff7849] font-extrabold leading-none uppercase">CDJ // SYNC</span>
                  <div className="w-6 h-[1px] bg-white/20 my-1" />
                  <span className="font-mono text-[7px] text-zinc-400 font-bold">{mixerState.bpm} bpm</span>
                  <div className="w-1.5 h-1.5 bg-[#ff7849] rounded-full border border-white/20 mt-1 absolute bottom-2" />
                </motion.div>

                {/* Simulated glare angle highlighting */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none select-none" />
              </div>

              {/* Pitch bending control slider */}
              <div className="w-full space-y-1.5 font-mono text-[8px] px-1">
                <div className="flex justify-between text-white/40 uppercase tracking-widest font-semibold">
                  <span>{t.labelPitchFader}</span>
                  <span className="text-[#ff7849]">{pitchPercent > 0 ? `+${pitchPercent}` : pitchPercent}%</span>
                </div>
                <input 
                  type="range"
                  min="-8"
                  max="8"
                  step="0.5"
                  value={pitchPercent}
                  onChange={(e) => adjustPitch(parseFloat(e.target.value))}
                  className="w-full h-1 bg-white/10 accent-[#ff7849] appearance-none cursor-pointer outline-none"
                />
                <div className="flex justify-between text-[8px] text-white/30 font-medium tracking-wider uppercase">
                  <span>{t.pitchDeepGroove}</span>
                  <span>{t.pitchHardTechno}</span>
                </div>
              </div>
            </div>

            <div 
              className="pt-2 flex items-center gap-2 text-white hover:text-[#ff7849] transition-colors cursor-pointer group"
              onClick={() => scrollToSection(4)}
            >
              <span className="font-mono text-[10px] tracking-wider uppercase font-medium">{t.btnNextToResidencies}</span>
              <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        </section>

        {/* SCENE 5: Internals (Into the Heart) - ScrollFraction 3.5 to 4.5 */}
        <section className="scene-section scene-section--start">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: activeScene === 'internals' ? 1 : 0, x: activeScene === 'internals' ? 0 : -25 }}
            transition={{ duration: 0.6 }}
            className={`scene-card space-y-4 sm:space-y-6 ${activeScene === 'internals' ? 'block' : 'hidden'}`}
          >
            <div className="space-y-1.5">
              <span className="font-mono text-[8px] tracking-[0.25em] text-[#ff7849] uppercase block font-semibold font-sans">05 / MAJOR CLUB RESIDENCIES & BRANDS</span>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-white tracking-wide leading-tight">
                {t.sceneResidenciesTitle}
              </h2>
            </div>
            
            <p className="font-sans text-xs text-white/50 leading-relaxed font-light">
              {t.sceneResidenciesDesc}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
              <div className="space-y-0.5">
                <p className="font-mono text-[8px] text-white/30 uppercase tracking-wider">{t.labelClubResidencies}</p>
                <p className="font-serif text-xs md:text-sm text-white font-light">{t.valClubResidencies}</p>
              </div>
              <div className="space-y-0.5">
                <p className="font-mono text-[8px] text-white/30 uppercase tracking-wider">{t.labelCorporatePartnerships}</p>
                <p className="font-serif text-xs md:text-sm text-white font-light">{t.valCorporatePartnerships}</p>
              </div>
            </div>

            <div 
              className="pt-2 flex items-center gap-2 text-white hover:text-[#ff7849] transition-colors cursor-pointer group"
              onClick={() => scrollToSection(5)}
            >
              <span className="font-mono text-[10px] tracking-wider uppercase font-medium">{t.btnNextToTechnicalRider}</span>
              <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        </section>

        {/* SCENE 6: Cables (Rear Connectors Matrix) - ScrollFraction 4.5 to 5.5 */}
        <section className="scene-section scene-section--end">
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: activeScene === 'cables' ? 1 : 0, x: activeScene === 'cables' ? 0 : 25 }}
            transition={{ duration: 0.6 }}
            className={`scene-card space-y-4 sm:space-y-6 ${activeScene === 'cables' ? 'block' : 'hidden'} text-left`}
          >
            <div className="space-y-1.5">
              <span className="font-mono text-[8px] tracking-[0.25em] text-[#ff7849] uppercase block font-semibold font-sans">06 / PREMIUM SOUND RIDER SPECIFICATION</span>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-white tracking-wide leading-tight">
                {t.sceneTechnicalRiderTitle}
              </h2>
            </div>
            
            <p className="font-sans text-xs text-white/50 leading-relaxed font-light">
              {t.sceneTechnicalRiderDesc}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
              <div className="space-y-0.5">
                <p className="font-mono text-[8px] text-white/30 uppercase tracking-wider">{t.labelRiderMainConsole}</p>
                <p className="font-serif text-xs md:text-sm text-white font-light">3x CDJ-3000 & DJM-V10</p>
              </div>
              <div className="space-y-0.5">
                <p className="font-mono text-[8px] text-white/30 uppercase tracking-wider">{t.labelRiderAudioCabling}</p>
                <p className="font-serif text-xs md:text-sm text-white font-light">Neutrik XLR Gold Line</p>
              </div>
            </div>

            <div 
              className="pt-2 flex items-center gap-2 text-white hover:text-[#ff7849] transition-colors cursor-pointer group"
              onClick={() => scrollToSection(6)}
            >
              <span className="font-mono text-[10px] tracking-wider uppercase font-medium">{t.btnNextToPricing}</span>
              <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        </section>

        <section className="scene-section scene-section--end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: activeScene === 'pricing' ? 1 : 0, y: activeScene === 'pricing' ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className={`pointer-events-auto w-full flex justify-center md:justify-end ${activeScene === 'pricing' ? 'block' : 'hidden'}`}
          >
            <PricingPanel
              t={t}
              onBook={() => { playGlassTap(); setIsBookOpen(true); }}
              onSpec={() => { playGlassTap(); setIsSpecOpen(true); }}
            />
          </motion.div>
        </section>

        <section className="scene-section scene-section--start scene-section--immersive">
          <EventFormatsPanel
            t={t}
            isActive={activeScene === 'formats'}
            reducedMotion={device.isReducedMotion}
            onBook={() => { playGlassTap(); setIsBookOpen(true); }}
            onNext={() => scrollToSection(8)}
          />
        </section>

        <section className="scene-section scene-section--start scene-section--immersive">
          <VenuesSocialProof
            t={t}
            isActive={activeScene === 'venues'}
            reducedMotion={device.isReducedMotion}
            onNext={() => scrollToSection(9)}
          />
        </section>

        <section className="scene-section scene-section--start" aria-label="testimonials" />
        <section className="scene-section scene-section--start" aria-label="faq" />

      </div>

      <LivingBlocksStage lang={lang} />

      {/* DETAILED BOOKING & SPECIFICATION OVERLAYS */}
      <AnimatePresence>
        {isSpecOpen && (
          <SpecOverlay 
            isOpen={isSpecOpen} 
            onClose={() => setIsSpecOpen(false)} 
            lang={lang}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isBookOpen && (
          <ReservationModal 
            isOpen={isBookOpen} 
            onClose={() => setIsBookOpen(false)} 
            lang={lang}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
