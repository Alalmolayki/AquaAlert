import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      external: ["/public/images/School_logos/logo7.png", '/public/images/School_logos/logo6.png', '/public/images/School_logos/logo1.png'],
    },
  },

});
