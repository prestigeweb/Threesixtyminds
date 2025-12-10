import { defineConfig } from 'vite';
import { resolve } from 'path';
import { copyFileSync, mkdirSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

function copyDir(src, dest) {
  mkdirSync(dest, { recursive: true });
  const entries = readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

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
  },
  plugins: [
    {
      name: 'copy-assets',
      closeBundle() {
        copyDir('js', 'dist/js');
        copyDir('css', 'dist/css');
        copyDir('img', 'dist/img');
      }
    }
  ]
});
