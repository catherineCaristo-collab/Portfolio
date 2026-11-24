# Portfolio de Catherine Caristo

CV interactif en ligne. Catherine décide, Claude code. Échanges en français, simples, sans jargon.

## Qui
- Catherine Caristo, Mons (Belgique).
- Titre : **Customer Success Manager & Business Developer**.
- Phrase d'accroche : « Patiente pour écouter, *créative* pour trouver la solution. » (mot clé en serif italique : *créative*).
- Cible : postes en Customer Success. Le design pur est sur un portfolio séparé.
- LinkedIn : https://www.linkedin.com/in/catherine-caristo-721050203/

## Contenu
- Du CV PDF, on ne reprend que : compétences, outils, langues.
- Parcours : Kontnu (2025), fiduciaire (2024-2025), Pharmagest (2022-2024), LUCA School of Arts (2021), Michael Kors (2016-2019). Dates et descriptions reprises du CV en attendant la validation de Catherine (elle a dit « go » sans trancher).
- Section « Projets » remplacée par **« Réussites »** :
  - Kontnu : redesign de la V2 de l'application, amélioration de l'expérience client.
  - Pharmagest (et non « Parmagest ») : formation des officines au logiciel, 3 jours sur place par pharmacie.
  - Proposées à partir du CV, à valider : recrutement de créateurs néerlandophones, fidélisation des abonnés (Kontnu).
  - Les blocs « Le résultat » contiennent « À compléter » : attendre des chiffres de Catherine.
- Pas de date de naissance ni de téléphone sur le site public.
- Langues du site : **FR, NL, EN** (sélecteur dans la navigation).
- Appels à l'action, dans l'ordre : 1. écrire, 2. télécharger le CV, 3. LinkedIn.

## Direction artistique (validée : « go »)
Directions A, B, C (velours bordeaux, noir et lumière, collage 70s) **refusées** : trop lourdes, formes géométriques gratuites.

Direction actuelle, « noir et blanc épuré » (aperçu : `docs/apercus/direction-noir-blanc-epure.jpg`) :
- Structure inspirée de peoplechurch.org : nav noire, fond blanc, très gros titre noir en capitales, boutons rectangulaires, rangée de 3 visuels à coins légèrement arrondis.
- Esthétique inspirée des épingles Pinterest de Catherine : textures (velours côtelé, velours) uniquement dans les visuels, serif fine en capitales.
- Palette : blanc `#FFFFFF` (clair dominant), noir `#0B0B0B` (foncé dominant), bordeaux `#5C0F1E` (mot clé, accents), vert bouteille `#1E3B2C` (très peu).
- Typos : Inter Tight 900 (titres, capitales) + Instrument Serif (mot clé italique, touches chic). Via @fontsource.
- **Aucune forme décorative** (pas de cercles, arches, demi-lunes flottants). Pas d'arche sur la photo. Seule exception : le bouton rond « Envoyer » du formulaire (demandé dans le brief de départ), à confirmer.
- Ordre des fonds : blanc (haut) → transition (rectangle bordeaux texturé qui remplit l'écran) → noir (à propos) → blanc (parcours) → noir (réussites) → blanc (compétences) → bordeaux (contact) → noir (pied de page).
- Sur fond noir, le mot clé italique passe en blanc (le bordeaux y serait illisible).
- Animaux / imprimés forts : déconseillés en grand.

## Règles de qualité (non négociables)
- Parfait sur mobile, tablette, ordinateur ; captures Playwright de chaque section avant de dire « fini ».
- Animations coupées avec « réduire les animations ».
- Chaque section peint son propre fond (jamais de texte clair sur fond clair).
- Accents corrects partout, y compris en capitales (À, É...).
- Pas de style « site IA » : pas de « 01 — », pas d'emojis décoratifs, pas de pastilles à contour fin, pas de bandeaux qui défilent, pas de tirets longs dans les textes.

## Technique
- Astro 7 (statique), CSS moderne, Lenis, polices @fontsource. Netlify (`netlify.toml`) + Netlify Forms (formulaire `contact`, pages merci / bedankt / thanks).
- **Tout le contenu est dans `src/contenu.ts`** (FR, NL, EN). `*mot*` = mot en serif italique.
- Pages : `/`, `/nl/`, `/en/` ; réussites sous `/reussites/…`, `/nl/successen/…`, `/en/achievements/…` (généré par `src/pages/[...route].astro`).
- Sections : `src/components/` (Hero, Transition, APropos, Parcours, Reussites, Competences, Contact, Footer, Nav).
- Animations : `src/scripts/main.ts`. Classe `js-motion` sur `<html>` seulement si l'utilisateur n'a pas activé « réduire les animations » ; sans elle, tout est statique et lisible.
- Bouton CV caché tant que `site.cv[langue]` est vide (le CV PDF fourni est une candidature Arvato avec téléphone et date de naissance : ne pas le publier).
- Photo actuelle : extraite du CV, basse résolution (520 px). À remplacer par l'original dans `src/assets/catherine.jpg`.
- Vérification : `npm run build`, `npx astro preview`, captures Playwright en 1440, 820, 390 et en mode animations réduites.
