const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export type SceneBackdropStyle = {
  display: 'none' | 'block';
  opacity: number;
  transform: string;
  filter: string;
};

export function getSceneBackdropStyle(
  scrollFraction: number,
  enterAt: number,
  exitAt: number,
  mobile: boolean
): SceneBackdropStyle {
  const fadeIn = 0.22;
  const fadeOut = 0.22;
  const start = enterAt - fadeIn;
  const end = exitAt + fadeOut;

  if (scrollFraction < start || scrollFraction > end) {
    return { display: 'none', opacity: 0, transform: 'translate3d(0,0,0) scale(1.08)', filter: 'none' };
  }

  let opacity = 1;
  if (scrollFraction < enterAt) {
    opacity = (scrollFraction - start) / fadeIn;
  } else if (scrollFraction > exitAt) {
    opacity = 1 - (scrollFraction - exitAt) / fadeOut;
  }

  const progress = clamp((scrollFraction - enterAt) / Math.max(0.01, exitAt - enterAt), 0, 1);
  const scale = mobile ? 1.06 + progress * 0.1 : 1.1 + progress * 0.18;
  const y = mobile ? progress * 3 : progress * 8;
  return {
    display: 'block',
    opacity: clamp(opacity, 0, 1),
    transform: `translate3d(0, ${y}vh, 0) scale(${scale})`,
    filter: 'none',
  };
}
