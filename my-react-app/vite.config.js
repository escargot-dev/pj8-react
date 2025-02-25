import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

console.log("✅ Vite React Plugin chargé");
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.js',
  },
})