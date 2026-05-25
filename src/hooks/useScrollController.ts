import { useEffect, useRef } from 'react';
import { SCENE_KEYS, SceneKey } from '../constants/scenes';
import { setScrollMetrics } from './useScrollMetrics';

export function useScrollController(onSceneChange: (scene: SceneKey) => void) {
  const onSceneChangeRef = useRef(onSceneChange);
  onSceneChangeRef.current = onSceneChange;
  const prevSceneRef = useRef<SceneKey>('intro');
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - windowHeight;
      const fraction = windowHeight > 0 ? scrollY / windowHeight : 0;
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
    updateScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);
}
