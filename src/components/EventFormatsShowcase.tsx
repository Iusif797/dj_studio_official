import { Building2, Disc3, Heart, ArrowRight } from 'lucide-react';
import { TranslationSet } from '../translations';
import { playGlassTap } from './AudioPlayer';

type EventFormatsShowcaseProps = {
  t: TranslationSet;
  onBook: () => void;
};

const icons = [Disc3, Building2, Heart];

export default function EventFormatsShowcase({ t, onBook }: EventFormatsShowcaseProps) {
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
    <section id="formats" className="w-full py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <span className="font-mono text-[9px] tracking-[0.3em] text-[#ff7849] uppercase font-semibold">
            02 // EVENT FORMATS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
            {t.formatsTitle}
          </h2>
          <p className="max-w-2xl text-xs sm:text-sm text-white/55 font-light leading-relaxed">
            {t.formatsDesc}
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            playGlassTap();
            onBook();
          }}
          className="px-6 py-3 bg-white text-black hover:bg-[#ff7849] hover:text-white font-mono text-[9px] tracking-widest uppercase transition-all duration-300 rounded-sm flex items-center gap-2 cursor-pointer shrink-0 self-start md:self-auto font-medium"
        >
          <span>{t.btnBookSet}</span>
          <ArrowRight size={12} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {formats.map((format, index) => {
          const Icon = icons[index];
          return (
            <article
              key={format.name}
              className="p-6 sm:p-8 rounded-sm border border-white/10 bg-[#0a0a0d] hover:border-[#ff7849]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[8px] tracking-[0.25em] text-[#ff7849] uppercase font-medium">
                    {format.tag}
                  </span>
                  <span className="w-10 h-10 rounded-sm bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/70 group-hover:text-white transition-colors">
                    <Icon size={18} strokeWidth={1.5} />
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-white font-light mb-3">
                  {format.name}
                </h3>

                <p className="text-xs sm:text-sm text-white/50 font-light leading-relaxed mb-6">
                  {format.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-[9px] text-white/40 uppercase tracking-wider">
                  Duration
                </span>
                <span className="font-mono text-[10px] text-[#ff7849] font-medium tracking-wider">
                  {format.duration}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
