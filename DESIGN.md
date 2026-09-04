---
name: Studio Urbani
description: Sistema visivo di uno studio di commercialisti a Roma - fondo carta, blu del marchio, ottone come segnalibro.
colors:
  navy: "#04507d"
  navy-deep: "#033a5c"
  navy-soft: "#2a76a5"
  brass: "#b3915f"
  brass-soft: "#d9c39c"
  ink: "#10141c"
  ink-soft: "#39424f"
  muted: "#5d6672"
  brass-ink: "#7d6338"
  paper: "#f7f6f3"
  paper-2: "#efede8"
  white: "#ffffff"
  line: "rgba(16, 20, 28, .10)"
  line-soft: "rgba(16, 20, 28, .06)"
typography:
  display:
    fontFamily: "Jost, 'Century Gothic', Futura, 'Trebuchet MS', sans-serif"
    fontSize: "clamp(1.95rem, 2.9vw, 2.6rem)"
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Jost, 'Century Gothic', Futura, 'Trebuchet MS', sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3.1rem)"
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Jost, 'Century Gothic', Futura, 'Trebuchet MS', sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.005em"
  title-small:
    fontFamily: "Jost, 'Century Gothic', Futura, 'Trebuchet MS', sans-serif"
    fontSize: "1.05rem"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "normal"
  lead:
    fontFamily: "Inter, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.06rem, 1.6vw, 1.28rem)"
    fontWeight: 300
    lineHeight: 1.62
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.68
    letterSpacing: "normal"
  label:
    fontFamily: "Jost, 'Century Gothic', Futura, 'Trebuchet MS', sans-serif"
    fontSize: "0.78rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.22em"
rounded:
  sm: "4px"
  lg: "10px"
  pill: "999px"
spacing:
  gap: "clamp(14px, 1.6vw, 20px)"
  card: "clamp(24px, 2.6vw, 32px)"
  gutter: "clamp(20px, 5vw, 48px)"
  section-tight: "clamp(56px, 7vw, 88px)"
  section: "clamp(72px, 10vw, 132px)"
components:
  button-primary:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0.95rem 1.6rem"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.navy-deep}"
    textColor: "{colors.white}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.95rem 1.6rem"
  button-ghost-hover:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
  button-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy-deep}"
    rounded: "{rounded.pill}"
    padding: "0.95rem 1.6rem"
  button-small:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0.66rem 1.1rem"
  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card}"
  panel-dark:
    backgroundColor: "rgba(255, 255, 255, .05)"
    textColor: "rgba(255, 255, 255, .74)"
    rounded: "{rounded.lg}"
    padding: "clamp(26px, 3vw, 38px)"
  eyebrow:
    backgroundColor: "transparent"
    textColor: "{colors.brass-ink}"
    typography: "{typography.label}"
---

# Design System: Studio Urbani

## Overview

**Creative North Star: "Il fascicolo ben tenuto"**

L'ordine di uno studio che archivia bene. Ogni sezione è una cartella
riconoscibile: un'etichetta minuta in maiuscoletto d'ottone la annuncia, un
titolo largo e leggero la apre, il contenuto sta dentro margini generosi su un
fondo di carta caldo. Niente cresce a caso, niente è impilato per riempire: si
scorre come si sfoglia, sapendo sempre dove si è.

Il carattere da difendere è **caldo, umano, accogliente**. Il committente
tratta numeri e norme, ma il sito non deve sembrare un modulo: il fondo carta
`#f7f6f3` invece del bianco clinico, l'ottone `#b3915f` come segnalibro che
scalda il blu, e titoli in Jost Light — geometrici come il marchio, ma sottili,
mai squadrati addosso al lettore. Il blu del marchio `#04507d` porta autorevolezza
dove serve: numeri, azioni di contatto, la fascia del rapporto. Gli elementi
interattivi sono **leggeri e nitidi**: si distinguono per allineamento e per
filetti da un pixel, non per volume.

Anti-riferimento confermato: l'estetica da portale istituzionale del sito
precedente — colonne dense, riquadri bordati, tipografia di sistema, notizie
impaginate come un bollettino. Il sistema attuale la rifiuta per sottrazione:
meno bordi, più aria, un solo accento.

**Key Characteristics:**
- Fondo carta caldo su tutta la superficie, bianco riservato alle card
- Etichette in maiuscoletto d'ottone con filetto: aprono ogni sezione
- Titoli geometrici in peso 300, corpo testo neutro e leggibile a 17px
- Filetti da 1px al posto dei bordi pesanti; ombre solo come risposta a un gesto
- Un'unica fascia scura in tutta la pagina, per il percorso del rapporto
- Nessuna terza parte: font locali, mappa a consenso, niente tracciamento

## Colors

Una palette di tre voci: il blu del marchio, l'ottone che lo scalda e una scala
neutra di carta e inchiostro. Nessun secondo accento, nessun colore di stato
inventato.

### Primary
- **Blu del marchio** (`#04507d`): il colore prelevato dal logo, `rgb(4,80,125)`.
  Porta i bottoni primari, le icone dei collegamenti della hero, le voci attive,
  i link nei testi legali e la parola «Urbani» nel wordmark. È il colore delle
  azioni, non degli sfondi larghi.
- **Blu profondo** (`#033a5c`): la fascia «Come lavoriamo», il
  footer, lo stato hover dei bottoni primari e il fondo della pagina 404. È il
  blu quando diventa ambiente invece di accento.
- **Blu chiaro** (`#2a76a5`): usato con parsimonia sui fondi scuri e sulle
  iniziali dei ritratti in hover, dove il blu del marchio non avrebbe contrasto.

### Secondary
- **Ottone** (`#b3915f`): l'accento caldo, riservato a ciò che non è testo:
  filetti, icone della striscia valori, barra della citazione, trattini degli
  elenchi. È il segnalibro del fascicolo.
- **Ottone d'inchiostro** (`#7d6338`): la stessa voce quando diventa testo su
  fondo chiaro — le etichette in maiuscoletto. L'ottone chiaro non raggiunge il
  4,5:1 su carta (2,72:1 misurato), questo lo raggiunge (4,83:1 sul fondo più
  scuro dei due). Sui fondi blu resta valido `--brass-soft`, che misura 6,94:1.
- **Ottone chiaro** (`#d9c39c`): la stessa voce sui fondi scuri — numerazione
  dei passi, etichette nella fascia blu, hover dei bottoni chiari.

### Neutral
- **Inchiostro** (`#10141c`): titoli e testo forte.
- **Inchiostro morbido** (`#39424f`): il corpo dei paragrafi e delle liste.
- **Grigio di servizio** (`#5d6672`): didascalie, etichette, note, breadcrumb.
  Scurito dal precedente `#6d7684`, che restava sotto il 4,5:1 su ogni fondo
  chiaro tranne il bianco puro.
- **Carta** (`#f7f6f3`): il fondo di tutto il sito e del menu mobile.
- **Carta scura** (`#efede8`): le sezioni alternate e i segnaposto dei ritratti.
- **Bianco** (`#ffffff`): esclusivamente le superfici sollevate — card, striscia
  valori, riquadro della CTA.
- **Filetto** (`rgba(16,20,28,.10)`) e **filetto tenue** (`rgba(16,20,28,.06)`):
  le linee. Sono trasparenze, non grigi pieni, così vivono su carta e su bianco.

### Named Rules
**La regola dell'unico accento.** L'ottone non colora superfici: solo testo di
etichetta (in `--brass-ink`), filetti, icone e trattini, mai più del 5% di uno
schermo — bagliori decorativi compresi, che è dove la regola era stata infranta.
Se un elemento chiede di essere visto, si usa il blu; se chiede di essere
annunciato, l'ottone.

**La regola della carta.** Nessuna pagina ha fondo bianco. Il bianco è il
materiale delle cose sollevate — card e pannelli — e perde significato se
diventa lo sfondo.

**La regola della fascia unica.** Nel corpo di una pagina esiste una sola
sezione a fondo scuro, e nella landing è «Come lavoriamo»: il percorso del
rapporto, non un servizio. Chi vuole enfasi altrove usa il fondo carta scura.
Footer e pagina 404 sono cornice, non sezioni, e non contano nel conteggio.

## Typography

**Display Font:** Jost (con Century Gothic, Futura, Trebuchet MS, sans-serif)
**Body Font:** Inter (con lo stack di sistema)

Entrambi serviti in locale come woff2 variabili: nessuna chiamata a Google
Fonts, quindi nessun cookie di terze parti e nessuna dipendenza di rete.

**Character:** Jost è la voce del marchio — geometrica, di ispirazione Futura,
la più vicina al lettering «Studio Urbani» del logo — e vive solo in peso 300 o
400: leggera, larga, mai grassa. Inter fa il lavoro sporco della leggibilità
senza aggiungere personalità, così il carattere del sistema resta tutto nei
titoli e nelle etichette.

### Hierarchy
- **Display** (300, `clamp(1.95rem, 2.9vw, 2.6rem)`, 1.1): l'h1 della hero e
  delle pagine interne, spezzato su due righe con la seconda in peso 200 e
  colore più tenue. Il massimo è volutamente contenuto e misurato: 2.6rem è la
  dimensione più grande alla quale ciascuna delle due righe del titolo della
  hero resta su una riga sola: un titolo più grande le manda a capo e spinge il
  paragrafo di apertura sotto la piega.
- **Headline** (300, `clamp(2rem, 4.2vw, 3.1rem)`, 1.1): apre le sezioni.
- **Title** (400, `clamp(1.25rem, 2vw, 1.5rem)`, 1.1): nomi delle aree di
  servizio, titoli delle card, intestazioni dei paragrafi legali.
- **Title small** (500, `1.05rem`): titoli brevi dentro le card, nomi delle
  persone, voci del footer.
- **Lead** (300, `clamp(1.06rem, 1.6vw, 1.28rem)`, 1.62): il paragrafo di
  apertura di ogni sezione, in inchiostro morbido.
- **Body** (400, `17px`, 1.68): il testo corrente. Nei documenti legali la
  colonna è limitata a 74ch, nei paragrafi descrittivi a circa 56ch.
- **Label** (500, `.78rem`, `letter-spacing .22em`, maiuscolo): l'etichetta
  d'ottone che annuncia le sezioni, le didascalie dei recapiti, le voci del
  footer.

### Named Rules
**La regola del peso leggero.** Nessun titolo supera il peso 500. In un sistema
geometrico il grassetto legge come pesantezza, non come importanza: la gerarchia
si fa con la dimensione e con l'aria.

**La regola dell'etichetta.** Ogni sezione si apre con la stessa tripletta —
etichetta in maiuscoletto d'ottone preceduta da un filetto di 28px, titolo,
paragrafo lead. È l'elemento che rende il sito riconoscibile scorrendolo.

## Layout

L'ordine delle sezioni della landing è esso stesso una scelta di sistema:
hero, striscia di quattro fatti, chi siamo, **le persone**, il percorso del
rapporto sulla fascia scura, i servizi con la nota sulla fatturazione, chiusura
con l'invito al contatto. Le persone vengono prima della tassonomia, e la
fatturazione elettronica è uno strumento dentro i servizi, non un capitolo a sé.

La hero non argomenta e non elenca: etichetta, titolo, una sola frase di
apertura e **quattro collegamenti con icona** verso le sezioni della pagina —
chi siamo, le persone, metodo, cosa facciamo. Sono l'unico indice del sito e
stanno tutti dentro la prima schermata. I recapiti azionabili vivono nel pannello della fascia
scura e nella pagina contatti, non nella hero.

Contenitore centrato da 1200px (`--wrap`), 820px per le colonne di sola lettura
(`--wrap-narrow`), con gutter fluido `clamp(20px, 5vw, 48px)`. Il ritmo
verticale è tutto in due passi: `clamp(72px, 10vw, 132px)` tra le sezioni e
`clamp(56px, 7vw, 88px)` per quelle compatte — nessun valore intermedio inventato
caso per caso.

Le griglie sono `auto-fit`/`auto-fill` con minimi espliciti (288px per le card
dei servizi, 266px per i recapiti), tranne il team, che usa 4 colonne fisse sopra
i 900px e 2 sotto, con la card del titolare su due celle: sette persone stanno
così in righe sempre complete a entrambe le larghezze, mai con celle vuote. Le sezioni a due colonne (chi siamo, fatturazione) usano frazioni
asimmetriche — `.9fr / 1.1fr`, `1fr / .92fr` — e collassano a colonna singola a
900px.

I punti di rottura non sono una scala: sono nove soglie dettate dal contenuto,
da 480px a 940px, più `min-width: 900px` per il team. La regola è che si aggiunge
una soglia quando un elemento si rompe, non per riempire una tabella.

L'header è fisso, alto 82px, e si contrae a 68px allo scroll con fondo carta
translucido e sfocatura. Sopra i 940px la navigazione è in linea; sotto diventa
un pannello a schermo intero. Ogni sezione ancorabile porta
`scroll-margin-top: 92px`, così i link interni non finiscono sotto l'header.

## Elevation & Depth

Sistema **piatto con stratificazione tonale**. La profondità nasce dal colore —
carta, carta scura, bianco — e da filetti da un pixel, non dalle ombre. Le due
ombre esistenti sono risposte a un gesto o segnali di galleggiamento, mai
decorazione a riposo.

### Shadow Vocabulary
- **Sollevamento breve** (`0 1px 2px rgba(16,20,28,.04), 0 8px 24px -16px rgba(16,20,28,.18)`):
  bottoni in hover e riquadro della CTA. Doppia ombra: un contatto stretto più
  una diffusione ampia e molto negativa, così l'elemento sembra staccarsi di due
  pixel e non fluttuare.
- **Sollevamento ampio** (`0 2px 4px rgba(16,20,28,.04), 0 24px 48px -28px rgba(16,20,28,.28)`):
  card dei servizi in hover e pulsante «torna su».

### Named Rules
**La regola del piatto a riposo.** Nessuna superficie del contenuto ha ombra
prima di essere toccata. Le due eccezioni sono dichiarate e chiuse: il riquadro
della CTA e l'avviso cookie, che devono staccarsi dal fondo per essere letti
come oggetti sovrapposti. Tutto il resto cambia tono di fondo o aggiunge un
filetto.

## Shapes

Due raggi e una pillola. Le card e i pannelli usano 10px (`--radius-lg`): abbastanza
per essere gentili, non tanto da sembrare morbidi. Le superfici minori — riquadri
di richiamo, celle di tabella — usano 4px (`--radius`). Tutti gli elementi
azionabili sono pillole (`999px`): bottoni, switch di lingua, hamburger, «torna
su». La forma dice cosa si può premere, prima del colore.

L'anello di focus non introduce un quarto raggio: eredita quello dell'elemento
che circonda.

Il linguaggio dei bordi è sottrattivo: un filetto da 1px in trasparenza al posto
del bordo, spesso su un solo lato — la barra d'ottone a sinistra della citazione,
la linea superiore dei numeri della hero, i separatori della striscia valori. Le
griglie di card si disegnano con un gap da 1px su fondo filetto, così le celle
sono divise da linee vere e non da spazi.

Le icone sono SVG inline in tratto da 1.2px su griglia 24, mai riempimenti. Il
ritratto è l'unico cerchio del sistema.

## Components

### Buttons
- **Shape:** pillola piena (`999px`), testo in Jost 500 con `letter-spacing .04em`,
  mai a capo (`white-space: nowrap`).
- **Primary:** blu del marchio su testo bianco, padding `.95rem 1.6rem`.
- **Hover:** scende al blu profondo, si solleva di 2px e prende il sollevamento
  breve; transizione di 350ms con `cubic-bezier(.22,.61,.36,1)`.
- **Focus:** un anello di 2px nel blu del marchio con offset 2px, più un alone
  bianco di 4px che lo stacca da qualunque superficie; sui fondi scuri i due
  anelli si invertono (bianco dentro, blu fuori). Compare senza transizione e
  non viene mai rimosso. Misurato: 7,3-8,6:1 sui fondi chiari, 8,6-11,9:1 sui
  fondi scuri, sempre oltre il 3:1 richiesto — l'anello d'ottone che questo
  documento prescriveva prima restava fra 2,5 e 2,9:1.
- **Ghost:** trasparente con filetto e testo inchiostro; in hover diventa blu
  pieno con testo bianco. Sui fondi scuri esistono le varianti *light* (bianco su
  blu profondo, hover ottone chiaro) e *outline-light*.
- **Small:** stessa pillola con padding `.66rem 1.1rem` e corpo `.86rem`, per i
  bottoni dentro le card.

### Cards / Containers
- **Corner Style:** 10px.
- **Background:** bianco su fondo carta; nella fascia scura, bianco al 5% con
  sfocatura.
- **Shadow Strategy:** nessuna a riposo (vedi Elevation).
- **Border:** filetto tenue da 1px.
- **Internal Padding:** `clamp(24px, 2.6vw, 32px)`.
- **Distinctive:** le card dei servizi sono **descrittive e immobili**: nessun
  sollevamento, nessuna ombra, nessuna barra che si apre, cursore normale. Non
  sono link e non devono prometterlo. L'unica card che reagisce è il ritratto del
  team, e reagisce sul ritratto, non sulla card.

### Navigation
- Voci in Jost 400 su `.96rem`, colore inchiostro morbido, con un filetto
  d'ottone che si apre da sinistra in hover e resta sulla pagina corrente
  (`aria-current`). Ogni voce è una parola sola — studio, persone, metodo,
  servizi, contatti — perché la fila resti leggibile a colpo d'occhio: la
  sezione del percorso del rapporto si chiama «Come lavoriamo» nel titolo e
  «Metodo» in navigazione. Sotto i 940px la navigazione diventa un pannello fisso a
  schermo intero su fondo carta, con le voci in 1.6rem peso 300; marchio, switch
  di lingua e chiusura restano sopra il pannello. L'header a menu aperto rinuncia
  alla sfocatura, che altrimenti diventerebbe il contenitore del pannello.

### Chips
- Lo switch di lingua è l'unico chip: due bottoni in pillola dentro una pillola
  con filetto, la lingua attiva in blu pieno su testo bianco, `aria-pressed` a
  segnalarne lo stato. Le due pastiglie hanno `min-width` fissa: IT ed EN hanno
  glifi di larghezza diversa e devono restare identiche.

### Team portrait (signature)
Cerchio da `clamp(104px, 10vw, 132px)` con gradiente carta scura→blu al 10% e
filetto, `clamp(124px, 12vw, 156px)` nella card del titolare. In hover il ritratto sale di 4px, scala a 1.04 e prende un doppio alone
concentrico nel blu del marchio (5px al 10%, 10px al 5%) più una diffusione bassa;
le iniziali passano al blu chiaro e il nome al blu del marchio. La card sotto non
cambia sfondo: le persone non sono link e non devono sembrarlo. Dove la
fotografia esiste il ritratto parte da `grayscale(.25)` e va al colore pieno;
dove non esiste ancora, il cerchio porta le iniziali del nome. Sotto il nome, il
ruolo in `.86rem` inchiostro tenue, in ottone d'inchiostro per il titolare.

### Section opener (signature)
La tripletta etichetta-titolo-lead descritta in Typography, con l'etichetta in
`display: inline-flex` e un filetto d'ottone da 28px prima del testo. Nelle
sezioni centrate il filetto si nasconde.

### Map consent gate (signature)
Al posto dell'iframe di Google Maps, un pannello a gradiente carta con icona,
titolo, spiegazione di cosa viene trasmesso e bottone «Carica la mappa».
L'iframe viene creato solo dopo il consenso. È un componente di conformità: non
va sostituito con un caricamento automatico.

## Do's and Don'ts

### Do:
- **Do** aprire ogni sezione con la tripletta etichetta d'ottone, titolo, lead.
- **Do** usare il fondo carta come default e il bianco solo per le superfici
  sollevate.
- **Do** tenere i titoli in peso 300-400 e affidare la gerarchia a dimensione e
  spazio.
- **Do** disegnare le divisioni con filetti da 1px in trasparenza
  (`rgba(16,20,28,.10)` e `.06`), non con bordi pieni.
- **Do** dare a ogni elemento azionabile la forma a pillola e il focus a doppio
  anello (blu del marchio più alone bianco; invertito sui fondi scuri).
- **Do** tenere un contatto azionabile — `tel:` o `mailto:` — nel pannello della
  fascia scura e in ogni footer, che sono identici su tutte le pagine.
- **Do** far reagire gli elementi con transizioni lente (300-550ms) e la curva
  `cubic-bezier(.22,.61,.36,1)`, e azzerare i movimenti sotto
  `prefers-reduced-motion`.
- **Do** servire ogni risorsa dal dominio dello Studio: font in locale, icone
  SVG inline, nessuno script di terze parti.

### Don't:
- **Don't** introdurre un terzo colore di accento: il sistema ha blu e ottone.
- **Don't** colorare superfici con l'ottone, che vive solo su testo, filetti e
  icone.
- **Don't** aggiungere una seconda sezione a fondo scuro.
- **Don't** mettere ombre su superfici a riposo.
- **Don't** usare grassetti sopra 500 nei titoli o maiuscolo fuori dalle
  etichette.
- **Don't** usare `--brass` per il testo su fondi chiari: per quello esiste
  `--brass-ink`.
- **Don't** nascondere contenuto con l'animazione allo scroll senza la classe
  `js` sull'elemento radice: senza JavaScript la pagina deve restare leggibile.
- **Don't** far sembrare cliccabile ciò che non lo è: nessun cambio di sfondo o
  cursore su card che non portano da nessuna parte.
- **Don't** caricare la mappa o qualunque risorsa esterna senza consenso
  esplicito.
- **Don't** ridurre il corpo del testo sotto i 17px o rimpicciolire i bersagli
  cliccabili: il pubblico include persone anziane e non tecniche.
