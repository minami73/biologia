import { getCollection, type CollectionEntry } from 'astro:content';

export type Tarea = CollectionEntry<'tareas'>;

// VISTA_PREVIA=true muestra tambien las laminas que aun no toca publicar.
// Sirve para que tu revises todo antes de que ella lo vea.
export const vistaPrevia = process.env.VISTA_PREVIA === 'true';

// FECHA_SIMULADA=2027-03-15 sirve para probar como se vera el sitio
// en una fecha futura sin esperar a que llegue.
export const hoy = process.env.FECHA_SIMULADA
  ? new Date(process.env.FECHA_SIMULADA)
  : new Date();

/**
 * Una lamina sale cuando llego su fecha Y ya esta escrita.
 * Si se te pasa escribir una, el sitio la deja pendiente en lugar de
 * publicar el esqueleto vacio.
 */
export function yaSalio(t: Tarea): boolean {
  return t.data.publicaEn <= hoy && t.data.escrita;
}

/** Le llego la fecha pero sigue sin escribirse. */
export function atrasada(t: Tarea): boolean {
  return t.data.publicaEn <= hoy && !t.data.escrita;
}

export function visible(t: Tarea): boolean {
  return vistaPrevia || yaSalio(t);
}

/** Todas las laminas del temario, en orden, salgan o no. */
export async function temario(): Promise<Tarea[]> {
  const todas = await getCollection('tareas');
  return todas.sort((a, b) => a.data.numero - b.data.numero);
}

/** Solo las que ya se pueden abrir. */
export async function publicadas(): Promise<Tarea[]> {
  return (await temario()).filter(visible);
}

/** La siguiente que va a salir, para el contador de la portada. */
export async function siguiente(): Promise<Tarea | undefined> {
  return (await temario()).find((t) => !yaSalio(t));
}

export function fechaLarga(d: Date): string {
  return d.toLocaleDateString('es-MX', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
  });
}

export function fechaCorta(d: Date): string {
  return d.toLocaleDateString('es-MX', {
    day: '2-digit', month: 'short', timeZone: 'UTC',
  });
}

export function diasFaltantes(d: Date): number {
  return Math.max(0, Math.ceil((d.getTime() - hoy.getTime()) / 86400000));
}

export function folio(n: number): string {
  return String(n).padStart(2, '0');
}

/** Arma una ruta respetando el "base" configurado en astro.config.mjs. */
export function ruta(p = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const limpio = p.replace(/^\//, '');
  return limpio ? `${base}/${limpio}/` : `${base}/`;
}
