/**
 * Generates branded static assets (Meridian palette):
 *  - public/og/default.png        (1200×630 Open Graph card)
 *  - public/assets/apple-touch-icon.png (180×180)
 *  - public/assets/dhiren-narola.jpg    (optimized portrait for schema/social)
 *  - public/assets/certificate.jpg      (compressed full-size certificate)
 * Run: npm run og
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const OUT_OG = 'public/og';
const OUT_ASSETS = 'public/assets';
await mkdir(OUT_OG, { recursive: true });
await mkdir(OUT_ASSETS, { recursive: true });

// ---------- OG card (Meridian: deep navy, azure→teal gradient) ----------
const og = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#2f7df6"/>
      <stop offset="1" stop-color="#12b5c9"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.85" cy="0" r="0.9">
      <stop offset="0" stop-color="#2f7df6" stop-opacity="0.28"/>
      <stop offset="1" stop-color="#2f7df6" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#0a1a33"/>
  <!-- subtle grid motif -->
  <g stroke="#1e3556" stroke-width="1" opacity="0.55">
    ${Array.from({ length: 16 }, (_, i) => `<line x1="${i * 80}" y1="0" x2="${i * 80}" y2="630"/>`).join('')}
    ${Array.from({ length: 8 }, (_, i) => `<line x1="0" y1="${i * 80}" x2="1200" y2="${i * 80}"/>`).join('')}
  </g>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <!-- accent bar -->
  <rect x="80" y="128" width="56" height="8" rx="4" fill="url(#grad)"/>
  <text x="80" y="248" font-family="'Segoe UI', Arial, sans-serif" font-size="82" font-weight="800" letter-spacing="-2" fill="#ffffff">dhiren narola<tspan fill="#12b5c9">.</tspan></text>
  <text x="80" y="322" font-family="'Segoe UI', Arial, sans-serif" font-size="34" font-weight="600" fill="#5b9bff">Odoo Architect &amp; AI Automation Engineer</text>
  <text x="80" y="424" font-family="'Segoe UI', Arial, sans-serif" font-size="26" fill="#a9bbd4">Odoo 18 Certified  ·  20+ ERP implementations  ·  13 countries</text>
  <text x="80" y="470" font-family="'Segoe UI', Arial, sans-serif" font-size="26" fill="#a9bbd4">ERP Implementation  ·  ERP Rescue  ·  AI + Odoo</text>
  <!-- bottom band -->
  <rect x="0" y="546" width="1200" height="84" fill="#06101f"/>
  <text x="80" y="598" font-family="'Segoe UI', Arial, sans-serif" font-size="24" font-weight="600" fill="#e9eff8">dhirennarola.com</text>
  <circle cx="1104" cy="588" r="7" fill="#1fa36b"/>
  <text x="1088" y="598" font-family="'Segoe UI', Arial, sans-serif" font-size="22" fill="#7288a6" text-anchor="end">Available for new projects</text>
</svg>`;

await sharp(Buffer.from(og)).png({ quality: 90 }).toFile(`${OUT_OG}/default.png`);
console.log('✓ og/default.png');

// ---------- Apple touch icon (wordmark-derived, Meridian) ----------
const icon = `
<svg width="180" height="180" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#2f7df6"/>
      <stop offset="1" stop-color="#12b5c9"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="14" fill="#0a1a33"/>
  <text x="28" y="44" font-family="'Segoe UI', system-ui, sans-serif" font-size="34" font-weight="800" letter-spacing="-2" fill="#e9eff8" text-anchor="middle">dn</text>
  <circle cx="51" cy="41" r="5.5" fill="url(#g)"/>
</svg>`;
await sharp(Buffer.from(icon)).resize(180, 180).png().toFile(`${OUT_ASSETS}/apple-touch-icon.png`);
console.log('✓ assets/apple-touch-icon.png');

// ---------- Optimized portrait (for schema image / direct links) ----------
await sharp('src/assets/dhiren-narola.png')
  .resize(800, null, { withoutEnlargement: true })
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile(`${OUT_ASSETS}/dhiren-narola.jpg`);
console.log('✓ assets/dhiren-narola.jpg');

// ---------- Compressed certificate (full-size viewing link) ----------
await sharp('src/assets/certificate.jpg')
  .resize(1600, null, { withoutEnlargement: true })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(`${OUT_ASSETS}/certificate.jpg`);
console.log('✓ assets/certificate.jpg');
