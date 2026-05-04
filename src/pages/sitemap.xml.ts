import { readdirSync } from 'fs';
import { join } from 'path';

export const prerender = true;

export async function GET() {
  const site = 'https://salah.to';
  const i18nDir = join(process.cwd(), 'public', 'i18n');
  const langs = readdirSync(i18nDir)
    .filter((f) => f.endsWith('.json'))
    .map((f) => f.replace('.json', ''));

  const urls = [
    { loc: `${site}/`, priority: '1.0' },
    ...langs.map((lang) => ({ loc: `${site}/${lang}/`, priority: '0.9' })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ loc, priority }) => `  <url>
    <loc>${loc}</loc>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
