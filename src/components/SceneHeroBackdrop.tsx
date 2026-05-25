import { SceneBackdropStyle } from '../utils/sceneBackdropStyle';

type SceneHeroBackdropProps = {
  src: string;
  alt: string;
  label: string;
  style: SceneBackdropStyle;
  glow?: 'orange' | 'violet';
};

export default function SceneHeroBackdrop({ src, alt, label, style, glow = 'orange' }: SceneHeroBackdropProps) {
  if (style.display === 'none') return null;

  const glowClass =
    glow === 'violet'
      ? 'from-violet-500/15 via-transparent to-[#ff7849]/10'
      : 'from-[#ff7849]/25 via-transparent to-red-500/10';

  return (
    <div
      className="absolute inset-0 z-24 overflow-hidden pointer-events-none"
      style={{ opacity: style.opacity, transform: style.transform, filter: style.filter, willChange: 'transform, opacity' }}
    >
      <img src={src} alt={alt} loading="lazy" decoding="async" className="h-full w-full object-cover select-none" />
      <div className={`absolute inset-0 bg-gradient-to-t ${glowClass} mix-blend-screen`} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/85" />
      <div className="scene-scanline absolute inset-0 opacity-30" />
      <div className="absolute inset-x-0 bottom-6 flex justify-center md:justify-start md:pl-16">
        <span className="font-mono text-[7px] tracking-[0.28em] text-[#ff7849] uppercase bg-black/80 px-2.5 py-1 border border-[#ff7849]/25">
          {label}
        </span>
      </div>
    </div>
  );
}
