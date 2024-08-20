import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://kpkrishprasad.github.io',
  base: '/Krish-Prasad-Portfolio',
  integrations: [mdx(), sitemap(), tailwind()]
});