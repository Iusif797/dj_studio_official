import { LIVING_ENTER_AT } from '../constants/livingVideo';

const TESTIMONIALS_AT = 9;
const FAQ_AT = 10;
const ZONE_SPAN = FAQ_AT - TESTIMONIALS_AT;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const easeOutExpo = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));
const easeInOutQuart = (t: number) =>
  t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

export type LivingBridgeState = {
  isActive: boolean;
  videoOpacity: number;
  videoScale: number;
  scrubTime: number;
  parallaxY: number;
  parallaxX: number;
  testimonialsOpacity: number;
  faqOpacity: number;
  zoneProgress: number;
  transitionIntensity: number;
  testimonialsBlur: number;
  testimonialsReveal: number;
  faqReveal: number;
  filmIntensity: number;
  isTransitioning: boolean;
};

export function useLivingBridge(
  scrollFraction: number,
  pointerX = 0.5,
  pointerY = 0.5,
  videoDuration = 7.6
): LivingBridgeState {
  const rawZone = clamp((scrollFraction - TESTIMONIALS_AT) / ZONE_SPAN, 0, 1);
  const zoneProgress = easeInOutQuart(rawZone);
  const footerFade = clamp(1 - (scrollFraction - 10.72) / 0.2, 0, 1);
  const isActive = scrollFraction >= LIVING_ENTER_AT && footerFade > 0;

  const enterT = easeOutExpo(clamp((scrollFraction - LIVING_ENTER_AT) / 0.18, 0, 1));
  const videoOpacity = isActive ? enterT * footerFade : 0;
  const videoScale = 1.08 + zoneProgress * 0.14 + enterT * 0.04;

  const scrubTime =
    scrollFraction < TESTIMONIALS_AT
      ? 0
      : scrollFraction >= FAQ_AT
        ? videoDuration
        : zoneProgress * videoDuration;

  const parallaxY = (pointerY - 0.5) * -32 + zoneProgress * -42;
  const parallaxX = (pointerX - 0.5) * 26 + zoneProgress * 22;

  const testimonialsEnter = easeOutExpo(clamp((scrollFraction - TESTIMONIALS_AT) / 0.14, 0, 1));
  const testimonialsExitStart = 0.48;
  const testimonialsExit = clamp(1 - (rawZone - testimonialsExitStart) / 0.22, 0, 1);
  const testimonialsOpacity =
    scrollFraction < TESTIMONIALS_AT ? 0 : testimonialsEnter * testimonialsExit * footerFade;

  const faqOpacity =
    rawZone <= 0.44 ? 0 : easeOutExpo(clamp((rawZone - 0.44) / 0.28, 0, 1)) * footerFade;

  const transitionIntensity = clamp(
    1 - Math.abs(rawZone - 0.58) / 0.28,
    0,
    1
  );

  const testimonialsBlur = clamp((rawZone - 0.42) * 28, 0, 14);
  const testimonialsReveal = clamp(1 - rawZone * 0.35, 0.65, 1);
  const faqReveal = clamp((rawZone - 0.4) / 0.55, 0, 1);
  const filmIntensity = transitionIntensity * 0.85;

  const isTransitioning = rawZone > 0.38 && rawZone < 0.82;

  return {
    isActive,
    videoOpacity,
    videoScale,
    scrubTime,
    parallaxY,
    parallaxX,
    testimonialsOpacity,
    faqOpacity,
    zoneProgress,
    transitionIntensity,
    testimonialsBlur,
    testimonialsReveal,
    faqReveal,
    filmIntensity,
    isTransitioning,
  };
}
