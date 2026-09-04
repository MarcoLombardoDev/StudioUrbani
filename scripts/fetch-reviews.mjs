#!/usr/bin/env node
/**
 * Scarica valutazione media e recensioni pubbliche della scheda Google dello
 * Studio e le salva in assets/data/reviews.json, che il sito legge come file
 * statico: il browser del visitatore non contatta mai Google.
 *
 * Uso (locale o da GitHub Actions):
 *   GOOGLE_MAPS_API_KEY=... [GOOGLE_PLACE_ID=...] node scripts/fetch-reviews.mjs
 *
 * Senza GOOGLE_PLACE_ID il place id viene risolto una volta per nome e
 * indirizzo e stampato a schermo: conviene fissarlo come variabile del repo,
 * cosi' ogni esecuzione fa una chiamata in meno e non puo' agganciare la
 * scheda sbagliata.
 *
 * Il testo delle recensioni viene salvato come Google lo restituisce, senza
 * riscritture: le condizioni di Google Maps Platform impongono di mostrarlo
 * integro e attribuito al suo autore. L'aggiornamento quotidiano tiene la
 * copia locale entro i 30 giorni di cache consentiti.
 */

import { writeFile, readFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = resolve(ROOT, 'assets/data/reviews.json');

const KEY = process.env.GOOGLE_MAPS_API_KEY;
/* Le chiavi "browser" sono limitate per referrer HTTP e da un server, che non
   ne manda nessuno, verrebbero rifiutate. Se Google risponde
   API_KEY_HTTP_REFERRER_BLOCKED la richiesta viene ripetuta una volta
   dichiarando il dominio del sito; GOOGLE_API_REFERER serve solo a usarne un
   altro. Con una chiave dedicata al server (nessuna restrizione di
   applicazione) nulla di tutto questo entra in gioco. */
const SITE = 'https://www.studiourbani.it/';
let referer = process.env.GOOGLE_API_REFERER || null;
const NAME = process.env.GOOGLE_PLACE_NAME || 'Studio Massimo Urbani, Via Cristoforo Colombo 348, Roma';
const MAX = Number(process.env.GOOGLE_REVIEWS_MAX || 5);

if (!KEY) {
  console.error('GOOGLE_MAPS_API_KEY non impostata: niente da fare.');
  process.exit(78); // EX_CONFIG: il workflow lo tratta come "salta", non come errore
}

async function call(path, { method, fields, body }) {
  const res = await fetch('https://places.googleapis.com/v1/' + path, {
    method,
    headers: {
      'X-Goog-Api-Key': KEY,
      'X-Goog-FieldMask': fields,
      ...(referer ? { Referer: referer } : {}),
      ...(body ? { 'Content-Type': 'application/json' } : {})
    },
    body: body ? JSON.stringify(body) : undefined
  });
  return { ok: res.ok, status: res.status, text: await res.text() };
}

async function places(path, { method = 'GET', fields, body } = {}) {
  let res = await call(path, { method, fields, body });

  /* Un solo tentativo in piu', e sempre: le chiamate partono in parallelo e
     controllare qui lo stato globale del referer farebbe saltare il tentativo
     a chi arriva secondo. */
  if (!res.ok && res.text.includes('API_KEY_HTTP_REFERRER_BLOCKED')) {
    if (!referer) {
      referer = SITE;
      console.log('Chiave limitata per referrer: riprovo dichiarando', SITE);
    }
    res = await call(path, { method, fields, body });
  }

  if (!res.ok) throw new Error('Places API ' + res.status + ': ' + res.text.slice(0, 600));
  return JSON.parse(res.text);
}

async function resolvePlaceId() {
  if (process.env.GOOGLE_PLACE_ID) return process.env.GOOGLE_PLACE_ID;
  const data = await places('places:searchText', {
    method: 'POST',
    fields: 'places.id,places.displayName,places.formattedAddress',
    body: { textQuery: NAME, languageCode: 'it', maxResultCount: 1 }
  });
  const hit = data.places && data.places[0];
  if (!hit) throw new Error('Nessuna scheda trovata per: ' + NAME);
  console.log('Place id risolto:', hit.id, '—', hit.displayName?.text, '—', hit.formattedAddress);
  console.log('Fissalo come variabile GOOGLE_PLACE_ID del repository.');
  return hit.id;
}

function detail(placeId, languageCode) {
  return places('places/' + encodeURIComponent(placeId) + '?languageCode=' + languageCode, {
    fields: 'id,displayName,rating,userRatingCount,googleMapsUri,reviews'
  });
}

function normalize(review) {
  return {
    id: review.name || null,
    author: review.authorAttribution?.displayName || null,
    rating: typeof review.rating === 'number' ? review.rating : null,
    text: review.text?.text || review.originalText?.text || '',
    relative: review.relativePublishTimeDescription || null,
    publishedAt: review.publishTime || null,
    url: review.googleMapsUri || review.authorAttribution?.uri || null
  };
}

const placeId = await resolvePlaceId();
const [it, en] = await Promise.all([detail(placeId, 'it'), detail(placeId, 'en')]);

const enById = new Map((en.reviews || []).map((r) => [r.name, normalize(r)]));
const reviews = (it.reviews || [])
  .map(normalize)
  .filter((r) => r.author && r.text)
  .sort((a, b) => String(b.publishedAt).localeCompare(String(a.publishedAt)))
  .slice(0, MAX)
  .map((r) => {
    const twin = enById.get(r.id);
    return {
      author: r.author,
      rating: r.rating,
      relative: r.relative,
      relativeEn: twin?.relative || null,
      text: r.text,
      textEn: twin && twin.text !== r.text ? twin.text : null,
      publishedAt: r.publishedAt,
      url: r.url
    };
  });

const payload = {
  source: 'google-places',
  placeId,
  place: it.displayName?.text || null,
  updatedAt: new Date().toISOString(),
  rating: typeof it.rating === 'number' ? it.rating : null,
  total: typeof it.userRatingCount === 'number' ? it.userRatingCount : null,
  /* googleMapsUri porta in coda un parametro di tracciamento interno di
     Google (g_mp): via, l'indirizzo con il solo cid e' stabile. */
  url: it.googleMapsUri ? it.googleMapsUri.replace(/([?&])g_mp=[^&]*&?/, '$1').replace(/[?&]$/, '') : null,
  reviews
};

if (payload.rating === null && reviews.length === 0) {
  console.error('La scheda non espone ne\' valutazione ne\' recensioni: file non aggiornato.');
  process.exit(1);
}

const next = JSON.stringify(payload, null, 2) + '\n';
let prev = null;
try { prev = await readFile(OUT, 'utf8'); } catch { /* prima esecuzione */ }

// Un aggiornamento che cambia solo updatedAt non vale un commit.
const stripTime = (s) => (s ? s.replace(/"updatedAt": "[^"]*",\n/, '') : s);
if (prev && stripTime(prev) === stripTime(next)) {
  console.log('Nessuna variazione: file lasciato invariato.');
  process.exit(0);
}

await mkdir(dirname(OUT), { recursive: true });
await writeFile(OUT, next, 'utf8');
console.log('Scritto', OUT, '—', payload.rating, 'su 5,', payload.total, 'valutazioni,', reviews.length, 'recensioni.');
