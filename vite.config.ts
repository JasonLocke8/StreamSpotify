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
  }
});