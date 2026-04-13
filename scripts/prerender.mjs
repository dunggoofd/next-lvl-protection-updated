/**
 * Post-build pre-rendering script.
 * Imports the SSR bundle built by Vite, calls render(url) for every route,
 * and injects the HTML into the client index.html shell.
 * No browser needed — runs entirely in Node.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '..', 'dist');

const ROUTES = [
  '/',
  '/next-level-protection-brisbane',
  '/ppf-brisbane',
  '/ceramic-coating-brisbane',
  '/automotive-window-tinting-brisbane',
  '/residential-window-tinting-brisbane',
  '/commercial-window-tinting-brisbane',
  '/ppf-questions',
  '/ceramic-coating-questions',
  '/automotive-tinting-questions',
  '/residential-tinting-questions',
  '/commercial-tinting-questions',
  '/gallery',
  '/about',
  '/get-a-quote',
  '/ppf-new-car-brisbane',
  '/ppf-dark-paint-brisbane',
  '/ppf-stone-chip-protection-brisbane',
  '/ppf-resale-value-brisbane',
  '/suntek-ppf-brisbane',
  '/ppf-cost-brisbane',
  '/ppf-warranty-brisbane',
  '/partial-ppf-brisbane',
  '/ppf-self-healing-brisbane',
  '/gloss-vs-matte-ppf-brisbane',
  '/ppf-near-me-brisbane',
  '/ceramic-coating-new-car-brisbane',
  '/ceramic-coating-cost-brisbane',
  '/ceramic-coating-uv-brisbane',
  '/ceramic-coating-paint-correction-brisbane',
  '/ceramic-glass-coating-brisbane',
  '/ceramic-coating-wheels-brisbane',
  '/ceramic-ppf-brisbane',
  '/ceramic-coating-longevity-brisbane',
  '/ceramic-vs-dealer-paint-protection-brisbane',
  '/ceramic-coating-matte-paint-brisbane',
  '/ceramic-coating-maintenance-brisbane',
  '/ceramic-coating-resale-brisbane',
  '/ceramic-coating-near-me-brisbane',
  '/sitemap',
  '/privacy-policy',
];

async function prerender() {
  console.log('\n🔄 Pre-rendering started...\n');

  // Import the SSR bundle produced by `vite build --ssr`
  const { render } = await import(path.resolve(DIST, 'server', 'entry-server.js'));

  // Read the client-side index.html as the template
  const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8');

  let rendered = 0;
  let failed = 0;

  for (const route of ROUTES) {
    try {
      const appHtml = render(route);

      // Inject the rendered HTML into the shell
      const html = template.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );

      // Determine output path
      const routePath = route === '/' ? '/index.html' : `${route}/index.html`;
      const outFile = path.join(DIST, routePath);
      const outDir = path.dirname(outFile);

      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(outFile, html, 'utf-8');

      rendered++;
      console.log(`  ✅ ${route}`);
    } catch (err) {
      failed++;
      console.error(`  ❌ ${route}: ${err.message}`);
    }
  }

  console.log(`\n✅ Pre-rendered ${rendered}/${ROUTES.length} routes`);
  if (failed > 0) {
    console.log(`❌ ${failed} route(s) failed`);
    process.exit(1);
  }
  console.log('');
}

prerender();
