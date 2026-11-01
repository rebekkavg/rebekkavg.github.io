/* ==========================================================================
   R.V.G — projectdata
   Nieuwe inhoud toevoegen = enkel dit bestand aanpassen. Zie README.md.

   Per project:  slug (URL: project.html?p=slug), nummer, titel, vak, instelling,
                 jaar, type, locatie, beschrijving, hero, scenes[], galerij[] (optioneel)

   Per scène:    layout + tekst + beelden[]
   Layouts:      'paar'        tekst, daarna twee beelden naast elkaar
                 'tekeningen'  zoals 'paar', maar beelden volledig getoond (plannen/snedes)
                 'split'       tekst links, beeld rechts
                 'split-rev'   beeld links, tekst rechts
                 'sticky'      beeld blijft staan terwijl de tekst scrolt (desktop)
                 'bleed'       beeld over de volle breedte, tekst eronder
                 'bleed-over'  beeld over de volle breedte, tekst in wit vlak erover
                 'donker'      donkere sectie (#36455B), tekst + beeld
                 'slot'        groot slotbeeld, tekst eronder, daarna de galerij

   Per beeld:    src, alt (beschrijving, Nederlands), ratio ('4/3', '3/2', '2/3' ...),
                 fit ('cover' of 'contain'), bijschrift, credit (true = "© Rebekka Groeneveld"),
                 pos (optioneel: object-position, bv. 'center 70%'), zoom (false = geen lightbox)
   ========================================================================== */
window.PROJECTS = [
  {
    slug: 'samenleven-in-rust',
    nummer: '01',
    titel: 'Samenleven in rust',
    vak: 'Ontwerpstudio 1: Componenten & Composities',
    instelling: 'Universiteit Antwerpen',
    jaar: '2025–2026',
    type: 'Studentenhuis voor vier internationale studenten',
    locatie: 'Antwerpen, Scheldebocht naast het Droogdokkenpark',
    beschrijving: 'Een studentenhuis voor vier internationale studenten aan de Schelde in Antwerpen: een ontwerp tussen rust en gemeenschap.',
    hero: {
      src: 'assets/img/project-1/04-render-leefruimte.jpg',
      alt: 'Render van de leefruimte: een persoon staat bij een groot raam met zicht op de Schelde, naast een beige kolom en een blauwgrijze wand.',
      ratio: '2/3', w: 1600, h: 2400, credit: true
    },
    scenes: [
      { layout: 'tekeningen',
        tekst: 'Het ontwerp vertrekt vanuit een opgegeven draagstructuur: een vast raster van negen vierkanten, verdeeld over twee niveaus. Binnen deze vaste structuur wordt onderzocht hoe ruimte niet alleen functioneel, maar ook als een compositorisch geheel kan worden georganiseerd. De relatie tussen constructie, circulatie en de verschillende gradaties van publiek naar privé vormt daarbij het uitgangspunt. Context, oriëntatie en het kritisch herdenken van het programma van eisen sturen de verdere ontwikkeling van het ontwerp.',
        beelden: [
          { src: 'assets/img/project-1/01-grid-bovenaanzicht.jpg', alt: 'Bovenaanzicht van het opgegeven raster van negen vierkanten.', bijschrift: 'Opgegeven raster, bovenaanzicht', ratio: '4/3', w: 1600, h: 1200 },
          { src: 'assets/img/project-1/02-grid-isometrie.jpg', alt: 'Isometrie van de opgegeven draagstructuur verdeeld over twee niveaus.', bijschrift: 'Opgegeven raster, isometrie', ratio: '4/3', w: 1600, h: 1200 }
        ] },
      { layout: 'sticky',
        tekst: 'De locatie bevindt zich naast het Droogdokkenpark, een levendige plek waar buurtbewoners, toeristen en evenementen samenkomen. De industriële geschiedenis van het havengebied staat er naast recente stadsontwikkelingen en vormt een gelaagde context voor het ontwerp. De langgerekte site volgt een duidelijke noord-zuidoriëntatie, met de Schelde aan de westzijde en de stad aan de oostzijde.',
        beelden: [
          { src: 'assets/img/project-1/03-situering-schelde.jpg', alt: 'Foto van de Schelde met de kaai en de skyline van Antwerpen op de achtergrond.', bijschrift: 'Situering van het studentenhuis', credit: true, ratio: '4/3', w: 2400, h: 1600 }
        ] },
      { layout: 'bleed-over',
        tekst: 'Deze ligging bepaalt in belangrijke mate de beleving van het gebouw. Aan de ene zijde opent het ontwerp zich naar het water en de zonsondergang, aan de andere zijde naar de stad en de ochtendzon. De open ligging zorgt voor panoramische zichten op de Schelde, de skyline en de haven van Antwerpen. Het landschap wordt zo geen achtergrond, maar een actief onderdeel van het wonen.',
        beelden: [
          { src: 'assets/img/project-1/03-situering-schelde.jpg', alt: 'Brede foto van de Schelde met de kaai, de skyline en de haven van Antwerpen.', bijschrift: 'Zicht op de Schelde', credit: true, pos: 'center 65%', ratio: '3/2', w: 2400, h: 1600 }
        ] },
      { layout: 'donker',
        tekst: 'Het studentenhuis is ontworpen voor vier internationale studenten en zoekt naar een evenwicht tussen individueel wonen en gedeeld leven. De vier slaapkamers zijn bewust aan de zijde van de Schelde geplaatst. Iedere kamer krijgt zo een eigen uitzicht en een directe relatie met het water. Licht, rust en oriëntatie vormen de basis van deze private ruimtes.',
        beelden: [
          { src: 'assets/img/project-1/05-render-slaapkamer.jpg', alt: 'Grijstintrender van een slaapkamer met een raam naar de Schelde.', bijschrift: 'Slaapkamer', credit: true, ratio: '4/3', w: 1600, h: 1200 }
        ] },
      { layout: 'paar',
        tekst: 'Daartegenover staan de gemeenschappelijke ruimtes. Keuken, living en terras vormen samen het sociale hart van het studentenhuis. Ze zijn zo georganiseerd dat ontmoeting vanzelfsprekend wordt, zonder dat de individuele ruimte volledig verdwijnt. De circulatie verbindt de verschillende ruimtes en maakt geleidelijke overgangen mogelijk tussen samen zijn en afzondering.',
        beelden: [
          { src: 'assets/img/project-1/06-render-keuken.jpg', alt: 'Grijstintrender van de gemeenschappelijke keuken.', bijschrift: 'Keuken', credit: true, ratio: '4/3', w: 1600, h: 1200 },
          { src: 'assets/img/project-1/07-render-leefruimte-2.jpg', alt: 'Grijstintrender van de leefruimte met zitplaatsen en zicht naar buiten.', bijschrift: 'Leefruimte', credit: true, ratio: '4/3', w: 1600, h: 1200 }
        ] },
      { layout: 'tekeningen',
        tekst: 'Een centrale vide versterkt deze ruimtelijke gelaagdheid. De ruimte verbindt de verschillende niveaus en maakt contact tussen de bewoners mogelijk, terwijl ze tegelijk afstand en overzicht creëert. Ook de multifunctionele kast werkt als een ruimtelijk element dat verschillende sferen van elkaar scheidt zonder ze volledig af te sluiten. Zo ontstaat geen harde grens tussen collectief en privé, maar een reeks tussenzones.',
        beelden: [
          { src: 'assets/img/project-1/10-snede-aa.png', alt: 'Zwarte lijntekening van snede AA\u2019 door het studentenhuis met de centrale vide.', bijschrift: 'Snede AA\u2019', ratio: '3/2', w: 1800, h: 1200 },
          { src: 'assets/img/project-1/11-snede-bb.png', alt: 'Zwarte lijntekening van snede BB\u2019 door het studentenhuis.', bijschrift: 'Snede BB\u2019', ratio: '3/2', w: 1800, h: 1200 }
        ] },
      { layout: 'tekeningen',
        tekst: 'Het ontwerp probeert daardoor niet simpelweg een verzameling kamers te organiseren, maar een woonomgeving te creëren waarin verschillende vormen van samenleven naast elkaar kunnen bestaan. Openheid wordt afgewisseld met geborgenheid, ontmoeting met afzondering en collectiviteit met individuele rust.',
        beelden: [
          { src: 'assets/img/project-1/08-grondplan-gelijkvloers.png', alt: 'Zwarte lijntekening van het grondplan van het gelijkvloers.', bijschrift: 'Grondplan gelijkvloers 1:150', ratio: '4/3', w: 1800, h: 1350 },
          { src: 'assets/img/project-1/09-grondplan-eerste-verdieping.png', alt: 'Zwarte lijntekening van het grondplan van de eerste verdieping.', bijschrift: 'Grondplan eerste verdieping 1:50', ratio: '4/3', w: 1800, h: 1350 }
        ] },
      { layout: 'slot',
        tekst: 'Uiteindelijk draait het project om de vraag hoe architectuur samenleven kan ondersteunen zonder het individu te verliezen. Door de oriëntatie, circulatie en ruimtelijke overgangen zorgvuldig op elkaar af te stemmen, ontstaat een studentenhuis dat zich opent naar zijn omgeving en tegelijk ruimte laat voor terugtrekking. De Schelde wordt daarbij een constant rustpunt, terwijl de gedeelde ruimtes het dagelijkse leven en de ontmoeting tussen de bewoners dragen.',
        beelden: [
          { src: 'assets/img/project-1/04-render-leefruimte.jpg', alt: 'Render van de kamer met een persoon bij het raam en een blauwgrijze wand.', bijschrift: 'Leefruimte', credit: true, ratio: '2/3', w: 1600, h: 2400 }
        ] }
    ],
    galerij: [
      { src: 'assets/img/project-1/04-render-leefruimte.jpg', alt: 'Render van de leefruimte met een persoon bij het raam.', bijschrift: 'Leefruimte', credit: true, ratio: '2/3', w: 1600, h: 2400 },
      { src: 'assets/img/project-1/05-render-slaapkamer.jpg', alt: 'Grijstintrender van een slaapkamer.', bijschrift: 'Slaapkamer', credit: true, ratio: '4/3', w: 1600, h: 1200 },
      { src: 'assets/img/project-1/06-render-keuken.jpg', alt: 'Grijstintrender van de keuken.', bijschrift: 'Keuken', credit: true, ratio: '4/3', w: 1600, h: 1200 },
      { src: 'assets/img/project-1/07-render-leefruimte-2.jpg', alt: 'Grijstintrender van de leefruimte.', bijschrift: 'Leefruimte', credit: true, ratio: '4/3', w: 1600, h: 1200 }
    ]
  },

  /* ---- PLACEHOLDER PROJECT 2 — vervang tekst, bestandsnamen en metadata ---- */
  {
    slug: 'project-2',
    nummer: '02',
    titel: 'Project 2',
    vak: 'Vak of studio (placeholder)',
    instelling: 'Universiteit Antwerpen',
    jaar: '2025–2026',
    type: 'Type project (placeholder)',
    locatie: 'Locatie (placeholder)',
    beschrijving: 'Placeholder voor project 2 van Rebekka Groeneveld.',
    hero: { src: 'assets/img/project-2/00-hoofdbeeld.jpg', alt: 'Placeholder: hoofdbeeld van project 2.', ratio: '16/9', w: 2400, h: 1350, credit: true },
    scenes: [
      { layout: 'split',
        tekst: 'PLACEHOLDER. Hier komt een korte tekst over het vertrekpunt van dit project. Vervang deze tekst in js/projects.js door je eigen verhaal. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        beelden: [ { src: 'assets/img/project-2/01-vertrekpunt.jpg', alt: 'Placeholder: beeld bij het vertrekpunt.', ratio: '4/3', w: 1600, h: 1200, bijschrift: 'Vertrekpunt' } ] },
      { layout: 'sticky',
        tekst: 'PLACEHOLDER. Hier komt een tekst over de plek en de context. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.',
        beelden: [ { src: 'assets/img/project-2/02-plek.jpg', alt: 'Placeholder: beeld van de plek.', ratio: '4/3', w: 1600, h: 1200, bijschrift: 'Plek', credit: true } ] },
      { layout: 'donker',
        tekst: 'PLACEHOLDER. Hier komt het conceptmoment van het project. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
        beelden: [ { src: 'assets/img/project-2/03-idee.jpg', alt: 'Placeholder: beeld bij het idee.', ratio: '4/3', w: 1600, h: 1200, bijschrift: 'Idee', credit: true } ] },
      { layout: 'paar',
        tekst: 'PLACEHOLDER. Hier komt een tekst over de indeling en het detail. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
        beelden: [
          { src: 'assets/img/project-2/04-indeling.jpg', alt: 'Placeholder: beeld van de indeling.', ratio: '4/3', w: 1600, h: 1200, bijschrift: 'Indeling', credit: true },
          { src: 'assets/img/project-2/04-detail.jpg', alt: 'Placeholder: beeld van een detail.', ratio: '4/3', w: 1600, h: 1200, bijschrift: 'Detail', credit: true }
        ] },
      { layout: 'tekeningen',
        tekst: 'PLACEHOLDER. Hier komt een tekst bij de tekeningen. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
        beelden: [
          { src: 'assets/img/project-2/05-grondplan.png', alt: 'Placeholder: grondplan.', ratio: '4/3', w: 1800, h: 1350, bijschrift: 'Grondplan 1:100' },
          { src: 'assets/img/project-2/05-snede.png', alt: 'Placeholder: snede.', ratio: '4/3', w: 1800, h: 1350, bijschrift: 'Snede AA\u2019 1:100' }
        ] },
      { layout: 'slot',
        tekst: 'PLACEHOLDER. Hier komt de afsluitende tekst van het project. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis.',
        beelden: [ { src: 'assets/img/project-2/06-eindbeeld.jpg', alt: 'Placeholder: eindbeeld van het project.', ratio: '3/2', w: 2400, h: 1600, bijschrift: 'Eindbeeld', credit: true } ] }
    ],
    galerij: [
      { src: 'assets/img/project-2/03-idee.jpg', alt: 'Placeholder: beeld bij het idee.', ratio: '4/3', w: 1600, h: 1200, bijschrift: 'Idee', credit: true },
      { src: 'assets/img/project-2/06-eindbeeld.jpg', alt: 'Placeholder: eindbeeld van het project.', ratio: '4/3', w: 1600, h: 1200, bijschrift: 'Eindbeeld', credit: true }
    ]
  },

  /* ---- PLACEHOLDER PROJECT 3 — vervang tekst, bestandsnamen en metadata ---- */
  {
    slug: 'project-3',
    nummer: '03',
    titel: 'Project 3',
    vak: 'Vak of studio (placeholder)',
    instelling: 'Universiteit Antwerpen',
    jaar: '2025–2026',
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
