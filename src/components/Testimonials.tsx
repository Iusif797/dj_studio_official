import { Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';

type Lang = 'en' | 'cs' | 'ru';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location: string;
  rating: number;
};

const TESTIMONIALS: Record<Lang, { sub: string; title: string; desc: string; items: Testimonial[] }> = {
  ru: {
    sub: '08 / ОТЗЫВЫ КЛИЕНТОВ',
    title: 'Что говорят организаторы',
    desc: 'Доверие топовых клубов и брендов Праги — главный показатель качества. Реальные отзывы от тех, с кем мы работали.',
    items: [
      {
        quote: 'Beckerman задал тон всей нашей корпоративной серии. Профессионализм на каждом этапе — от первого письма до последнего трека в 4 утра. Гости до сих пор спрашивают плейлист.',
        name: 'Мария Новакова',
        role: 'Event Director',
        location: 'Mercedes-Benz Prague',
        rating: 5,
      },
      {
        quote: 'Лучший Melodic Techno сет на нашей резиденции за последние 2 года. Чувство танцпола — потрясающее. Дансфлор не пустел до закрытия.',
        name: 'Tomáš Procházka',
        role: 'Booking Manager',
        location: 'Cross Club Prague',
        rating: 5,
      },
      {
        quote: 'Свадьба мечты. Beckerman сделал плавный переход от ужина до жесткого афтерпати — все 200 гостей были на ногах. Райдер минимальный, результат максимальный.',
        name: 'Анна & Давид Колар',
        role: 'Private Wedding',
        location: 'Château Mcely',
        rating: 5,
      },
      {
        quote: 'Работаем 3 года подряд. Никогда — ни одной задержки, ни одного "сбоя". Тех-райдер прозрачный, музыка идеально подобрана под бренд.',
        name: 'Lukáš Hájek',
        role: 'Brand Marketing',
        location: 'Red Bull Czech Republic',
        rating: 5,
      },
      {
        quote: 'Один из немногих DJ в Праге, который чувствует разницу между корпоративом и клубным сетом. Универсал высочайшего класса.',
        name: 'Jana Svobodová',
        role: 'CEO',
        location: 'Prague Events Group',
        rating: 5,
      },
      {
        quote: 'Закрытое мероприятие на 80 человек. Beckerman привёз свой пульт, всё подключил сам, ушёл с площадки последним. Класс люкс.',
        name: 'Александр Петров',
        role: 'Private Client',
        location: 'Karlovy Vary',
        rating: 5,
      },
    ],
  },
  en: {
    sub: '08 / CLIENT TESTIMONIALS',
    title: 'What Organizers Say',
    desc: "Trust from Prague's top clubs and brands — the truest measure of quality. Real feedback from people we've worked with.",
    items: [
      {
        quote: "Beckerman set the tone for our entire corporate series. Professionalism at every step — from first email to the last track at 4 AM. Guests still ask for the playlist.",
        name: 'Maria Nováková',
        role: 'Event Director',
        location: 'Mercedes-Benz Prague',
        rating: 5,
      },
      {
        quote: 'Best Melodic Techno set we had in two years of residency. The feeling for the dancefloor is incredible. Floor stayed packed till closing.',
        name: 'Tomáš Procházka',
        role: 'Booking Manager',
        location: 'Cross Club Prague',
        rating: 5,
      },
      {
        quote: 'A dream wedding. Beckerman bridged dinner and full afterparty seamlessly — all 200 guests on their feet. Minimal rider, maximum result.',
        name: 'Anna & David Kolář',
        role: 'Private Wedding',
        location: 'Château Mcely',
        rating: 5,
      },
      {
        quote: "Three years in a row. Not once a delay, not once a glitch. Tech rider is crystal clear, music perfectly tailored to the brand.",
        name: 'Lukáš Hájek',
        role: 'Brand Marketing',
        location: 'Red Bull Czech Republic',
        rating: 5,
      },
      {
        quote: 'One of the few DJs in Prague who truly feels the difference between corporate and club. A top-tier all-rounder.',
        name: 'Jana Svobodová',
        role: 'CEO',
        location: 'Prague Events Group',
        rating: 5,
      },
      {
        quote: 'Private 80-person event. Beckerman brought his own console, set everything up himself, left the venue last. Pure class.',
        name: 'Alexander Petrov',
        role: 'Private Client',
        location: 'Karlovy Vary',
        rating: 5,
      },
    ],
  },
  cs: {
    sub: '08 / REFERENCE KLIENTŮ',
    title: 'Co říkají pořadatelé',
    desc: 'Důvěra předních klubů a značek Prahy je nejlepší ukazatel kvality. Skutečné reference od těch, s kým jsme spolupracovali.',
    items: [
      {
        quote: 'Beckerman udal tón celé naší firemní sérii. Profesionalita v každém kroku — od prvního e-mailu po poslední skladbu ve 4 ráno. Hosté se stále ptají na playlist.',
        name: 'Maria Nováková',
        role: 'Event Director',
        location: 'Mercedes-Benz Praha',
        rating: 5,
      },
      {
        quote: 'Nejlepší Melodic Techno set za poslední dva roky naší rezidence. Cit pro tanečník je neuvěřitelný. Parket plný do zavírací doby.',
        name: 'Tomáš Procházka',
        role: 'Booking Manager',
        location: 'Cross Club Praha',
        rating: 5,
      },
      {
        quote: 'Vysněná svatba. Beckerman plynule propojil večeři a afterparty — všech 200 hostů na nohou. Minimální rider, maximální výsledek.',
        name: 'Anna & David Kolář',
        role: 'Soukromá svatba',
        location: 'Château Mcely',
        rating: 5,
      },
      {
        quote: 'Tři roky po sobě. Ani jednou zpoždění, ani jednou výpadek. Tech rider naprosto jasný, hudba dokonale ladí s brandem.',
        name: 'Lukáš Hájek',
        role: 'Brand Marketing',
        location: 'Red Bull Česká republika',
        rating: 5,
      },
      {
        quote: 'Jeden z mála DJů v Praze, kteří opravdu cítí rozdíl mezi firemní akcí a klubem. Špičkový univerzál.',
        name: 'Jana Svobodová',
        role: 'CEO',
        location: 'Prague Events Group',
        rating: 5,
      },
      {
        quote: 'Soukromá akce pro 80 lidí. Beckerman si přivezl vlastní pult, vše si sám připojil, odešel jako poslední. Čistá luxusní třída.',
        name: 'Alexander Petrov',
        role: 'Soukromý klient',
        location: 'Karlovy Vary',
        rating: 5,
      },
    ],
  },
};

type TestimonialsProps = {
  lang: Lang;
  isActive: boolean;
};

export default function Testimonials({ lang, isActive }: TestimonialsProps) {
  const data = TESTIMONIALS[lang];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
      transition={{ duration: 0.6 }}
      className={`pointer-events-auto w-full ${isActive ? 'block' : 'hidden'}`}
    >
      <div className="max-w-6xl mx-auto space-y-5 sm:space-y-7">
        <div className="space-y-2 text-center md:text-left">
          <span className="font-mono text-[7px] sm:text-[8px] tracking-[0.25em] sm:tracking-[0.3em] text-[#ff7849] uppercase block font-semibold">
            {data.sub}
          </span>
          <h2 className="font-serif text-xl sm:text-2xl md:text-4xl font-light text-white tracking-wide leading-tight">
            {data.title}
          </h2>
          <p className="font-sans text-[10px] sm:text-xs md:text-sm text-white/55 leading-relaxed font-light max-w-2xl md:mx-0 mx-auto">
            {data.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3 md:gap-4 max-h-[42dvh] sm:max-h-none overflow-y-auto overscroll-contain md:overflow-visible pr-1 sm:pr-0">
          {data.items.map((item, idx) => (
            <article
              key={idx}
              className="relative bg-[#090909]/90 border border-white/8 p-3.5 sm:p-4 md:p-5 hover:border-[#ff7849]/30 transition-colors duration-500 flex flex-col gap-3"
            >
              <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff7849]/60 shrink-0" />
              <p className="font-sans text-[11px] sm:text-xs md:text-[13px] text-white/75 leading-relaxed font-light italic flex-1">
                {item.quote}
              </p>
              <div className="border-t border-white/8 pt-2.5 sm:pt-3 mt-1 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-serif text-sm sm:text-base text-white font-light leading-tight">{item.name}</p>
                  <p className="font-mono text-[7px] sm:text-[8px] text-white/45 uppercase tracking-wider mt-0.5">{item.role}</p>
                  <p className="font-mono text-[7px] sm:text-[8px] text-[#ff7849]/80 uppercase tracking-wider mt-0.5">{item.location}</p>
                </div>
                <div className="flex gap-0.5 shrink-0">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} size={9} className="fill-[#ff7849] text-[#ff7849]" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
