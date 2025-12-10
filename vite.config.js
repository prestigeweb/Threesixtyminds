import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home1: resolve(__dirname, 'home-1.html'),
        home2: resolve(__dirname, 'home-2.html'),
        portfolio1: resolve(__dirname, 'portfolio-1.html'),
        portfolio2: resolve(__dirname, 'portfolio-2.html'),
        portfolio3: resolve(__dirname, 'portfolio-3.html'),
        blog: resolve(__dirname, 'blog.html'),
        contact: resolve(__dirname, 'contact.html'),
        services: resolve(__dirname, 'services.html'),
        team: resolve(__dirname, 'team.html'),
      }
    }
  },
  server: {
    port: 5173,
    open: true
  }
});
