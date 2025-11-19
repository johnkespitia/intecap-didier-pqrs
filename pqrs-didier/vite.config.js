import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/configTest.js',
    include: ['src/**/*.test.{js,jsx}', 'src/**/*.spec.{js,jsx}'], // 👈 Asegura que lea tus archivos de test
    transformMode: {
      web: [/\.jsx?$/], // 👈 Asegura que transforme archivos .js y .jsx
    },
    coverage: {
      reporter: ['text', 'html'],
      exclude: ['node_modules/', './**/test/', 'src/configTest.js'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@stores': path.resolve(__dirname, './src/store'),
      '@modules': path.resolve(__dirname, './src/modules'),
    },
  },
})
