import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Ekram-portifolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})