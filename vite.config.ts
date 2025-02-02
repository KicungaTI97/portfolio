import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom")) {
              return "react-vendor"; // React e dependências separadas
            }
            if (id.includes("lodash")) {
              return "lodash"; // Separar Lodash
            }
            return "vendor"; // Outros pacotes externos
          }
        }
      }
    }
  }
})
