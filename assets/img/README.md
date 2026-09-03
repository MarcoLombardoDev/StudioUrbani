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

`logo-light.svg` è derivato da `logo.svg` sostituendo il tratto con `#ffffff`
e i vuoti con il colore del footer (`--navy-deep`, `#033a5c`): se cambia il
logo o quel colore va rigenerato.

## Fotografie del team / Team photos

Attese in `assets/img/team/`, quadrate, almeno 320×320 px. Vanno inserite come
`<img>` dentro `.team__photo` (ritaglio circolare e `object-fit` già gestiti dal CSS).
