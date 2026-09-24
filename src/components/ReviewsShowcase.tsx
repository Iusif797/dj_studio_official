import { Quote, Star } from 'lucide-react';

type Lang = 'en' | 'cs' | 'ru';

type ReviewsShowcaseProps = {
  lang: Lang;
};

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location: string;
  rating: number;
};

const TESTIMONIALS: Record<Lang, { sub: string; title: string; desc: string; items: Testimonial[] }> = {
  ru: {
    sub: '07 / ОТЗЫВЫ КЛИЕНТОВ',
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
  cs: {
    sub: '07 / RECENZE KLIENTŮ',
    title: 'Co říkají organizátoři',
    desc: 'Důvěra předních pražských klubů a značek je pro nás klíčová. Skutečná hodnocení od lidí, se kterými spolupracujeme.',
    items: [
      {
        quote: 'Beckerman udal tón celé naší firemní sérii. Profesionální přístup od prvního mailu po poslední track ve 4 ráno. Hosté se stále ptají na playlist.',
        name: 'Marie Nováková',
        role: 'Event Director',
        location: 'Mercedes-Benz Prague',
        rating: 5,
      },
      {
        quote: 'Nejlepší Melodic Techno set na naší rezidenci za poslední 2 roky. Neuvěřitelný cit pro parket — plno až do zavíračky.',
        name: 'Tomáš Procházka',
        role: 'Booking Manager',
        location: 'Cross Club Prague',
        rating: 5,
      },
      {
        quote: 'Svatba snů. Plynulý přechod od ambientní večeře k energické afterparty — všech 200 hostů tančilo. Minimální rider, maximální výsledek.',
        name: 'Anna & David Kolářovi',
        role: 'Private Wedding',
        location: 'Château Mcely',
        rating: 5,
      },
      {
        quote: 'Spolupracujeme 3 roky. Žádné zpoždění, stoprocentní spolehlivost. Technický rider transparentní, dramaturgie přesně na míru značce.',
        name: 'Lukáš Hájek',
        role: 'Brand Marketing',
        location: 'Red Bull Czech Republic',
        rating: 5,
      },
      {
        quote: 'Jeden z mála DJů v Praze, který přesně vnímá rozdíl mezi firemní akcí a klubovou nocí. Špičkový univerzál.',
        name: 'Jana Svobodová',
        role: 'CEO',
        location: 'Prague Events Group',
        rating: 5,
      },
      {
        quote: 'Privátní akce pro 80 lidí. Přivezl vlastní pult, vše zapojil, odcházel poslední. Prvotřídní servis.',
        name: 'Alexandr Petrov',
        role: 'Private Client',
        location: 'Karlovy Vary',
        rating: 5,
      },
    ],
  },
  en: {
    sub: '07 / CLIENT TESTIMONIALS',
    title: 'Trusted by Promoters & Brands',
    desc: 'From Prague’s underground temples to European corporate galas — real feedback from event directors and private hosts.',
    items: [
      {
        quote: 'Beckerman set the standard for our entire brand series. Impeccable professionalism from the first call to the closing track at 4 AM.',
        name: 'Maria Novakova',
        role: 'Event Director',
        location: 'Mercedes-Benz Prague',
        rating: 5,
      },
      {
        quote: 'Best Melodic Techno performance on our residency in two seasons. Exceptional crowd intuition — floor stayed packed until curfew.',
        name: 'Tomáš Procházka',
        role: 'Booking Manager',
        location: 'Cross Club Prague',
        rating: 5,
      },
      {
        quote: 'A dream wedding. Seamless transition from cocktail ambient to an ecstatic afterparty. Low technical footprint, huge sonic impact.',
        name: 'Anna & David Kolar',
        role: 'Private Wedding',
        location: 'Château Mcely',
        rating: 5,
      },
      {
        quote: 'Three years of steady partnership. Zero issues, flawless rider compliance, and musical curation that aligns perfectly with our brand energy.',
        name: 'Lukáš Hájek',
        role: 'Brand Marketing',
        location: 'Red Bull Czech Republic',
        rating: 5,
      },
      {
        quote: 'One of the few DJs in Prague who truly respects the dynamic difference between high-end corporate galas and club sets.',
        name: 'Jana Svobodová',
        role: 'CEO',
        location: 'Prague Events Group',
        rating: 5,
      },
      {
        quote: 'Private villa gathering for 80 guests. Brought his own custom console, handled all sound checks, stayed until the final guest left. Pure class.',
        name: 'Alexander Petrov',
        role: 'Private Host',
        location: 'Karlovy Vary',
        rating: 5,
      },
    ],
  },
};

export default function ReviewsShowcase({ lang }: ReviewsShowcaseProps) {
  const data = TESTIMONIALS[lang];

  return (
    <section id="reviews" className="w-full py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="space-y-2 mb-12 text-center max-w-3xl mx-auto">
        <span className="font-mono text-[9px] tracking-[0.3em] text-[#ff7849] uppercase font-semibold">
          {data.sub}
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
          {data.title}
        </h2>
        <p className="text-xs sm:text-sm text-white/55 font-light leading-relaxed">
          {data.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.items.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-sm border border-white/10 bg-[#0a0a0d] hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1 text-[#ff7849]">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} size={11} fill="currentColor" />
                  ))}
                </div>
                <Quote size={16} className="text-white/20" />
              </div>

              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed mb-6">
                “{item.quote}”
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <p className="font-serif text-base text-white font-normal">
                {item.name}
              </p>
              <div className="flex items-center justify-between text-[10px] text-white/40 font-mono mt-0.5">
                <span>{item.role}</span>
                <span className="text-[#ff7849]">{item.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
