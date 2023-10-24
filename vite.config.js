// vite.config.js
import { resolve } from 'path';
import { readdirSync, statSync } from 'fs';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: getPagesInput(),
    },
    outDir: resolve(__dirname, 'dist'),
  },
  base: '/Gasify-Green-Software/',
});

function getPagesInput() {
  const pagesDir = resolve(__dirname);
  const entries = {};

  function getEntries(dir) {
    const files = readdirSync(dir);
    files.forEach((file) => {
      const filePath = resolve(dir, file);
      if (statSync(filePath).isDirectory()) {
        getEntries(filePath);
      } else if (file.endsWith('.html')) {
        const name = file.replace(/\.html$/, '');
        entries[name] = filePath;
      }
    });
  }

  getEntries(pagesDir);

  return entries;
}