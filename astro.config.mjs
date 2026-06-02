import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite'; // 🔌 Traemos de vuelta el motor de la v4

// https://astro.build/config
export default defineConfig({
  site: 'https://www.renwaza.com',

  vite: {
    plugins: [
      tailwind({
        // 🛡️ Esto evita el error de tsconfigPaths que rompía el build en Netlify
        experimental: {
          configFile: false
        }
      })
    ],
  },

  integrations: [
    sitemap()
  ],
});