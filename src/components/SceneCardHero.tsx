type SceneCardHeroProps = {
  src: string;
  alt: string;
  badge: string;
};

export default function SceneCardHero({ src, alt, badge }: SceneCardHeroProps) {
  return (
    <div className="scene-hero-strip relative mb-3 overflow-hidden border-b border-white/10 md:mb-4 md:rounded-sm md:border md:border-white/10">
      <img src={src} alt={alt} loading="lazy" decoding="async" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
      <div className="scene-scanline absolute inset-0 opacity-20" />
      <span className="absolute left-2.5 top-2.5 font-mono text-[6px] sm:text-[7px] tracking-[0.22em] text-[#ff7849] uppercase bg-black/75 px-1.5 py-0.5 border border-[#ff7849]/30">
        {badge}
      </span>
    </div>
  );
}
