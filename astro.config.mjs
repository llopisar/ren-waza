import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite'; // 🔌 Motor nativo v4

// https://astro.build/config
export default defineConfig({
  site: 'https://www.renwaza.com',

  vite: {
    plugins: [
      tailwind({
        // 🎯 EL PARCHE DE NETLIFY: Esto desactiva el campo que hacía fallar a Vite/Rolldown
        resolveOptions: { tsconfigPaths: false }
      })
    ],
  },

  integrations: [
    sitemap()
  ],
});