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
              <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5] flex items-center justify-center shrink-0">
                <Instagram size={11} className="text-white" />
              </span>
              @dj_beckerman
            </a>
            <a
              className="site-footer__link"
              href="https://t.me/beckerman979"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#2AABEE' }}
            >
              <span className="w-6 h-6 rounded-full bg-[#2AABEE] flex items-center justify-center shrink-0">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75l-1.08-.8c-.6-.47-.94-.76-.99-1.13-.07-.48.36-.74.81-1.02.55-.36 2.48-1.62 2.62-1.76.03-.03.06-.13-.02-.18-.07-.05-.19-.02-.27 0-1.12.72-2.83 1.76-3.53 2.2-.28.17-.53.06-.61-.4-.07-.52-.28-1.68-.43-2.56-.05-.34.05-.53.3-.54.6-.02 1.53-.3 2.4-.71.74-.34 2.39-1.15 2.73-1.32.03-.02.14-.06.2 0 .05.05.04.12.02.18-.02.06-.74 1.69-.74 1.69z"/></svg>
              </span>
              @beckerman979
            </a>
            <a
              className="site-footer__link site-footer__link--whatsapp"
              href="https://wa.me/420773975235"
              target="_blank"
              rel="noreferrer"
            >
              <span className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12c0 2.112.549 4.1 1.515 5.833L.057 23.428a.5.5 0 0 0 .515.572l5.797-.947A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.87 9.87 0 0 1-5.03-1.373l-.361-.214-3.741.611.627-3.63-.235-.374A9.862 9.862 0 0 1 2.118 12c0-5.44 4.44-9.882 9.882-9.882 5.44 0 9.882 4.442 9.882 9.882 0 5.44-4.442 9.882-9.882 9.882z"/><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="white"/></svg>
              </span>
              WhatsApp
            </a>
            <a
              className="site-footer__link"
              href="https://soundcloud.com/beckerman"
              target="_blank"
              rel="noreferrer"
            >
              <span className="w-6 h-6 rounded-full bg-[#ff5500] flex items-center justify-center shrink-0">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M7 10.5v3q0 .625.438 1.062Q7.875 15 8.5 15t1.062-.438Q10 14.125 10 13.5v-3q0-.625-.438-1.062Q9.125 9 8.5 9t-1.062.438Q7 9.875 7 10.5zm3 0v3q0 .625.438 1.062Q10.875 15 11.5 15t1.062-.438Q13 14.125 13 13.5v-3q0-.625-.438-1.062Q12.125 9 11.5 9t-1.062.438Q10 9.875 10 10.5zm3 2v1q0 .416.292.708Q13.584 14.5 14 14.5t.708-.292Q15 13.916 15 13.5v-1q0-.417-.292-.708Q14.416 11.5 14 11.5t-.708.292Q13 12.084 13 12.5zm5.5.5v1q0 .208.146.354.146.146.354.146t.354-.146Q19.5 14.208 19.5 14v-1q0-.208-.146-.354-.146-.146-.354-.146t-.354.146Q18.5 12.792 18.5 13z"/></svg>
              </span>
              SoundCloud
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
