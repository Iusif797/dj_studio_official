import { Check } from 'lucide-react';
import { TranslationSet } from '../translations';

type PricingPanelProps = {
  t: TranslationSet;
  onBook: () => void;
  onSpec: () => void;
};

type Tier = {
  tag: string;
  name: string;
  price: string;
  duration: string;
  features: string[];
  featured?: boolean;
};

export default function PricingPanel({ t, onBook, onSpec }: PricingPanelProps) {
  const tiers: Tier[] = [
    {
      tag: t.pricingTier1Tag,
      name: t.pricingTier1Name,
      price: t.pricingTier1Price,
      duration: t.pricingTier1Duration,
      features: [t.pricingTier1Feature1, t.pricingTier1Feature2, t.pricingTier1Feature3],
    },
    {
      tag: t.pricingTier2Tag,
      name: t.pricingTier2Name,
      price: t.pricingTier2Price,
      duration: t.pricingTier2Duration,
      features: [t.pricingTier2Feature1, t.pricingTier2Feature2, t.pricingTier2Feature3],
      featured: true,
    },
    {
      tag: t.pricingTier3Tag,
      name: t.pricingTier3Name,
      price: t.pricingTier3Price,
      duration: t.pricingTier3Duration,
      features: [t.pricingTier3Feature1, t.pricingTier3Feature2, t.pricingTier3Feature3],
    },
  ];

  return (
    <div className="w-full max-w-full md:max-w-xl space-y-4 sm:space-y-5">
      <div className="space-y-2">
        <span className="font-mono text-[7px] sm:text-[8px] tracking-[0.28em] sm:tracking-[0.3em] text-[#ff7849] uppercase block font-semibold">
          {t.pricingSub}
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-wide leading-tight">
          {t.pricingTitle}
        </h2>
        <p className="font-sans text-[11px] sm:text-xs text-white/55 leading-relaxed font-light">
          {t.pricingDesc}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-2.5 sm:gap-3 max-h-[42dvh] sm:max-h-none overflow-y-auto overscroll-contain md:overflow-visible">
        {tiers.map((tier) => (
          <article
            key={tier.name}
            className={`relative border p-4 md:p-5 transition-colors ${
              tier.featured
                ? 'border-[#ff7849]/40 bg-[#ff7849]/5 shadow-[0_0_40px_rgba(255,120,73,0.08)]'
                : 'border-white/10 bg-[#090909]/90'
            }`}
          >
            {tier.featured && (
              <span className="absolute -top-2.5 right-4 font-mono text-[7px] tracking-[0.2em] uppercase bg-[#ff7849] text-white px-2 py-0.5">
                {t.pricingFeaturedBadge}
              </span>
            )}
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <span className="font-mono text-[7px] tracking-[0.22em] text-white/40 uppercase block mb-1">
                  {tier.tag}
                </span>
                <h3 className="font-serif text-xl text-white font-light">{tier.name}</h3>
                <p className="font-mono text-[9px] text-white/45 mt-1 uppercase tracking-wider">{tier.duration}</p>
              </div>
              <p className="font-serif text-xl sm:text-2xl text-[#ff7849] whitespace-nowrap">{tier.price}</p>
            </div>
            <ul className="space-y-1.5 border-t border-white/5 pt-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-[11px] text-white/65 font-light">
                  <Check size={12} className="text-[#ff7849] mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <p className="font-mono text-[8px] text-white/35 tracking-wide uppercase">{t.pricingNote}</p>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={onBook}
          className="flex-1 px-4 py-3 bg-white text-black font-mono text-[10px] tracking-widest uppercase hover:bg-[#ff7849] hover:text-white transition-all duration-500 rounded-none cursor-pointer border-none"
        >
          {t.btnBookSetBeckerman}
        </button>
        <button
          onClick={onSpec}
          className="flex-1 px-4 py-3 border border-white/10 hover:border-white/25 text-white font-mono text-[10px] tracking-widest uppercase hover:bg-white/5 transition-all duration-500 rounded-none cursor-pointer bg-transparent"
        >
          {t.btnDetailsRider}
        </button>
      </div>
    </div>
  );
}
