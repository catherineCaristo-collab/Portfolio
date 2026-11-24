import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const motion = document.documentElement.classList.contains('js-motion');
const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const navH = () => parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 64;

/* ---------- Titres mot par mot ---------- */
function decouper(el: Element) {
  let i = 0;
  const marche = (node: Node) => {
    [...node.childNodes].forEach((n) => {
      if (n.nodeType === Node.TEXT_NODE) {
        const frag = document.createDocumentFragment();
        (n.textContent || '').split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.append(document.createTextNode(' ')); return; }
          const m = document.createElement('span');
          m.className = 'm';
          const s = document.createElement('span');
          s.textContent = part;
          s.style.setProperty('--i', String(i++));
          m.append(s);
          frag.append(m);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === Node.ELEMENT_NODE) {
        marche(n);
      }
    });
  };
  // Le texte complet reste lisible par les lecteurs d'écran
  el.setAttribute('aria-label', el.textContent?.trim() || '');
  marche(el);
  el.querySelectorAll('.m').forEach((m) => m.setAttribute('aria-hidden', 'true'));
}

if (motion) document.querySelectorAll('[data-split]').forEach(decouper);

/* ---------- Apparitions au scroll ---------- */
if (motion && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('vu'); io.unobserve(e.target); } }),
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
  );
  document.querySelectorAll('[data-split], [data-fade]').forEach((el) => io.observe(el));
}

/* ---------- Défilement doux ---------- */
let lenis: Lenis | null = null;
if (motion) {
  lenis = new Lenis({ autoRaf: true, anchors: { offset: -navH() }, lerp: 0.1 });
}

/* ---------- Scènes pilotées par le scroll ---------- */
const morph = document.querySelector<HTMLElement>('[data-pin="morph"]');
const horiz = document.querySelector<HTMLElement>('[data-pin="horizontal"]');
const piste = horiz?.querySelector<HTMLElement>('[data-piste]');
const compteur = horiz?.querySelector<HTMLElement>('[data-compteur]');
const nbCartes = piste?.children.length || 1;
let distance = 0;

const parcours = document.querySelector<HTMLElement>('[data-parcours]');
const ligne = parcours?.querySelector<HTMLElement>('[data-ligne]');
const zone = parcours?.querySelector<HTMLElement>('.etapes-zone');
const etapes = parcours ? [...parcours.querySelectorAll<HTMLElement>('[data-etape]')] : [];
const anneeEl = parcours?.querySelector<HTMLElement>('[data-annee]');
let anneeActuelle = anneeEl?.textContent || '';

function mesurer() {
  if (motion && horiz && piste) {
    horiz.classList.add('pin-actif');
    distance = Math.max(0, piste.scrollWidth - window.innerWidth);
    horiz.style.setProperty('--hauteur', `${distance + window.innerHeight}px`);
  }
}

function progression(el: HTMLElement) {
  const r = el.getBoundingClientRect();
  const course = r.height - window.innerHeight;
  return course > 0 ? clamp(-r.top / course) : 0;
}

function maj() {
  if (motion && morph) morph.style.setProperty('--p', progression(morph).toFixed(4));

  if (motion && horiz && piste) {
    const p = progression(horiz);
    piste.style.setProperty('--x', (p * distance).toFixed(1));
    if (compteur) compteur.textContent = String(Math.round(p * (nbCartes - 1)) + 1);
  }

  if (zone && etapes.length) {
    const milieu = window.innerHeight * 0.55;
    if (motion && ligne) {
      const r = zone.getBoundingClientRect();
      ligne.style.setProperty('--remplir', clamp((milieu - r.top) / r.height).toFixed(4));
    }
    let active = 0;
    etapes.forEach((e, i) => { if (e.getBoundingClientRect().top < milieu) active = i; });
    etapes.forEach((e, i) => {
      e.classList.toggle('active', i === active);
      e.classList.toggle('passee', i < active);
    });
    const annee = etapes[active].dataset.anneeEtape || '';
    if (anneeEl && annee !== anneeActuelle) {
      anneeActuelle = annee;
      if (motion) {
        anneeEl.style.opacity = '0';
        setTimeout(() => { anneeEl.textContent = annee; anneeEl.style.opacity = '1'; }, 180);
      } else {
        anneeEl.textContent = annee;
      }
    }
  }
}

// Sans animation : le compteur suit le défilement horizontal au doigt
const zoneH = horiz?.querySelector<HTMLElement>('[data-zone]');
if (!motion && zoneH && compteur) {
  zoneH.addEventListener('scroll', () => {
    const max = zoneH.scrollWidth - zoneH.clientWidth;
    const p = max > 0 ? zoneH.scrollLeft / max : 0;
    compteur.textContent = String(Math.round(p * (nbCartes - 1)) + 1);
  }, { passive: true });
}

mesurer();
maj();
if (lenis) lenis.on('scroll', maj);
else window.addEventListener('scroll', maj, { passive: true });
window.addEventListener('resize', () => { mesurer(); maj(); });
window.addEventListener('load', () => { mesurer(); maj(); });

/* ---------- Menu ---------- */
document.querySelectorAll<HTMLButtonElement>('.g-fleche').forEach((b) => {
  b.addEventListener('click', () => {
    const li = b.closest('.groupe')!;
    const ouvert = li.classList.toggle('ouvert');
    b.setAttribute('aria-expanded', String(ouvert));
  });
});
document.addEventListener('click', (e) => {
  document.querySelectorAll('.groupe.ouvert').forEach((li) => {
    if (!li.contains(e.target as Node)) {
      li.classList.remove('ouvert');
      li.querySelector('.g-fleche')?.setAttribute('aria-expanded', 'false');
    }
  });
});

const burger = document.querySelector<HTMLButtonElement>('[data-burger]');
const mobile = document.querySelector<HTMLElement>('[data-mobile]');
const txt = burger?.querySelector<HTMLElement>('.burger-txt');
function menuMobile(ouvrir: boolean) {
  if (!burger || !mobile) return;
  mobile.hidden = !ouvrir;
  burger.setAttribute('aria-expanded', String(ouvrir));
  if (txt) txt.textContent = ouvrir ? txt.dataset.fermer! : txt.dataset.ouvrir!;
  document.documentElement.style.overflow = ouvrir ? 'hidden' : '';
  if (lenis) ouvrir ? lenis.stop() : lenis.start();
}
burger?.addEventListener('click', () => menuMobile(mobile!.hidden));
mobile?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => menuMobile(false)));
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  menuMobile(false);
  document.querySelectorAll('.groupe.ouvert').forEach((li) => li.classList.remove('ouvert'));
});
