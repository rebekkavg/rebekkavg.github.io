# R.V.G — portfolio Rebekka Groeneveld

Statische portfolio-website (HTML, CSS, vanilla JavaScript). Geen build-stap, geen npm. Werkt op GitHub Pages en gebruikt uitsluitend relatieve paden.

```
index.html          startpagina (hero, projectenindex, over-teaser)
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

## 2. Afbeeldingen toevoegen

Plaats de bestanden met **exact** deze namen in `assets/img/project-1/`:

| Bestand | Inhoud |
|---|---|
| `01-grid-bovenaanzicht.jpg` | opgegeven raster, bovenaanzicht |
| `02-grid-isometrie.jpg` | opgegeven raster, isometrie |
| `03-situering-schelde.jpg` | foto Schelde met kaai en skyline (wordt twee keer gebruikt, zie scène 2 en 3) |
| `04-render-leefruimte.jpg` | verticale render: persoon bij raam, beige kolom, blauwgrijze wand (hoofdbeeld, slotbeeld en galerij) |
| `05-render-slaapkamer.jpg` | render slaapkamer |
| `06-render-keuken.jpg` | render keuken |
| `07-render-leefruimte-2.jpg` | render leefruimte |
| `08-grondplan-gelijkvloers.png` | grondplan gelijkvloers 1:150 |
| `09-grondplan-eerste-verdieping.png` | grondplan eerste verdieping 1:50 |
| `10-snede-aa.png` | snede AA' |
| `11-snede-bb.png` | snede BB' |

Het portret komt in `assets/img/about.jpg`.

**Advies voor snelle laadtijd:**
- Exporteer foto's en renders als JPG of WebP, maximaal 2400 px breed, kwaliteit 80–85%.
- Exporteer plannen en snedes als PNG of SVG.
- Houd elk bestand onder ongeveer 500 KB.

**Verhoudingen:** elk beeld heeft een `ratio` in `js/projects.js` (bv. `'4/3'`). Past een beeld niet mooi in zijn kader, pas dan enkel die waarde aan (`'3/2'`, `'16/9'`, `'2/3'`, ...). Met `fit: 'contain'` wordt een beeld volledig getoond (handig voor plannen), met `fit: 'cover'` vult het het kader. Met `pos: 'center 70%'` verschuif je het uitgesneden stuk.

Wil je een andere afbeelding in scène 3 dan de Schelde-foto van scène 2? Vervang dan de `src` van dat beeld in `js/projects.js`.

## 3. Projecten toevoegen of wijzigen

Alles staat in `js/projects.js`. Je hoeft geen HTML aan te passen.

**Project 2 of 3 invullen**
1. Zoek in `js/projects.js` het blok `PLACEHOLDER PROJECT 2` (of 3).
2. Pas `titel`, `vak`, `jaar`, `type`, `locatie` en `beschrijving` aan. Laat `slug` ongewijzigd, tenzij je ook de links in `index.html` (`<noscript>`) aanpast.
3. Vervang in elke scène `tekst`, `alt` (beschrijving van het beeld) en `bijschrift`.
4. Zet je afbeeldingen in `assets/img/project-2/` en pas de bestandsnamen (`src`) aan, of geef je bestanden de namen die al in de data staan:
   `00-hoofdbeeld.jpg`, `01-vertrekpunt.jpg`, `02-plek.jpg`, `03-idee.jpg`, `04-indeling.jpg`, `04-detail.jpg`, `05-grondplan.png`, `05-snede.png`, `06-eindbeeld.jpg`.
5. Houd de verhaallogica aan: vertrekpunt → plek/context → idee → indeling → detail → tekeningen → eindbeeld. Scènes toevoegen of verwijderen mag. De teller ("01 / 06") past zich automatisch aan.

**Een vierde project toevoegen**
Kopieer een volledig projectblok, plak het achter het laatste (met een komma ertussen) en geef het een nieuwe `slug`, bv. `'project-4'`. Het verschijnt automatisch in de index en in de cyclus "Volgend project". Voeg eventueel een regel toe aan het `<noscript>`-lijstje in `index.html`.

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
| `slot` | groot slotbeeld, tekst eronder, daarna de galerij (`galerij`) |

Een `tekst` mag een tekenreeks zijn of een lijst van alinea's (`['alinea 1', 'alinea 2']`).

## 4. Publiceren op GitHub Pages

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

## 5. Nog zelf in te vullen

- [ ] Alle afbeeldingen van project 1 (zie tabel) en het portret `about.jpg`
- [ ] Project 2 en project 3: titel, teksten, beelden, metadata
- [ ] E-mailadres controleren (`rebekka.groeneveld@student.uantwerpen.be`) in `contact.html`, de footer en het mobiele menu van elke pagina
- [ ] LinkedIn en Instagram in `contact.html` (nu platte tekst als placeholder)
- [ ] Software-lijst in `about.html`
- [ ] Hero-zin in `index.html` (nu "Interieurarchitectuur — projecten 2025–2026")
- [ ] Optioneel: `og:image`, eigen domein
- [ ] `alt`-teksten en bijschriften in `js/projects.js` nalopen

## Ontwerpkeuzes

- Kleuren: enkel `#4c5d79`, `#99a5b5`, `#36455B` en wit (plus transparanties ervan). Kleine tekst staat in `#4c5d79` of in wit op donker, omdat `#99a5b5` op wit het WCAG AA-contrast niet haalt. `#99a5b5` wordt gebruikt voor hairlines, randen en placeholders.
- Animaties zijn subtiel en worden uitgeschakeld bij `prefers-reduced-motion`.
- Zonder JavaScript blijft de inhoud van de statische pagina's zichtbaar. De projectpagina vraagt wel JavaScript, omdat ze uit `js/projects.js` wordt opgebouwd.
