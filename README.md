# R.V.G — portfolio Rebekka Groeneveld

Statische portfolio-website (HTML, CSS, vanilla JavaScript). Geen build-stap, geen npm. Werkt op GitHub Pages en gebruikt uitsluitend relatieve paden.

```
index.html          startpagina (hero, drie projectkaarten, over-teaser)
project.html        één sjabloon, laadt het project via ?p=slug
about.html          over mij
contact.html        contact (mailto)
404.html            foutpagina
css/style.css       alle stijlen (kleuren als CSS custom properties)
js/main.js          navigatie, scroll-animaties, lightbox, projectopbouw
js/projects.js      ALLE projectdata (teksten, bestandsnamen, volgorde)
assets/img/         afbeeldingen per project
.nojekyll           schakelt Jekyll uit op GitHub Pages
```

## 1. Lokaal bekijken

Open `index.html` rechtstreeks in je browser, of start een kleine server (aanbevolen):

```bash
python3 -m http.server 8000
# ga naar http://localhost:8000
```

Ontbrekende afbeeldingen verschijnen als grijze (#99a5b5) placeholder met de verwachte bestandsnaam. Zo zie je meteen wat nog moet geplaatst worden.

## 2. Afbeeldingen

De foto's van project 1 en 2 staan in `assets/img/project-1/` en `assets/img/project-2/` (WebP). Per project staat `kaart.webp` voor de startpagina (staand, verhouding 3:4). Het portret komt in `assets/img/about.jpg`.

In `js/projects.js` geef je bij elk beeld `src`, `alt`, `w` en `h` (de pixelmaten van het bestand). De site berekent daaruit de verhouding, zodat een beeld nooit wordt afgesneden, ook niet op een telefoon.

**Advies voor snelle laadtijd:** WebP of JPG, maximaal 2400 px breed, kwaliteit 80–85%, plannen als PNG, WebP of SVG, elk bestand liefst onder ca. 500 KB. Een paar beelden zijn klein (o.a. het eindresultaat van project 1 en de rasterbeelden); vervang ze onder dezelfde naam door een grotere versie als je die hebt (pas `w` en `h` aan).

Een enkel beeld in een `paar`- of `tekeningen`-scène wordt automatisch breder getoond.

## 3. Projecten toevoegen of wijzigen

Alles staat in `js/projects.js`. Je hoeft geen HTML aan te passen.

**Project 3 invullen** (project 1 en 2 zijn al ingevuld)
1. Zoek in `js/projects.js` het blok `PLACEHOLDER PROJECT 3`.
2. Pas `titel`, `vak`, `jaar`, `type`, `locatie` en `beschrijving` aan. Laat `slug` ongewijzigd, tenzij je ook de link in het `<noscript>`-blok van `index.html` aanpast.
3. Vervang in elke scène `tekst`, `alt` (beschrijving van het beeld) en `bijschrift`.
4. Zet je afbeeldingen in `assets/img/project-3/` en pas de bestandsnamen (`src`) aan, of geef je bestanden de namen die al in de data staan:
   `00-hoofdbeeld.jpg`, `01-vertrekpunt.jpg`, `02-plek.jpg`, `03-idee.jpg`, `04-indeling.jpg`, `04-detail.jpg`, `05-grondplan.png`, `05-snede.png`, `06-eindbeeld.jpg`. Voeg ook een `kaart` toe (zie hierboven) en verwijder `kaartLabel` (nu "Coming soon!").
5. Houd de verhaallogica aan: vertrekpunt → plek/context → idee → indeling → detail → tekeningen → eindbeeld. Scènes toevoegen of verwijderen mag. De teller ("01 / 06") past zich automatisch aan.

**Een vierde project toevoegen**
Kopieer een volledig projectblok, plak het achter het laatste (met een komma ertussen) en geef het een nieuwe `slug`, bv. `'project-4'`. Het verschijnt automatisch als vierde kaart (de rij is gemaakt voor drie; voor een vierde kaart zet je in `css/style.css` bij `.pcards` `repeat(4,1fr)`) en in de cyclus "Volgend project". Voeg eventueel een regel toe aan het `<noscript>`-lijstje in `index.html`.

**Layouts per scène** (`layout`):

| Waarde | Effect |
|---|---|
| `paar` | tekst, daarna twee beelden naast elkaar |
| `tekeningen` | zoals `paar`, beelden volledig getoond, extra witruimte |
| `split` / `split-rev` | tekst links, beeld rechts / omgekeerd |
| `sticky` | beeld blijft staan terwijl de tekst scrolt (desktop) |
| `bleed` | beeld over de volle breedte, tekst eronder |
| `bleed-over` | beeld over de volle breedte, tekst in een wit vlak erover |
| `donker` | donkere sectie (#36455B) voor het conceptmoment |
| `stapel` | tekst blijft staan terwijl de beelden ernaast scrollen (desktop) |
| `galerij` | enkel beelden in kolommen, bv. voor extra foto's (geen tekst) |
| `slot` | groot slotbeeld, tekst eronder |

Met `donker: true` maak je van elke scène een donkerblauwe sectie, met `label: 'Tekeningen'` zet je een klein label bovenaan, en met `breedEerste: true` loopt het eerste beeld (bv. een snede) over de volle breedte.

Een `tekst` mag een tekenreeks zijn of een lijst van alinea's (`['alinea 1', 'alinea 2']`).

## 4. Contactformulier

Het formulier op `contact.html` stuurt berichten automatisch naar je mailbox via de gratis dienst [formsubmit.co](https://formsubmit.co) (geen server nodig).

1. Publiceer de site en verstuur zelf één keer een testbericht via het formulier.
2. FormSubmit stuurt een activatiemail naar `rebekka.groeneveld@student.uantwerpen.be`. Klik op de link daarin. Daarna komen alle berichten rechtstreeks binnen. Controleer ook je spamfolder.
3. Wijzig je e-mailadres? Pas het aan in `contact.html` (twee keer: `action` en `data-ajax`).
4. Optioneel: na activatie krijg je van FormSubmit een anoniem alias-adres. Gebruik dat in plaats van je e-mailadres in de formulier-URL, zodat het adres niet in de broncode staat.

Het formulier heeft een verborgen veld tegen spam-bots. Lukt verzenden niet, dan toont de pagina een melding en blijft het e-mailadres zichtbaar ernaast. Het formulier werkt niet vanaf een lokaal bestand (`file://`), enkel op de gepubliceerde site.

## 5. Publiceren op GitHub Pages

1. Maak een repository op GitHub en push alle bestanden (inclusief `.nojekyll`) naar de branch `main`.
2. Ga naar **Settings → Pages**.
3. Kies bij *Build and deployment*: **Deploy from a branch**, branch `main`, folder `/ (root)`. Klik op *Save*.
4. Na een à twee minuten staat de site op `https://gebruikersnaam.github.io/repo-naam/`.

**Eigen domeinnaam (optioneel)**
1. Settings → Pages → *Custom domain*: vul je domein in.
2. Maak bij je domeinprovider een `CNAME`-record voor `www` naar `gebruikersnaam.github.io` (voor een kaal domein: vier `A`-records naar de IP-adressen uit de GitHub-documentatie).
3. Vink *Enforce HTTPS* aan zodra dat beschikbaar is.

**404-pagina:** relatieve paden werken niet op diepe, onbestaande URL's. Daarom zet `404.html` bovenaan een `<base>`-tag. Dat is automatisch correct voor een project-site (`/repo-naam/`). Gebruik je een eigen domein of een gebruikers-site (`gebruikersnaam.github.io`), zet dan in `404.html` de variabele `BASE` op `'/'`.

**Delen op social media:** voeg in de `<head>` een `og:image` toe met een absolute URL (voorbeeld staat als commentaar in elke pagina).

**Lettertype:** Josefin Sans wordt via Google Fonts geladen. Wil je dat niet (privacy, offline), download het lettertype dan en host het zelf met `@font-face` en `font-display: swap`.

## 6. Nog zelf in te vullen

- [ ] Het portret `about.jpg`
- [ ] Project 3: titel, teksten, beelden, metadata en kaartbeeld
- [ ] Contactformulier activeren (zie hoofdstuk 4)
- [ ] Optioneel: hoger-resolutie eindbeeld van project 1
- [ ] E-mailadres controleren (`rebekka.groeneveld@student.uantwerpen.be`) in `contact.html`, de footer en het mobiele menu van elke pagina
- [ ] LinkedIn en Instagram in `contact.html` (nu platte tekst als placeholder)
- [ ] Software-lijst in `about.html`
- [ ] Hero-zin in `index.html` (nu "Interieurarchitectuur")
- [ ] Optioneel: `og:image`, eigen domein
- [ ] `alt`-teksten en bijschriften in `js/projects.js` nalopen

## Ontwerpkeuzes

- Kleuren: enkel `#4c5d79`, `#99a5b5`, `#36455B` en wit (plus transparanties ervan). Kleine tekst staat in `#4c5d79` of in wit op donker, omdat `#99a5b5` op wit het WCAG AA-contrast niet haalt. `#99a5b5` wordt gebruikt voor hairlines, randen en placeholders.
- Animaties zijn subtiel en worden uitgeschakeld bij `prefers-reduced-motion`.
- Zonder JavaScript blijft de inhoud van de statische pagina's zichtbaar. De projectpagina vraagt wel JavaScript, omdat ze uit `js/projects.js` wordt opgebouwd.
