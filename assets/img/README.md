# Immagini / Images

| File | Formato | Uso |
|---|---|---|
| `logo.svg` | SVG 426×500 | Logo nell'header (fondo chiaro) |
| `logo-light.svg` | SVG 426×500 | Variante per il footer scuro, generata da `logo.svg` |
| `logo.png` | PNG | Anteprima social (`og:image`) e usi fuori dal web |
| `favicon.ico` | ICO multi-size | Icona del browser |
| `favicon-16x16.png`, `favicon-32x32.png` | PNG | Icone del browser |
| `apple-touch-icon.png` | PNG 180×180 | Icona iOS |
| `android-chrome-192x192.png`, `android-chrome-512x512.png` | PNG | Icone del web manifest |
| `site.webmanifest` | JSON | Manifest PWA (percorsi relativi a questa cartella) |
| `massimo_urbani_face.png` | PNG 380×380 | Ritratto del titolare nella card del team |

`logo-light.svg` è derivato da `logo.svg` sostituendo il tratto con `#ffffff`
e i vuoti con il colore del footer (`--navy-deep`, `#033a5c`): se cambia il
logo o quel colore va rigenerato.

## Fotografie del team / Team photos

C'è quella del titolare (`massimo_urbani_face.png`); per gli altri sei
professionisti non esistono e non sono attese, quindi le loro card riportano
solo nome e ruolo, senza segnaposto tondo.

Se un domani arrivassero — quadrate, almeno 320×320 px, inquadratura sul volto
— si inseriscono con un `<img>` dentro un `.team__photo`, togliendo la classe
`team__card--plain` dalla card. Ritaglio circolare, `object-fit`, `grayscale` in
riposo e colore in hover sono già gestiti dal CSS.

## Sottocartelle / Subfolders

`reviews/` contiene le fotografie dei profili delle recensioni Google: la
gestisce il workflow, non si tocca a mano (vedi `reviews/README.md`).
