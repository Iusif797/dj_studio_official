import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LivePerformanceShowcase from './components/LivePerformanceShowcase';
import EventFormatsShowcase from './components/EventFormatsShowcase';
import SoundPhilosophySection from './components/SoundPhilosophySection';
import TechRiderShowcase from './components/TechRiderShowcase';
import VenuesShowcase from './components/VenuesShowcase';
import PricingShowcase from './components/PricingShowcase';
import ReviewsShowcase from './components/ReviewsShowcase';
import FaqShowcase from './components/FaqShowcase';
import SiteFooter from './components/SiteFooter';
import ReservationModal from './components/ReservationModal';
import SpecOverlay from './components/SpecOverlay';
import { translations } from './translations';
import { useSeoSync } from './hooks/useSeoSync';
import { playGlassTap } from './components/AudioPlayer';

export default function App() {
  const [lang, setLang] = useState<'en' | 'cs' | 'ru'>(() => {
    return (localStorage.getItem('beckerman_lang') as 'en' | 'cs' | 'ru') || 'en';
  });

  const [isBookOpen, setIsBookOpen] = useState(false);
  const [isSpecOpen, setIsSpecOpen] = useState(false);

  const t = translations[lang] || translations.en;
  useSeoSync(lang);

  useEffect(() => {
    localStorage.setItem('beckerman_lang', lang);
  }, [lang]);

  const scrollToFootage = () => {
    playGlassTap();
    const el = document.getElementById('live-footage');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    playGlassTap();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen w-full bg-[#050507] text-[#eaeaea] overflow-x-hidden selection:bg-[#ff7849] selection:text-white">
      <Navbar
        lang={lang}
        onSetLang={setLang}
        onBook={() => {
          playGlassTap();
          setIsBookOpen(true);
        }}
      />

      <main className="w-full flex flex-col">
        <HeroSection
          lang={lang}
          onBook={() => {
            playGlassTap();
            setIsBookOpen(true);
          }}
          onScrollToFootage={scrollToFootage}
        />

        <LivePerformanceShowcase
          lang={lang}
          onBook={() => {
            playGlassTap();
            setIsBookOpen(true);
          }}
        />

        <EventFormatsShowcase
          t={t}
          onBook={() => {
            playGlassTap();
            setIsBookOpen(true);
          }}
        />

        <SoundPhilosophySection lang={lang} />

        <TechRiderShowcase
          lang={lang}
          onOpenSpec={() => {
            playGlassTap();
            setIsSpecOpen(true);
          }}
        />

        <VenuesShowcase t={t} />

        <PricingShowcase
          t={t}
          onBook={() => {
            playGlassTap();
            setIsBookOpen(true);
          }}
          onSpec={() => {
            playGlassTap();
            setIsSpecOpen(true);
          }}
        />

        <ReviewsShowcase lang={lang} />

        <FaqShowcase lang={lang} />

        <SiteFooter
          lang={lang}
          isActive={true}
          onBook={() => {
            playGlassTap();
            setIsBookOpen(true);
          }}
          onTop={scrollToTop}
        />
      </main>

      <AnimatePresence>
        {isBookOpen && (
          <ReservationModal
            isOpen={isBookOpen}
            onClose={() => setIsBookOpen(false)}
            lang={lang}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSpecOpen && (
          <SpecOverlay
            isOpen={isSpecOpen}
            onClose={() => setIsSpecOpen(false)}
            lang={lang}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
