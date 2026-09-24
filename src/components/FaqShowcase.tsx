import { useState } from 'react';
import { Plus, Minus, MessageCircle, Mail } from 'lucide-react';
import { playGlassTap } from './AudioPlayer';

type Lang = 'en' | 'cs' | 'ru';

type FaqShowcaseProps = {
  lang: Lang;
};

type Item = { q: string; a: string };

const FAQ_DATA: Record<
  Lang,
  {
    sub: string;
    title: string;
    desc: string;
    items: Item[];
    ctaTitle: string;
    ctaDesc: string;
    ctaTelegram: string;
    ctaEmail: string;
  }
> = {
  ru: {
    sub: '08 / ЧАСТЫЕ ВОПРОСЫ',
    title: 'Всё, что нужно знать',
    desc: 'Ответы на типовые вопросы организаторов клубных и частных мероприятий. Если не нашли свой — пишите напрямую.',
    items: [
      {
        q: 'Сколько длится стандартный сет?',
        a: 'Клубный сет — 2-4 часа без перерыва. Корпоративный формат — от 3 до 6 часов с возможностью разделения на блоки (welcome / dinner / dancefloor). Свадьбы — до 8 часов с плавными переходами под программу вечера.',
      },
      {
        q: 'Везёте своё оборудование?',
        a: 'Да. Базовый райдер: Pioneer DJM-V10 + 3× CDJ-2000, мониторы DJ booth, профессиональные кабели. Для частных мероприятий привожу всё сам, для клубов — работаю с их штатным оборудованием по согласованному райдеру.',
      },
      {
        q: 'Работаете за пределами Праги?',
        a: 'Да, регулярно: Карловы Вары, Брно, Вена, Будапешт, Берлин, Мюнхен. По всей Европе — без ограничений. Логистика и проживание включены в смету выезда.',
      },
      {
        q: 'Как происходит оплата и бронирование?',
        a: 'Депозит 30% при подписании договора фиксирует дату. Остаток — за 7 дней до мероприятия. Принимаем перевод на счёт (CZK / EUR), для частных клиентов возможна оплата картой или криптовалютой.',
      },
      {
        q: 'Можно ли выбрать конкретные треки или жанры?',
        a: 'Конечно. Перед мероприятием обсуждаем мудборд, must-play и do-not-play списки. Для свадеб делаем кастомный плейлист первого танца. Стилистика гибкая: от deep house до hard techno в рамках одного вечера.',
      },
      {
        q: 'Что если я отменю мероприятие?',
        a: 'За 30+ дней — полный возврат депозита. За 14-30 дней — удерживаем 50%. Менее 14 дней — депозит остаётся. Все условия чётко прописаны в договоре, без скрытых пунктов.',
      },
    ],
    ctaTitle: 'Не нашли ответ?',
    ctaDesc: 'Свяжитесь напрямую для консультации под формат вашего мероприятия.',
    ctaTelegram: 'Написать в Telegram',
    ctaEmail: 'Отправить email',
  },
  cs: {
    sub: '08 / ČASTÉ DOTAZY',
    title: 'Vše, co potřebujete vědět',
    desc: 'Odpovědi na nejčastější dotazy pořadatelů klubových i soukromých akcí. V případě dalších dotazů nás kontaktujte.',
    items: [
      {
        q: 'Jak dlouho trvá standardní vystoupení?',
        a: 'Klubový set trvá 2-4 hodiny bez přerušení. Firemní event 3-6 hodin rozdělených do bloků (welcome, večeře, párty). Svatby až 8 hodin s plynulou gradací.',
      },
      {
        q: 'Máte vlastní techniku?',
        a: 'Ano, plná profesionální sestava: Pioneer DJM-V10 + 3× CDJ-2000, pódiové monitory a kabeláž. Pro soukromé akce zajistím kompletní ozvučení.',
      },
      {
        q: 'Hrajete i mimo Prahu?',
        a: 'Pravidelně: Brno, Karlovy Vary, Vídeň, Berlín, Mnichov i po celé Evropě. Doprava a ubytování jsou kalkulovány transparentně předem.',
      },
      {
        q: 'Jak probíhá rezervace a platba?',
        a: 'Rezervační záloha 30% při potvrzení termínu. Doplatek 7 dní před akcí. Faktura v CZK nebo EUR, možnost bezhotovostní platby.',
      },
      {
        q: 'Lze přizpůsobit hudební dramaturgii?',
        a: 'Rozhodně. Před akcí ladíme hudební směr i preferované styly. Od lounge a deep house až po energický peak-time techno.',
      },
      {
        q: 'Jaké jsou storno podmínky?',
        a: '30+ dní předem: vrácení 100% zálohy. 14-30 dní: vrácení 50%. Méně než 14 dní: záloha propadá. Vše transparentně ošetřeno smlouvou.',
      },
    ],
    ctaTitle: 'Máte další dotazy?',
    ctaDesc: 'Ozvěte se nám přímo a probereme specifika vaší události.',
    ctaTelegram: 'Napsat na Telegram',
    ctaEmail: 'Napsat e-mail',
  },
  en: {
    sub: '08 / FREQUENTLY ASKED QUESTIONS',
    title: 'Everything You Need to Know',
    desc: 'Clear answers for club promoters, corporate coordinators, and private hosts. Reach out directly for tailored requests.',
    items: [
      {
        q: 'How long is a standard DJ performance?',
        a: 'Club sets typically run 2 to 4 hours straight. Corporate formats span 3 to 6 hours with mood transitions (cocktail / lounge / peak dance). Weddings up to 8 hours.',
      },
      {
        q: 'Do you bring your own audio equipment?',
        a: 'Yes. Full flagship touring rig: Pioneer DJM-V10 + 3× CDJ-2000, booth nearfields, and studio cabling. Complete turn-key PA setup is available for private venues.',
      },
      {
        q: 'Do you perform outside Prague?',
        a: 'Regularly across Central & Western Europe (Vienna, Berlin, Budapest, Munich, Karlovy Vary). Travel & accommodation logistics are transparently itemized.',
      },
      {
        q: 'How does booking and payment work?',
        a: 'A 30% deposit upon contract signature locks the date. The remaining 70% is due 7 days prior to event date. Invoicing available in EUR or CZK.',
      },
      {
        q: 'Can we curate specific genres and track preferences?',
        a: 'Absolutely. A pre-event musical consultation ensures alignment on mood, tempo curves, and must-play / do-not-play guidelines.',
      },
      {
        q: 'What is your cancellation policy?',
        a: 'Full deposit refund if cancelled 30+ days prior. 50% refund between 14-30 days. Standard transparent cancellation terms in every booking contract.',
      },
    ],
    ctaTitle: 'Have custom requirements?',
    ctaDesc: 'Reach out directly to discuss technical details and date availability.',
    ctaTelegram: 'Chat on Telegram',
    ctaEmail: 'Send Email',
  },
};

export default function FaqShowcase({ lang }: FaqShowcaseProps) {
  const data = FAQ_DATA[lang];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    playGlassTap();
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-4xl mx-auto border-t border-white/10">
      <div className="space-y-2 mb-12 text-center">
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

      <div className="space-y-3 mb-12">
        {data.items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-sm border transition-colors duration-200 overflow-hidden ${
                isOpen ? 'bg-[#101014] border-white/20' : 'bg-[#08080a] border-white/10 hover:border-white/20'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer bg-transparent border-none"
              >
                <span className="font-serif text-base sm:text-lg text-white font-normal">
                  {item.q}
                </span>
                <span className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 shrink-0">
                  {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-white/60 font-light leading-relaxed border-t border-white/5">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="p-6 sm:p-8 rounded-sm border border-white/10 bg-[#0a0a0d] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <h3 className="font-serif text-xl text-white font-normal mb-1">{data.ctaTitle}</h3>
          <p className="text-xs text-white/50 font-light">{data.ctaDesc}</p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center sm:justify-end">
          <a
            href="https://t.me/beckerman979"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-sm border border-white/20 hover:border-[#ff7849] hover:text-[#ff7849] text-white font-mono text-[9px] uppercase tracking-wider flex items-center gap-2 transition-colors hover:bg-white/5"
          >
            <MessageCircle size={13} className="text-[#2AABEE]" />
            <span>{data.ctaTelegram}</span>
          </a>
          <a
            href="https://wa.me/420773975235"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-sm border border-[#25D366]/30 hover:border-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 text-white font-mono text-[9px] uppercase tracking-wider flex items-center gap-2 transition-colors"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12c0 2.112.549 4.1 1.515 5.833L.057 23.428a.5.5 0 0 0 .515.572l5.797-.947A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.87 9.87 0 0 1-5.03-1.373l-.361-.214-3.741.611.627-3.63-.235-.374A9.862 9.862 0 0 1 2.118 12c0-5.44 4.44-9.882 9.882-9.882 5.44 0 9.882 4.442 9.882 9.882 0 5.44-4.442 9.882-9.882 9.882z"/><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="white"/></svg>
            <span>WhatsApp</span>
          </a>
          <a
            href="mailto:usifmamedov5@gmail.com"
            className="px-4 py-2.5 rounded-sm bg-white text-black hover:bg-[#ff7849] hover:text-white font-mono text-[9px] uppercase tracking-wider flex items-center gap-2 transition-colors font-medium"
          >
            <Mail size={13} />
            <span>{data.ctaEmail}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
