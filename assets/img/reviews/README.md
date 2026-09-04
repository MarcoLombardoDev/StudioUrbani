# Fotografie dei profili delle recensioni / Review profile photos

Cartella **gestita dal workflow**, non a mano: `scripts/fetch-reviews.mjs`
scarica qui le fotografie dei profili degli autori delle recensioni Google
(128×128 px, nome del file dall'impronta della recensione) e cancella quelle
che Google non restituisce più. Ogni file aggiunto a mano verrebbe rimosso
alla prima esecuzione.

Sono servite dal dominio dello Studio di proposito: linkarle da
`googleusercontent.com` sarebbe una richiesta a terze parti dal browser di chi
visita il sito, e la sezione «Dicono di noi» esiste proprio per non farne
nessuna. Dove Google non fornisce la fotografia, la card mostra le iniziali
dell'autore.
