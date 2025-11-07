// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import prefetch from '@astrojs/prefetch';
import compress from 'astro-compress';
import tailwind from '@astrojs/tailwind'; // ✅ add this

export default defineConfig({
  site: 'https://dreamingcreek.example.com',
  output: 'static',
  vite: {
    build: { cssMinify: 'lightningcss' }
  },
  integrations: [
    tailwind({ applyBaseStyles: true }), // ✅ enable Tailwind
    mdx(),
    sitemap(),
    prefetch(),
    compress({ CSS: true, HTML: true, JavaScript: true, SVG: true, Image: false })
  ],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' }
  }
});
