import { memo } from 'react';
import { motion } from 'motion/react';
import SceneHeroBackdrop from './SceneHeroBackdrop';
import { SceneKey } from '../constants/scenes';
import {
  imageCables,
  imageEventFormats,
  imageMixer,
  imageSkyline,
  imageTubes,
  imageVenuesPrague,
} from '../assets/images';
import { useScrollFraction } from '../hooks/useScrollMetrics';
import { getSceneBackdropStyle } from '../utils/sceneBackdropStyle';
import { getCablesStyle, getMixerStyle, getTubesStyle } from '../utils/scrollSceneStyles';
import { TranslationSet } from '../translations';

type StageViewportProps = {
  activeScene: SceneKey;
  isMobile: boolean;
  isReducedMotion: boolean;
  synthPlaying: boolean;
  vuLeft: number;
  vuRight: number;
  t: TranslationSet;
  onNavigate: (index: number) => void;
};

function StageViewport({
  activeScene,
  isMobile,
  synthPlaying,
  vuLeft,
  vuRight,
  t,
  onNavigate,
}: StageViewportProps) {
  const scrollFraction = useScrollFraction();
  const mixerStyle = getMixerStyle(scrollFraction, isMobile);
  const tubesStyle = getTubesStyle(scrollFraction, isMobile);
  const cablesStyle = getCablesStyle(scrollFraction, isMobile);
  const formatsBackdrop = getSceneBackdropStyle(scrollFraction, 7, 8.35, isMobile);
  const venuesBackdrop = getSceneBackdropStyle(scrollFraction, 8, 9.35, isMobile);

  const ambientGradient = synthPlaying
    ? 'from-orange-950/25 via-[#0b0502]/95 to-[#050505]'
    : 'from-purple-950/15 via-[#06040a]/92 to-[#050505]';

  return (
    <div id="stage-viewport" className="stage-backdrop-mobile stage-viewport-shell fixed inset-0 w-full h-full overflow-hidden select-none pointer-events-none z-0">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 transition-opacity duration-[1500ms]"
        style={{ backgroundImage: `url(${imageSkyline})` }}
      />
      <div
        id="dynamic-backlight"
        className={`absolute inset-0 bg-gradient-to-b ${ambientGradient} transition-all duration-[800ms] z-10 pointer-events-none`}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.92)_100%)] z-20 pointer-events-none" />

      <div className="absolute inset-0 z-20 opacity-25 pointer-events-none hidden md:flex justify-between px-10 items-center border-x border-white/5 mx-10">
        <span className="font-mono text-[8px] text-white/10 [writing-mode:vertical-lr] tracking-[0.4em]">BECKERMAN // PRAGUE DJ SERVICES</span>
        <span className="font-mono text-[8px] text-white/10 [writing-mode:vertical-lr] tracking-[0.4em]">CLUB · PRIVATE · CORPORATE</span>
      </div>

      <div
        className="absolute w-full h-full pointer-events-none z-28 overflow-hidden bg-black stage-layer"
        style={{
          display: tubesStyle.display === 'none' ? 'none' : 'block',
          opacity: tubesStyle.opacity,
          transform: tubesStyle.transform,
          top: tubesStyle.top,
          left: tubesStyle.left,
          filter: tubesStyle.filter,
          willChange: tubesStyle.opacity > 0.02 ? 'transform, opacity' : 'auto',
        }}
      >
        <div className="relative w-full h-full">
          <img src={imageTubes} alt="" loading="eager" decoding="async" referrerPolicy="no-referrer" className="w-full h-full object-cover select-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#ff7849]/15 via-transparent to-red-500/5 mix-blend-color-dodge" />
          <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
          <div className="absolute inset-x-0 bottom-4 text-center z-10">
            <span className="font-mono text-[7px] text-[#ff7849] tracking-[0.25em] bg-black/85 px-2.5 py-1 border border-[#ff7849]/20 uppercase">
              INTEGRATED THERMIONIC TRIODES CORE ACTIVE
            </span>
          </div>
        </div>
      </div>

      <div
        className="absolute w-full h-full pointer-events-none z-26 overflow-hidden bg-[#070707] stage-layer"
        style={{
          display: cablesStyle.display === 'none' ? 'none' : 'block',
          opacity: cablesStyle.opacity,
          transform: cablesStyle.transform,
          top: cablesStyle.top,
          left: cablesStyle.left,
          filter: cablesStyle.filter,
          willChange: cablesStyle.opacity > 0.02 ? 'transform, opacity' : 'auto',
        }}
      >
        <div className="relative w-full h-full">
          <img src={imageCables} alt="" loading="eager" decoding="async" referrerPolicy="no-referrer" className="w-full h-full object-cover select-none" />
          <div className="absolute inset-x-0 bottom-4 text-center z-10">
            <span className="font-mono text-[7px] text-zinc-400 tracking-[0.25em] bg-black/85 px-2.5 py-1 border border-white/10 uppercase">
              SOLID MASS DIRECT OXYGEN-FREE RCA PORTS
            </span>
          </div>
        </div>
      </div>

      <div
        className="absolute w-full h-full pointer-events-auto z-30 stage-layer"
        style={{
          opacity: mixerStyle.opacity,
          transform: mixerStyle.transform,
          top: mixerStyle.top,
          left: mixerStyle.left,
          filter: mixerStyle.filter,
          willChange: mixerStyle.opacity > 0.02 ? 'transform, opacity' : 'auto',
        }}
      >
        <div className="relative w-full h-full group">
          <img src={imageMixer} alt="" loading="eager" decoding="async" referrerPolicy="no-referrer" className="w-full h-full object-cover select-none pointer-events-none rounded-sm border border-white/5" />
          <div className="absolute top-[37%] left-[49.5%] -translate-x-1/2 flex flex-col items-center gap-1 opacity-90 scale-75 pointer-events-none">
            <span className="font-mono text-[6px] tracking-widest text-[#ff7849] uppercase">MASTER PEAK</span>
            <div className="flex gap-1">
              <span className={`w-1 h-1 rounded-full ${vuLeft > 85 ? 'bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.8)]' : 'bg-white/10'}`} />
              <span className={`w-3 h-1 ${synthPlaying ? 'bg-[#ff7849]' : 'bg-white/15'}`} />
              <span className={`w-1 h-1 rounded-full ${vuRight > 85 ? 'bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.8)]' : 'bg-white/10'}`} />
            </div>
          </div>

          {activeScene === 'intro' && (
            <div className="hidden md:block">
              {[
                { idx: 1, top: '26%', left: '50%', label: t.hotspotShort1 },
                { idx: 2, top: '39%', left: '50%', label: t.hotspotShort2 },
                { idx: 3, top: '68%', left: '22%', label: t.hotspotShort3 },
                { idx: 4, top: '80%', left: '50%', label: t.hotspotShort4 },
              ].map((spot) => (
                <button
                  key={spot.idx}
                  type="button"
                  onClick={() => onNavigate(spot.idx)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group flex items-center gap-2 z-50 cursor-pointer bg-transparent border-none p-0 focus:outline-none outline-none"
                  style={{ top: spot.top, left: spot.left }}
                >
                  <span className="relative flex h-6 w-6 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-orange-400/20" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ff7849]" />
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/90 text-[8px] tracking-[0.2em] text-white font-mono px-2 py-1 border border-white/10 uppercase whitespace-nowrap">
                    {spot.label}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <SceneHeroBackdrop src={imageEventFormats} alt={t.formatsTitle} label="08 / EVENT FORMATS // CLUB · CORPORATE · PRIVATE" style={formatsBackdrop} />
      <SceneHeroBackdrop src={imageVenuesPrague} alt={t.venuesTitle} label="09 / PRAGUE VENUES // TRUSTED STAGES" style={venuesBackdrop} glow="violet" />

      {activeScene === 'isolators' && (
        <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none hidden lg:block" aria-hidden>
          <motion.line x1="36%" y1="32%" x2="52%" y2="32%" stroke="#ff7849" strokeWidth="1" strokeDasharray="3 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5 }} />
          <circle cx="52%" cy="32%" r="3.5" fill="#ff7849" />
          <circle cx="36%" cy="32%" r="2" fill="#ff7849" />
        </svg>
      )}

      {activeScene === 'vu-meters' && (
        <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none hidden lg:block" aria-hidden>
          <motion.line x1="48%" y1="58%" x2="64%" y2="58%" stroke="#ff7849" strokeWidth="1" strokeDasharray="3 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5 }} />
          <circle cx="48%" cy="58%" r="3.5" fill="#ff7849" />
          <circle cx="64%" cy="58%" r="2" fill="#ff7849" />
        </svg>
      )}

      {activeScene === 'formats' && (
        <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none hidden lg:block" aria-hidden>
          <motion.line x1="28%" y1="42%" x2="42%" y2="42%" stroke="#ff7849" strokeWidth="1" strokeDasharray="3 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5 }} />
          <circle cx="42%" cy="42%" r="3.5" fill="#ff7849" />
          <circle cx="28%" cy="42%" r="2" fill="#ff7849" />
        </svg>
      )}

      {activeScene === 'venues' && (
        <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none hidden lg:block" aria-hidden>
          <motion.line x1="26%" y1="48%" x2="40%" y2="48%" stroke="#ff7849" strokeWidth="1" strokeDasharray="3 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5 }} />
          <circle cx="40%" cy="48%" r="3.5" fill="#ff7849" />
          <circle cx="26%" cy="48%" r="2" fill="#ff7849" />
        </svg>
      )}
    </div>
  );
}

export default memo(StageViewport);
