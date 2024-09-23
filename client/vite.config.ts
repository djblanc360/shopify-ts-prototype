import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ESM equivalent of __dirname

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'assets',  // Output the build directly into Shopify's assets directory
    rollupOptions: {
      input: {
        main: './src/index.tsx',   // Entry point for TypeScript
        styles: './src/styles/tailwind.css' // Entry point for Tailwind CSS or other CSS
      },
      output: {
        entryFileNames: '[name].js',    // JavaScript output in assets
        assetFileNames: '[name].[ext]', // Asset files (CSS, etc.) in assets
      },
    },
  },
  css: {
    postcss: './postcss.config.cts',  // Enable PostCSS (for Tailwind CSS)
  },
  resolve: {
    alias: {
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@hooks': '/src/hooks',
      '@services': '/src/services',
      '@contexts': '/src/contexts',
      '@types': '/src/types',
      '@utils': '/src/utils',
      '@assets': '/src/assets',
    }
  }
});