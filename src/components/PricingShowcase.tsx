import { Check, ArrowRight } from 'lucide-react';
import { TranslationSet } from '../translations';
import { playGlassTap } from './AudioPlayer';

type PricingShowcaseProps = {
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

export default function PricingShowcase({ t, onBook, onSpec }: PricingShowcaseProps) {
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
    <section id="pricing" className="w-full py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <span className="font-mono text-[9px] tracking-[0.3em] text-[#ff7849] uppercase font-semibold">
            06 // TRANSPARENT PACKAGES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
            {t.pricingTitle}
          </h2>
          <p className="max-w-2xl text-xs sm:text-sm text-white/55 font-light leading-relaxed">
            {t.pricingDesc}
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            playGlassTap();
            onSpec();
          }}
          className="px-6 py-3 border border-white/20 hover:border-white text-white font-mono text-[9px] tracking-widest uppercase transition-all duration-300 rounded-sm flex items-center gap-2 cursor-pointer shrink-0 self-start md:self-auto hover:bg-white/5"
        >
          <span>{t.btnDetailsRider}</span>
          <ArrowRight size={12} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`p-6 sm:p-8 rounded-sm border transition-all duration-300 flex flex-col justify-between relative ${
              tier.featured
                ? 'bg-[#121217] border-[#ff7849]/60 shadow-[0_0_30px_rgba(255,120,73,0.12)]'
                : 'bg-[#0a0a0d] border-white/10 hover:border-white/25'
            }`}
          >
            {tier.featured && (
              <span className="absolute -top-3 left-6 px-3 py-1 bg-[#ff7849] text-white font-mono text-[7.5px] uppercase tracking-widest font-semibold rounded-xs">
                {t.pricingFeaturedBadge}
              </span>
            )}

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[8px] tracking-[0.2em] text-[#ff7849] uppercase font-semibold">
                  {tier.tag}
                </span>
                <span className="font-mono text-[8.5px] text-white/40 uppercase">
                  {tier.duration}
                </span>
              </div>

              <h3 className="font-serif text-2xl text-white font-light mb-2">
                {tier.name}
              </h3>

              <div className="font-serif text-3xl sm:text-4xl text-white font-light mb-6">
                {tier.price}
              </div>

              <ul className="space-y-3 mb-8 border-t border-white/10 pt-6">
                {tier.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-white/70 font-light">
                    <span className="w-4 h-4 rounded-full bg-[#ff7849]/15 text-[#ff7849] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={10} strokeWidth={2.5} />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              onClick={() => {
                playGlassTap();
                onBook();
              }}
              className={`w-full py-3.5 rounded-sm font-mono text-[9px] tracking-widest uppercase transition-all duration-300 cursor-pointer text-center font-medium ${
                tier.featured
                  ? 'bg-white text-black hover:bg-[#ff7849] hover:text-white'
                  : 'bg-white/10 hover:bg-white text-white hover:text-black border border-white/15'
              }`}
            >
              {t.btnBookSetBeckerman}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
