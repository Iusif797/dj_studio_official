import { Users, MapPin, Zap } from 'lucide-react';
import { TranslationSet } from '../translations';

type VenuesShowcaseProps = {
  t: TranslationSet;
};

const venues = [
  'Cross Club',
  'Duplex Prague',
  'Roxy Prague',
  'Radost FX',
  'Epic Prague',
  'Château Mcely',
  'Forbes Events',
  'Mercedes-Benz',
  'Retro Music Hall',
  'Kaskad Terrace',
];

export default function VenuesShowcase({ t }: VenuesShowcaseProps) {
  return (
    <section id="venues" className="w-full py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="space-y-2 mb-12 text-center max-w-3xl mx-auto">
        <span className="font-mono text-[9px] tracking-[0.3em] text-[#ff7849] uppercase font-semibold">
          05 // STAGES & RESIDENCIES
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
          {t.venuesTitle}
        </h2>
        <p className="text-xs sm:text-sm text-white/55 font-light leading-relaxed">
          {t.venuesDesc}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
        <div className="p-6 rounded-sm border border-white/10 bg-[#0a0a0d] text-center flex flex-col items-center justify-center">
          <Users size={18} className="text-[#ff7849] mb-2" />
          <p className="font-serif text-2xl sm:text-3xl text-white font-light">{t.venuesStat1Val}</p>
          <p className="font-mono text-[8px] text-white/40 uppercase tracking-widest mt-1">{t.venuesStat1Label}</p>
        </div>

        <div className="p-6 rounded-sm border border-white/10 bg-[#0a0a0d] text-center flex flex-col items-center justify-center">
          <MapPin size={18} className="text-[#ff7849] mb-2" />
          <p className="font-serif text-2xl sm:text-3xl text-white font-light">{t.venuesStat2Val}</p>
          <p className="font-mono text-[8px] text-white/40 uppercase tracking-widest mt-1">{t.venuesStat2Label}</p>
        </div>

        <div className="p-6 rounded-sm border border-white/10 bg-[#0a0a0d] text-center flex flex-col items-center justify-center">
          <Zap size={18} className="text-[#ff7849] mb-2" />
          <p className="font-serif text-2xl sm:text-3xl text-white font-light">{t.venuesStat3Val}</p>
          <p className="font-mono text-[8px] text-white/40 uppercase tracking-widest mt-1">{t.venuesStat3Label}</p>
        </div>
      </div>

      <div className="overflow-hidden border border-white/10 bg-black/60 py-4 rounded-sm">
        <div className="flex w-max gap-8 animate-[marquee_25s_linear_infinite] px-4">
          {[...venues, ...venues].map((venue, index) => (
            <span
              key={`${venue}-${index}`}
              className="font-mono text-[11px] sm:text-xs tracking-[0.2em] text-white/70 uppercase whitespace-nowrap flex items-center gap-6"
            >
              <span>{venue}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff7849]/50" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
