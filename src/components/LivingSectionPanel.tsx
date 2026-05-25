import { ReactNode } from 'react';

type LivingSectionPanelProps = {
  children: ReactNode;
  opacity: number;
  reveal: number;
  blur: number;
  shiftY: number;
  shiftX: number;
  scale: number;
  clipOrigin: 'left' | 'right';
};

export default function LivingSectionPanel({
  children,
  opacity,
  reveal,
  blur,
  shiftY,
  shiftX,
  scale,
  clipOrigin,
}: LivingSectionPanelProps) {
  const clipX = clipOrigin === 'left' ? '0%' : '100%';
  const clipPath = `polygon(
    ${clipOrigin === 'left' ? 0 : 100 - reveal * 100}% 0%,
    100% 0%,
    100% 100%,
    ${clipOrigin === 'left' ? 0 : 100 - reveal * 100}% 100%
  )`;

  return (
    <div
      className="w-full will-change-transform"
      style={{
        opacity,
        transform: `translate3d(${shiftX}px, ${shiftY}px, 0) scale(${scale})`,
        filter: blur > 0 ? `blur(${blur}px)` : undefined,
        clipPath: reveal < 0.99 ? clipPath : undefined,
        transformOrigin: `${clipX} center`,
        pointerEvents: opacity > 0.2 ? 'auto' : 'none',
        visibility: opacity < 0.02 ? 'hidden' : 'visible',
      }}
    >
      {children}
    </div>
  );
}
