/**
 * Post-build pre-rendering script.
 * Spins up a local server on the dist/ folder, visits each route with Puppeteer,
 * captures the fully-rendered HTML, and writes it back so Google's bots see real content.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'http';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '..', 'dist');
const PORT = 4173;

const ROUTES = [
  '/',
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

// Simple static file server for the dist folder
function serveStatic() {
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff2': 'font/woff2',
    '.woff': 'font/woff',
    '.ttf': 'font/ttf',
  };

  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = path.join(DIST, req.url === '/' ? '/index.html' : req.url);

      // SPA fallback — if file doesn't exist, serve index.html
      if (!fs.existsSync(filePath)) {
        filePath = path.join(DIST, 'index.html');
      }

      const ext = path.extname(filePath);
      const contentType = mimeTypes[ext] || 'application/octet-stream';

      try {
        const content = fs.readFileSync(filePath);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      } catch {
        res.writeHead(404);
        res.end('Not found');
      }
    });

    server.listen(PORT, () => {
      console.log(`  Static server running on http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

async function prerender() {
  console.log('\n🔄 Pre-rendering started...\n');

  // Dynamic import puppeteer
  const puppeteer = await import('puppeteer');
  const browser = await puppeteer.default.launch({ headless: true, args: ['--no-sandbox'] });
  const server = await serveStatic();

  let rendered = 0;
  let failed = 0;

  for (const route of ROUTES) {
    try {
      const page = await browser.newPage();
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000,
      });

      // Wait a bit for React to fully hydrate
      await page.waitForFunction(() => {
        const root = document.getElementById('root');
        return root && root.children.length > 0;
      }, { timeout: 10000 });

      const html = await page.content();
      await page.close();

      // Write rendered HTML to correct path
      const outputDir = route === '/' ? DIST : path.join(DIST, route);
      const outputFile = path.join(outputDir, 'index.html');

      fs.mkdirSync(outputDir, { recursive: true });
      fs.writeFileSync(outputFile, html, 'utf-8');

      rendered++;
      console.log(`  ✅ ${route}`);
    } catch (err) {
      failed++;
      console.error(`  ❌ ${route} — ${err.message}`);
    }
  }

  await browser.close();
  server.close();

  console.log(`\n🏁 Pre-rendering complete: ${rendered} rendered, ${failed} failed\n`);

  if (failed > 0) {
    process.exit(1);
  }
}

prerender();
