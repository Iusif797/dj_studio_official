type PerformanceParallaxLayersProps = {
  zoneProgress: number;
  parallaxX: number;
  parallaxY: number;
  opacity: number;
};

export default function PerformanceParallaxLayers({
  zoneProgress,
  parallaxX,
  parallaxY,
  opacity,
}: PerformanceParallaxLayersProps) {
  if (opacity <= 0.05) return null;

  const beamShift = zoneProgress * 120 + parallaxX * 1.4;
  const smokeShift = zoneProgress * -80 + parallaxY * 0.8;

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ opacity: opacity * 0.85 }}
    >
      <div
        className="absolute -inset-[20%] opacity-40 mix-blend-screen"
        style={{
          transform: `translate3d(${parallaxX * 0.6}px, ${parallaxY * 0.5}px, 0)`,
          background:
            'radial-gradient(ellipse 60% 40% at 30% 70%, rgba(255,120,73,0.35), transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translate3d(${beamShift}px, ${smokeShift}px, 0) rotate(-12deg) scale(1.2)`,
          backgroundImage:
            'repeating-linear-gradient(105deg, transparent, transparent 80px, rgba(255,120,73,0.12) 80px, rgba(255,120,73,0.12) 82px)',
        }}
      />
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          transform: `translate3d(${-beamShift * 0.4}px, ${-smokeShift * 0.3}px, 0)`,
          backgroundImage:
            'repeating-linear-gradient(-75deg, transparent, transparent 120px, rgba(255,255,255,0.04) 120px, rgba(255,255,255,0.04) 121px)',
        }}
      />
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
    </div>
  );
}
