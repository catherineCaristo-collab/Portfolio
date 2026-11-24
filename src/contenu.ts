// ============================================================
//  CONTENU DU SITE  ·  le seul fichier à modifier pour changer les textes
// ============================================================
//
//  Comment ça marche :
//  - Chaque texte existe en trois langues : fr (français), nl (néerlandais), en (anglais).
//  - Pour mettre un mot dans la jolie police italique, entoure-le d'étoiles : *créative*
//  - Garde bien les guillemets " " autour de chaque texte, et la virgule à la fin de la ligne.
//  - Dans les textes, utilise ’ (apostrophe typographique) ou ' : les deux marchent.
//
// ============================================================

export const site = {
  nom: 'Catherine Caristo',
  prenom: 'Catherine',
  titre: 'Customer Success Manager & Business Developer',
  email: 'catherine.caristo@gmail.com',
  linkedin: 'https://www.linkedin.com/in/catherine-caristo-721050203/',

  // CV à télécharger : dépose les fichiers PDF dans le dossier public/cv/
  // puis écris leur nom ici, par exemple '/cv/catherine-caristo-fr.pdf'.
  // Tant que c'est vide '', le bouton « Télécharger mon CV » n'apparaît pas.
  cv: { fr: '', nl: '', en: '' },

  ville: { fr: 'Mons, Belgique', nl: 'Bergen, België', en: 'Mons, Belgium' },

  description: {
    fr: 'Catherine Caristo, Customer Success Manager et Business Developer à Mons. Trilingue français, néerlandais, anglais.',
    nl: 'Catherine Caristo, Customer Success Manager en Business Developer in Bergen. Drietalig Nederlands, Frans, Engels.',
    en: 'Catherine Caristo, Customer Success Manager and Business Developer based in Mons, Belgium. Fluent in French, Dutch and English.',
  },
};

// ------------------------------------------------------------
//  HAUT DE PAGE
// ------------------------------------------------------------
export const hero = {
  phrase: {
    fr: 'Patiente pour écouter, *créative* pour trouver la solution.',
    nl: 'Geduldig om te luisteren, *creatief* om de oplossing te vinden.',
    en: 'Patient enough to listen, *creative* enough to find the solution.',
  },
  boutonContact: { fr: 'Me contacter', nl: 'Contacteer me', en: 'Get in touch' },
  boutonCv: { fr: 'Télécharger mon CV', nl: 'Download mijn cv', en: 'Download my CV' },

  // Les deux visuels texturés à côté de la photo
  visuel2: {
    grand: { fr: 'FR · NL · EN', nl: 'NL · FR · EN', en: 'EN · FR · NL' },
    petit: { fr: 'trois langues, chaque jour', nl: 'drie talen, elke dag', en: 'three languages, every day' },
    etiquette: { fr: 'Langues', nl: 'Talen', en: 'Languages' },
    lien: { fr: 'Voir mon parcours', nl: 'Bekijk mijn traject', en: 'See my journey' },
  },
  visuel3: {
    grand: { fr: 'À l’écoute', nl: 'Luisteren', en: 'Listening' },
    petit: { fr: 'de chaque client', nl: 'naar elke klant', en: 'to every client' },
    etiquette: { fr: 'Réussites', nl: 'Successen', en: 'Achievements' },
    lien: { fr: 'Découvrir', nl: 'Ontdek', en: 'Discover' },
  },
};

// ------------------------------------------------------------
//  TRANSITION (les deux mots qui s'écartent)
// ------------------------------------------------------------
export const transition = {
  motGauche: { fr: 'Écouter', nl: 'Luisteren', en: 'Listen' },
  motDroite: { fr: 'Résoudre', nl: 'Oplossen', en: 'Solve' },
  message: { fr: 'Bonjour, je suis *Catherine*.', nl: 'Hallo, ik ben *Catherine*.', en: 'Hello, I’m *Catherine*.' },
};

// ------------------------------------------------------------
//  À PROPOS
// ------------------------------------------------------------
export const aPropos = {
  titre: { fr: 'Qui je *suis*', nl: 'Wie ik *ben*', en: 'Who I *am*' },
  paragraphes: [
    {
      fr: 'Je suis Customer Success Manager et Business Developer, basée à Mons. Mon métier : accompagner les clients pour qu’ils restent, et qu’ils restent contents.',
      nl: 'Ik ben Customer Success Manager en Business Developer, gevestigd in Bergen. Mijn vak: klanten begeleiden zodat ze blijven, en tevreden blijven.',
      en: 'I’m a Customer Success Manager and Business Developer based in Mons, Belgium. My job: helping clients so they stay, and stay happy.',
    },
    {
      fr: 'Je suis patiente : je prends le temps d’écouter avant de répondre. Je suis créative : ma formation en graphisme et en marketing m’aide à voir les problèmes autrement. Et je cherche toujours une solution concrète.',
      nl: 'Ik ben geduldig: ik neem de tijd om te luisteren voor ik antwoord. Ik ben creatief: mijn opleiding in grafisch ontwerp en marketing helpt me om problemen anders te bekijken. En ik zoek altijd een concrete oplossing.',
      en: 'I’m patient: I take the time to listen before I answer. I’m creative: my background in graphic design and marketing helps me see problems differently. And I always look for a concrete solution.',
    },
    {
      fr: 'Je travaille chaque jour en français, en néerlandais et en anglais.',
      nl: 'Ik werk elke dag in het Nederlands, het Frans en het Engels.',
      en: 'I work in French, Dutch and English every day.',
    },
  ],
  // Les trois repères en bas de la section
  reperes: [
    { grand: '3', petit: { fr: 'langues parlées au quotidien', nl: 'talen, elke dag', en: 'languages, every day' } },
    { grand: '2021', petit: { fr: 'bachelor en graphisme et marketing', nl: 'bachelor grafisch ontwerp en marketing', en: 'bachelor in graphic design and marketing' } },
    { grand: 'Mons', petit: { fr: 'ma base, en Belgique', nl: 'mijn thuisbasis in België', en: 'my home base in Belgium' } },
  ],
};

// ------------------------------------------------------------
//  PARCOURS (du plus récent au plus ancien)
// ------------------------------------------------------------
export const parcours = {
  titre: { fr: 'Mon *parcours*', nl: 'Mijn *traject*', en: 'My *journey*' },
  etapes: [
    {
      id: 'kontnu',
      annee: '2025',
      periode: { fr: 'Depuis 2025', nl: 'Sinds 2025', en: 'Since 2025' },
      role: { fr: 'Business & Marketing Strategist', nl: 'Business & Marketing Strategist', en: 'Business & Marketing Strategist' },
      lieu: { fr: 'Kontnu, Bruxelles', nl: 'Kontnu, Brussel', en: 'Kontnu, Brussels' },
      texte: {
        fr: 'Relation client en trois langues, suivi des résiliations et fidélisation des abonnés, recrutement de créateurs néerlandophones, soutien aux tournages vidéo.',
        nl: 'Klantcontact in drie talen, opvolging van opzeggingen en klantbehoud, rekrutering van Nederlandstalige creators, ondersteuning bij video-opnames.',
        en: 'Client relations in three languages, handling cancellations and retention, recruiting Dutch-speaking creators, supporting video shoots.',
      },
    },
    {
      id: 'fiduciaire',
      annee: '2024',
      periode: { fr: 'De 2024 à 2025', nl: '2024 tot 2025', en: '2024 to 2025' },
      role: { fr: 'Collaboratrice administrative', nl: 'Administratief medewerker', en: 'Administrative officer' },
      lieu: { fr: 'Service fiduciaire', nl: 'Fiduciaire dienst', en: 'Accounting services firm' },
      texte: {
        fr: 'Gestion administrative de plusieurs entreprises, secrétariat de direction, organisation et classement.',
        nl: 'Administratie voor meerdere bedrijven, directiesecretariaat, organisatie en klassement.',
        en: 'Administration for several companies, executive assistance, organisation and filing.',
      },
    },
    {
      id: 'pharmagest',
      annee: '2022',
      periode: { fr: 'De 2022 à 2024', nl: '2022 tot 2024', en: '2022 to 2024' },
      role: { fr: 'Formatrice service client', nl: 'Trainer klantenservice', en: 'Customer service trainer' },
      lieu: { fr: 'Pharmagest Belgium', nl: 'Pharmagest Belgium', en: 'Pharmagest Belgium' },
      texte: {
        fr: 'Formation des pharmacies au logiciel, sur place. Suivi des demandes clients et lien entre les équipes techniques et les pharmaciens.',
        nl: 'Opleiding van apotheken in de software, ter plaatse. Opvolging van klantvragen en schakel tussen technische teams en apothekers.',
        en: 'On-site software training for pharmacies. Handling client requests and bridging technical teams and pharmacists.',
      },
    },
    {
      id: 'luca',
      annee: '2021',
      periode: { fr: 'Diplômée en 2021', nl: 'Afgestudeerd in 2021', en: 'Graduated in 2021' },
      role: { fr: 'Bachelor en graphisme et marketing', nl: 'Bachelor Grafisch Ontwerp & Marketing', en: 'Bachelor in Graphic Design & Marketing' },
      lieu: { fr: 'LUCA School of Arts, Gand', nl: 'LUCA School of Arts, Gent', en: 'LUCA School of Arts, Ghent' },
      texte: {
        fr: 'Graphisme, communication visuelle et marketing. Une base qui m’aide encore chaque jour à rendre les choses claires.',
        nl: 'Grafisch ontwerp, visuele communicatie en marketing. Een basis die me nog elke dag helpt om dingen helder te maken.',
        en: 'Graphic design, visual communication and marketing. A foundation that still helps me make things clear every day.',
      },
    },
    {
      id: 'michael-kors',
      annee: '2016',
      periode: { fr: 'De 2016 à 2019', nl: '2016 tot 2019', en: '2016 to 2019' },
      role: { fr: 'Conseillère de vente et gestion de stock', nl: 'Sales associate & stockbeheer', en: 'Sales associate & stock management' },
      lieu: { fr: 'Michael Kors', nl: 'Michael Kors', en: 'Michael Kors' },
      texte: {
        fr: 'Conseil client en boutique et gestion des stocks. Là où j’ai appris à écouter vraiment un client.',
        nl: 'Klantadvies in de winkel en voorraadbeheer. Daar leerde ik echt naar een klant te luisteren.',
        en: 'In-store client advice and stock management. Where I learned to truly listen to a client.',
      },
    },
  ],
};

// ------------------------------------------------------------
//  RÉUSSITES (chaque carte ouvre sa propre page)
//  texture : 'bordeaux', 'vert', 'gris' ou 'noir'
// ------------------------------------------------------------
export const reussites = {
  titre: { fr: 'Mes *réussites*', nl: 'Mijn *successen*', en: 'My *achievements*' },
  sur: { fr: 'sur', nl: 'van', en: 'of' },
  voir: { fr: 'Lire la suite', nl: 'Lees meer', en: 'Read more' },
  liste: [
    {
      slug: 'application-kontnu',
      texture: 'bordeaux',
      entreprise: 'Kontnu',
      visuelGrand: { fr: 'Kontnu', nl: 'Kontnu', en: 'Kontnu' },
      visuelPetit: { fr: 'application, version 2', nl: 'app, versie 2', en: 'app, version 2' },
      titre: { fr: 'Une application plus simple pour les clients', nl: 'Een eenvoudigere app voor klanten', en: 'A simpler app for clients' },
      resume: {
        fr: 'J’ai redessiné la V2 de l’application Kontnu et contribué à améliorer l’expérience client.',
        nl: 'Ik heb versie 2 van de Kontnu-app hertekend en bijgedragen aan een betere klantervaring.',
        en: 'I redesigned version 2 of the Kontnu app and helped improve the client experience.',
      },
      contexte: {
        fr: 'Kontnu met en relation des commerçants locaux et des créateurs de contenu. L’application est leur outil de tous les jours.',
        nl: 'Kontnu brengt lokale handelaars en content creators samen. De app is hun dagelijkse werkinstrument.',
        en: 'Kontnu connects local businesses with content creators. The app is their everyday tool.',
      },
      role: {
        fr: 'J’ai redessiné la deuxième version de l’application, en partant des questions et des difficultés que les clients me remontaient au quotidien.',
        nl: 'Ik heb de tweede versie van de app hertekend, vertrekkend van de vragen en problemen die klanten dagelijks bij mij meldden.',
        en: 'I redesigned the second version of the app, starting from the questions and pain points clients raised with me every day.',
      },
      resultat: {
        fr: 'À compléter : un chiffre ou un retour client.',
        nl: 'Aan te vullen: een cijfer of klantfeedback.',
        en: 'To be completed: a figure or client feedback.',
      },
    },
    {
      slug: 'formation-pharmacies',
      texture: 'gris',
      entreprise: 'Pharmagest',
      visuelGrand: { fr: 'Officines', nl: 'Apotheken', en: 'Pharmacies' },
      visuelPetit: { fr: 'trois jours sur place', nl: 'drie dagen ter plaatse', en: 'three days on site' },
      titre: { fr: 'Former les pharmacies sur le terrain', nl: 'Apotheken opleiden op het terrein', en: 'Training pharmacies on site' },
      resume: {
        fr: 'Je me déplaçais dans les officines et formais les équipes pendant trois jours à notre logiciel.',
        nl: 'Ik ging langs bij apotheken en leidde de teams drie dagen lang op in onze software.',
        en: 'I travelled to pharmacies and trained their teams on our software over three days.',
      },
      contexte: {
        fr: 'Pharmagest développe le logiciel de gestion utilisé par les pharmacies. Changer d’outil, pour une officine, c’est changer toute sa façon de travailler.',
        nl: 'Pharmagest ontwikkelt de beheersoftware van apotheken. Van software wisselen betekent voor een apotheek een hele nieuwe manier van werken.',
        en: 'Pharmagest builds the management software pharmacies run on. For a pharmacy, switching tools means changing the way the whole team works.',
      },
      role: {
        fr: 'Je passais trois jours dans chaque pharmacie pour former toute l’équipe, à son rythme, directement sur son poste de travail.',
        nl: 'Ik bracht drie dagen door in elke apotheek om het hele team op te leiden, op hun tempo, rechtstreeks aan hun werkpost.',
        en: 'I spent three days in each pharmacy training the whole team, at their pace, right at their workstations.',
      },
      resultat: {
        fr: 'À compléter : combien de pharmacies formées, par exemple.',
        nl: 'Aan te vullen: bijvoorbeeld hoeveel apotheken opgeleid.',
        en: 'To be completed: for example, how many pharmacies trained.',
      },
    },
    {
      slug: 'createurs-flamands',
      texture: 'vert',
      entreprise: 'Kontnu',
      visuelGrand: { fr: 'Créateurs', nl: 'Creators', en: 'Creators' },
      visuelPetit: { fr: 'marché flamand', nl: 'Vlaamse markt', en: 'Flemish market' },
      titre: { fr: 'Recruter des créateurs néerlandophones', nl: 'Nederlandstalige creators rekruteren', en: 'Recruiting Dutch-speaking creators' },
      resume: {
        fr: 'J’ai recruté des créateurs de contenu néerlandophones pour lancer Kontnu en Flandre.',
        nl: 'Ik heb Nederlandstalige content creators gerekruteerd voor de lancering van Kontnu in Vlaanderen.',
        en: 'I recruited Dutch-speaking content creators to launch Kontnu in Flanders.',
      },
      contexte: {
        fr: 'Pour s’ouvrir au marché flamand, Kontnu avait besoin de créateurs qui parlent la langue de leurs clients.',
        nl: 'Om de Vlaamse markt te betreden, had Kontnu creators nodig die de taal van hun klanten spreken.',
        en: 'To open up the Flemish market, Kontnu needed creators who speak their clients’ language.',
      },
      role: {
        fr: 'J’ai cherché, contacté et accompagné les créateurs, en néerlandais, de la première prise de contact au premier tournage.',
        nl: 'Ik zocht, contacteerde en begeleidde de creators, in het Nederlands, van het eerste contact tot de eerste opname.',
        en: 'I found, contacted and onboarded the creators, in Dutch, from first contact to first shoot.',
      },
      resultat: {
        fr: 'À compléter : nombre de créateurs recrutés, par exemple.',
        nl: 'Aan te vullen: bijvoorbeeld aantal gerekruteerde creators.',
        en: 'To be completed: for example, number of creators recruited.',
      },
    },
    {
      slug: 'fidelisation-abonnes',
      texture: 'noir',
      entreprise: 'Kontnu',
      visuelGrand: { fr: 'Fidélité', nl: 'Klantbehoud', en: 'Retention' },
      visuelPetit: { fr: 'un abonné à la fois', nl: 'één abonnee tegelijk', en: 'one subscriber at a time' },
      titre: { fr: 'Garder les abonnés', nl: 'Abonnees behouden', en: 'Keeping subscribers' },
      resume: {
        fr: 'Je suis les demandes de résiliation et je cherche avec chaque abonné une solution pour qu’il reste.',
        nl: 'Ik volg opzeggingen op en zoek met elke abonnee naar een oplossing zodat hij blijft.',
        en: 'I handle cancellation requests and work with each subscriber to find a reason to stay.',
      },
      contexte: {
        fr: 'Quand un abonné veut partir, il y a presque toujours une raison précise. C’est elle qu’il faut comprendre.',
        nl: 'Als een abonnee wil vertrekken, is er bijna altijd een concrete reden. Die moet je begrijpen.',
        en: 'When a subscriber wants to leave, there is almost always a specific reason. That is what you need to understand.',
      },
      role: {
        fr: 'J’écoute, je pose les bonnes questions, puis je propose une solution adaptée : un accompagnement, un ajustement, une autre formule.',
        nl: 'Ik luister, stel de juiste vragen en stel dan een passende oplossing voor: begeleiding, een aanpassing, een andere formule.',
        en: 'I listen, ask the right questions, then offer a fitting solution: support, an adjustment, a different plan.',
      },
      resultat: {
        fr: 'À compléter : part des abonnés restés, par exemple.',
        nl: 'Aan te vullen: bijvoorbeeld aandeel behouden abonnees.',
        en: 'To be completed: for example, share of subscribers retained.',
      },
    },
  ],
  // Titres des blocs sur la page de chaque réussite
  blocs: {
    contexte: { fr: 'Le contexte', nl: 'De context', en: 'The context' },
    role: { fr: 'Mon rôle', nl: 'Mijn rol', en: 'My role' },
    resultat: { fr: 'Le résultat', nl: 'Het resultaat', en: 'The result' },
    retour: { fr: 'Toutes les réussites', nl: 'Alle successen', en: 'All achievements' },
    suivante: { fr: 'Réussite suivante', nl: 'Volgend succes', en: 'Next achievement' },
  },
};

// ------------------------------------------------------------
//  COMPÉTENCES ET OUTILS
//  fort: true  →  la pastille est mise en avant (fond bordeaux)
// ------------------------------------------------------------
export const competences = {
  titre: { fr: 'Ce que je *sais faire*', nl: 'Wat ik *kan*', en: 'What I *do best*' },
  sousTitres: {
    competences: { fr: 'Compétences', nl: 'Competenties', en: 'Skills' },
    outils: { fr: 'Outils', nl: 'Tools', en: 'Tools' },
    langues: { fr: 'Langues', nl: 'Talen', en: 'Languages' },
  },
  liste: [
    { fort: true, nom: { fr: 'Relation clients et partenaires', nl: 'Klant- en partnercontact', en: 'Client & partner relations' } },
    { fort: true, nom: { fr: 'Service client B2B', nl: 'Klantenservice B2B', en: 'B2B customer service' } },
    { fort: true, nom: { fr: 'Formation des utilisateurs', nl: 'Opleiding van gebruikers', en: 'User training' } },
    { fort: false, nom: { fr: 'Coordination et planning', nl: 'Coördinatie & planning', en: 'Coordination & planning' } },
    { fort: false, nom: { fr: 'Marketing d’influence', nl: 'Creator- & influencermarketing', en: 'Creator & influencer marketing' } },
    { fort: false, nom: { fr: 'Reporting', nl: 'Rapportering', en: 'Reporting' } },
    { fort: false, nom: { fr: 'Gestion de dossiers', nl: 'Dossierbeheer', en: 'Case management' } },
    { fort: false, nom: { fr: 'Graphisme', nl: 'Grafisch ontwerp', en: 'Graphic design' } },
    { fort: false, nom: { fr: 'Rigueur et sens du service', nl: 'Nauwkeurig & servicegericht', en: 'Precise & service-minded' } },
  ],
  outils: ['Microsoft Word', 'Microsoft PowerPoint', 'Microsoft Excel'],
  langues: [
    { nom: { fr: 'Français', nl: 'Frans', en: 'French' }, niveau: { fr: 'Courant', nl: 'Vloeiend', en: 'Fluent' } },
    { nom: { fr: 'Néerlandais', nl: 'Nederlands', en: 'Dutch' }, niveau: { fr: 'Courant', nl: 'Vloeiend', en: 'Fluent' } },
    { nom: { fr: 'Anglais', nl: 'Engels', en: 'English' }, niveau: { fr: 'Courant', nl: 'Vloeiend', en: 'Fluent' } },
  ],
};

// ------------------------------------------------------------
//  CONTACT ET PIED DE PAGE
// ------------------------------------------------------------
export const contact = {
  titre: { fr: 'Parlons-*en*', nl: 'Laten we *praten*', en: 'Let’s *talk*' },
  texte: {
    fr: 'Un poste en Customer Success, une question, une collaboration : écrivez-moi, je vous réponds rapidement.',
    nl: 'Een functie in Customer Success, een vraag, een samenwerking: stuur me een bericht, ik antwoord snel.',
    en: 'A Customer Success role, a question, a collaboration: write to me and I’ll get back to you quickly.',
  },
  champs: {
    nom: { fr: 'Votre nom', nl: 'Uw naam', en: 'Your name' },
    email: { fr: 'Votre e-mail', nl: 'Uw e-mailadres', en: 'Your email' },
    message: { fr: 'Votre message', nl: 'Uw bericht', en: 'Your message' },
    envoyer: { fr: 'Envoyer', nl: 'Verzenden', en: 'Send' },
  },
  ouAussi: { fr: 'Ou directement', nl: 'Of rechtstreeks', en: 'Or directly' },
  merci: {
    titre: { fr: 'Merci, c’est *envoyé*', nl: 'Bedankt, het is *verzonden*', en: 'Thank you, it’s *sent*' },
    texte: {
      fr: 'J’ai bien reçu votre message. Je vous réponds très vite.',
      nl: 'Ik heb uw bericht goed ontvangen. Ik antwoord zo snel mogelijk.',
      en: 'I’ve received your message and will get back to you very soon.',
    },
    retour: { fr: 'Retour à l’accueil', nl: 'Terug naar de startpagina', en: 'Back to home' },
  },
};

// ------------------------------------------------------------
//  MENU
// ------------------------------------------------------------
export const menu = {
  aPropos: { fr: 'À propos', nl: 'Over mij', en: 'About' },
  parcours: { fr: 'Parcours', nl: 'Traject', en: 'Journey' },
  reussites: { fr: 'Réussites', nl: 'Successen', en: 'Achievements' },
  competences: { fr: 'Compétences', nl: 'Competenties', en: 'Skills' },
  contact: { fr: 'Me contacter', nl: 'Contacteer me', en: 'Get in touch' },
  quiJeSuis: { fr: 'Qui je suis', nl: 'Wie ik ben', en: 'Who I am' },
  enBref: { fr: 'En bref', nl: 'In het kort', en: 'At a glance' },
  ouvrir: { fr: 'Menu', nl: 'Menu', en: 'Menu' },
  fermer: { fr: 'Fermer', nl: 'Sluiten', en: 'Close' },
  haut: { fr: 'Haut de page', nl: 'Naar boven', en: 'Back to top' },
  passerAuContenu: { fr: 'Aller au contenu', nl: 'Naar de inhoud', en: 'Skip to content' },
};
