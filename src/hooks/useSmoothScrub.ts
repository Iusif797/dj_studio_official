import { useEffect, useRef, useState } from 'react';
import { useSpring } from 'motion/react';

export function useSmoothScrub(target: number, active: boolean) {
  const spring = useSpring(target, { stiffness: 420, damping: 42, mass: 0.35 });
  const [value, setValue] = useState(target);

  useEffect(() => {
    if (!active) {
      spring.jump(target);
      setValue(target);
      return;
    }
    spring.set(target);
  }, [target, active, spring]);

  useEffect(() => {
    const unsubscribe = spring.on('change', setValue);
    return unsubscribe;
  }, [spring]);

  return value;
}

export function useVideoElement() {
  return useRef<HTMLVideoElement>(null);
}

export function syncVideoTime(video: HTMLVideoElement | null, time: number) {
  if (!video || !video.duration || Number.isNaN(video.duration)) return;
  const target = Math.min(video.duration - 0.03, Math.max(0, time));
  if (Math.abs(video.currentTime - target) > 0.018) {
    video.currentTime = target;
  }
  video.pause();
}
