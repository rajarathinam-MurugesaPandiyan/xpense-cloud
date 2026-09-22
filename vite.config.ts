import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import process from 'node:process';

// Custom domain (xpense-cloud.in) is hosted at root domain
export default defineConfig({
  plugins: [react()],
  base: '/',
});


