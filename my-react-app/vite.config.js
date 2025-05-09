import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

console.log("✅ Vite React Plugin chargé");
// https://vite.dev/config/
export default defineConfig({
  base: '/pj8-react/',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.js',
    coverage: {
      provider: 'v8', // Ou 'istanbul'
      reporter: ['text', 'lcov'],
      include: ['src/components/**/*.{js,jsx,ts,tsx}'], // Cible uniquement le dossier components
      exclude: ['src/pages/**', 'src/routes/**', 'src/components/logCarousel.jsx'] // Exclut pages et routes
    }
  },
  server: {  // Ajout du proxy ici
    proxy: {
      '/api': {  
        target: 'http://localhost:8080', // Adresse de ton backend
        changeOrigin: true,
        secure: false
      },
    },
  }
});