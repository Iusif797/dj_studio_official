import { useRef } from 'react';
import LivePerformanceVideo from './LivePerformanceVideo';
import LivingSectionPanel from './LivingSectionPanel';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import { LIVING_ENTER_AT, LIVING_VIDEO_DURATION } from '../constants/livingVideo';
import { useDeviceProfile } from '../hooks/useDeviceProfile';
import { useLivingBridge } from '../hooks/useLivingBridge';
import { usePointerParallax } from '../hooks/usePointerParallax';
import { useScrollFraction } from '../hooks/useScrollMetrics';
import { useVideoElement } from '../hooks/useSmoothScrub';

type Lang = 'en' | 'cs' | 'ru';

type LivingBlocksStageProps = {
  lang: Lang;
};

export default function LivingBlocksStage({ lang }: LivingBlocksStageProps) {
  const scrollFraction = useScrollFraction();
  const device = useDeviceProfile();
  const pointer = usePointerParallax(scrollFraction >= LIVING_ENTER_AT && !device.isMobile);
  const bridge = useLivingBridge(scrollFraction, pointer.x, pointer.y, LIVING_VIDEO_DURATION);
  const videoRef = useVideoElement();

  if (!bridge.isActive) return null;

  const contentLift = bridge.zoneProgress * -56 + bridge.parallaxY * 0.2;
  const contentDrift = bridge.parallaxX * 0.12;

  return (
    <div
      className="fixed inset-0 z-25 pointer-events-none overflow-hidden living-stage-shell"
      aria-hidden={bridge.testimonialsOpacity < 0.05 && bridge.faqOpacity < 0.05}
    >
      <LivePerformanceVideo
        videoRef={videoRef}
        active={bridge.isActive}
        opacity={bridge.videoOpacity}
        scale={bridge.videoScale}
        scrubTime={bridge.scrubTime}
        parallaxX={bridge.parallaxX}
        parallaxY={bridge.parallaxY}
        zoneProgress={bridge.zoneProgress}
        filmIntensity={bridge.filmIntensity}
        reducedMotion={device.isReducedMotion}
      />

      <div
        className="absolute inset-0 flex items-center justify-center px-3 sm:px-6 md:px-20 lg:px-36 pt-16 pb-24 md:pt-0 md:pb-16"
        style={{ transform: `translate3d(${contentDrift}px, ${contentLift}px, 0)` }}
      >
        <LivingSectionPanel
          opacity={bridge.testimonialsOpacity}
          reveal={bridge.testimonialsReveal}
          blur={0}
          shiftY={(1 - bridge.testimonialsOpacity) * 56 - bridge.transitionIntensity * 18}
          shiftX={-bridge.transitionIntensity * 28}
          scale={0.94 + bridge.testimonialsOpacity * 0.06}
          clipOrigin="left"
        >
          <Testimonials lang={lang} isActive variant="living" />
        </LivingSectionPanel>

        <LivingSectionPanel
          opacity={bridge.faqOpacity}
          reveal={bridge.faqReveal}
          blur={0}
          shiftY={(1 - bridge.faqOpacity) * 64}
          shiftX={bridge.transitionIntensity * 24}
          scale={0.93 + bridge.faqOpacity * 0.07}
          clipOrigin="right"
        >
          <FAQ lang={lang} isActive variant="living" />
        </LivingSectionPanel>
      </div>

      {bridge.isTransitioning && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 pointer-events-none">
          <div className="flex items-center gap-3 font-mono text-[7px] tracking-[0.45em] text-white/50 uppercase">
            <span className={bridge.zoneProgress < 0.55 ? 'text-[#ff7849]' : ''}>10 · Reviews</span>
            <span className="w-8 h-px bg-white/20" />
            <span className={bridge.zoneProgress >= 0.55 ? 'text-[#ff7849]' : ''}>11 · FAQ</span>
          </div>
          <div className="w-40 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#ff7849] via-white/80 to-[#ff7849]" style={{ width: `${bridge.zoneProgress * 100}%` }} />
          </div>
        </div>
      )}
    </div>
  );
}
