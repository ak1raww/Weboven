// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  base: '/Weboven/',  // keep your existing base
  plugins: [
    react(),
    legacy({
      targets: ['ios >= 13', 'safari >= 13'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
  ],
})