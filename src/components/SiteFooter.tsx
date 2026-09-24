import { ArrowRight, Instagram, MapPin } from 'lucide-react';

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
            <a className="site-footer__link" href="mailto:usifmamedov5@gmail.com"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> usifmamedov5@gmail.com</a>
            <a
              className="site-footer__link site-footer__link--whatsapp"
              href="https://wa.me/420773975235"
              target="_blank"
              rel="noreferrer"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.112.549 4.1 1.515 5.833L.057 23.428a.5.5 0 0 0 .515.572l5.797-.947A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.87 9.87 0 0 1-5.03-1.373l-.361-.214-3.741.611.627-3.63-.235-.374A9.862 9.862 0 0 1 2.118 12c0-5.44 4.44-9.882 9.882-9.882 5.44 0 9.882 4.442 9.882 9.882 0 5.44-4.442 9.882-9.882 9.882z"/>
              </svg>
              +420 773 975 235
            </a>
            <p className="site-footer__meta"><MapPin size={12} /> {copy.based}</p>
          </div>
          <div>
            <p className="site-footer__label">{copy.follow}</p>
            <a
              className="site-footer__link site-footer__link--instagram"
              href="https://www.instagram.com/dj_beckerman/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={13} /> @dj_beckerman
            </a>
          </div>
          <div>
            <p className="site-footer__label">{copy.nav}</p>
            <button type="button" className="site-footer__link" onClick={onTop}>{copy.top} <ArrowRight className="-rotate-90" size={13} /></button>
          </div>
        </div>

        <div className="site-footer__bottom">
          <div>
            <p className="font-serif text-xl tracking-[0.18em] text-white">BECKERMAN</p>
            <p className="mt-1 font-mono text-[7px] tracking-[0.25em] text-[#ff7849] uppercase">Afro-House · House · Deep-House · Commercial</p>
          </div>
          <p className="font-mono text-[7px] sm:text-[8px] tracking-[0.14em] uppercase text-white/25">
            © {new Date().getFullYear()} DJ Beckerman. {copy.rights}
          </p>
        </div>
      </div>
    </div>
  );
}
