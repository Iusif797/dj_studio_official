import { useEffect, useState } from 'react';
import type { RefObject } from 'react';
import { LIVING_VIDEO_POSTER } from '../constants/livingVideo';
import { getLivingVideoSrc } from '../utils/livingVideoSource';
import { syncVideoTime, useSmoothScrub } from '../hooks/useSmoothScrub';
import LivingFilmOverlay from './LivingFilmOverlay';
import PerformanceParallaxLayers from './PerformanceParallaxLayers';

type LivePerformanceVideoProps = {
  opacity: number;
  scale: number;
  scrubTime: number;
  parallaxX: number;
  parallaxY: number;
  zoneProgress: number;
  filmIntensity: number;
  active: boolean;
  reducedMotion?: boolean;
  videoRef: RefObject<HTMLVideoElement | null>;
};

export default function LivePerformanceVideo({
  opacity,
  scale,
  scrubTime,
  parallaxX,
  parallaxY,
  zoneProgress,
  filmIntensity,
  active,
  reducedMotion = false,
  videoRef,
}: LivePerformanceVideoProps) {
  const smoothTime = useSmoothScrub(scrubTime, active && !reducedMotion);
  const [videoSrc, setVideoSrc] = useState('/videos/performance-living.mp4');

  useEffect(() => {
    getLivingVideoSrc().then(setVideoSrc);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || opacity <= 0.02) return;
    syncVideoTime(video, Math.round(smoothTime * 12) / 12);
  }, [opacity, smoothTime, videoRef]);

  if (opacity <= 0.01) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity }}>
      <div
        className="absolute inset-[-10%] will-change-transform"
        style={{
          transform: `translate3d(${parallaxX * 0.4}px, ${parallaxY * 0.4}px, 0) scale(${scale})`,
          transformOrigin: 'center center',
        }}
      >
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={videoSrc}
          poster={LIVING_VIDEO_POSTER}
          muted
          playsInline
          preload="metadata"
        />
      </div>
      <PerformanceParallaxLayers
        zoneProgress={zoneProgress}
        parallaxX={parallaxX}
        parallaxY={parallaxY}
        opacity={opacity}
      />
      <LivingFilmOverlay intensity={filmIntensity} zoneProgress={zoneProgress} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_12%,rgba(0,0,0,0.78)_100%)]" />
    </div>
  );
}
