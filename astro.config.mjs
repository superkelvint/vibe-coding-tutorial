import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://superkelvint.github.io',
  base: '/vibe-coding-tutorial',
  integrations: [mdx(), react()],
  output: 'static',
});
