import { useEffect, useState } from 'react';

type DeviceProfile = {
  isMobile: boolean;
  isReducedMotion: boolean;
  isCoarsePointer: boolean;
};

const readProfile = (): DeviceProfile => {
  if (typeof window === 'undefined') {
    return { isMobile: false, isReducedMotion: false, isCoarsePointer: false };
  }
  return {
    isMobile: window.matchMedia('(max-width: 767px)').matches,
    isReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    isCoarsePointer: window.matchMedia('(pointer: coarse)').matches,
  };
};

export function useDeviceProfile(): DeviceProfile {
  const [profile, setProfile] = useState(readProfile);

  useEffect(() => {
    const sync = () => setProfile(readProfile());
    sync();
    window.addEventListener('resize', sync, { passive: true });
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    motion.addEventListener('change', sync);
    return () => {
      window.removeEventListener('resize', sync);
      motion.removeEventListener('change', sync);
    };
  }, []);

  return profile;
}
