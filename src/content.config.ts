import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Cada archivo .md dentro de src/content/tareas/ es una lamina.
// El campo publicaEn es lo unico que decide si ya se ve en el sitio.
const tareas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tareas' }),
  schema: z.object({
    numero: z.number().int().min(1).max(99),
    titulo: z.string(),
    unidad: z.string(),
    resumen: z.string(),
    subtemas: z.array(z.string()).default([]),
    publicaEn: z.coerce.date(),
    escrita: z.boolean().default(true),
  }),
});

export const collections = { tareas };
