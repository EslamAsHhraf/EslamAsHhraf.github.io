import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext",
  },
  server: {
    mimeType: {
      ".js": "text/jsx",
      ".mjs": "text/jsx",
      ".jsx": "text/jsx",
      ".tsx": "text/jsx",
    },
  },
});