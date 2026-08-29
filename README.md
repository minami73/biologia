# Láminas de Biología

Sitio estático de biología para secundaria. Publica dos láminas al mes, el día 1 y
el día 15, sin que nadie tenga que apretar nada.

## Cómo funciona el "agente"

No hay servidor ni base de datos. El contenido de las 24 láminas vive en
`src/content/tareas/` como archivos Markdown, y cada uno trae una fecha:

```yaml
publicaEn: 2026-09-01
escrita: true
```

Al construir el sitio, las láminas cuya fecha todavía no llega **no se generan**:
no existen como página, no aparecen en el menú, no hay URL que adivinar. El día 1
y el día 15 de cada mes, GitHub Actions reconstruye y republica el sitio, y las
que ya les tocó aparecen solas.

Eso es todo el mecanismo. Es aburrido a propósito: no hay nada que se pueda caer
un martes a las 3 de la mañana.

La bandera `escrita: false` es un seguro. Si a una lámina le llega su fecha pero
todavía no la escribes, el sitio la deja en "En preparación" en lugar de publicar
el esqueleto vacío.

## Comandos

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor local, muestra sólo lo ya publicado |
| `npm run preview-todo` | Servidor local mostrando **todo**, para revisar antes |
| `npm run build` | Genera `dist/` |
| `npm run agendar -- --revisar` | Lista lo que falta escribir y ya viene cerca |
| `npm run agendar -- 2027-01-01` | Reasigna todas las fechas desde ese mes |

Para ver cómo se verá el sitio en una fecha futura:

```bash
FECHA_SIMULADA=2027-03-20 npm run build
```

## Puesta en marcha

1. Crea el repo en GitHub y sube esto.
2. En `astro.config.mjs`, ajusta `site` y `base` al nombre real de tu repo.
   Si el repo se llama `biologia`, la URL queda `https://minami73.github.io/biologia/`.
3. En **Settings → Pages**, elige **GitHub Actions** como origen.
4. Empuja a `main`. El workflow construye y publica.
5. En **Actions**, el workflow se puede correr a mano con *Run workflow*.

El horario del cron está en `.github/workflows/publicar.yml`, en UTC.
`0 13 1 * *` son las 7:00 a.m. en Teziutlán durante horario estándar.

## Escribir una lámina

Copia la estructura de `01-que-es-estar-vivo.md`. Las secciones son siempre
las mismas y el orden importa:

1. **Entrada** — una pregunta o un caso raro que descoloque un poco.
2. **La teoría** — tres o cuatro subsecciones cortas.
3. **Actividad** — con materiales de casa, con predicción antes y registro después.
4. **Preguntas sin respuesta** — cinco, sin contestar. No son de relleno.
5. **Para buscar por tu cuenta** — dos o tres pistas de dónde ir.

Al terminar de escribirla, cambia `escrita: false` a `escrita: true`.

## Estado del temario

4 de 24 láminas escritas. Las 20 restantes tienen título, unidad, resumen,
subtemas y fecha asignada; les falta el cuerpo.
