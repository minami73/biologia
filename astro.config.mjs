// @ts-check
import { defineConfig } from 'astro/config';

// Cambia estos dos valores por los de tu repo.
// Si el repo se llama "biologia", la pagina queda en
// https://minami73.github.io/biologia/
export default defineConfig({
  site: 'https://minami73.github.io',
  base: '/biologia',
  trailingSlash: 'always',
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});
