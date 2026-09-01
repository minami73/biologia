# SPEC — cómo se escribe una lámina

Este documento es interno: vive en `docs/`, no se publica, Astro no lo toca. Es el
contrato de formato para las 24 láminas de `src/content/tareas/`. Está sacado por
observación directa de las cuatro láminas ya escritas (01–04) más dos secciones
nuevas que se añaden a partir de aquí.

## Perfil de la lectora

Estudiante de 2° de secundaria (13-14 años), autodidacta, con aspiraciones en
ciencias de la salud. Eso fija tres cosas:
- No hay que bajarle el nivel al concepto, hay que tenderle un puente. El rigor de
  Campbell/Curtis se mantiene; lo que cambia es el vocabulario alrededor.
- Todo termino técnico se puede usar, pero se define **en la misma frase** donde
  aparece por primera vez (patrón ya usado: "A eso se le llama **homeostasis**, y
  sostenerla cuesta energía todo el tiempo").
- Cada tema necesita un gancho hacia medicina/salud, porque es lo que la conecta con
  su meta. No es adorno: es la sección `## Por qué importa en salud`, ver abajo.

## Fuente de verdad

Todo dato científico sale de **Campbell Biology** o **Biología de Curtis**
(`libros/`, ignorados por git, sólo en disco local). No se inventan datos, cifras ni
mecanismos. Cuando un libro dice algo y el otro lo matiza, se usa el más preciso y,
si vale la pena, se menciona el matiz como pregunta abierta en vez de forzar una
sola versión. `docs/temas/NN-slug.md` anota de qué capítulo de cada libro sale el
tema, para ir directo a esas páginas en vez de barrer el PDF completo.

## Esqueleto obligatorio

El frontmatter no cambia (ver `src/content.config.ts`). El cuerpo sí crece en dos
secciones respecto de las láminas 01–04:

```markdown
---
(frontmatter existente, sin cambios)
---

<Entrada: 2-3 párrafos. Una pregunta, un caso raro, algo que no cuadra a primera
vista. Nunca "hoy vamos a aprender sobre X".>

## La teoría

### <Subtema 1, título corto>
<explicación>
> **Piénsalo así:** <analogía cotidiana del concepto más difícil de esta lámina>

### <Subtema 2>
...

### <Subtema 3, y opcionalmente un 4>
...

## Por qué importa en salud

<una conexión clínica concreta: una enfermedad que este mecanismo explica, cómo
actúa un medicamento sobre él, o qué mide un análisis clínico relacionado. Ver
`docs/temas/NN-slug.md` para el gancho ya pensado de cada tema.>

## Actividad: <nombre corto y curioso>

**Materiales:** <de cocina, patio o papelería — nunca de laboratorio>

<pasos numerados. Predicción por escrito ANTES de empezar. Registro DESPUÉS.
Si hay dos condiciones a comparar, nombrar explícitamente cuál es la variable y
cuál el control — ya sea en el cuerpo o en una nota tipo blockquote, como en la
lámina 01.>

## Preguntas sin respuesta

1. <cinco preguntas, deliberadamente sin contestar en el texto>
...
5. ...

## Para buscar por tu cuenta

- <2-3 pistas de dónde seguir investigando, no la respuesta>
```

Las secciones nuevas son `> **Piénsalo así:**` (dentro de `## La teoría`, al menos
una por lámina, puede haber más de una si hay varios conceptos difíciles) y
`## Por qué importa en salud` (sección propia, fija, siempre entre la teoría y la
actividad). Ninguna de las dos requiere tocar `content.config.ts`, `Lamina.astro` ni
`[...id].astro`: el cuerpo Markdown ya se renderiza completo.

## Reglas de voz

- Tuteo directo a la alumna ("tú", nunca "usted" ni "el estudiante").
- Español de México. Evitar anglicismos innecesarios y calcos de traducción.
- Frases cortas. Párrafos de 2-4 líneas. Sin relleno retórico.
- Negrita sólo para el término técnico la primera vez que aparece — no para énfasis
  emocional.
- Sin signos de exclamación, sin "¡qué interesante!", sin tono de infomercial. El
  interés lo genera el contenido (la pregunta rara, el dato inesperado), no la
  puntuación.
- Tablas cuando comparan dos o más cosas en los mismos ejes (ya usado en 02, 03, 04).
- Un dato numérico concreto vale más que un adjetivo ("30 billones de células" en
  vez de "muchísimas células").

## Actividades

- Materiales siempre de casa: cocina, patio, papelería. Nunca reactivo de
  laboratorio ni equipo especializado.
- Si compara dos condiciones, la actividad nombra explícitamente cuál es la
  **variable** y cuál el **control** (ver la nota en la lámina 01 sobre el frasco
  de frijoles).
- Predicción por escrito antes de empezar; registro de observaciones después.
- Advertencia explícita cuando algo requiere cuidado (temperatura, un cuchillo,
  "no lo comas" como en la lámina 02) o cuando una versión popular del experimento
  en internet es mala idea (ver la nota de la lámina 03 sobre cultivar bacterias
  del ambiente).
- Duración y nivel de supervisión de cada actividad quedan registrados también en
  `docs/ACTIVIDADES.md`, para no repetir materiales lámina tras lámina y para poder
  prepararlos con anticipación.

## Longitud

900 a 1400 palabras de cuerpo (sin contar frontmatter), medido en las láminas 01–04.
Con las dos secciones nuevas, apuntar a la mitad alta de ese rango o ligeramente
arriba (hasta ~1600 palabras) antes que recortar la teoría o la actividad para
que quepa la conexión médica.

## Al terminar

Cambiar `escrita: false` a `escrita: true` en el frontmatter. Es la única señal que
necesita el sitio (ver `src/lib/agenda.ts`, función `yaSalio`) para publicar la
lámina en cuanto llegue su `publicaEn`.
