import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite'; // 🔌 Importamos el plugin nativo de Vite

export default defineConfig({
  site: 'https://www.renwaza.com',

  vite: {
    plugins: [tailwind()], // ⚡ Le indicamos a Vite que procese Tailwind v4
  },

  integrations: [
    sitemap()
  ],
});