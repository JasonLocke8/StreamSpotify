import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/StreamSpotify/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  define: {
    'process.env': {}
  },
  server: {
    proxy: {
      '/callback': {
        target: 'https://jasonlocke8.github.io/StreamSpotify/callback',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/callback/, '')
      }
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});