import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'custom-dist', // Change output directory
    assetsDir: 'static-assets', // Customize assets folder
    sourcemap: true, // Enable source maps
  },
})
