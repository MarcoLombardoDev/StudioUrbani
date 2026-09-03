# Studio Urbani — sito istituzionale / firm website

Sito statico bilingue (IT/EN), senza dipendenze e senza build: HTML, CSS e
JavaScript vanilla. Per lo Studio Urbani — commercialisti, revisori legali e
consulenti del lavoro, Roma.

Static bilingual site, no dependencies, no build step.

## Struttura / Structure

```
.
├── index.html                  Landing unica: hero, valori, chi siamo,
│                               servizi, fatturazione, team, CTA
├── pages/
│   ├── contatti.html           Contatti + mappa Google Maps (su consenso)
│   ├── note-legali.html        Note legali
│   ├── privacy-policy.html     Informativa privacy (GDPR)
│   └── cookie-policy.html      Cookie policy + reset delle preferenze
├── assets/
│   ├── css/style.css           Design system (token, componenti, responsive)
│   ├── js/i18n.js              Motore bilingue IT/EN + dizionario inglese
│   ├── js/main.js              Header, menu, animazioni, avviso cookie, mappa
│   ├── fonts/                  Jost e Inter in locale (woff2)
│   └── img/                    Logo, favicon, manifest (vedi assets/img/README.md)
├── robots.txt
├── sitemap.xml
└── .nojekyll
```

## Scelte principali

- **Landing unica.** I contenuti delle vecchie pagine *Chi siamo*, *Servizi* e
  *Fatturazione* sono compattati in sezioni della home (`#studio`, `#servizi`,
  `#fatturazione`, `#team`). Restano pagine separate soltanto contatti e i tre
  documenti legali.
- **Bilingue IT/EN.** L'italiano è la lingua sorgente e vive nell'HTML (utile per
  SEO e per la navigazione senza JavaScript); `assets/js/i18n.js` contiene solo le
  stringhe inglesi, indicizzate dagli attributi `data-i18n` / `data-i18n-<attributo>`.
  La scelta è ricordata in `localStorage` (`su_lang`) e aggiorna anche `<html lang>`,
  `<title>` e meta description.
- **Tipografia in locale.** Titoli in **Jost** (geometrico, molto vicino al lettering
  del logo, di ispirazione Futura), testi in **Inter**. I file `.woff2` sono serviti
  da `assets/fonts/`: nessuna chiamata a Google Fonts, quindi nessun cookie di terze
  parti e nessun trasferimento di dati fuori dal dominio dello Studio.
- **Colori dal logo.** Blu petrolio `#0b5480` / `#07344f` ripreso dal marchio, ottone
  `#b3915f` come accento, fondo carta `#f7f6f3`.
- **Anno di copyright dinamico**: la riga del footer è
  «© *anno* Massimo Urbani (P.IVA 10600291008) - Tutti i diritti riservati» e ogni
  `<span data-year>` è aggiornato da `main.js` con l'anno corrente.
- **Mappa a consenso.** L'iframe di Google Maps viene creato solo dopo il click su
  «Carica la mappa» (consenso ricordato in `su_map_consent`), coerentemente con la
  cookie policy.
- **Niente social.** I collegamenti ai profili social sono stati esclusi, come richiesto.
- **Accessibilità.** Skip link, focus visibile, `aria-*` su menu e switch lingua,
  rispetto di `prefers-reduced-motion`, contrasti verificati sui testi principali.

## Logo e icone / Logo and icons

Header e footer caricano il logo dello Studio accanto al wordmark «Studio Urbani»
composto in Jost:

- `assets/img/logo.svg` nell'header, su fondo chiaro;
- `assets/img/logo-light.svg` nel footer scuro — variante generata dal primo
  (tratto bianco, vuoti nel colore del footer): se cambia il logo o il colore
  del footer va rigenerata;
- set completo di favicon, `apple-touch-icon` e `site.webmanifest` in
  `assets/img/` (dettagli in `assets/img/README.md`).

## Fotografie del team

Le card del team mostrano un segnaposto tondo con le iniziali. Per inserire i
ritratti è sufficiente aggiungere un `<img>` dentro `.team__photo`:

```html
<div class="team__photo"><img src="../assets/img/team/massimo-urbani.jpg" alt="Rag. Massimo Urbani"></div>
```

Il ritaglio circolare e l'`object-fit: cover` sono già gestiti dal CSS; le immagini
rendono meglio quadrate, almeno 320x320 px.

## Contenuti da validare

I testi sono stati ricostruiti dai contenuti pubblici del sito attuale
(`studiourbani.it`) e riscritti in forma più compatta. Da verificare con lo Studio
prima della pubblicazione: partita IVA e dati di iscrizione all'Ordine (non presenti
nel footer), elenco puntuale dei servizi nelle aree *Consulenza Aziendale*,
*Associazioni* e *Legale*, ruoli dei singoli professionisti nella sezione Team,
data di ultimo aggiornamento delle pagine legali e URL dell'area riservata clienti
(oggi il pulsante rimanda alla pagina contatti).

Le sezioni *Fisco e normativa* e *Focus Lazio* del sito attuale, alimentate da feed
RSS, non sono state riprodotte.

## Anteprima locale / Local preview

Basta aprire `index.html` nel browser. Per un contesto più realistico (percorsi
assoluti, header HTTP):

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Pubblicazione / Publishing

Tutto vive su `main`: nessun branch di sviluppo, nessun workflow di deploy. Il
sito è servito così com'è dalla radice (`.nojekyll` disattiva l'elaborazione
Jekyll su GitHub Pages), quindi ogni push su `main` ripubblica.

Everything lives on `main` — no development branches, no deploy workflow: the
site is served as-is from the root, so every push to `main` republishes.

`robots.txt` e `sitemap.xml` puntano a `https://www.studiourbani.it/`, insieme
ai `link rel="canonical"` e alle proprietà `og:` delle pagine: se il dominio di
pubblicazione cambia, sono i tre punti da aggiornare.

## Convenzioni / Conventions

Le stesse del repository `MarcoLombardoDev.github.io`:

- statico e bilingue, senza build step né dipendenze esterne;
- `.claude/settings.json` disattiva l'attribuzione automatica nei commit;
- `.nojekyll`, `robots.txt` e `sitemap.xml` nella radice;
- `assets/{css,js,img,fonts}` con un `README.md` che documenta le immagini;
- head delle pagine con `canonical`, `author`, proprietà `og:` e set completo di favicon;
- README bilingue con struttura, anteprima locale e pubblicazione.
