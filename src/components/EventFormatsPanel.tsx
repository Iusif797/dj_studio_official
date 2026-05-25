import { ArrowRight, Building2, Disc3, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { TranslationSet } from '../translations';

type EventFormatsPanelProps = {
  t: TranslationSet;
  isActive: boolean;
  onNext: () => void;
  onBook: () => void;
};

const icons = [Disc3, Building2, Sparkles];

export default function EventFormatsPanel({ t, isActive, onNext, onBook }: EventFormatsPanelProps) {
  const formats = [
    {
      tag: t.formatClubTag,
      name: t.formatClubName,
      desc: t.formatClubDesc,
      duration: t.formatClubDuration,
    },
    {
      tag: t.formatCorpTag,
      name: t.formatCorpName,
      desc: t.formatCorpDesc,
      duration: t.formatCorpDuration,
    },
    {
      tag: t.formatPrivateTag,
      name: t.formatPrivateName,
      desc: t.formatPrivateDesc,
      duration: t.formatPrivateDuration,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 24 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={`scene-card scene-card--glass space-y-4 sm:space-y-5 ${isActive ? 'block' : 'hidden'}`}
    >
      <div className="space-y-1.5">
        <span className="font-mono text-[8px] tracking-[0.28em] text-[#ff7849] uppercase block font-semibold">
          {t.formatsSub}
        </span>
        <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-white tracking-wide leading-tight">
          {t.formatsTitle}
        </h2>
        <p className="font-sans text-[11px] sm:text-xs text-white/55 leading-relaxed font-light">
          {t.formatsDesc}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:gap-2.5">
        {formats.map((format, index) => {
          const Icon = icons[index];
          return (
            <article
              key={format.name}
              className="group border border-white/10 bg-white/[0.03] hover:border-[#ff7849]/35 hover:bg-[#ff7849]/[0.04] transition-all duration-300 p-3 sm:p-3.5 cursor-default"
            >
              <div className="flex items-start gap-3">
                <span className="shrink-0 w-9 h-9 border border-white/10 flex items-center justify-center text-[#ff7849] group-hover:border-[#ff7849]/40 transition-colors duration-300">
                  <Icon size={15} strokeWidth={1.5} />
                </span>
                <div className="min-w-0 flex-1">
                  <span className="font-mono text-[7px] tracking-[0.22em] text-white/40 uppercase block mb-0.5">
                    {format.tag}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg text-white font-light leading-tight">{format.name}</h3>
                  <p className="font-sans text-[11px] text-white/55 leading-relaxed mt-1">{format.desc}</p>
                  <p className="font-mono text-[8px] text-[#ff7849]/90 tracking-wider uppercase mt-2">{format.duration}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row gap-2 pt-1 border-t border-white/8">
        <button
          type="button"
          onClick={onBook}
          className="flex-1 py-2.5 bg-white text-black font-mono text-[9px] tracking-[0.2em] uppercase hover:bg-[#ff7849] hover:text-white transition-all duration-300 cursor-pointer border-none"
        >
          {t.btnBookSet}
        </button>
        <button
          type="button"
          onClick={onNext}
          className="flex-1 py-2.5 border border-white/15 text-white/80 hover:text-white hover:border-white/30 font-mono text-[9px] tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer bg-transparent flex items-center justify-center gap-1.5"
        >
          {t.btnNextToVenues}
          <ArrowRight size={11} />
        </button>
      </div>
    </motion.div>
  );
}
