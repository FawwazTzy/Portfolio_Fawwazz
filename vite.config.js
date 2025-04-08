import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/Portfolio_Fawwazz/", // Harus SAMA persis dengan nama repo GitHub kamu
  plugins: [react()],
});
