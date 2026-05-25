import { ArrowRight, Building2, Disc3, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import SceneCardHero from './SceneCardHero';
import { imageEventFormats } from '../assets/images';
import { TranslationSet } from '../translations';

type EventFormatsPanelProps = {
  t: TranslationSet;
  isActive: boolean;
  onNext: () => void;
  onBook: () => void;
  reducedMotion?: boolean;
};

const icons = [Disc3, Building2, Sparkles];

export default function EventFormatsPanel({ t, isActive, onNext, onBook, reducedMotion }: EventFormatsPanelProps) {
  const formats = [
    { tag: t.formatClubTag, name: t.formatClubName, desc: t.formatClubDesc, duration: t.formatClubDuration },
    { tag: t.formatCorpTag, name: t.formatCorpName, desc: t.formatCorpDesc, duration: t.formatCorpDuration },
    { tag: t.formatPrivateTag, name: t.formatPrivateName, desc: t.formatPrivateDesc, duration: t.formatPrivateDuration },
  ];

  return (
    <motion.div
      initial={false}
      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : reducedMotion ? 0 : 20 }}
      transition={{ duration: reducedMotion ? 0.2 : 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`scene-card scene-card--glass scene-card--immersive ${isActive ? 'block' : 'hidden'}`}
    >
      <SceneCardHero src={imageEventFormats} alt={t.formatsTitle} badge="08 / LIVE FORMATS" />

      <div className="space-y-1.5 px-0.5">
        <span className="font-mono text-[8px] tracking-[0.28em] text-[#ff7849] uppercase block font-semibold">{t.formatsSub}</span>
        <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-white tracking-wide leading-tight">{t.formatsTitle}</h2>
        <p className="font-sans text-[11px] sm:text-xs text-white/55 leading-relaxed font-light">{t.formatsDesc}</p>
      </div>

      <div className="grid grid-cols-1 gap-2 mt-3 sm:gap-2.5">
        {formats.map((format, index) => {
          const Icon = icons[index];
          return (
            <article
              key={format.name}
              className="group border border-white/10 bg-white/[0.03] hover:border-[#ff7849]/35 transition-colors duration-300 p-3 sm:p-3.5"
            >
              <div className="flex items-start gap-3">
                <span className="shrink-0 w-9 h-9 border border-white/10 flex items-center justify-center text-[#ff7849]">
                  <Icon size={15} strokeWidth={1.5} />
                </span>
                <div className="min-w-0 flex-1">
                  <span className="font-mono text-[7px] tracking-[0.22em] text-white/40 uppercase block mb-0.5">{format.tag}</span>
                  <h3 className="font-serif text-base sm:text-lg text-white font-light leading-tight">{format.name}</h3>
                  <p className="font-sans text-[11px] text-white/55 leading-relaxed mt-1 line-clamp-2 sm:line-clamp-none">{format.desc}</p>
                  <p className="font-mono text-[8px] text-[#ff7849]/90 tracking-wider uppercase mt-2">{format.duration}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row gap-2 pt-3 mt-3 border-t border-white/8">
        <button type="button" onClick={onBook} className="flex-1 min-h-11 py-3 bg-white text-black font-mono text-[9px] tracking-[0.2em] uppercase hover:bg-[#ff7849] hover:text-white active:bg-[#ff7849] active:text-white transition-colors duration-300 cursor-pointer border-none">
          {t.btnBookSet}
        </button>
        <button type="button" onClick={onNext} className="flex-1 min-h-11 py-3 border border-white/15 text-white/80 hover:text-white active:bg-white/5 font-mono text-[9px] tracking-[0.2em] uppercase transition-colors duration-300 cursor-pointer bg-transparent flex items-center justify-center gap-1.5">
          {t.btnNextToVenues}
          <ArrowRight size={11} />
        </button>
      </div>
    </motion.div>
  );
}
