# Studio Urbani — sito istituzionale

Sito statico (HTML, CSS, JavaScript vanilla) per lo Studio Urbani — commercialisti,
revisori legali e consulenti del lavoro, Roma. Nessuna dipendenza esterna, nessun
build step: si pubblica copiando i file su qualunque hosting statico o web server.

## Struttura

```
index.html                  Landing page unica: hero, valori, chi siamo,
                            servizi, fatturazione elettronica, team, CTA
pages/contatti.html         Contatti + mappa Google Maps (caricata su consenso)
pages/note-legali.html      Note legali
pages/privacy-policy.html   Informativa privacy (GDPR)
pages/cookie-policy.html    Cookie policy + reset delle preferenze
assets/css/style.css        Design system completo (token, componenti, responsive)
assets/js/i18n.js           Motore bilingue IT/EN + dizionario inglese
assets/js/main.js           Header, menu, animazioni, avviso cookie, mappa
assets/fonts/               Font in locale (woff2)
assets/img/                 Favicon e segnaposto del logo
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
- **Colori dal logo.** Blu notte `#1f3159` / `#141f38` del lettering, ottone `#b3915f`
  come accento, fondo carta `#f7f6f3`.
- **Anno di copyright dinamico**: ogni `<span data-year>` nel footer è aggiornato da
  `main.js` con l'anno corrente.
- **Mappa a consenso.** L'iframe di Google Maps viene creato solo dopo il click su
  «Carica la mappa» (consenso ricordato in `su_map_consent`), coerentemente con la
  cookie policy.
- **Niente social.** I collegamenti ai profili social sono stati esclusi, come richiesto.
- **Accessibilità.** Skip link, focus visibile, `aria-*` su menu e switch lingua,
  rispetto di `prefers-reduced-motion`, contrasti verificati sui testi principali.

## Logo

L'header e il footer usano al momento un **segnaposto tipografico** (monogramma «SU»
+ wordmark «Studio Urbani» composto in Jost). Per inserire il logo definitivo:

1. salvare il file in `assets/img/logo.svg` (oppure `.png` a densità doppia);
2. in `index.html` e nelle pagine in `pages/`, sostituire il blocco marcato
   `<!-- PLACEHOLDER LOGO -->` con:
   ```html
   <img class="brand__logo" src="assets/img/logo.svg" alt="Studio Urbani">
   ```
   (dalle pagine in `pages/` il percorso è `../assets/img/logo.svg`).

`assets/img/logo-placeholder.svg` riproduce l'impostazione grafica di riferimento.

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

## Sviluppo locale

Basta aprire `index.html` nel browser. Per un contesto più realistico (percorsi
assoluti, header HTTP):

```bash
python3 -m http.server 8000
# http://localhost:8000
```
