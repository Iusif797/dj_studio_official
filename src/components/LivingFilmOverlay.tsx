type LivingFilmOverlayProps = {
  intensity: number;
  zoneProgress: number;
};

export default function LivingFilmOverlay({ intensity, zoneProgress }: LivingFilmOverlayProps) {
  if (intensity <= 0.02) return null;

  const letterbox = Math.min(1, intensity * 1.2) * 12;
  const aberration = intensity * 2.5;

  return (
    <div
      className="absolute inset-0 pointer-events-none z-[2]"
      style={{ opacity: 0.35 + intensity * 0.45 }}
    >
      <div
        className="absolute inset-x-0 top-0 bg-black transition-[height] duration-100"
        style={{ height: `${letterbox}%` }}
      />
      <div
        className="absolute inset-x-0 bottom-0 bg-black transition-[height] duration-100"
        style={{ height: `${letterbox}%` }}
      />
      <div
        className="absolute inset-0 mix-blend-screen opacity-30"
        style={{
          background: `linear-gradient(105deg, rgba(255,80,40,${aberration * 0.015}) 0%, transparent 42%, rgba(80,180,255,${aberration * 0.012}) 100%)`,
          transform: `translateX(${(zoneProgress - 0.5) * aberration * 8}px)`,
        }}
      />
      <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')]" />
    </div>
  );
}
