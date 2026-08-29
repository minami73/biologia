#!/usr/bin/env node
/**
 * Agenda las laminas: dos por mes, el dia 1 y el dia 15.
 *
 *   node scripts/agendar.mjs 2026-09-01   reescribe todas las fechas
 *   node scripts/agendar.mjs --revisar    solo avisa que falta por escribir
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const CARPETA = path.join(process.cwd(), 'src', 'content', 'tareas');
const arg = process.argv[2];

const archivos = (await readdir(CARPETA)).filter((f) => f.endsWith('.md')).sort();

const laminas = [];
for (const archivo of archivos) {
  const ruta = path.join(CARPETA, archivo);
  const texto = await readFile(ruta, 'utf8');
  const numero = Number(texto.match(/^numero:\s*(\d+)/m)?.[1]);
  const titulo = texto.match(/^titulo:\s*"(.*)"/m)?.[1] ?? archivo;
  const fecha = texto.match(/^publicaEn:\s*(\S+)/m)?.[1];
  const escrita = /^escrita:\s*true/m.test(texto);
  if (!numero || !fecha) {
    console.error(`✗ ${archivo}: le falta "numero" o "publicaEn" en el frontmatter.`);
    process.exit(1);
  }
  laminas.push({ archivo, ruta, texto, numero, titulo, fecha, escrita });
}
laminas.sort((a, b) => a.numero - b.numero);

function fechaDeIndice(inicio, i) {
  const d = new Date(`${inicio}T00:00:00Z`);
  const mes = d.getUTCMonth() + Math.floor(i / 2);
  const dia = i % 2 === 0 ? 1 : 15;
  return new Date(Date.UTC(d.getUTCFullYear(), mes, dia)).toISOString().slice(0, 10);
}

if (arg && arg !== '--revisar') {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(arg)) {
    console.error('Uso: node scripts/agendar.mjs 2026-09-01');
    process.exit(1);
  }
  for (const [i, l] of laminas.entries()) {
    const nueva = fechaDeIndice(arg, i);
    if (nueva === l.fecha) continue;
    await writeFile(l.ruta, l.texto.replace(/^publicaEn:.*$/m, `publicaEn: ${nueva}`), 'utf8');
    console.log(`  ${String(l.numero).padStart(2, '0')}  ${l.fecha} → ${nueva}  ${l.titulo}`);
    l.fecha = nueva;
  }
  console.log(`\nAgendadas ${laminas.length} láminas desde ${arg}.`);
}

// Aviso de lo que falta por escribir y ya viene cerca.
const hoy = new Date();
const enSesentaDias = new Date(hoy.getTime() + 60 * 86400000);
const urgentes = laminas.filter(
  (l) => !l.escrita && new Date(`${l.fecha}T00:00:00Z`) <= enSesentaDias
);

if (urgentes.length) {
  console.log('\n⚠  Sin escribir y salen en menos de 60 días:');
  for (const l of urgentes) {
    console.log(`  ${String(l.numero).padStart(2, '0')}  ${l.fecha}  ${l.titulo}`);
  }
} else {
  console.log('\n✓ Todo lo que sale en los próximos 60 días ya está escrito.');
}

const faltan = laminas.filter((l) => !l.escrita).length;
console.log(`\n${laminas.length - faltan} de ${laminas.length} láminas escritas.`);
