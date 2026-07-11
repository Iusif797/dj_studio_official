import { ArrowRight, Instagram, Mail, MapPin, MessageCircle, Music2 } from 'lucide-react';

type Lang = 'en' | 'cs' | 'ru';

type SiteFooterProps = {
  lang: Lang;
  isActive: boolean;
  onBook: () => void;
  onTop: () => void;
};

const COPY = {
  en: {
    eyebrow: '12 / CONTACT & BOOKING',
    title: 'Let’s make the night\nworth remembering.',
    text: 'Club nights, private events, weddings and brand experiences across Prague and Europe.',
    book: 'Request a date',
    direct: 'Direct contact',
    based: 'Based in Prague · Available across Europe',
    follow: 'Listen & follow',
    nav: 'Navigation',
    top: 'Back to top',
    rights: 'All rights reserved.',
    response: 'Typical response time: within 24 hours',
  },
  cs: {
    eyebrow: '12 / KONTAKT & REZERVACE',
    title: 'Vytvořme noc,\nna kterou se nezapomíná.',
    text: 'Klubové večery, soukromé akce, svatby a eventy značek v Praze i po celé Evropě.',
    book: 'Poptat termín',
    direct: 'Přímý kontakt',
    based: 'Praha · K dispozici po celé Evropě',
    follow: 'Poslech & sítě',
    nav: 'Navigace',
    top: 'Zpět nahoru',
    rights: 'Všechna práva vyhrazena.',
    response: 'Obvyklá doba odpovědi: do 24 hodin',
  },
  ru: {
    eyebrow: '12 / КОНТАКТЫ И БРОНИРОВАНИЕ',
    title: 'Создадим ночь,\nкоторую будут помнить.',
    text: 'Клубные сеты, частные события, свадьбы и бренд-ивенты в Праге и по всей Европе.',
    book: 'Запросить дату',
    direct: 'Прямой контакт',
    based: 'Прага · Выступления по всей Европе',
    follow: 'Музыка и соцсети',
    nav: 'Навигация',
    top: 'Наверх',
    rights: 'Все права защищены.',
    response: 'Обычно отвечаем в течение 24 часов',
  },
} as const;

export default function SiteFooter({ lang, isActive, onBook, onTop }: SiteFooterProps) {
  const copy = COPY[lang];

  return (
    <div className={`site-footer ${isActive ? 'site-footer--active' : ''}`}>
      <div className="site-footer__glow" aria-hidden />
      <div className="site-footer__grid" aria-hidden />

      <div className="site-footer__inner">
        <div className="site-footer__hero">
          <span className="font-mono text-[8px] tracking-[0.32em] text-[#ff7849] uppercase font-semibold">
            {copy.eyebrow}
          </span>
          <h2 className="font-serif text-[clamp(2.25rem,6vw,5.75rem)] leading-[0.88] font-light tracking-[-0.025em] text-white whitespace-pre-line">
            {copy.title}
          </h2>
          <p className="max-w-xl text-[11px] sm:text-sm text-white/50 leading-relaxed font-light">
            {copy.text}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <button type="button" onClick={onBook} className="site-footer__book">
              {copy.book}
              <ArrowRight size={14} />
            </button>
            <span className="font-mono text-[8px] tracking-[0.12em] uppercase text-white/35">{copy.response}</span>
          </div>
        </div>

        <div className="site-footer__details">
          <div>
            <p className="site-footer__label">{copy.direct}</p>
            <a className="site-footer__link" href="mailto:booking@beckerman.cz"><Mail size={13} /> booking@beckerman.cz</a>
            <a className="site-footer__link" href="https://t.me/dj_beckerman" target="_blank" rel="noreferrer"><MessageCircle size={13} /> Telegram</a>
            <p className="site-footer__meta"><MapPin size={12} /> {copy.based}</p>
          </div>
          <div>
            <p className="site-footer__label">{copy.follow}</p>
            <a className="site-footer__link" href="https://www.instagram.com/" target="_blank" rel="noreferrer"><Instagram size={13} /> Instagram</a>
            <a className="site-footer__link" href="https://soundcloud.com/" target="_blank" rel="noreferrer"><Music2 size={13} /> SoundCloud</a>
          </div>
          <div>
            <p className="site-footer__label">{copy.nav}</p>
            <button type="button" className="site-footer__link" onClick={onTop}>{copy.top} <ArrowRight className="-rotate-90" size={13} /></button>
          </div>
        </div>

        <div className="site-footer__bottom">
          <div>
            <p className="font-serif text-xl tracking-[0.18em] text-white">BECKERMAN</p>
            <p className="mt-1 font-mono text-[7px] tracking-[0.25em] text-[#ff7849] uppercase">Prague club, event & corporate DJ</p>
          </div>
          <p className="font-mono text-[7px] sm:text-[8px] tracking-[0.14em] uppercase text-white/25">
            © {new Date().getFullYear()} DJ Beckerman. {copy.rights}
          </p>
        </div>
      </div>
    </div>
  );
}
