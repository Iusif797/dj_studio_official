import { useEffect } from 'react';

type Lang = 'en' | 'cs' | 'ru';

const SEO_BY_LANG: Record<Lang, { title: string; description: string; ogLocale: string }> = {
  en: {
    title: 'DJ BECKERMAN — Afro House & Deep House DJ in Prague | Club, Corporate & Private Events',
    description:
      'DJ Beckerman — Prague-based Afro House, House, Deep-House & Commercial DJ. 500+ shows, residencies at Duplex, Roxy, Epic. Pioneer CDJ-2000 + DJM-V10. Book club, corporate and private events across Europe.',
    ogLocale: 'en_US',
  },
  cs: {
    title: 'DJ Beckerman — Afro House & House DJ v Praze | Klub, Firemní & Privátní Akce',
    description:
      'DJ Beckerman — pražský DJ Afro House, House, Deep-House a Commercial. 500+ akcí, rezidence Duplex, Roxy, Epic. Pioneer CDJ-2000 + DJM-V10. Rezervace pro kluby, firmy a soukromé akce v Praze i Evropě.',
    ogLocale: 'cs_CZ',
  },
  ru: {
    title: 'DJ Beckerman — Afro House & House DJ в Праге | Клубы, Корпоративы, Частные Ивенты',
    description:
      'DJ Beckerman — пражский DJ Afro House, House, Deep-House и Commercial. 500+ выступлений, резиденции Duplex, Roxy, Epic. Райдер Pioneer CDJ-2000 + DJM-V10. Бронирование в Праге и по Европе.',
    ogLocale: 'ru_RU',
  },
};

function upsertMeta(selector: string, attr: string, value: string) {
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    const isProperty = selector.includes('property');
    if (isProperty) el.setAttribute('property', attr);
    else el.setAttribute('name', attr);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

export function useSeoSync(lang: Lang) {
  useEffect(() => {
    const seo = SEO_BY_LANG[lang];
    document.documentElement.lang = lang;
    document.title = seo.title;
    upsertMeta('meta[name="description"]', 'description', seo.description);
    upsertMeta('meta[property="og:title"]', 'og:title', seo.title);
    upsertMeta('meta[property="og:description"]', 'og:description', seo.description);
    upsertMeta('meta[property="og:locale"]', 'og:locale', seo.ogLocale);
    upsertMeta('meta[name="twitter:title"]', 'twitter:title', seo.title);
    upsertMeta('meta[name="twitter:description"]', 'twitter:description', seo.description);
    try {
      const origin = window.location.origin;
      const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (canonical) canonical.href = `${origin}/${lang === 'en' ? '' : lang}`;
      const ogUrl = document.querySelector('meta[property="og:url"]') as HTMLMetaElement | null;
      if (ogUrl) ogUrl.content = `${origin}/${lang === 'en' ? '' : lang}`;
      document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => {
        const hreflang = el.getAttribute('hreflang');
        if (!hreflang) return;
        if (hreflang === 'x-default') (el as HTMLLinkElement).href = `${origin}/`;
        else if (hreflang === 'en') (el as HTMLLinkElement).href = `${origin}/`;
        else (el as HTMLLinkElement).href = `${origin}/${hreflang}`;
      });
    } catch {}
  }, [lang]);
}
