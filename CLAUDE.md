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
- Parcours cité par Catherine : Bachelor Grafisch Ontwerp & Marketing (LUCA School of Arts, Gent, 2021), Kontnu (Business & Marketing Strategist), fiduciaire (administratif), Michael Kors (sales associate & stock). En attente : accord pour reprendre dates et descriptions du CV.
- Section « Projets » remplacée par **« Réussites »** :
  - Kontnu : redesign de la V2 de l'application, amélioration de l'expérience client.
  - Pharmagest (et non « Parmagest ») : formation des officines au logiciel, 3 jours sur place par pharmacie.
- Pas de date de naissance ni de téléphone sur le site public.
- Langues du site : **FR, NL, EN** (sélecteur dans la navigation).
- Appels à l'action, dans l'ordre : 1. écrire, 2. télécharger le CV, 3. LinkedIn.

## Direction artistique (en cours de validation)
Directions A, B, C (velours bordeaux, noir et lumière, collage 70s) **refusées** : trop lourdes, formes géométriques gratuites.

Direction actuelle, « noir et blanc épuré » (aperçu : `docs/apercus/direction-noir-blanc-epure.jpg`) :
- Structure inspirée de peoplechurch.org : nav noire, fond blanc, très gros titre noir en capitales, boutons rectangulaires, rangée de 3 visuels à coins légèrement arrondis.
- Esthétique inspirée des épingles Pinterest de Catherine : textures (velours côtelé, velours) uniquement dans les visuels, serif fine en capitales.
- Palette : blanc `#FFFFFF` (clair dominant), noir `#0B0B0B` (foncé dominant), bordeaux `#5C0F1E` (mot clé, accents), vert bouteille `#1E3B2C` (très peu).
- Typos : Inter Tight 900 (titres, capitales) + Instrument Serif (mot clé italique, touches chic). Via @fontsource.
- **Aucune forme décorative** (pas de cercles, arches, demi-lunes flottants). Pas d'arche sur la photo. Bouton rond de contact : à confirmer.
- Animaux / imprimés forts : déconseillés en grand.

## Règles de qualité (non négociables)
- Parfait sur mobile, tablette, ordinateur ; captures Playwright de chaque section avant de dire « fini ».
- Animations coupées avec « réduire les animations ».
- Chaque section peint son propre fond (jamais de texte clair sur fond clair).
- Accents corrects partout, y compris en capitales (À, É...).
- Pas de style « site IA » : pas de « 01 — », pas d'emojis décoratifs, pas de pastilles à contour fin, pas de bandeaux qui défilent, pas de tirets longs dans les textes.

## Technique prévue
Astro (statique), CSS moderne, Lenis, polices @fontsource, Netlify + Netlify Forms, tout le contenu dans un seul fichier de config.
