export type Lang = 'fr' | 'nl' | 'en';
export type T = Record<Lang, string>;
export const langs: Lang[] = ['fr', 'nl', 'en'];

/** Texte simple dans la bonne langue. */
export const t = (v: T, lang: Lang) => v[lang];

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Texte avec *mot* → <em>mot</em> (police italique). */
export const rich = (v: T | string, lang: Lang) => {
  const s = typeof v === 'string' ? v : v[lang];
  return esc(s).replace(/\*(.+?)\*/g, '<em>$1</em>');
};

/** Racine de chaque langue. */
export const home = (lang: Lang) => (lang === 'fr' ? '/' : `/${lang}/`);

const segReussite: T = { fr: 'reussites', nl: 'successen', en: 'achievements' };
const segMerci: T = { fr: 'merci', nl: 'bedankt', en: 'thanks' };

export const reussitePath = (lang: Lang, slug: string) =>
  `${home(lang)}${segReussite[lang]}/${slug}/`;
export const merciPath = (lang: Lang) => `${home(lang)}${segMerci[lang]}/`;
export const routeSegments = { segReussite, segMerci };
