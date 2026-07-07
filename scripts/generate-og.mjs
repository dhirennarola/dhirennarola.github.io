/**
 * Generates branded static assets:
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

// ---------- OG card ----------
const og = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#fbfaf9"/>
  <!-- subtle grid motif -->
  <g stroke="#e8e6e2" stroke-width="1">
    ${Array.from({ length: 11 }, (_, i) => `<line x1="${i * 120}" y1="0" x2="${i * 120}" y2="630"/>`).join('')}
    ${Array.from({ length: 6 }, (_, i) => `<line x1="0" y1="${i * 126}" x2="1200" y2="${i * 126}"/>`).join('')}
  </g>
  <!-- accent bar -->
  <rect x="80" y="120" width="56" height="8" rx="4" fill="#4263eb"/>
  <text x="80" y="240" font-family="Georgia, 'Times New Roman', serif" font-size="76" font-weight="600" fill="#0f0e0c">Dhiren Narola</text>
  <text x="80" y="316" font-family="'Segoe UI', Arial, sans-serif" font-size="34" font-weight="600" fill="#4263eb">Odoo Architect &amp; AI Automation Engineer</text>
  <text x="80" y="420" font-family="'Segoe UI', Arial, sans-serif" font-size="26" fill="#55524c">Odoo 18 Certified  ·  20+ ERP implementations  ·  12+ countries</text>
  <text x="80" y="466" font-family="'Segoe UI', Arial, sans-serif" font-size="26" fill="#55524c">ERP Implementation  ·  ERP Rescue  ·  AI &amp; Automation</text>
  <!-- bottom band -->
  <rect x="0" y="546" width="1200" height="84" fill="#171512"/>
  <text x="80" y="598" font-family="'Segoe UI', Arial, sans-serif" font-size="24" font-weight="600" fill="#fbfaf9">dhirennarola.com</text>
  <circle cx="1104" cy="588" r="7" fill="#2f9e44"/>
  <text x="1088" y="598" font-family="'Segoe UI', Arial, sans-serif" font-size="22" fill="#b3aea6" text-anchor="end">Available for new projects</text>
</svg>`;

await sharp(Buffer.from(og)).png({ quality: 90 }).toFile(`${OUT_OG}/default.png`);
console.log('✓ og/default.png');

// ---------- Apple touch icon ----------
const icon = `
<svg width="180" height="180" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="14" fill="#171512"/>
  <text x="30" y="45" font-family="Georgia, 'Times New Roman', serif" font-size="36" font-weight="600" fill="#fbfaf9" text-anchor="middle">D</text>
  <circle cx="49" cy="42" r="5" fill="#4263eb"/>
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
