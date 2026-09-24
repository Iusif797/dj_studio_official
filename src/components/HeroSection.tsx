import { ArrowRight, Play, Disc, Calendar, ShieldCheck, MapPin } from 'lucide-react';
import { playGlassTap } from './AudioPlayer';

type Lang = 'en' | 'cs' | 'ru';

type HeroSectionProps = {
  lang: Lang;
  onBook: () => void;
  onScrollToFootage: () => void;
};

export default function HeroSection({ lang, onBook, onScrollToFootage }: HeroSectionProps) {
  const content = {
    en: {
      tag: 'PRAGUE // SOUND ARCHITECT & CLUB RESIDENT',
      title1: 'DJ BECKERMAN',
      title2: 'ELEVATING THE NIGHT.',
      desc: 'Sophisticated electronic soundscapes for premier clubs, luxury private gatherings, and festival stages across Prague and Europe.',
      btnBook: 'Request a Date',
      btnWatch: 'Watch Live Footage',
      metricEvents: '120+ Events',
      metricEventsLabel: 'Club & Corporate Shows',
      metricStyle: 'Melodic & Tech',
      metricStyleLabel: 'Electronic Signature',
      metricLoc: 'Prague / Europe',
      metricLocLabel: 'Touring & Residencies',
    },
    cs: {
      tag: 'PRAHA // HUDEBNÍ ARCHITEKT & KLUBOVÝ REZIDENT',
      title1: 'DJ BECKERMAN',
      title2: 'NOVÁ ÚROVEŇ NOCI.',
      desc: 'Sofistikovaná elektronická hudba pro přední kluby, privátní akce a festivalové stage v Praze i po celé Evropě.',
      btnBook: 'Poptat termín',
      btnWatch: 'Přehrát záznamy',
      metricEvents: '120+ Akcí',
      metricEventsLabel: 'Klubová & firemní vystoupení',
      metricStyle: 'Melodic & Tech',
      metricStyleLabel: 'Hudební rukopis',
      metricLoc: 'Praha / Evropa',
      metricLocLabel: 'Rezidence a tour',
    },
    ru: {
      tag: 'ПРАГА // ЗВУКОВОЙ АРХИТЕКТОР И РЕЗИДЕНТ',
      title1: 'DJ BECKERMAN',
      title2: 'НОВЫЙ УРОВЕНЬ НОЧИ.',
      desc: 'Премиальный электронный звук для флагманских клубов, закрытых частных событий и масштабных фестивалей в Праге и Европе.',
      btnBook: 'Запросить дату',
      btnWatch: 'Смотреть живой сет',
      metricEvents: '120+ Сетов',
      metricEventsLabel: 'Клубы и приватные события',
      metricStyle: 'Melodic & Tech',
      metricStyleLabel: 'Авторский саунд',
      metricLoc: 'Прага / Европа',
      metricLocLabel: 'Туры и резиденции',
    },
  }[lang];

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/videos/performance-booth-poster.jpg"
          className="w-full h-full object-cover opacity-20 scale-105 filter blur-[2px]"
          src="/videos/performance-booth.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#050505_85%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-6 sm:gap-8">
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-white/10 bg-black/60 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#ff7849] animate-ping" />
          <span className="font-mono text-[8px] sm:text-[9px] tracking-[0.25em] text-[#ff7849] uppercase font-semibold">
            {content.tag}
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-light text-white tracking-tight leading-[0.9]">
            {content.title1}
          </h1>
          <p className="font-serif text-2xl sm:text-4xl md:text-5xl font-light italic text-[#ff7849] tracking-wide">
            {content.title2}
          </p>
        </div>

        <p className="max-w-2xl text-xs sm:text-sm md:text-base text-white/60 font-light leading-relaxed">
          {content.desc}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
          <button
            type="button"
            onClick={() => {
              playGlassTap();
              onBook();
            }}
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-black hover:bg-[#ff7849] hover:text-white font-mono text-[9px] sm:text-[10px] tracking-widest uppercase transition-all duration-300 rounded-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95"
          >
            <Calendar size={13} />
            <span>{content.btnBook}</span>
            <ArrowRight size={13} />
          </button>

          <button
            type="button"
            onClick={() => {
              playGlassTap();
              onScrollToFootage();
            }}
            className="w-full sm:w-auto px-7 py-3.5 border border-white/20 hover:border-white bg-black/40 hover:bg-white/10 text-white font-mono text-[9px] sm:text-[10px] tracking-widest uppercase transition-all duration-300 rounded-sm flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <Play size={13} className="text-[#ff7849]" />
            <span>{content.btnWatch}</span>
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:gap-12 pt-10 sm:pt-14 border-t border-white/10 w-full max-w-3xl">
          <div className="flex flex-col items-center">
            <span className="font-serif text-xl sm:text-2xl md:text-3xl text-white font-light">
              {content.metricEvents}
            </span>
            <span className="font-mono text-[7px] sm:text-[8px] text-white/40 uppercase tracking-widest mt-1 text-center">
              {content.metricEventsLabel}
            </span>
          </div>
          <div className="flex flex-col items-center border-x border-white/10 px-2">
            <span className="font-serif text-xl sm:text-2xl md:text-3xl text-[#ff7849] font-medium">
              {content.metricStyle}
            </span>
            <span className="font-mono text-[7px] sm:text-[8px] text-white/40 uppercase tracking-widest mt-1 text-center">
              {content.metricStyleLabel}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-xl sm:text-2xl md:text-3xl text-white font-light">
              {content.metricLoc}
            </span>
            <span className="font-mono text-[7px] sm:text-[8px] text-white/40 uppercase tracking-widest mt-1 text-center">
              {content.metricLocLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
