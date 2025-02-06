import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Diretório de saída
    rollupOptions: {
      input: {
        main: './index.html', // Especifica o arquivo HTML principal
      },
    },
  },
  preview: {
    port: 4173, // Porta padrão do Vite para o preview
    open: true, // Abre automaticamente no navegador
  },
});