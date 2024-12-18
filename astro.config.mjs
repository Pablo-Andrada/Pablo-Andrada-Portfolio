// @ts-check
import { defineConfig } from 'astro/config';
//import vercel from '@astrojs/vercel'
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server', // Necesario para Vercel
  adapter: vercel({}), // Usa el adaptador de Vercel
});