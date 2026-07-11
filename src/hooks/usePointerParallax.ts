import { useEffect, useState } from 'react';

export function usePointerParallax(enabled: boolean) {
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    if (!enabled) {
      setPointer({ x: 0.5, y: 0.5 });
      return;
    }

    const coarse = window.matchMedia('(pointer: coarse)').matches;
    const mobile = window.matchMedia('(max-width: 767px)').matches;
    if (coarse || mobile) {
      setPointer({ x: 0.5, y: 0.5 });
      return;
    }

    let frame = 0;
    let nextX = 0.5;
    let nextY = 0.5;
    const update = (event: PointerEvent) => {
      nextX = event.clientX / window.innerWidth;
      nextY = event.clientY / window.innerHeight;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setPointer((current) => {
          if (Math.abs(current.x - nextX) < 0.005 && Math.abs(current.y - nextY) < 0.005) return current;
          return { x: nextX, y: nextY };
        });
      });
    };

    window.addEventListener('pointermove', update, { passive: true });
    return () => {
      window.removeEventListener('pointermove', update);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [enabled]);

  return pointer;
}
