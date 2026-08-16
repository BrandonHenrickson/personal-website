import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Clean config after the Netlify/Vercel migration. The former Hostinger
// Horizons editor plugins + inline error-reporting scripts were removed:
// they only served the Horizons preview iframe, monkey-patched console/fetch,
// and blocked a strict Content-Security-Policy.
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
