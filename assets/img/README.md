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

Fornita quella del titolare (`massimo_urbani_face.png`). Le altre sei sono
attese: quadrate, almeno 320×320 px, inquadratura sul volto. Si inseriscono come
`<img>` dentro `.team__photo` — ritaglio circolare, `object-fit`, `grayscale` in
riposo e colore in hover sono già gestiti dal CSS — sostituendo il segnaposto
con le iniziali.
