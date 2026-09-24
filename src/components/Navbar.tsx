import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Disc } from 'lucide-react';
import { playGlassTap, playRotaryClick } from './AudioPlayer';

type Lang = 'en' | 'cs' | 'ru';

type NavbarProps = {
  lang: Lang;
  onSetLang: (l: Lang) => void;
  onBook: () => void;
};

export default function Navbar({ lang, onSetLang, onBook }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = {
    en: [
      { label: 'Live Footage', href: '#live-footage' },
      { label: 'Event Formats', href: '#formats' },
      { label: 'Tech Rider', href: '#tech-rider' },
      { label: 'Venues', href: '#venues' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Reviews', href: '#reviews' },
      { label: 'FAQ', href: '#faq' },
    ],
    cs: [
      { label: 'Záznamy', href: '#live-footage' },
      { label: 'Formáty', href: '#formats' },
      { label: 'Tech Rider', href: '#tech-rider' },
      { label: 'Kluby', href: '#venues' },
      { label: 'Ceník', href: '#pricing' },
      { label: 'Recenze', href: '#reviews' },
      { label: 'FAQ', href: '#faq' },
    ],
    ru: [
      { label: 'Видео лайв', href: '#live-footage' },
      { label: 'Форматы', href: '#formats' },
      { label: 'Райдер', href: '#tech-rider' },
      { label: 'Площадки', href: '#venues' },
      { label: 'Тарифы', href: '#pricing' },
      { label: 'Отзывы', href: '#reviews' },
      { label: 'FAQ', href: '#faq' },
    ],
  }[lang];

  const bookLabel = {
    en: 'Book Performance',
    cs: 'Poptat vystoupení',
    ru: 'Забронировать',
  }[lang];

  const scrollToHref = (href: string) => {
    playGlassTap();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-xl'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between gap-4">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex flex-col group cursor-pointer"
        >
          <span className="font-serif text-xl sm:text-2xl font-light text-white tracking-[0.14em] leading-none group-hover:text-[#ff7849] transition-colors">
            BECKERMAN
          </span>
          <span className="font-mono text-[6.5px] sm:text-[7.5px] text-[#ff7849] tracking-[0.25em] uppercase font-semibold mt-1">
            PRAGUE // DJ & SOUND ARCHITECT
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => scrollToHref(item.href)}
              className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center border border-white/15 rounded-sm p-0.5 bg-black/40">
            {(['en', 'cs', 'ru'] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => {
                  playRotaryClick();
                  onSetLang(l);
                }}
                className={`px-2 py-1 font-mono text-[8px] uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                  lang === l
                    ? 'bg-white text-black font-semibold'
                    : 'text-white/40 hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => {
              playGlassTap();
              onBook();
            }}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-white text-black hover:bg-[#ff7849] hover:text-white font-mono text-[9px] tracking-widest uppercase transition-all duration-300 rounded-sm cursor-pointer font-medium"
          >
            <span>{bookLabel}</span>
            <ArrowRight size={11} />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden px-2 py-1 rounded-sm text-white/80 hover:text-white border border-white/15 bg-black/40 cursor-pointer flex items-center justify-center min-w-[32px] min-h-[22px]"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={12} /> : <Menu size={12} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-black/95 border-b border-white/15 p-6 backdrop-blur-xl flex flex-col gap-4 animate-in fade-in duration-200">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => scrollToHref(item.href)}
              className="text-left font-mono text-xs tracking-[0.2em] uppercase text-white/80 hover:text-[#ff7849] py-2 border-b border-white/5"
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onBook();
            }}
            className="mt-2 w-full py-3 bg-[#ff7849] text-white font-mono text-xs tracking-widest uppercase rounded-sm flex items-center justify-center gap-2 cursor-pointer font-medium"
          >
            <span>{bookLabel}</span>
            <ArrowRight size={13} />
          </button>
        </div>
      )}
    </header>
  );
}
