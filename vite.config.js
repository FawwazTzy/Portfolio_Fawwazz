import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Export konfigurasi yang benar
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,  // pastikan port ini sesuai
  }
});
