// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import prefetch from '@astrojs/prefetch';
import compress from 'astro-compress'; // optional but highly recommended for 100s

// https://astro.build/config
export default defineConfig({
  site: 'https://dreamingcreek.example.com', // update when live
  output: 'static',

  // Vite configuration
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: 'lightningcss'
    }
  },

  // Astro integrations
  integrations: [
    mdx(),
    sitemap(),
    prefetch(),
    compress({
      CSS: true,
      HTML: true,
      JavaScript: true,
      SVG: true,
      Image: false // keep false; astro:assets (Sharp) handles images
    })
  ],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' }
  }

  
});
