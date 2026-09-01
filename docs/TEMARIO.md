# Temario maestro

Mapa de las 24 láminas. Es el resumen operativo de lo que ya vive, disperso, en el
frontmatter de `src/content/tareas/*.md` — aquí se ve de un vistazo el orden, las
fechas y qué falta escribir. Si cambian fechas o títulos en el frontmatter (por
ejemplo con `npm run agendar -- <fecha>`), esta tabla se actualiza a mano para que
no se desalinee.

| # | Archivo | Título | Unidad | Publica | Estado |
|---|---|---|---|---|---|
| 01 | `01-que-es-estar-vivo.md` | ¿Qué es estar vivo? | La vida y la célula | 2026-09-01 | ✅ escrita |
| 02 | `02-la-celula.md` | La célula: la unidad de lo vivo | La vida y la célula | 2026-09-15 | ✅ escrita |
| 03 | `03-procariota-y-eucariota.md` | Dos formas de ser célula | Dentro de la célula | 2026-10-01 | ✅ escrita |
| 04 | `04-organelos.md` | Los organelos y su oficio | Dentro de la célula | 2026-10-15 | ✅ escrita |
| 05 | `05-fotosintesis.md` | Fotosíntesis: comer luz | Cómo comen los seres vivos | 2026-11-01 | ⬜ pendiente |
| 06 | `06-nutricion-y-digestion.md` | Nutrición heterótrofa y digestión | Cómo comen los seres vivos | 2026-11-15 | ⬜ pendiente |
| 07 | `07-respiracion-celular.md` | Respiración celular: sacarle la energía a la comida | Respiración | 2026-12-01 | ⬜ pendiente |
| 08 | `08-sistema-respiratorio.md` | El sistema respiratorio | Respiración | 2026-12-15 | ⬜ pendiente |
| 09 | `09-sistema-circulatorio.md` | El sistema circulatorio | Transporte | 2027-01-01 | ⬜ pendiente |
| 10 | `10-transporte-en-plantas.md` | Cómo se mueve el agua dentro de una planta | Transporte | 2027-01-15 | ⬜ pendiente |
| 11 | `11-reproduccion-asexual-y-sexual.md` | Dos maneras de dejar descendencia | Reproducción | 2027-02-01 | ⬜ pendiente |
| 12 | `12-mitosis-y-meiosis.md` | Mitosis y meiosis | Reproducción | 2027-02-15 | ⬜ pendiente |
| 13 | `13-mendel.md` | Mendel y sus chícharos | Herencia | 2027-03-01 | ⬜ pendiente |
| 14 | `14-adn-y-genes.md` | ADN, genes y cromosomas | Herencia | 2027-03-15 | ⬜ pendiente |
| 15 | `15-evidencias-de-la-evolucion.md` | Las pruebas de que la vida cambia | Evolución | 2027-04-01 | ⬜ pendiente |
| 16 | `16-seleccion-natural.md` | Selección natural | Evolución | 2027-04-15 | ⬜ pendiente |
| 17 | `17-clasificacion.md` | Poner orden en lo vivo | Biodiversidad | 2027-05-01 | ⬜ pendiente |
| 18 | `18-grandes-grupos.md` | Los grandes grupos de seres vivos | Biodiversidad | 2027-05-15 | ⬜ pendiente |
| 19 | `19-ecosistemas.md` | Ecosistemas y redes tróficas | Ecología | 2027-06-01 | ⬜ pendiente |
| 20 | `20-ciclos-biogeoquimicos.md` | Los ciclos del agua, el carbono y el nitrógeno | Ecología | 2027-06-15 | ⬜ pendiente |
| 21 | `21-microorganismos-y-defensas.md` | Microorganismos, enfermedades y defensas | Salud | 2027-07-01 | ⬜ pendiente |
| 22 | `22-alimentacion-y-salud.md` | Alimentación y salud | Salud | 2027-07-15 | ⬜ pendiente |
| 23 | `23-biodiversidad-de-mexico.md` | La biodiversidad de México | México vivo | 2027-08-01 | ⬜ pendiente |
| 24 | `24-impacto-y-conservacion.md` | El impacto humano y la conservación | México vivo | 2027-08-15 | ⬜ pendiente |

## Hilo conductor entre láminas

El orden no es arbitrario: cada lámina se apoya en vocabulario o ideas de una
anterior. Al escribir, no usar un término que la alumna todavía no debería conocer
según esta cadena (o, si hace falta, recordarlo en una frase, como ya hace la
lámina 04 al retomar "permeabilidad selectiva" de la 03).

- **01 → 02:** de "qué es estar vivo" a "la célula es el nivel donde empieza lo vivo".
- **02 → 03:** de "las células existen y son chicas" a "hay dos tipos de célula".
- **03 → 04:** de "procariota vs. eucariota" al detalle de cada organelo eucariota.
- **04 → 05 y 07:** los organelos ya presentados (cloroplasto, mitocondria) son el
  escenario físico de fotosíntesis y respiración celular. 05 y 07 no deberían
  re-explicar qué es un cloroplasto o una mitocondria, sólo qué hacen en ese proceso.
- **04 → 06:** la vacuola y la membrana (permeabilidad selectiva) reaparecen al
  hablar de digestión y absorción de nutrientes.
- **05 ↔ 07:** fotosíntesis y respiración celular son procesos inversos y
  complementarios; 07 debe señalar explícitamente esa simetría (ya lo anticipa el
  subtema "Relación con la fotosíntesis" en el frontmatter de 07).
- **07 → 08:** de la respiración celular (a nivel de mitocondria) al sistema
  respiratorio (a nivel de órgano) que le lleva el oxígeno.
- **08 → 09:** el oxígeno que entra por los pulmones necesita transporte: entra el
  sistema circulatorio.
- **09 → 10:** transporte en animales (bomba, sangre) contrastado con transporte en
  plantas (sin bomba, por capilaridad/transpiración).
- **04 (núcleo, ADN) → 12 → 13 → 14:** el ADN se menciona ya en 03-04 como "lo que
  guarda el núcleo"; 12 (mitosis/meiosis) explica cómo se reparte al dividirse la
  célula, 13 (Mendel) cómo se hereda a nivel de organismo sin saber aún qué es un
  gen molecularmente, y 14 cierra explicando qué es el gen que Mendel no podía ver.
- **11 → 12:** reproducción asexual/sexual como marco, mitosis/meiosis como el
  mecanismo celular detrás de cada una.
- **12 (meiosis, variabilidad) → 16 (selección natural):** la variabilidad genética
  que produce la meiosis es la materia prima sobre la que actúa la selección natural.
- **15 → 16:** evidencia de que la vida cambia, luego el mecanismo (selección
  natural) que explica cómo cambia.
- **16 → 17 → 18:** de cómo cambian las especies a cómo se nombran y clasifican
  (17), y de ahí al recorrido por los grandes grupos (18).
- **18 → 19 → 20:** de los organismos (18) a cómo interactúan en un ecosistema (19)
  y cómo circula la materia entre ellos y el ambiente (20).
- **03 (bacterias) → 21:** retomar directamente lo ya dicho en 03 sobre que la
  mayoría de las bacterias son inofensivas o útiles, antes de hablar de las que
  causan enfermedad y de las defensas del cuerpo.
- **21 → 22:** de las defensas del cuerpo contra lo que entra, a qué debe entrar
  (nutrición) para que esas defensas y todo lo demás funcionen.
- **19-20 → 23 → 24:** de ecología general a la biodiversidad concreta de México y,
  de ahí, al impacto humano sobre ella.
