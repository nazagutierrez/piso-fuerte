import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import Sitemap from 'vite-plugin-sitemap'
import prerender from '@prerenderer/rollup-plugin'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteCompression(),
    Sitemap({ hostname: 'https://www.pisofuerte.com.ar' }),
    prerender({
      routes: ['/', '/nosotros', '/trabajos', '/contacto'],
      renderer: '@prerenderer/renderer-jsdom',
      server: {
        port: 5173,
      },
      rendererOptions: {
        renderAfterTime: 2000, // Wait for elements to be populated by JS
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Splitting heavy libraries into separate files to improve caching and reduce main bundle size
          'vendor-react': ['react', 'react-dom', 'react-helmet-async'],
          'vendor-gsap': ['gsap', 'gsap/ScrollTrigger', 'gsap/ScrollSmoother'],
          'vendor-swiper': ['swiper', 'swiper/react', 'swiper/modules'],
        },
      },
    },
    cssCodeSplit: false,
    assetsInlineLimit: 4096,
    target: 'es2020',
    minify: 'esbuild',
  },
});