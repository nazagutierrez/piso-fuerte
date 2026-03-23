// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import path from "path"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteCompression()
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