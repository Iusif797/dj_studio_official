import { useState } from 'react';
import { Plus, Minus, MessageCircle, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Lang = 'en' | 'cs' | 'ru';

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
    sub: '11 / ЧАСТЫЕ ВОПРОСЫ',
    title: 'Всё, что нужно знать',
    desc: 'Ответы на типовые вопросы организаторов клубных и частных мероприятий. Если не нашли свой — пишите напрямую.',
    items: [
      {
        q: 'Сколько длится стандартный сет?',
        a: 'Клубный сет — 2-4 часа без перерыва. Корпоративный формат — от 3 до 6 часов с возможностью разделения на блоки (welcome / dinner / dancefloor). Свадьбы — до 8 часов с плавными переходами под программу вечера.',
      },
      {
        q: 'Везёте своё оборудование?',
        a: 'Да. Базовый райдер: Pioneer DJM-V10 + 3× CDJ-3000, мониторы DJ booth, профессиональные кабели. Для частных мероприятий привожу всё сам, для клубов — работаю с их штатным оборудованием по согласованному райдеру.',
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
      {
        q: 'Делаете живые стримы или запись сетов?',
        a: 'Да. Профессиональная запись через master out пульта в студийном качестве (WAV 24-bit). Стрим в Twitch / Mixcloud Live с многокамерным сетапом — обсуждается отдельно как доп. услуга.',
      },
      {
        q: 'Можно ли услышать миксы перед бронированием?',
        a: 'Безусловно. Архив сетов на SoundCloud и Mixcloud (ссылки внизу страницы). Для приватных клиентов — индивидуальный демо-микс под формат вашего мероприятия.',
      },
    ],
    ctaTitle: 'Не нашли ответ?',
    ctaDesc: 'Напишите напрямую — отвечаю в течение 2 часов.',
    ctaTelegram: 'Telegram',
    ctaEmail: 'Email',
  },
  en: {
    sub: '11 / FREQUENTLY ASKED QUESTIONS',
    title: 'Everything You Need to Know',
    desc: 'Answers to typical questions from club and private event organizers. If yours isn\'t here — message me directly.',
    items: [
      {
        q: 'How long is a standard set?',
        a: 'Club set — 2-4 hours non-stop. Corporate format — 3 to 6 hours, splittable into blocks (welcome / dinner / dancefloor). Weddings — up to 8 hours with seamless transitions matching the evening flow.',
      },
      {
        q: 'Do you bring your own gear?',
        a: 'Yes. Base rider: Pioneer DJM-V10 + 3× CDJ-3000, DJ booth monitors, premium cabling. For private events I bring everything myself; for clubs I work with their house gear under an agreed rider.',
      },
      {
        q: 'Do you work outside Prague?',
        a: 'Yes, regularly: Karlovy Vary, Brno, Vienna, Budapest, Berlin, Munich. Across Europe — no restrictions. Logistics and accommodation included in the travel quote.',
      },
      {
        q: 'How does payment and booking work?',
        a: '30% deposit on contract signing locks the date. Balance — 7 days before the event. Bank transfer (CZK / EUR); private clients can pay by card or crypto.',
      },
      {
        q: 'Can I request specific tracks or genres?',
        a: 'Of course. Before the event we discuss a moodboard, must-play and do-not-play lists. For weddings I prepare a custom first-dance playlist. Style is flexible — from deep house to hard techno in one night.',
      },
      {
        q: 'What if I cancel the event?',
        a: '30+ days — full deposit refund. 14-30 days — 50% retained. Less than 14 days — deposit forfeited. All conditions clearly written in contract, no hidden terms.',
      },
      {
        q: 'Do you offer live streams or set recordings?',
        a: 'Yes. Pro recording via master out in studio quality (WAV 24-bit). Twitch / Mixcloud Live streams with multi-camera setup — quoted separately as add-on.',
      },
      {
        q: 'Can I listen to mixes before booking?',
        a: 'Absolutely. Set archive on SoundCloud and Mixcloud (links at page bottom). For private clients — custom demo mix tailored to your event format.',
      },
    ],
    ctaTitle: "Didn't find your answer?",
    ctaDesc: 'Message me directly — I reply within 2 hours.',
    ctaTelegram: 'Telegram',
    ctaEmail: 'Email',
  },
  cs: {
    sub: '11 / ČASTÉ DOTAZY',
    title: 'Vše, co potřebujete vědět',
    desc: 'Odpovědi na typické dotazy pořadatelů klubových i soukromých akcí. Pokud nenajdete svůj, napište přímo.',
    items: [
      {
        q: 'Jak dlouhý je standardní set?',
        a: 'Klubový set — 2-4 hodiny bez přestávky. Firemní formát — 3 až 6 hodin, lze rozdělit na bloky (welcome / večeře / parket). Svatby — až 8 hodin s plynulými přechody podle programu večera.',
      },
      {
        q: 'Vozíte vlastní vybavení?',
        a: 'Ano. Základní rider: Pioneer DJM-V10 + 3× CDJ-3000, DJ monitory, profesionální kabeláž. Na soukromé akce vozím vše vlastní; v klubech pracuji s jejich technikou podle dohodnutého rideru.',
      },
      {
        q: 'Pracujete mimo Prahu?',
        a: 'Ano, pravidelně: Karlovy Vary, Brno, Vídeň, Budapešť, Berlín, Mnichov. Po celé Evropě — bez omezení. Doprava a ubytování zahrnuto v cestovní kalkulaci.',
      },
      {
        q: 'Jak probíhá platba a rezervace?',
        a: '30% záloha při podpisu smlouvy fixuje datum. Doplatek — 7 dní před akcí. Bankovní převod (CZK / EUR); soukromí klienti mohou platit kartou nebo kryptem.',
      },
      {
        q: 'Lze vybrat konkrétní skladby nebo žánry?',
        a: 'Samozřejmě. Před akcí probíráme moodboard, must-play a do-not-play seznamy. Pro svatby tvořím vlastní playlist prvního tance. Styl je flexibilní — od deep house po hard techno v jednu noc.',
      },
      {
        q: 'Co když akci zruším?',
        a: '30+ dní — plné vrácení zálohy. 14-30 dní — 50% zadržujeme. Méně než 14 dní — záloha propadá. Vše jasně ve smlouvě, žádné skryté podmínky.',
      },
      {
        q: 'Nabízíte živé streamy nebo nahrávání setů?',
        a: 'Ano. Profi nahrávka přes master out ve studiové kvalitě (WAV 24-bit). Twitch / Mixcloud Live streamy s multi-kamerovým setupem — kalkulujeme zvlášť jako doplněk.',
      },
      {
        q: 'Můžu si poslechnout mixy před rezervací?',
        a: 'Rozhodně. Archiv setů na SoundCloud a Mixcloud (odkazy v patičce). Pro soukromé klienty — demo mix na míru formátu vaší akce.',
      },
    ],
    ctaTitle: 'Nenašli jste odpověď?',
    ctaDesc: 'Napište přímo — odpovídám do 2 hodin.',
    ctaTelegram: 'Telegram',
    ctaEmail: 'Email',
  },
};

type FAQProps = {
  lang: Lang;
  isActive: boolean;
  variant?: 'scene' | 'living';
};

export default function FAQ({ lang, isActive, variant = 'scene' }: FAQProps) {
  const data = FAQ_DATA[lang];
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const isLiving = variant === 'living';
  const shellClass = isLiving
    ? 'pointer-events-auto w-full rounded-none border border-white/12 bg-black/78 shadow-[0_24px_80px_rgba(0,0,0,0.55)] p-4 sm:p-5 md:p-8 ring-1 ring-white/5'
    : `pointer-events-auto w-full ${isActive ? 'block' : 'hidden'}`;

  if (!isLiving && !isActive) return null;

  return (
    <motion.div
      initial={isLiving ? false : { opacity: 0, y: 30 }}
      animate={isLiving ? undefined : { opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
      transition={{ duration: 0.6 }}
      className={shellClass}
    >
      <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
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

        <div className="space-y-1.5 sm:space-y-2 max-h-[42dvh] sm:max-h-none overflow-y-auto overscroll-contain md:overflow-visible pr-1 sm:pr-0">
          {data.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <article
                key={idx}
                className={`border transition-colors duration-300 ${
                  isOpen ? 'border-[#ff7849]/30 bg-[#ff7849]/[0.03]' : 'border-white/8 bg-[#090909]/80 hover:border-white/15'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-3 px-3.5 sm:px-4 md:px-5 py-3 sm:py-3.5 text-left bg-transparent border-none cursor-pointer outline-none focus:outline-none"
                >
                  <span className={`font-serif text-[13px] sm:text-sm md:text-base font-light leading-snug ${isOpen ? 'text-white' : 'text-white/85'}`}>
                    {item.q}
                  </span>
                  <span className={`shrink-0 w-6 h-6 flex items-center justify-center border transition-colors duration-300 ${isOpen ? 'border-[#ff7849] text-[#ff7849]' : 'border-white/20 text-white/50'}`}>
                    {isOpen ? <Minus size={11} /> : <Plus size={11} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-3.5 sm:px-4 md:px-5 pb-3.5 sm:pb-4 font-sans text-[11px] sm:text-xs md:text-[13px] text-white/60 leading-relaxed font-light">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>

        <div className="border-t border-white/8 pt-4 sm:pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <p className="font-serif text-sm sm:text-base text-white font-light">{data.ctaTitle}</p>
            <p className="font-mono text-[9px] sm:text-[10px] text-white/45 tracking-wider uppercase">{data.ctaDesc}</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-2.5">
            <a
              href="https://t.me/dj_beckerman"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 sm:px-4 min-h-11 py-3 sm:py-2.5 border border-white/10 hover:border-[#ff7849]/40 hover:text-[#ff7849] bg-black/40 text-white/80 font-mono text-[9px] sm:text-[10px] tracking-widest uppercase transition-colors duration-300 flex items-center gap-1.5"
            >
              <MessageCircle size={11} />
              {data.ctaTelegram}
            </a>
            <a
              href="mailto:booking@beckerman.cz"
              className="px-3 sm:px-4 min-h-11 py-3 sm:py-2.5 bg-white text-black hover:bg-[#ff7849] hover:text-white font-mono text-[9px] sm:text-[10px] tracking-widest uppercase transition-colors duration-300 flex items-center gap-1.5"
            >
              <Mail size={11} />
              {data.ctaEmail}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
