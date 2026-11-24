# Portfolio de Catherine Caristo

Site CV interactif en trois langues (FR, NL, EN).

## Modifier les textes
Tout se trouve dans **`src/contenu.ts`**. Chaque texte existe en `fr`, `nl` et `en`.
Pour écrire un mot dans la police italique, entoure-le d'étoiles : `*créative*`.

## Remplacer la photo
Remplace le fichier `src/assets/catherine.jpg` par ta photo (même nom).

## Ajouter le CV à télécharger
Dépose les PDF dans `public/cv/`, puis indique leur chemin dans `site.cv` du fichier `src/contenu.ts`.

## Lancer le site en local
```bash
npm install
npm run dev
```

Les choix de design et les décisions sont notés dans `CLAUDE.md`.
