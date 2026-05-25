import { SCENE_POSITIONS } from '../constants/scenes';

const lerp = (start: number, end: number, amount: number) => (1 - amount) * start + amount * end;

type SceneStyle = {
  top: string;
  left: string;
  transform: string;
  opacity: number;
  filter: string;
  display?: 'none';
};

const getSceneMotion = (scrollFraction: number) => {
  const maxIdx = SCENE_POSITIONS.length - 1;
  const rawIdx = Math.floor(scrollFraction);
  const baseIdx = Math.max(0, Math.min(maxIdx - 1, rawIdx));
  const targetIdx = Math.min(maxIdx, baseIdx + 1);
  const subt = Math.max(0, Math.min(1, scrollFraction - baseIdx));
  const eased = subt < 0.5 ? 4 * subt * subt * subt : 1 - Math.pow(-2 * subt + 2, 3) / 2;
  const start = SCENE_POSITIONS[baseIdx];
  const end = SCENE_POSITIONS[targetIdx];

  return {
    x: lerp(start.x, end.x, eased),
    y: lerp(start.y, end.y, eased),
    rotate: lerp(start.rotate, end.rotate, eased),
    rotateX: lerp(start.rotateX, end.rotateX, eased),
    rotateY: lerp(start.rotateY, end.rotateY, eased),
    scale: lerp(start.scale, end.scale, eased),
  };
};

const buildTransform = (
  motion: ReturnType<typeof getSceneMotion>,
  scale: number
) =>
  `translate3d(-50%, -50%, 0) translate3d(${motion.x}vw, ${motion.y}vh, 0) scale(${scale}) rotate(${motion.rotate}deg) rotateX(${motion.rotateX}deg) rotateY(${motion.rotateY}deg)`;

export function getMixerStyle(scrollFraction: number, isMobile: boolean): SceneStyle {
  const motion = getSceneMotion(scrollFraction);
  let opacity = 1;
  if (scrollFraction > 3) opacity = Math.max(0, 1 - (scrollFraction - 3) / 0.9);
  let blur = 0;
  if (scrollFraction > 3 && !isMobile) blur = Math.min(24, (scrollFraction - 3) * 15);

  return {
    top: '50%',
    left: '50%',
    transform: buildTransform(motion, motion.scale),
    opacity,
    filter: blur > 0 ? `blur(${blur}px)` : 'none',
  };
}

export function getTubesStyle(scrollFraction: number, isMobile: boolean): SceneStyle {
  if (scrollFraction <= 2.8) {
    return { top: '50%', left: '50%', transform: 'none', opacity: 0, filter: 'none', display: 'none' };
  }

  let opacity = 0;
  if (scrollFraction <= 3.6) opacity = (scrollFraction - 2.8) / 0.8;
  else if (scrollFraction <= 4.4) opacity = 1;
  else if (scrollFraction <= 5.2) opacity = Math.max(0, 1 - (scrollFraction - 4.4) / 0.8);

  let scale = 0.2;
  if (scrollFraction <= 4) scale = lerp(0.2, 1.1, (scrollFraction - 2.8) / 1.2);
  else scale = lerp(1.1, 8, (scrollFraction - 4) / 1.2);

  const motion = getSceneMotion(scrollFraction);
  const blur = !isMobile && scrollFraction > 4.6 ? Math.min(16, (scrollFraction - 4.6) * 10) : 0;

  return {
    top: '50%',
    left: '50%',
    transform: buildTransform(motion, scale),
    opacity,
    filter: blur > 0 ? `blur(${blur}px)` : 'none',
  };
}

export function getCablesStyle(scrollFraction: number, isMobile: boolean): SceneStyle {
  if (scrollFraction <= 4) {
    return { top: '50%', left: '50%', transform: 'none', opacity: 0, filter: 'none', display: 'none' };
  }

  let opacity = 0;
  if (scrollFraction <= 4.8) opacity = (scrollFraction - 4) / 0.8;
  else if (scrollFraction <= 5.4) opacity = 1;
  else if (scrollFraction <= 6.2) opacity = Math.max(0, 1 - (scrollFraction - 5.4) / 0.8);

  let scale = 0.25;
  if (scrollFraction <= 5) scale = lerp(0.25, 1.15, (scrollFraction - 4) / 1);
  else scale = lerp(1.15, 3.5, (scrollFraction - 5) / 1.2);

  const motion = getSceneMotion(scrollFraction);
  const blur = !isMobile && scrollFraction > 5.4 ? Math.min(16, (scrollFraction - 5.4) * 8) : 0;

  return {
    top: '50%',
    left: '50%',
    transform: buildTransform(motion, scale),
    opacity,
    filter: blur > 0 ? `blur(${blur}px)` : 'none',
  };
}
