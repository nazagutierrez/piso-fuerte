// vite.config.ts
import { defineConfig } from "file:///D:/proyectos%20en%20github/piso-fuerte/node_modules/.pnpm/vite@5.4.21_@types+node@22._bb7f36d3f6e3c4222a96f32bd8947886/node_modules/vite/dist/node/index.js";
import react from "file:///D:/proyectos%20en%20github/piso-fuerte/node_modules/.pnpm/@vitejs+plugin-react@4.7.0__6debb1a228087a76e41a13004b95d867/node_modules/@vitejs/plugin-react/dist/index.js";
import viteCompression from "file:///D:/proyectos%20en%20github/piso-fuerte/node_modules/.pnpm/vite-plugin-compression@0.5_b02fa72bca10f95091de6165dd328d6c/node_modules/vite-plugin-compression/dist/index.mjs";
import path from "path";
import tailwindcss from "file:///D:/proyectos%20en%20github/piso-fuerte/node_modules/.pnpm/@tailwindcss+vite@4.1.17_vi_d664120841b460509b55aacfc0fed74d/node_modules/@tailwindcss/vite/dist/index.mjs";
import Sitemap from "file:///D:/proyectos%20en%20github/piso-fuerte/node_modules/.pnpm/vite-plugin-sitemap@0.8.2/node_modules/vite-plugin-sitemap/dist/index.js";
import prerender from "file:///D:/proyectos%20en%20github/piso-fuerte/node_modules/.pnpm/@prerenderer+rollup-plugin@_049caf00d9c5ff06716e9ce25b782c9c/node_modules/@prerenderer/rollup-plugin/index.mjs";
var __vite_injected_original_dirname = "D:\\proyectos en github\\piso-fuerte";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteCompression(),
    Sitemap({ hostname: "https://pisofuerte.com.ar" }),
    prerender({
      routes: ["/", "/nosotros", "/trabajos", "/contacto"],
      renderer: "@prerenderer/renderer-puppeteer",
      server: {
        port: 5173
      },
      rendererOptions: {
        renderAfterTime: 2e3
        // Wait for elements to be populated by JS
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Splitting heavy libraries into separate files
          vendor: ["react", "react-dom", "react-helmet-async"]
        }
      }
    },
    cssCodeSplit: true,
    assetsInlineLimit: 4096
    // Inline small assets (4kb) to reduce HTTP requests
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm95ZWN0b3MgZW4gZ2l0aHViXFxcXHBpc28tZnVlcnRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxwcm95ZWN0b3MgZW4gZ2l0aHViXFxcXHBpc28tZnVlcnRlXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9wcm95ZWN0b3MlMjBlbiUyMGdpdGh1Yi9waXNvLWZ1ZXJ0ZS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xyXG5pbXBvcnQgdml0ZUNvbXByZXNzaW9uIGZyb20gJ3ZpdGUtcGx1Z2luLWNvbXByZXNzaW9uJztcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIlxyXG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSBcIkB0YWlsd2luZGNzcy92aXRlXCJcclxuaW1wb3J0IFNpdGVtYXAgZnJvbSAndml0ZS1wbHVnaW4tc2l0ZW1hcCdcclxuaW1wb3J0IHByZXJlbmRlciBmcm9tICdAcHJlcmVuZGVyZXIvcm9sbHVwLXBsdWdpbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIHRhaWx3aW5kY3NzKCksXHJcbiAgICB2aXRlQ29tcHJlc3Npb24oKSxcclxuICAgIFNpdGVtYXAoeyBob3N0bmFtZTogJ2h0dHBzOi8vcGlzb2Z1ZXJ0ZS5jb20uYXInIH0pLFxyXG4gICAgcHJlcmVuZGVyKHtcclxuICAgICAgcm91dGVzOiBbJy8nLCAnL25vc290cm9zJywgJy90cmFiYWpvcycsICcvY29udGFjdG8nXSxcclxuICAgICAgcmVuZGVyZXI6ICdAcHJlcmVuZGVyZXIvcmVuZGVyZXItcHVwcGV0ZWVyJyxcclxuICAgICAgc2VydmVyOiB7XHJcbiAgICAgICAgcG9ydDogNTE3MyxcclxuICAgICAgfSxcclxuICAgICAgcmVuZGVyZXJPcHRpb25zOiB7XHJcbiAgICAgICAgcmVuZGVyQWZ0ZXJUaW1lOiAyMDAwLCAvLyBXYWl0IGZvciBlbGVtZW50cyB0byBiZSBwb3B1bGF0ZWQgYnkgSlNcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgbWFudWFsQ2h1bmtzOiB7XHJcbiAgICAgICAgICAvLyBTcGxpdHRpbmcgaGVhdnkgbGlicmFyaWVzIGludG8gc2VwYXJhdGUgZmlsZXNcclxuICAgICAgICAgIHZlbmRvcjogWydyZWFjdCcsICdyZWFjdC1kb20nLCAncmVhY3QtaGVsbWV0LWFzeW5jJ10sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjc3NDb2RlU3BsaXQ6IHRydWUsXHJcbiAgICBhc3NldHNJbmxpbmVMaW1pdDogNDA5NiwgLy8gSW5saW5lIHNtYWxsIGFzc2V0cyAoNGtiKSB0byByZWR1Y2UgSFRUUCByZXF1ZXN0c1xyXG4gIH0sXHJcbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBa1MsU0FBUyxvQkFBb0I7QUFDL1QsT0FBTyxXQUFXO0FBQ2xCLE9BQU8scUJBQXFCO0FBQzVCLE9BQU8sVUFBVTtBQUNqQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGFBQWE7QUFDcEIsT0FBTyxlQUFlO0FBTnRCLElBQU0sbUNBQW1DO0FBUXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFlBQVk7QUFBQSxJQUNaLGdCQUFnQjtBQUFBLElBQ2hCLFFBQVEsRUFBRSxVQUFVLDRCQUE0QixDQUFDO0FBQUEsSUFDakQsVUFBVTtBQUFBLE1BQ1IsUUFBUSxDQUFDLEtBQUssYUFBYSxhQUFhLFdBQVc7QUFBQSxNQUNuRCxVQUFVO0FBQUEsTUFDVixRQUFRO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0EsaUJBQWlCO0FBQUEsUUFDZixpQkFBaUI7QUFBQTtBQUFBLE1BQ25CO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sY0FBYztBQUFBO0FBQUEsVUFFWixRQUFRLENBQUMsU0FBUyxhQUFhLG9CQUFvQjtBQUFBLFFBQ3JEO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGNBQWM7QUFBQSxJQUNkLG1CQUFtQjtBQUFBO0FBQUEsRUFDckI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
