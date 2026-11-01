/* ==========================================================================
   R.V.G — projectdata
   Nieuwe inhoud toevoegen = enkel dit bestand aanpassen. Zie README.md.

   Per project:  slug (URL: project.html?p=slug), nummer, titel, vak, instelling,
                 jaar, type, locatie, beschrijving, hero, kaart (afbeelding op de startpagina),
                 kaartLabel (optioneel, vervangt 'type' op de startpaginakaart),
                 scenes[], galerij[] (optioneel)

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
    titel: 'Samenleven in Rust',
    vak: 'Ontwerpstudio 1: Componenten & Composities',
    instelling: 'Universiteit Antwerpen',
    jaar: '2025–2026',
    type: 'Studentenhuis voor vier internationale studenten',
    locatie: 'Antwerpen, Scheldebocht naast het Droogdokkenpark',
    beschrijving: 'Een studentenhuis voor vier internationale studenten aan de Schelde in Antwerpen: een ontwerp tussen rust en gemeenschap.',
    kaart: { src: 'assets/img/project-1/kaart.webp', alt: 'Houten maquette van het studentenhuis met twee bouwlagen, balkons en een lichte houten gevel.', w: 1000, h: 1334 },
    hero: {
      src: 'assets/img/project-1/00-hoofdbeeld-eindresultaat.webp',
      alt: 'Render van het studentenhuis: een wit volume op twee niveaus met balkons, in een grasachtig landschap onder een zachte lucht.',
      ratio: '3/2', w: 970, h: 618, credit: true
    },
    scenes: [
      { layout: 'tekeningen',
        tekst: 'Het ontwerp vertrekt vanuit een opgegeven draagstructuur: een vast raster van negen vierkanten, verdeeld over twee niveaus. Binnen deze vaste structuur wordt onderzocht hoe ruimte niet alleen functioneel, maar ook als een compositorisch geheel kan worden georganiseerd. De relatie tussen constructie, circulatie en de verschillende gradaties van publiek naar privé vormt daarbij het uitgangspunt. Context, oriëntatie en het kritisch herdenken van het programma van eisen sturen de verdere ontwikkeling van het ontwerp.',
        beelden: [
          { src: 'assets/img/project-1/01-grid-bovenaanzicht.webp', alt: 'Bovenaanzicht van het opgegeven raster van negen vierkanten.', bijschrift: 'Opgegeven raster, bovenaanzicht', ratio: '1/1', w: 527, h: 521 },
          { src: 'assets/img/project-1/02-grid-isometrie.webp', alt: 'Isometrie van de opgegeven draagstructuur verdeeld over twee niveaus.', bijschrift: 'Opgegeven raster, isometrie', ratio: '1/1', w: 364, h: 355 }
        ] },
      { layout: 'sticky',
        tekst: 'De locatie bevindt zich naast het Droogdokkenpark, een levendige plek waar buurtbewoners, toeristen en evenementen samenkomen. De industriële geschiedenis van het havengebied staat er naast recente stadsontwikkelingen en vormt een gelaagde context voor het ontwerp. De langgerekte site volgt een duidelijke noord-zuidoriëntatie, met de Schelde aan de westzijde en de stad aan de oostzijde.',
        beelden: [
          { src: 'assets/img/project-1/03-maquette-buitenaanzicht.webp', alt: 'Houten maquette van het studentenhuis in buitenaanzicht, met twee bouwlagen en omlopende balkons.', bijschrift: 'Maquette, buitenaanzicht', credit: true, ratio: '3/4', w: 1800, h: 2400 }
        ] },
      { layout: 'split-rev',
        tekst: 'Deze ligging bepaalt in belangrijke mate de beleving van het gebouw. Aan de ene zijde opent het ontwerp zich naar het water en de zonsondergang, aan de andere zijde naar de stad en de ochtendzon. De open ligging zorgt voor panoramische zichten op de Schelde, de skyline en de haven van Antwerpen. Het landschap wordt zo geen achtergrond, maar een actief onderdeel van het wonen.',
        beelden: [
          { src: 'assets/img/project-1/04-maquette-lichtinval.webp', alt: 'Maquette van binnenuit: zonlicht valt door een hoog raam op de houten vloer, naast een houten kolom.', bijschrift: 'Maquette, lichtinval', credit: true, ratio: '3/4', w: 1800, h: 2400 }
        ] },
      { layout: 'donker',
        tekst: 'Het studentenhuis is ontworpen voor vier internationale studenten en zoekt naar een evenwicht tussen individueel wonen en gedeeld leven. De vier slaapkamers zijn bewust aan de zijde van de Schelde geplaatst. Iedere kamer krijgt zo een eigen uitzicht en een directe relatie met het water. Licht, rust en oriëntatie vormen de basis van deze private ruimtes.',
        beelden: [
          { src: 'assets/img/project-1/05-maquette-vide.webp', alt: 'Maquette met zicht over de vide en een houten kolom, met een leuning en ramen op het bovenniveau.', bijschrift: 'Maquette, bovenniveau en vide', credit: true, ratio: '3/4', w: 1800, h: 2400 }
        ] },
      { layout: 'split',
        tekst: 'Daartegenover staan de gemeenschappelijke ruimtes. Keuken, living en terras vormen samen het sociale hart van het studentenhuis. Ze zijn zo georganiseerd dat ontmoeting vanzelfsprekend wordt, zonder dat de individuele ruimte volledig verdwijnt. De circulatie verbindt de verschillende ruimtes en maakt geleidelijke overgangen mogelijk tussen samen zijn en afzondering.',
        beelden: [
          { src: 'assets/img/project-1/06-maquette-trap-tafel.webp', alt: 'Maquette van de gemeenschappelijke ruimte met een ronde houten tafel, een trap en de multifunctionele kast.', bijschrift: 'Maquette, gemeenschappelijke ruimte', credit: true, ratio: '3/4', w: 1800, h: 2400 }
        ] },
      { layout: 'tekeningen',
        tekst: 'Een centrale vide versterkt deze ruimtelijke gelaagdheid. De ruimte verbindt de verschillende niveaus en maakt contact tussen de bewoners mogelijk, terwijl ze tegelijk afstand en overzicht creëert. Ook de multifunctionele kast werkt als een ruimtelijk element dat verschillende sferen van elkaar scheidt zonder ze volledig af te sluiten. Zo ontstaat geen harde grens tussen collectief en privé, maar een reeks tussenzones.',
        beelden: [
          { src: 'assets/img/project-1/07-snede-aa.webp', alt: 'Lijntekening van snede AA\u2019 door het studentenhuis met de twee niveaus en de centrale vide.', bijschrift: 'Snede AA\u2019', ratio: '1279/662', w: 1279, h: 662 }
        ] },
      { layout: 'tekeningen',
        tekst: 'Het ontwerp probeert daardoor niet simpelweg een verzameling kamers te organiseren, maar een woonomgeving te creëren waarin verschillende vormen van samenleven naast elkaar kunnen bestaan. Openheid wordt afgewisseld met geborgenheid, ontmoeting met afzondering en collectiviteit met individuele rust.',
        beelden: [
          { src: 'assets/img/project-1/08-grondplan-gelijkvloers.webp', alt: 'Lijntekening van het grondplan van het gelijkvloers.', bijschrift: 'Grondplan gelijkvloers', ratio: '1319/1380', w: 1319, h: 1380 },
          { src: 'assets/img/project-1/09-grondplan-eerste-verdieping.webp', alt: 'Lijntekening van het grondplan van de eerste verdieping.', bijschrift: 'Grondplan eerste verdieping', ratio: '1087/1020', w: 1087, h: 1020 }
        ] },
      { layout: 'slot',
        tekst: 'Uiteindelijk draait het project om de vraag hoe architectuur samenleven kan ondersteunen zonder het individu te verliezen. Door de oriëntatie, circulatie en ruimtelijke overgangen zorgvuldig op elkaar af te stemmen, ontstaat een studentenhuis dat zich opent naar zijn omgeving en tegelijk ruimte laat voor terugtrekking. De Schelde wordt daarbij een constant rustpunt, terwijl de gedeelde ruimtes het dagelijkse leven en de ontmoeting tussen de bewoners dragen.',
        beelden: [
          { src: 'assets/img/project-1/00-hoofdbeeld-eindresultaat.webp', alt: 'Render van het afgewerkte studentenhuis in zijn omgeving.', bijschrift: 'Eindresultaat', credit: true, ratio: '3/2', w: 970, h: 618 }
        ] }
    ]
  },

  {
    slug: 'onder-invloed-van-kunst',
    nummer: '02',
    titel: 'Onder invloed van Kunst',
    vak: 'Ontwerpstudio: Interieur als Gedeelde Ruimte',
    instelling: 'Universiteit Antwerpen',
    jaar: '2025–2026',
    type: 'Paviljoen voor kunst, natuur en welzijn',
    locatie: 'Antwerpen, Middelheimpark',
    beschrijving: 'Een paviljoen in het Middelheimpark in Antwerpen waar kijken, maken en ontmoeten samenkomen: een gedeelde ruimte die kunst inzet als aanleiding voor creativiteit.',
    kaart: { src: 'assets/img/project-2/kaart.webp', alt: 'Maquette van het paviljoen met een donkere, rood-bruine houten gevel en een groot venster met zwart kader.', w: 1000, h: 1333 },
    hero: {
      src: 'assets/img/project-2/00-hoofdbeeld.webp',
      alt: 'Render van het interieur van het paviljoen: een houten skelet met zichtbare balken, linnen gordijnen en een bezoeker aan een lange tafel bij het raam.',
      ratio: '16/9', w: 1800, h: 1012, credit: true
    },
    scenes: [
      { layout: 'split',
        tekst: 'Het ontwerp vertrekt vanuit de vraag hoe een gedeelde ruimte mensen kan inspireren om zelf creatief aan de slag te gaan. Binnen de ontwerpstudio Interieur als Gedeelde Ruimte wordt onderzocht hoe interieurs kunnen inspelen op verschillende gebruikers, activiteiten en vormen van samenleven. Voor deze opdracht wordt een paviljoen ontworpen in het Middelheimpark in Antwerpen: een derde plek waar welzijn, kunst en natuur elkaar ontmoeten.',
        beelden: [
          { src: 'assets/img/project-2/01-paviljoen-voorgevel.webp', alt: 'Render van de voorgevel van het paviljoen: een donker houten volume met een groot venster en een boom ervoor.', bijschrift: 'Paviljoen, voorgevel', credit: true, ratio: '16/9', w: 1800, h: 1012 }
        ] },
      { layout: 'sticky',
        tekst: 'De omgeving vormt het vertrekpunt van het ontwerp. Tijdens een bezoek aan het Middelheimpark wordt de wisselwerking tussen kunst en natuur onderzocht. De aanwezige kunstwerken gaan voortdurend een relatie aan met hun omgeving. Ze nodigen bezoekers uit om stil te staan, te kijken en de ruimte op een andere manier te ervaren. Die wisselwerking vormt de basis voor het concept van het paviljoen.',
        beelden: [
          { src: 'assets/img/project-2/02-paviljoen-zijgevel.webp', alt: 'Render van de zijgevel van het paviljoen met een persoon achter het raam en een boom aan de rechterkant.', bijschrift: 'Paviljoen, zijgevel', credit: true, ratio: '16/9', w: 1800, h: 1012 }
        ] },
      { layout: 'donker',
        tekst: 'Kunst inspireert. Vanuit die gedachte ontstaat een plek waar bezoekers niet alleen kunst kunnen beleven, maar ook hun eigen creatieve proces kunnen ontdekken. Het paviljoen biedt ruimte om te observeren, te experimenteren en ideeën uit te wisselen. Zo wordt het niet enkel een plek om samen te komen, maar ook een omgeving die uitnodigt tot persoonlijke ontwikkeling en creativiteit.',
        beelden: [
          { src: 'assets/img/project-2/03-interieur-gordijnen.webp', alt: 'Render van het interieur met houten balken, een semi-transparant linnen gordijn en een lange tafel met uitzicht op het park.', bijschrift: 'Interieur, gordijnen en daglicht', credit: true, ratio: '16/9', w: 1800, h: 1012 }
        ] },
      { layout: 'split-rev',
        tekst: 'De vormgeving vertrekt vanuit een raster, geïnspireerd op het depot. Dit raster vormt de rode draad doorheen het volledige ontwerp en bepaalt zowel de constructieve opbouw als de ruimtelijke organisatie. Het zorgt voor een duidelijke structuur waarbinnen verschillende ruimtes en functies een plaats krijgen. Van de eerste vormstudies tot de technische uitwerking blijft het raster richting geven aan de ontwerpbeslissingen.',
        beelden: [
          { src: 'assets/img/project-2/04-maquette-raster.webp', alt: 'Bovenaanzicht van de maquette: een houten raster met vakken, kurkvloer en enkele planten.', bijschrift: 'Maquette, bovenaanzicht van het raster', credit: true, ratio: '1/1', w: 1600, h: 1600 }
        ] },
      { layout: 'paar',
        tekst: 'Een houten skelet vormt de basis van het paviljoen. Europees douglas en OSB maken de structuur zichtbaar en geven het geheel een warme, eerlijke uitstraling. De semi-transparante linnen gordijnen brengen een tweede laag in het ontwerp. Ze laten het daglicht door, maar bieden tegelijk de mogelijkheid om ruimtes flexibel af te bakenen. Hierdoor ontstaat een omgeving die zich aanpast aan verschillende activiteiten en gradaties van openheid.',
        beelden: [
          { src: 'assets/img/project-2/05-maquette-gordijn.webp', alt: 'Maquette van binnenuit met houten skelet en een hangend linnen gordijn dat de ruimte afbakent.', bijschrift: 'Maquette, linnen gordijn', credit: true, ratio: '3/4', w: 1600, h: 2133 },
          { src: 'assets/img/project-2/06-maquette-venster.webp', alt: 'Maquette met zicht op een groot venster, een plant op de voorgrond en een houten balkenplafond.', bijschrift: 'Maquette, zicht naar buiten', credit: true, ratio: '3/4', w: 1600, h: 2134 }
        ] },
      { layout: 'tekeningen',
        tekst: 'In de technische tekeningen wordt het raster verder vertaald naar constructie en detail. Plannen, snedes en aansluitingen tonen hoe de verschillende onderdelen samen één coherent geheel vormen. De maquette maakt vervolgens de stap van tekening naar ruimte. Ze brengt de verhouding tussen structuur, licht en gebruik tastbaar in beeld en maakt duidelijk hoe het concept zich vertaalt naar een fysieke omgeving.',
        beelden: [
          { src: 'assets/img/project-2/07-grondplan.webp', alt: 'Lijntekening van het grondplan van het paviljoen met het raster, de tafels en de ingang.', bijschrift: 'Grondplan', ratio: '1210/817', w: 1210, h: 817 },
          { src: 'assets/img/project-2/08-snede.webp', alt: 'Lijntekening van snede AA\u2019 door het paviljoen met het houten skelet en de tafels.', bijschrift: 'Snede AA\u2019', ratio: '1035/347', w: 1035, h: 347 }
        ] },
      { layout: 'bleed',
        tekst: 'Het uiteindelijke paviljoen brengt kijken, maken en ontmoeten samen. De combinatie van een heldere structuur, natuurlijke materialen en flexibele afscheidingen creëert een plek waar verschillende vormen van gebruik naast elkaar kunnen bestaan. Openheid en geborgenheid wisselen elkaar af, waardoor bezoekers zowel samen als individueel aan de slag kunnen.',
        beelden: [
          { src: 'assets/img/project-2/09-interieur-werktafel.webp', alt: 'Render van het interieur met een lange houten werktafel, linnen gordijnen en een raam met zicht op het park.', bijschrift: 'Interieur, werktafel', credit: true, ratio: '16/9', w: 1800, h: 1012 }
        ] },
      { layout: 'slot',
        tekst: 'Het project onderzoekt hoe architectuur kunst kan inzetten als aanleiding voor creativiteit en ontmoeting. Door een gedeelde ruimte te ontwerpen waarin observeren, maken en uitwisselen centraal staan, wordt het paviljoen een plek die niet alleen uitnodigt om kunst te ervaren, maar ook om er zelf iets uit voort te brengen.',
        beelden: [
          { src: 'assets/img/project-2/10-maquette-totaal.webp', alt: 'Maquette van het paviljoen met een donkere, rood-bruine gevel en een groot venster op een witte ondergrond.', bijschrift: 'Maquette, het paviljoen', credit: true, ratio: '16/9', w: 2000, h: 1125 }
        ] }
    ],
    galerij: [
      { src: 'assets/img/project-2/11-maquette-buitenaanzicht.webp', alt: 'Maquette van het paviljoen in buitenaanzicht met een plant achter het grote venster.', bijschrift: 'Maquette, buitenaanzicht', credit: true, ratio: '3/4', w: 1600, h: 2134 },
      { src: 'assets/img/project-2/12-maquette-gevel.webp', alt: 'Maquette van het paviljoen met de donkere gevel, het venster en de ingang met een zwarte oprit.', bijschrift: 'Maquette, gevel en ingang', credit: true, ratio: '3/4', w: 1600, h: 2134 }
    ]
  },

  /* ---- PLACEHOLDER PROJECT 3 — vervang tekst, bestandsnamen en metadata ---- */
  {
    slug: 'project-3',
    nummer: '03',
    titel: 'Project 3',
    kaart: null,
    kaartLabel: 'Nog te bepalen',
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
