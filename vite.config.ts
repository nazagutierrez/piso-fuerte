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
    Sitemap({ hostname: 'https://pisofuerte.com.ar' }),
    prerender({
      routes: ['/', '/nosotros', '/trabajos', '/contacto'],
      renderer: '@prerenderer/renderer-puppeteer',
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
          // Splitting heavy libraries into separate files
          vendor: ['react', 'react-dom', 'react-helmet-async'],
        },
      },
    },
    cssCodeSplit: true,
    assetsInlineLimit: 4096, // Inline small assets (4kb) to reduce HTTP requests
  },
});