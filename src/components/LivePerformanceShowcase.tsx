import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Radio, Headphones } from 'lucide-react';
import { playGlassTap, playRotaryClick } from './AudioPlayer';

type Lang = 'en' | 'cs' | 'ru';

type LivePerformanceShowcaseProps = {
  lang: Lang;
  onBook: () => void;
};

interface VideoItem {
  id: string;
  badge: string;
  title: Record<Lang, string>;
  subtitle: Record<Lang, string>;
  src: string;
  poster: string;
  tag: string;
}

const VIDEOS: VideoItem[] = [
  {
    id: 'booth',
    badge: '01 // LIVE CLUB BOOTH',
    title: {
      en: 'DJ Beckerman Live in the Mix',
      cs: 'DJ Beckerman živě za pultem',
      ru: 'DJ Beckerman живой сет за пультом',
    },
    subtitle: {
      en: 'Real club atmosphere, peak-time groove, and direct connection with the dancefloor.',
      cs: 'Autentická klubová atmosféra, peak-time energie a přímé napojení na taneční parket.',
      ru: 'Атмосфера пражского клуба, пиковая энергетика сета и драйв полного танцпола.',
    },
    src: '/videos/performance-booth.mp4',
    poster: '/videos/performance-booth-poster.jpg',
    tag: '3x CDJ-2000 · CLUB PRIMETIME',
  },
  {
    id: 'gear',
    badge: '02 // PIONEER PRO CONSOLE',
    title: {
      en: 'Precision DJM & CDJ Control',
      cs: 'Přesné ovládání DJM a CDJ',
      ru: 'Прецизионный контроль DJM и CDJ',
    },
    subtitle: {
      en: 'Tactile jog wheel control, isolated EQ sweeps, and flawless transitions in flight case.',
      cs: 'Taktilní ovládání jogů, frekvenční izolátory a plynulé přechody v profi flight casu.',
      ru: 'Тактильный контроль джогов, изолированные частотные свитчи и чистый аналоговый тракт.',
    },
    src: '/videos/performance-gear.mp4',
    poster: '/videos/performance-gear-poster.jpg',
    tag: 'PIONEER DJM-V10 · FLIGHT CASE RIG',
  },
];

export default function LivePerformanceShowcase({ lang, onBook }: LivePerformanceShowcaseProps) {
  const [selectedId, setSelectedId] = useState<string>('booth');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<string>('00:00');
  const [duration, setDuration] = useState<string>('00:00');
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeVideo = VIDEOS.find((v) => v.id === selectedId) || VIDEOS[0];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [selectedId]);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    const current = video.currentTime;
    const total = video.duration;
    setProgress((current / total) * 100);

    const format = (sec: number) => {
      const m = Math.floor(sec / 60);
      const s = Math.floor(sec % 60);
      return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    };

    setCurrentTime(format(current));
    setDuration(format(total));
  };

  const togglePlay = () => {
    playGlassTap();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    playRotaryClick();
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const toggleFullscreen = () => {
    playGlassTap();
    const video = videoRef.current;
    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  };

  const labels = {
    en: {
      eyebrow: 'REAL LIVE FOOTAGE',
      heading: 'Live Performance in Action',
      desc: 'No mockups. Authentic live footage from Beckerman’s club residencies and private sessions across Prague.',
      unmute: 'Turn on real audio',
      muted: 'Live Sound Off',
      unmuted: 'Live Sound On',
      bookThis: 'Book This Show',
    },
    cs: {
      eyebrow: 'SKUTEČNÉ ZÁZNAMY Z AKCÍ',
      heading: 'Živé vystoupení v akci',
      desc: 'Žádné makety. Autentické videozáznamy z rezidencí a privátních eventů Beckermana v Praze.',
      unmute: 'Zapnout reálný zvuk',
      muted: 'Zvuk vypnut',
      unmuted: 'Zvuk zapnut',
      bookThis: 'Poptat vystoupení',
    },
    ru: {
      eyebrow: 'РЕАЛЬНЫЕ КАДРЫ С ВЫСТУПЛЕНИЙ',
      heading: 'Живой перформанс в действии',
      desc: 'Никаких шаблонных картинок. Настоящие видеозаписи с клубных сетов и закрытых мероприятий DJ Beckerman в Праге.',
      unmute: 'Включить реальный звук',
      muted: 'Звук выключен',
      unmuted: 'Звук включен',
      bookThis: 'Забронировать дату',
    },
  }[lang];

  return (
    <section id="live-footage" className="w-full py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff7849] animate-pulse" />
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#ff7849] uppercase font-semibold">
              {labels.eyebrow}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
            {labels.heading}
          </h2>
          <p className="max-w-2xl text-xs sm:text-sm text-white/55 font-light leading-relaxed">
            {labels.desc}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {VIDEOS.map((item) => {
            const isCurrent = item.id === selectedId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  playRotaryClick();
                  setSelectedId(item.id);
                }}
                className={`px-4 py-2.5 rounded-sm font-mono text-[9px] tracking-wider uppercase transition-all duration-300 cursor-pointer border ${
                  isCurrent
                    ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.2)] font-medium'
                    : 'bg-black/40 text-white/60 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {item.badge}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-8 bg-[#0b0b0e] border border-white/10 rounded-sm overflow-hidden relative flex flex-col shadow-2xl">
          <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
            <video
              ref={videoRef}
              key={activeVideo.src}
              src={activeVideo.src}
              poster={activeVideo.poster}
              playsInline
              autoPlay
              loop
              muted={isMuted}
              preload="metadata"
              onTimeUpdate={handleTimeUpdate}
              className="w-full h-full object-cover"
            />

            <div className="absolute top-4 left-4 flex items-center gap-2 z-20 pointer-events-none">
              <span className="px-2.5 py-1 bg-black/80 backdrop-blur-md border border-white/15 rounded-sm font-mono text-[8px] text-[#ff7849] tracking-widest uppercase">
                {activeVideo.tag}
              </span>
              {!isMuted && (
                <span className="flex items-center gap-1.5 px-2.5 py-1 bg-[#ff7849]/20 border border-[#ff7849]/50 rounded-sm font-mono text-[8px] text-white tracking-widest uppercase animate-pulse">
                  <Radio size={10} className="text-[#ff7849]" />
                  LIVE SET AUDIO
                </span>
              )}
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20 pointer-events-none" />

            <div className="absolute bottom-0 inset-x-0 p-3 sm:p-6 z-20 flex flex-col gap-3">
              <div
                className="w-full h-1 sm:h-1.5 bg-white/20 rounded-full cursor-pointer overflow-hidden group touch-manipulation"
                onClick={(e) => {
                  const video = videoRef.current;
                  if (!video || !video.duration) return;
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clientX = 'touches' in e ? (e as any).touches[0]?.clientX : (e as any).clientX;
                  const x = clientX ?? (e as any).clientX;
                  const pos = (x - rect.left) / rect.width;
                  video.currentTime = Math.max(0, Math.min(1, pos)) * video.duration;
                }}
                onTouchStart={(e) => {
                  const video = videoRef.current;
                  if (!video || !video.duration) return;
                  const rect = e.currentTarget.getBoundingClientRect();
                  const pos = (e.touches[0].clientX - rect.left) / rect.width;
                  video.currentTime = Math.max(0, Math.min(1, pos)) * video.duration;
                }}
              >
                <div className="h-full bg-[#ff7849] transition-all duration-100" style={{ width: `${progress}%` }} />
              </div>

              <div className="flex items-center justify-between gap-2 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 flex items-center justify-center transition-all cursor-pointer shrink-0"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause size={15} /> : <Play size={15} className="ml-0.5" />}
                  </button>

                  <button
                    type="button"
                    onClick={toggleSound}
                    className={`px-3 sm:px-3.5 py-2.5 sm:py-2 rounded-sm border font-mono text-[8px] sm:text-[9px] tracking-wider uppercase flex items-center gap-1.5 sm:gap-2 transition-all cursor-pointer shrink-0 min-h-11 ${
                      !isMuted
                        ? 'bg-[#ff7849] text-white border-[#ff7849]'
                        : 'bg-black/60 text-white/80 border-white/20 hover:border-white/50'
                    }`}
                  >
                    {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
                    <span className="hidden xs:inline sm:inline">{isMuted ? labels.unmute : labels.unmuted}</span>
                    <span className="xs:hidden sm:hidden">{isMuted ? 'Звук' : 'Вкл'}</span>
                  </button>

                  <span className="font-mono text-[9px] text-white/60 tracking-wider hidden sm:inline">
                    {currentTime} / {duration}
                  </span>
                  <span className="font-mono text-[8px] text-white/60 tracking-wider sm:hidden">
                    {currentTime}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={toggleFullscreen}
                  className="w-11 h-11 sm:w-9 sm:h-9 rounded-sm bg-black/60 hover:bg-white/10 text-white/70 hover:text-white border border-white/15 flex items-center justify-center transition-all cursor-pointer shrink-0"
                  aria-label="Fullscreen"
                >
                  <Maximize2 size={14} />
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 bg-[#0e0e12] border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="font-serif text-lg sm:text-xl text-white font-normal">
                {activeVideo.title[lang]}
              </h3>
              <p className="text-xs text-white/50 font-light">
                {activeVideo.subtitle[lang]}
              </p>
            </div>
            <button
              type="button"
              onClick={onBook}
              className="px-5 py-2.5 bg-white text-black hover:bg-[#ff7849] hover:text-white font-mono text-[9px] tracking-widest uppercase transition-all duration-300 rounded-sm shrink-0 cursor-pointer text-center"
            >
              {labels.bookThis}
            </button>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-4">
          {VIDEOS.map((item) => {
            const isCurrent = item.id === selectedId;
            return (
              <div
                key={item.id}
                onClick={() => {
                  playRotaryClick();
                  setSelectedId(item.id);
                }}
                className={`p-4 rounded-sm border transition-all duration-300 cursor-pointer flex flex-col gap-3 ${
                  isCurrent
                    ? 'bg-[#14141a] border-[#ff7849]/60 shadow-[0_0_20px_rgba(255,120,73,0.15)]'
                    : 'bg-[#0a0a0c] border-white/10 hover:border-white/25 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="relative aspect-video w-full rounded-sm overflow-hidden bg-black border border-white/10">
                  <img
                    src={item.poster}
                    alt={item.title[lang]}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <span className="w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white">
                      <Play size={12} className="ml-0.5" />
                    </span>
                  </div>
                  <span className="absolute top-2 left-2 px-1.5 py-0.5 bg-black/80 font-mono text-[7px] text-[#ff7849] uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-serif text-sm sm:text-base text-white font-light">
                    {item.title[lang]}
                  </h4>
                  <p className="text-[11px] text-white/50 font-light line-clamp-2">
                    {item.subtitle[lang]}
                  </p>
                </div>
              </div>
            );
          })}

          <div className="p-4 rounded-sm border border-white/10 bg-[#09090b] flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#ff7849]/10 border border-[#ff7849]/30 flex items-center justify-center text-[#ff7849] shrink-0">
              <Headphones size={14} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-mono text-[8px] tracking-wider uppercase text-white/80 font-medium">
                HQ SOUND CAPTURE
              </p>
              <p className="text-[10px] text-white/45 font-light">
                Direct Master Output · 24-bit 96kHz Lossless Capture
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
