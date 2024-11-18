import { defineConfig } from 'vite';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Amazon_SMBs/',
  resolve: {
    "@": path.resolve(__dirname, "./src"),
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
      }
    },
  }
});