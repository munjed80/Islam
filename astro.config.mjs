import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { readdirSync } from 'fs';
import { join } from 'path';

// Auto-discover all language codes from /public/i18n/*.json
function getLanguages() {
  const i18nDir = join(process.cwd(), 'public', 'i18n');
  try {
    return readdirSync(i18nDir)
      .filter((f) => f.endsWith('.json'))
      .map((f) => f.replace('.json', ''));
  } catch {
    return ['en'];
  }
}

const langs = getLanguages();

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://salah.to',
  build: {
    format: 'directory',
  },
  // Expose language list to be used in dynamic routes
  vite: {
    define: {
      'import.meta.env.SUPPORTED_LANGS': JSON.stringify(langs),
    },
  },
});
