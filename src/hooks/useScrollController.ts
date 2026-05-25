import { useEffect, useRef } from 'react';
import { SCENE_KEYS, SceneKey } from '../constants/scenes';
import { setScrollMetrics } from './useScrollMetrics';

const VIEWPORT_RESIZE_THRESHOLD = 120;

export function useScrollController(onSceneChange: (scene: SceneKey) => void) {
  const onSceneChangeRef = useRef(onSceneChange);
  onSceneChangeRef.current = onSceneChange;
  const prevSceneRef = useRef<SceneKey>('intro');
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    let ticking = false;
    let cachedViewportHeight = window.innerHeight || 1;

    const refreshViewportHeight = () => {
      const next = window.innerHeight;
      if (next > 0 && Math.abs(next - cachedViewportHeight) > VIEWPORT_RESIZE_THRESHOLD) {
        cachedViewportHeight = next;
      }
    };

    const updateScroll = () => {
      const scrollY = window.scrollY;
      const liveHeight = window.innerHeight || 1;
      const windowHeight = cachedViewportHeight || liveHeight;
      const docHeight = document.documentElement.scrollHeight - liveHeight;
      const fraction = scrollY / windowHeight;
      const progress = docHeight > 0 ? Math.min(1, scrollY / docHeight) : 0;

      setScrollMetrics(fraction, progress);

      const sceneIndex = Math.min(SCENE_KEYS.length - 1, Math.max(0, Math.floor(fraction)));
      const newScene = SCENE_KEYS[sceneIndex];
      if (newScene !== prevSceneRef.current) {
        prevSceneRef.current = newScene;
        onSceneChangeRef.current(newScene);
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        rafRef.current = requestAnimationFrame(updateScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', refreshViewportHeight, { passive: true });
    window.addEventListener('orientationchange', refreshViewportHeight, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', refreshViewportHeight);
      window.removeEventListener('orientationchange', refreshViewportHeight);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);
}
