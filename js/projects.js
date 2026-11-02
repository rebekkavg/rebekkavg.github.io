/* ==========================================================================
   R.V.G — projectdata
   Nieuwe inhoud toevoegen = enkel dit bestand aanpassen. Zie README.md.

   Per project:  slug (URL: project.html?p=slug), nummer, titel, vak, instelling,
                 jaar, type, locatie, beschrijving, hero, kaart (afbeelding op de startpagina),
                 kaartLabel (optioneel, vervangt 'type' op de startpaginakaart),
                 scenes[]

   Per scène:    layout + tekst + beelden[]   (+ optioneel: donker: true, label: 'Kleine kop')
   Layouts:      'paar'        tekst, daarna beelden naast elkaar
                 'tekeningen'  zoals 'paar', maar beelden volledig getoond (plannen/snedes);
                               met breedEerste: true loopt het eerste beeld over de volle breedte
                 'split'       tekst links, beeld rechts
                 'split-rev'   beeld links, tekst rechts
                 'sticky'      beeld blijft staan terwijl de tekst scrolt (desktop)
                 'stapel'      tekst blijft staan terwijl de beelden eronder/ernaast scrollen
                 'bleed'       beeld over de volle breedte, tekst eronder
                 'bleed-over'  beeld over de volle breedte, tekst in wit vlak erover
                 'donker'      zoals 'split', maar donker
                 'galerij'     enkel beelden in kolommen (geen tekst), bv. extra foto's
   donker: true  maakt van elke scène een donkerblauwe sectie (#36455B)

   Per beeld:    src, alt (beschrijving, Nederlands), w, h (pixelmaten van het bestand),
                 bijschrift, credit (true = "© Rebekka Groeneveld"),
                 fit ('cover' of 'contain'), pos (optioneel: object-position), zoom (false = geen lightbox)
   ========================================================================== */
window.PROJECTS = [
  {
    slug: 'samenleven-in-rust',
    nummer: '01',
    titel: 'Samenleven in Rust',
    vak: 'Ontwerpstudio 1: Componenten & Composities',
    instelling: 'Universiteit Antwerpen',
    jaar: '2024–2025',
    type: 'Studentenhuis voor vier internationale studenten',
    locatie: 'Antwerpen, Scheldebocht naast het Droogdokkenpark',
    beschrijving: 'Een studentenhuis voor vier internationale studenten aan de Schelde in Antwerpen: een ontwerp tussen rust en gemeenschap.',
    kaart: { src: 'assets/img/project-1/kaart.webp', alt: 'Houten maquette van het studentenhuis met twee bouwlagen, balkons en een lichte houten gevel.', w: 1000, h: 1334 },
    hero: { src: 'assets/img/project-1/00-hoofdbeeld-schelde.webp', alt: 'Foto van de Schelde met riet en een houten steiger op de voorgrond en de skyline op de achtergrond.', w: 1800, h: 1200, credit: true },
    scenes: [
      { layout: 'tekeningen',
        tekst: 'Het ontwerp vertrekt vanuit een opgegeven draagstructuur: een vast raster van negen vierkanten, verdeeld over twee niveaus. Binnen deze structuur wordt gezocht naar een evenwicht tussen constructie, circulatie en de overgang van publiek naar privé. Context, oriëntatie en een kritische herwerking van het programma van eisen sturen de verdere ontwikkeling.',
        beelden: [
          { src: 'assets/img/project-1/01-grid-bovenaanzicht.webp', alt: 'Bovenaanzicht van het opgegeven raster van negen vierkanten.', bijschrift: 'Opgegeven raster, bovenaanzicht', w: 527, h: 521 },
          { src: 'assets/img/project-1/02-grid-isometrie.webp', alt: 'Isometrie van de opgegeven draagstructuur verdeeld over twee niveaus.', bijschrift: 'Opgegeven raster, isometrie', w: 364, h: 355 }
        ] },
      { layout: 'stapel', donker: true,
        tekst: 'De locatie naast het Droogdokkenpark vormt een gelaagde context waarin de industriële geschiedenis van het havengebied en recente stadsontwikkelingen samenkomen. De langgerekte site volgt een noord-zuidoriëntatie, met de Schelde aan de westzijde en de stad aan de oostzijde. Het ontwerp speelt hierop in door zich enerzijds te openen naar het water en de zonsondergang, en anderzijds naar de stad en de ochtendzon. Panoramische zichten op de Schelde, de skyline en de haven maken het landschap tot een actief onderdeel van het wonen.',
        beelden: [
          { src: 'assets/img/project-1/03-implanting.webp', alt: 'Luchtfoto in zwart-wit van de site naast het Droogdokkenpark en de Schelde, met de implanting van het gebouw.', bijschrift: 'Implanting van het studentenhuis', w: 877, h: 877 },
          { src: 'assets/img/project-1/04-schelde-uitzicht.webp', alt: 'Foto van de Schelde met de kaai en de skyline van Antwerpen onder een bewolkte lucht.', bijschrift: 'Uitzicht op de Schelde', credit: true, w: 1280, h: 1920 }
        ] },
      { layout: 'split',
        tekst: 'Het studentenhuis biedt plaats aan vier internationale studenten en zoekt naar een evenwicht tussen individueel wonen en gedeeld leven. De vier slaapkamers liggen aan de zijde van de Schelde en krijgen elk een eigen uitzicht. Daartegenover vormen de keuken, living en het terras samen het sociale hart van het gebouw, waar ontmoeting centraal staat zonder de individuele rust te verliezen.',
        beelden: [
          { src: 'assets/img/project-1/05-maquette-buitenzicht.webp', alt: 'Houten maquette van het studentenhuis in buitenaanzicht, met twee bouwlagen en balkons.', bijschrift: 'Maquette, buitenzicht', credit: true, w: 1800, h: 2400 }
        ] },
      { layout: 'split-rev', donker: true,
        tekst: 'Een centrale vide verbindt de twee niveaus en versterkt het contact tussen de bewoners. De multifunctionele kast werkt als een ruimtelijk element dat verschillende sferen van elkaar scheidt zonder ze volledig af te sluiten. Samen met de circulatie ontstaan geleidelijke overgangen tussen samen zijn en afzondering, in plaats van een harde grens tussen collectief en privé.',
        beelden: [
          { src: 'assets/img/project-1/06-maquette-vide-kast.webp', alt: 'Maquette van binnenuit met een houten kolom, de multifunctionele kast en de vide.', bijschrift: 'Maquette, vide en multifunctionele kast', credit: true, w: 1800, h: 2400 }
        ] },
      { layout: 'split',
        tekst: 'Zo ontstaat een woonomgeving waarin openheid en geborgenheid, ontmoeting en afzondering naast elkaar bestaan. De Schelde vormt een constant rustpunt, terwijl de gedeelde ruimtes het dagelijkse leven dragen. Het ontwerp onderzoekt hoe architectuur samenleven kan ondersteunen zonder de individuele behoefte aan rust en privacy uit het oog te verliezen.',
        beelden: [
          { src: 'assets/img/project-1/07-render-eindresultaat.webp', alt: 'Render van het studentenhuis: een wit volume op twee niveaus met balkons, in een grasachtig landschap.', bijschrift: 'Render van het studentenhuis', credit: true, w: 970, h: 618 }
        ] },
      { layout: 'tekeningen', donker: true, label: 'Tekeningen', breedEerste: true,
        beelden: [
          { src: 'assets/img/project-1/10-snede.webp', alt: 'Lijntekening van snede door het studentenhuis met de twee niveaus en de centrale vide.', bijschrift: 'Snede', w: 1279, h: 662 },
          { src: 'assets/img/project-1/11-grondplan-gelijkvloers.webp', alt: 'Lijntekening van het grondplan van het gelijkvloers.', bijschrift: 'Grondplan gelijkvloers', w: 1319, h: 1380 },
          { src: 'assets/img/project-1/12-grondplan-eerste-verdieping.webp', alt: 'Lijntekening van het grondplan van de eerste verdieping.', bijschrift: 'Grondplan eerste verdieping', w: 1087, h: 1020 }
        ] },
      { layout: 'galerij', label: 'Extra foto\u2019s',
        beelden: [
          { src: 'assets/img/project-1/08-maquette-interieur-a.webp', alt: 'Maquette van het interieur met een ronde tafel, een trap en de multifunctionele kast.', bijschrift: 'Maquette, interieur', credit: true, w: 1800, h: 2400 },
          { src: 'assets/img/project-1/08-maquette-interieur-b.webp', alt: 'Maquette van het interieur met een houten kolom, een leuning en de vide.', bijschrift: 'Maquette, interieur', credit: true, w: 1800, h: 2400 }
        ] }
    ]
  },

  {
    slug: 'onder-invloed-van-kunst',
    nummer: '02',
    titel: 'Onder Invloed van Kunst',
    vak: 'Ontwerpstudio: Interieur als Gedeelde Ruimte',
    instelling: 'Universiteit Antwerpen',
    jaar: '2025–2026',
    type: 'Paviljoen voor kunst, natuur en welzijn',
    locatie: 'Antwerpen, Middelheimpark',
    beschrijving: 'Een paviljoen in het Middelheimpark in Antwerpen waar kunst, natuur en creativiteit samenkomen.',
    kaart: { src: 'assets/img/project-2/kaart.webp', alt: 'Maquette van het paviljoen met een donkere, rood-bruine houten gevel en grote vensters.', w: 1000, h: 1333 },
    hero: { src: 'assets/img/project-2/00-hoofdbeeld.webp', alt: 'Foto van beelden in het Middelheimpark op een grasveld onder een bewolkte lucht.', w: 1800, h: 1350, credit: true },
    scenes: [
      { layout: 'paar',
        tekst: 'Kunst inspireert. Vanuit die gedachte ontstaat in het Middelheimpark een paviljoen waar kunst, natuur en creativiteit samenkomen. Een plek waar bezoekers niet alleen kijken, maar ook onder invloed van kunst hun eigen creatieve proces ontdekken.',
        beelden: [
          { src: 'assets/img/project-2/01-kunst.webp', alt: 'Foto van een beeldhouwwerk in het Middelheimpark met kale bomen op de achtergrond.', bijschrift: 'Middelheimpark, kunstwerk', credit: true, w: 1400, h: 1867 },
          { src: 'assets/img/project-2/02-interieur.webp', alt: 'Render van het interieur van het paviljoen met houten balken, een linnen gordijn en een tafel bij het raam.', bijschrift: 'Interieur van het paviljoen', credit: true, w: 1800, h: 1012 }
        ] },
      { layout: 'stapel', donker: true,
        tekst: 'Geïnspireerd door het depot vormt een raster de basis van het ontwerp. Het structureert het paviljoen en bepaalt zowel de constructie als de ruimtelijke indeling. Binnen deze heldere structuur ontstaan verschillende ruimtes die uitnodigen tot observeren, experimenteren en ontmoeten.',
        beelden: [
          { src: 'assets/img/project-2/03-park-beeld.webp', alt: 'Zwart-witfoto van beelden in het Middelheimpark tussen de bomen.', bijschrift: 'Middelheimpark, beelden en natuur', credit: true, w: 1400, h: 1400 },
          { src: 'assets/img/project-2/04-maquette-raster.webp', alt: 'Bovenaanzicht van de maquette: een houten raster met vakken, kurkvloer en enkele planten.', bijschrift: 'Maquette, bovenaanzicht van het raster', credit: true, w: 1600, h: 1600 }
        ] },
      { layout: 'paar',
        tekst: 'Een houten skelet in Europees douglas en OSB geeft het paviljoen zijn warme, natuurlijke karakter. Semi-transparante linnen gordijnen brengen zachtheid in het geheel en maken de ruimte flexibel. Ze filteren het licht en laten toe om verschillende zones af te bakenen zonder de openheid te verliezen.',
        beelden: [
          { src: 'assets/img/project-2/05-maquette-gordijn.webp', alt: 'Maquette van binnenuit met houten skelet en hangende linnen gordijnen.', bijschrift: 'Maquette, linnen gordijnen', credit: true, w: 1600, h: 2133 },
          { src: 'assets/img/project-2/06-maquette-venster.webp', alt: 'Maquette met zicht op een groot venster, een plant op de voorgrond en een houten balkenplafond.', bijschrift: 'Maquette, zicht naar buiten', credit: true, w: 1600, h: 2134 }
        ] },
      { layout: 'stapel', donker: true,
        tekst: 'Van constructie tot interieur blijft het raster de verbindende factor. Het resultaat is een paviljoen waar structuur en materialiteit samen een omgeving creëren die ruimte laat voor creativiteit. Een plek waar kunst niet alleen wordt bekeken, maar ook aanzet tot iets nieuws.',
        beelden: [
          { src: 'assets/img/project-2/07-interieur-werktafel.webp', alt: 'Render van het interieur met een lange houten werktafel, linnen gordijnen en uitzicht op het park.', bijschrift: 'Interieur, werktafel', credit: true, w: 1800, h: 1012 },
          { src: 'assets/img/project-2/08-maquette-gevel.webp', alt: 'Maquette van het paviljoen met een rood-bruine houten gevel en een groot venster met een plant erachter.', bijschrift: 'Maquette, gevel', credit: true, w: 1600, h: 2134 }
        ] },
      { layout: 'tekeningen', label: 'Tekeningen', breedEerste: true,
        beelden: [
          { src: 'assets/img/project-2/10-snede.webp', alt: 'Lijntekening van de snede door het paviljoen met het houten skelet en de tafels.', bijschrift: 'Snede', w: 1035, h: 347 },
          { src: 'assets/img/project-2/09-grondplan.webp', alt: 'Lijntekening van het grondplan van het paviljoen met het raster, de tafels en de ingang.', bijschrift: 'Grondplan', w: 1210, h: 817 }
        ] },
      { layout: 'galerij', donker: true, label: 'Extra foto\u2019s',
        beelden: [
          { src: 'assets/img/project-2/14-interieur-gordijnen.webp', alt: 'Render van het interieur met linnen gordijn en een lange tafel bij het raam.', bijschrift: 'Interieur, gordijnen', credit: true, w: 1800, h: 1012 },
          { src: 'assets/img/project-2/11-gevel-links.webp', alt: 'Render van de gevel van het paviljoen met een persoon achter het raam en een boom rechts.', bijschrift: 'Gevel', credit: true, w: 1800, h: 1012 },
          { src: 'assets/img/project-2/12-gevel-boom.webp', alt: 'Render van de gevel van het paviljoen met een boom voor het raam.', bijschrift: 'Gevel met boom', credit: true, w: 1800, h: 1012 },
          { src: 'assets/img/project-2/13-maquette-totaal.webp', alt: 'Maquette van het paviljoen met een donkere gevel en een zwarte oprit op een witte ondergrond.', bijschrift: 'Maquette, paviljoen', credit: true, w: 1600, h: 2134 }
        ] }
    ]
  },

  /* ---- PLACEHOLDER PROJECT 3 — vervang tekst, bestandsnamen en metadata ---- */
  {
    slug: 'project-3',
    nummer: '03',
    titel: 'Project 3',
    kaart: null,
    kaartLabel: 'Coming soon!',
    vak: 'Vak of studio (placeholder)',
    instelling: 'Universiteit Antwerpen',
    jaar: '2026–2027',
    type: 'Type project (placeholder)',
    locatie: 'Locatie (placeholder)',
    beschrijving: 'Placeholder voor project 3 van Rebekka Groeneveld.',
    hero: { src: 'assets/img/project-3/00-hoofdbeeld.jpg', alt: 'Placeholder: hoofdbeeld van project 3.', ratio: '16/9', w: 2400, h: 1350, credit: true },
    scenes: [
      { layout: 'split',
        tekst: 'PLACEHOLDER. Hier komt een korte tekst over het vertrekpunt van dit project. Vervang deze tekst in js/projects.js door je eigen verhaal. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        beelden: [ { src: 'assets/img/project-3/01-vertrekpunt.jpg', alt: 'Placeholder: beeld bij het vertrekpunt.', ratio: '4/3', w: 1600, h: 1200, bijschrift: 'Vertrekpunt' } ] },
      { layout: 'sticky',
        tekst: 'PLACEHOLDER. Hier komt een tekst over de plek en de context. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.',
        beelden: [ { src: 'assets/img/project-3/02-plek.jpg', alt: 'Placeholder: beeld van de plek.', ratio: '4/3', w: 1600, h: 1200, bijschrift: 'Plek', credit: true } ] },
      { layout: 'donker',
        tekst: 'PLACEHOLDER. Hier komt het conceptmoment van het project. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
        beelden: [ { src: 'assets/img/project-3/03-idee.jpg', alt: 'Placeholder: beeld bij het idee.', ratio: '4/3', w: 1600, h: 1200, bijschrift: 'Idee', credit: true } ] },
      { layout: 'paar',
        tekst: 'PLACEHOLDER. Hier komt een tekst over de indeling en het detail. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
        beelden: [
          { src: 'assets/img/project-3/04-indeling.jpg', alt: 'Placeholder: beeld van de indeling.', ratio: '4/3', w: 1600, h: 1200, bijschrift: 'Indeling', credit: true },
          { src: 'assets/img/project-3/04-detail.jpg', alt: 'Placeholder: beeld van een detail.', ratio: '4/3', w: 1600, h: 1200, bijschrift: 'Detail', credit: true }
        ] },
      { layout: 'tekeningen',
        tekst: 'PLACEHOLDER. Hier komt een tekst bij de tekeningen. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
        beelden: [
          { src: 'assets/img/project-3/05-grondplan.png', alt: 'Placeholder: grondplan.', ratio: '4/3', w: 1800, h: 1350, bijschrift: 'Grondplan 1:100' },
          { src: 'assets/img/project-3/05-snede.png', alt: 'Placeholder: snede.', ratio: '4/3', w: 1800, h: 1350, bijschrift: 'Snede AA\u2019 1:100' }
        ] },
      { layout: 'slot',
        tekst: 'PLACEHOLDER. Hier komt de afsluitende tekst van het project. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis.',
        beelden: [ { src: 'assets/img/project-3/06-eindbeeld.jpg', alt: 'Placeholder: eindbeeld van het project.', ratio: '3/2', w: 2400, h: 1600, bijschrift: 'Eindbeeld', credit: true } ] }
    ],
    galerij: [
      { src: 'assets/img/project-3/03-idee.jpg', alt: 'Placeholder: beeld bij het idee.', ratio: '4/3', w: 1600, h: 1200, bijschrift: 'Idee', credit: true },
      { src: 'assets/img/project-3/06-eindbeeld.jpg', alt: 'Placeholder: eindbeeld van het project.', ratio: '4/3', w: 1600, h: 1200, bijschrift: 'Eindbeeld', credit: true }
    ]
  }
];
