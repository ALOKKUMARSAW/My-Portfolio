import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',             // ✅ Netlify expects this
    assetsDir: 'static-assets', // optional: customize assets folder
    sourcemap: true             // optional: enable source maps
  },
})