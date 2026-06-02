import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // 1. Clavamos tu dominio oficial para que los bots sepan dónde buscar
  site: 'https://www.renwaza.com',

  integrations: [
    tailwind(),
    // 2. Prendemos el generador automático de sitemaps
    sitemap()
  ],
});