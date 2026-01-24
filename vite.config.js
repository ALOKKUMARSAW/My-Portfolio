import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets')
    }
  },
  build: {
    outDir: 'dist',             // ✅ Netlify expects this
    assetsDir: 'static-assets', // optional: customize assets folder
    sourcemap: true             // optional: enable source maps
  },
})