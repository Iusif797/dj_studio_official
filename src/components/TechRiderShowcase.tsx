import { ArrowRight } from 'lucide-react';
import { playGlassTap } from './AudioPlayer';

type Lang = 'en' | 'cs' | 'ru';

type TechRiderShowcaseProps = {
  lang: Lang;
  onOpenSpec: () => void;
};

export default function TechRiderShowcase({ lang, onOpenSpec }: TechRiderShowcaseProps) {
  const content = {
    en: {
      eyebrow: '04 // TECHNICAL SPECIFICATION',
      title: 'Touring & Club Tech Rider',
      desc: 'Standard Pioneer setup — CDJ-2000 + DJM-V10. Works with any house PA. Full details on request.',
      btnRider: 'View Details',
    },
    cs: {
      eyebrow: '04 // TECHNICKÝ RIDER',
      title: 'Klubový & koncertní tech rider',
      desc: 'Standardní klubový setup — CDJ-2000 + DJM-V10. Kompatibilní s house PA. Detaily na vyžádání.',
      btnRider: 'Zobrazit detaily',
    },
    ru: {
      eyebrow: '04 // ТЕХНИЧЕСКИЙ РАЙДЕР',
      title: 'Клубный и концертный райдер',
      desc: 'Стандартный клубный сетап — CDJ-2000 + DJM-V10. Работаю с любым house PA. Детали по запросу.',
      btnRider: 'Подробнее',
    },
  }[lang];

  return (
    <section id="tech-rider" className="w-full py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <span className="font-mono text-[9px] tracking-[0.3em] text-[#ff7849] uppercase font-semibold">
            {content.eyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
            {content.title}
          </h2>
          <p className="max-w-2xl text-xs sm:text-sm text-white/55 font-light leading-relaxed">
            {content.desc}
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            playGlassTap();
            onOpenSpec();
          }}
          className="px-6 py-3 border border-white/20 hover:border-white text-white font-mono text-[9px] tracking-widest uppercase transition-all duration-300 rounded-sm flex items-center gap-2 cursor-pointer shrink-0 self-start md:self-auto hover:bg-white/5"
        >
          <span>{content.btnRider}</span>
          <ArrowRight size={12} />
        </button>
      </div>

      <div className="flex flex-wrap gap-2 text-[11px] text-white/60 font-light">
        <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] font-mono text-[8px] tracking-widest uppercase">Pioneer CDJ-2000</span>
        <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] font-mono text-[8px] tracking-widest uppercase">DJM-V10</span>
        <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] font-mono text-[8px] tracking-widest uppercase">House PA · Ready</span>
      </div>
    </section>
  );
}
