# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Utente primario: chi valuta lo Studio Urbani per affidargli la propria
contabilità — imprese, professionisti e privati, prevalentemente a Roma e nel
Lazio. Arriva dal passaparola o da una ricerca, spesso in un momento di
necessità (apertura di un'attività, un adempimento arretrato, un contenzioso
tributario, un cambio di consulente) e ha un compito preciso: capire se lo
Studio sa gestire il suo caso e se merita fiducia, poi contattarlo.

Utenti secondari confermati: i clienti già acquisiti, che usano il sito come
riferimento per recapiti, orari e informazioni sulla fatturazione elettronica.

## Product Purpose

Sito istituzionale che presenta lo Studio e genera il primo contatto. Il
successo è una telefonata o una email di un potenziale cliente che arriva già
informato su ambito di attività e sede, non il tempo passato sulle pagine.

## Positioning

Tre tratti che lo Studio considera distintivi e che il lavoro futuro deve
preservare:

1. **Continuità del rapporto.** Un referente stabile che conosce il cliente e
   ne segue numeri, adempimenti e scadenze nel tempo; chi risponde è chi
   lavora sulla pratica.
2. **Nove aree integrate.** Società, contabilità, fisco, consulenza aziendale,
   lavoro, rapporti con il Tribunale, associazioni, legale e innovazione
   tecnologica gestite da un unico interlocutore, senza rimbalzi tra
   consulenti diversi.
3. **Rete di specialisti.** Docenti universitari, società di revisione e
   certificazione, strutture professionali estere, merchant bank, società di
   servizi e associazioni di categoria, attivate per operazioni di rilevanza
   internazionale, societaria, penale-tributaria e legale.

Lo Studio opera in cloud (contabilità e paghe a distanza, area riservata,
fatturazione elettronica): è una capacità reale e un vantaggio operativo, ma
non è stata indicata come tratto distintivo, quindi va comunicata come
strumento, non come promessa centrale.

## Operating Context

- Sede unica a Roma, Via Cristoforo Colombo 348, Sc. D int. 3 — 00145.
- Orari: lunedì-venerdì, 09:00-13:00 e 14:00-18:00; chiuso il fine settimana.
- Primo contatto per telefono o email, poi incontro in studio o in
  videochiamata.
- Tre recapiti email distinti per tipologia: generiche, amministrative, privacy.
- Rapporti ricorrenti con Agenzia delle Entrate, INPS, INAIL, Camere di
  Commercio, Autorità Giudiziaria, istituti di credito e società di revisione.
- Il cliente consegna documenti contabili o li trasmette dall'area riservata;
  le fatture elettroniche viaggiano verso il Sistema di Interscambio.

## Capabilities and Constraints

- Cinque pagine: landing unica (studio, servizi, fatturazione, team, contatti)
  più contatti, note legali, privacy policy e cookie policy.
- Bilingue IT/EN: l'italiano vive nell'HTML come lingua sorgente, l'inglese in
  un dizionario JavaScript; la scelta è ricordata in `localStorage`.
- Statico, senza build step e senza dipendenze esterne: HTML, CSS e JavaScript
  vanilla. Vincolo dichiarato del progetto, non un accidente.
- Nessun servizio di terze parti a runtime: font serviti in locale, nessun
  cookie di profilazione o analytics, mappa Google Maps caricata solo dopo
  consenso esplicito.
- Pubblicazione da `main`; anteprima su GitHub Pages
  (`marcolombardodev.github.io/StudioUrbani/`), dominio finale previsto
  `www.studiourbani.it`. L'anteprima porta un `noindex` condizionato all'host.
- Nessun form di contatto: si scrive o si telefona. Nessun backend.
- L'area riservata clienti non ha un indirizzo pubblico sul sito: la richiesta
  di informazioni passa dalla pagina contatti. Decisione confermata, non lacuna.
- Le sezioni di notizie da feed RSS del sito precedente (*Fisco e normativa*,
  *Focus Lazio*) sono escluse, non rinviate.

## Brand Commitments

- Nome: Studio Urbani (Studio Massimo Urbani nelle forme più formali).
- Payoff: «Consulenza tributaria e legale · Consulenza del lavoro».
- Logo fornito dallo Studio: il globo a rete, `assets/img/logo.svg` su fondi
  chiari e `logo-light.svg` sui fondi scuri, entrambi su sfondo trasparente.
- Colore del marchio: blu petrolio `#04507d`, da cui deriva la palette.
- Titoli in Jost, testi in Inter, entrambi serviti in locale.
- Nessun collegamento ai social: scelta esplicita del committente.
- Riga di copyright obbligatoria: «© <anno> Massimo Urbani
  (P.IVA 10600291008) - Tutti i diritti riservati», con anno a runtime.

## Evidence on Hand

Reale e verificabile: indirizzo, tre numeri di telefono e fax, tre email per
tipologia, orari, partita IVA, nomi degli otto professionisti dello staff
(Massimo Urbani titolare responsabile, commercialista e revisore legale;
Edmondo Urbani, Silvia Urbani, Giuliano Cerasa, Giuseppe Forcinella, Daniela
Carrarini, Massimiliano Sgamma, Marco Modica), logo in SVG e PNG, set completo
di favicon.

Da non inventare, perché non esiste materiale: testimonianze, casi di studio,
numero di clienti o di pratiche, anni di attività e data di fondazione,
riconoscimenti, loghi di clienti, dati economici.

Attenzione alla provenienza dei testi: i contenuti sono stati ricostruiti dagli
snapshot dei motori di ricerca del sito precedente, perché il dominio è
irraggiungibile dall'ambiente di sviluppo. Da validare con lo Studio prima
della pubblicazione: l'elenco puntuale delle aree *Consulenza Aziendale*,
*Associazioni* e *Legale*, i ruoli dei singoli professionisti e le date di
aggiornamento delle pagine legali.

Decisioni aperte, da non risolvere per conto dello Studio:

- **Fotografie del team.** In arrivo. Le card mostrano un segnaposto tondo con
  le iniziali; il ritaglio circolare e l'`object-fit` sono già pronti, basta un
  `<img>` dentro `.team__photo`.
- **Versione inglese.** Requisito reale, legato a clienti e operazioni
  internazionali: l'inglese va mantenuto allineato all'italiano a ogni
  modifica dei contenuti, non trattato come un extra.

## Product Principles

1. **La fiducia si guadagna con i fatti.** Recapiti, sede, persone e aree di
   competenza verificabili valgono più di qualsiasi affermazione di qualità.
   Mai colmare un vuoto di contenuto con una promessa.
2. **Un solo interlocutore, anche nella comunicazione.** Il sito deve far
   sentire che dietro c'è una persona che risponde, non un centralino.
3. **Il primo contatto deve essere a portata di mano.** Da qualunque sezione,
   telefonare o scrivere resta a un gesto di distanza.
4. **Sobrietà professionale.** Il committente è uno studio di commercialisti:
   modernità sì, effetti che distraggono da numeri e norme no.
5. **Niente terze parti silenziose.** Ogni trasferimento di dati verso
   l'esterno è esplicito e consentito dall'utente, o non avviene.

## Accessibility & Inclusion

Nessuno standard formale è stato richiesto dal committente. L'implementazione
attuale mantiene skip link, focus visibile, gerarchia dei titoli, `aria-*` su
menu e switch lingua, rispetto di `prefers-reduced-motion` e contrasto adeguato
sui testi principali: sono da preservare, non da riconquistare a ogni modifica.
Il pubblico include persone anziane e non tecniche, per cui corpo del testo e
dimensione dei bersagli cliccabili non vanno ridotti.
