import { ArrowRight, MapPin, Users, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import SceneCardHero from './SceneCardHero';
import { imageVenuesPrague } from '../assets/images';
import { TranslationSet } from '../translations';

type VenuesSocialProofProps = {
  t: TranslationSet;
  isActive: boolean;
  onNext: () => void;
  reducedMotion?: boolean;
};

const venues = [
  'Cross Club',
  'Duplex Prague',
  'Roxy',
  'Radost FX',
  'Epic Prague',
  'Château Mcely',
  'Forbes Events',
  'Mercedes-Benz',
];

export default function VenuesSocialProof({ t, isActive, onNext, reducedMotion }: VenuesSocialProofProps) {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : reducedMotion ? 0 : 20 }}
      transition={{ duration: reducedMotion ? 0.2 : 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`scene-card scene-card--glass scene-card--immersive ${isActive ? 'block' : 'hidden'}`}
    >
      <SceneCardHero src={imageVenuesPrague} alt={t.venuesTitle} badge="09 / PRAGUE STAGES" />

      <div className="space-y-1.5 px-0.5">
        <span className="font-mono text-[8px] tracking-[0.28em] text-[#ff7849] uppercase block font-semibold">{t.venuesSub}</span>
        <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-white tracking-wide leading-tight">{t.venuesTitle}</h2>
        <p className="font-sans text-[11px] sm:text-xs text-white/55 leading-relaxed font-light">{t.venuesDesc}</p>
      </div>

      <div className="grid grid-cols-3 gap-1.5 sm:gap-2 border-y border-white/8 py-3 mt-3">
        <div className="text-center px-1">
          <Users size={13} className="mx-auto text-[#ff7849] mb-1" />
          <p className="font-serif text-base sm:text-lg text-white leading-none">{t.venuesStat1Val}</p>
          <p className="font-mono text-[6px] sm:text-[7px] text-white/40 uppercase tracking-wider mt-1 leading-tight">{t.venuesStat1Label}</p>
        </div>
        <div className="text-center border-x border-white/8 px-1">
          <MapPin size={13} className="mx-auto text-[#ff7849] mb-1" />
          <p className="font-serif text-base sm:text-lg text-white leading-none">{t.venuesStat2Val}</p>
          <p className="font-mono text-[6px] sm:text-[7px] text-white/40 uppercase tracking-wider mt-1 leading-tight">{t.venuesStat2Label}</p>
        </div>
        <div className="text-center px-1">
          <Zap size={13} className="mx-auto text-[#ff7849] mb-1" />
          <p className="font-serif text-base sm:text-lg text-white leading-none">{t.venuesStat3Val}</p>
          <p className="font-mono text-[6px] sm:text-[7px] text-white/40 uppercase tracking-wider mt-1 leading-tight">{t.venuesStat3Label}</p>
        </div>
      </div>

      <div className="overflow-hidden border border-white/10 bg-black/40 py-2 mt-3">
        <div className={`marquee-track flex w-max gap-8 px-4 ${reducedMotion ? '' : 'marquee-track--active'}`}>
          {[...venues, ...venues].map((venue, index) => (
            <span key={`${venue}-${index}`} className="font-mono text-[9px] sm:text-[10px] tracking-[0.18em] text-white/55 uppercase whitespace-nowrap">
              {venue}
            </span>
          ))}
        </div>
      </div>

      <button type="button" onClick={onNext} className="w-full flex items-center justify-center gap-2 py-2.5 mt-3 text-white hover:text-[#ff7849] transition-colors duration-300 cursor-pointer bg-transparent border-none font-mono text-[9px] tracking-[0.2em] uppercase">
        {t.btnNextToTestimonials}
        <ArrowRight size={11} />
      </button>
    </motion.div>
  );
}
