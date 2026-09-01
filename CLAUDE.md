# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Qué es esto

Sitio estático (Astro) con 24 láminas de biología para secundaria. No hay servidor
ni base de datos: cada lámina es un archivo Markdown en `src/content/tareas/` con
una fecha (`publicaEn`) y una bandera (`escrita`). El build sólo genera las páginas
de las láminas cuya fecha ya llegó y que están marcadas como escritas; las demás
no existen como página ni aparecen en el menú. GitHub Actions reconstruye y
republica el sitio automáticamente los días 1 y 15 de cada mes — ver
`.github/workflows/publicar.yml` (cron en UTC, comentado con la hora local de
Teziutlán).

## Comandos

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor local, muestra sólo lo ya publicado |
| `npm run preview-todo` | Servidor local mostrando todo (equivale a `VISTA_PREVIA=true astro dev`) |
| `npm run build` | Genera `dist/` |
| `npm run agendar -- --revisar` | Lista láminas sin escribir cuya fecha viene en menos de 60 días |
| `npm run agendar -- 2027-01-01` | Reasigna las fechas de todas las láminas desde ese mes (día 1 y 15, dos por mes) |

Para simular cómo se verá el sitio en una fecha futura sin esperar:

```bash
FECHA_SIMULADA=2027-03-20 npm run build
```

No hay suite de tests ni linter configurado en este repo.

## Arquitectura

- `src/content/tareas/*.md` — las 24 láminas. Frontmatter validado por el schema
  en `src/content.config.ts` (`numero`, `titulo`, `unidad`, `resumen`, `subtemas`,
  `publicaEn`, `escrita`).
- `src/lib/agenda.ts` — toda la lógica de visibilidad temporal vive aquí:
  `yaSalio`, `atrasada`, `visible`, `siguiente`, y las variables de entorno
  `vistaPrevia` (`VISTA_PREVIA`) y `hoy` (`FECHA_SIMULADA`). Cualquier cambio a
  las reglas de "qué se publica cuándo" pasa por este archivo.
- `src/components/Lamina.astro` — tarjeta de una lámina en el índice; usa
  `agenda.ts` para decidir si enlaza a la página, muestra "En preparación" o
  muestra la cuenta regresiva.
- `src/pages/tareas/[...id].astro` — ruta dinámica que renderiza una lámina
  individual a partir de su entrada en la colección `tareas`.
- `scripts/agendar.mjs` — script standalone (no importa código del sitio, parsea
  el frontmatter con regex) que reagenda fechas dos por mes y avisa qué falta
  escribir. Se corre en CI antes del build (`--revisar`) y a mano para reagendar.
- `astro.config.mjs` — `site`/`base` deben coincidir con el nombre real del repo
  de GitHub Pages (actualmente `minami73.github.io/biologia/`). Usa siempre la
  función `ruta()` de `agenda.ts` para construir hrefs internos, en vez de rutas
  absolutas, para respetar el `base`.

## Antes de escribir una lámina

Hay una carpeta `docs/` con el criterio editorial completo. Es material interno:
no se publica, no entra al build (`content.config.ts` sólo mira
`src/content/tareas/`), y no se debe confundir con las láminas del sitio.

- `docs/SPEC.md` — el formato obligatorio del cuerpo de cada lámina (esqueleto de
  secciones, reglas de voz, reglas de las actividades, longitud objetivo). Es el
  contrato a seguir siempre, más completo que un resumen rápido.
- `docs/TEMARIO.md` — el mapa de las 24 láminas con su unidad, fecha y estado, más
  el hilo conductor entre láminas (qué término o idea de una lámina anterior se
  puede dar por sabido en la siguiente, para no reexplicar ni usar algo que la
  alumna todavía no vio).
- `docs/temas/NN-slug.md` — una ficha por tema (mismo número y slug que su archivo
  en `src/content/tareas/`) con los puntos relevantes, de qué capítulo de Campbell
  o Curtis sale el contenido, una analogía propuesta, la conexión médica/clínica
  del tema, la actividad propuesta y los errores comunes a desarmar. Es la materia
  prima para escribir la lámina, no el texto final.
- `docs/ACTIVIDADES.md` — índice de las 24 actividades con materiales, duración y
  nivel de supervisión, para no repetir materiales entre láminas y preparar con
  anticipación lo que haga falta.

Fuente científica única: los libros en `libros/` (Campbell Biology, Biología de
Curtis) — no están en el repo (ver `.gitignore`), viven sólo en disco local.

Al terminar una lámina, cambiar `escrita: false` a `escrita: true` en su
frontmatter — es la única señal que el sitio necesita para publicarla en cuanto
llegue su `publicaEn`.
