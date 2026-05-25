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

    const update = (event: PointerEvent) => {
      setPointer({
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      });
    };

    window.addEventListener('pointermove', update, { passive: true });
    return () => window.removeEventListener('pointermove', update);
  }, [enabled]);

  return pointer;
}
