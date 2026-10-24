/**
 * Generates every branded raster asset the site ships (Meridian palette).
 *
 *  - public/og/default.png              1200×630 Open Graph card
 *  - public/og/work-<slug>.png          one card per case study
 *  - public/assets/apple-touch-icon.png 180×180, from the real brand mark
 *  - public/assets/dhiren-narola.jpg    optimized portrait for schema/social
 *
 * Rendering uses resvg with the brand TTFs vendored in scripts/fonts, not the
 * system font stack. That matters: the previous version asked sharp for
 * "Segoe UI", so cards were set in whatever the build machine happened to have
 * — nothing like the site's Pacifico / Space Grotesk / Inter. The wordmark here
 * is the same Pacifico that Brand.astro ships as outlines, so the OG name and
 * the site header are the same typeface. Output is identical on any machine.
 *
 * Run: npm run og
 */
import sharp from 'sharp';
import { mkdir, readdir, readFile } from 'node:fs/promises';
import {
  C,
  BRAND,
  DISPLAY,
  BODY,
  esc,
  wrap,
  textWidth,
  defs,
  shell,
  logoTile,
  render,
} from './lib/brand.mjs';

const OUT_OG = 'public/og';
const OUT_ASSETS = 'public/assets';

await mkdir(OUT_OG, { recursive: true });
await mkdir(OUT_ASSETS, { recursive: true });

/**
 * Bottom band: domain left, availability right.
 * The status text is right-anchored, so the dot is positioned from the right
 * edge too — measured back past the rendered string plus a gap. Anchoring it
 * to a round number instead is what put the dot on top of the words.
 */
const bottomBand = (w, h, bandH = 84) => {
  const label = 'Available for new projects';
  const size = 22;
  const midY = h - bandH / 2;
  return `
  <rect x="0" y="${h - bandH}" width="${w}" height="${bandH}" fill="${C.navy950}"/>
  <text x="80" y="${midY + 9}" font-family="${BODY}" font-weight="600" font-size="24" fill="${C.td}">dhirennarola.com</text>
  <circle cx="${Math.round(w - 80 - textWidth(label, size) - 16)}" cy="${midY - 4}" r="7" fill="${C.ok}"/>
  <text x="${w - 80}" y="${midY + 4}" font-family="${BODY}" font-size="${size}" fill="${C.tdFaint}" text-anchor="end">${label}</text>`;
};

/* ==================== default OG card ==================== */
const W = 1200;
const H = 630;

const defaultCard = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  ${shell(W, H, { flat: true })}
  ${logoTile(80, 66, 72)}
  <rect x="80" y="180" width="56" height="8" rx="4" fill="#2f7df6"/>
  <text x="78" y="298" font-family="${BRAND}" font-size="80" fill="${C.td}">Dhiren Narola<tspan fill="url(#grad)">.</tspan></text>
  <text x="80" y="366" font-family="${DISPLAY}" font-weight="700" font-size="34" fill="${C.accentOnDark}">Odoo Architect &amp; AI Automation Engineer</text>
  <text x="80" y="444" font-family="${BODY}" font-size="26" fill="${C.tdSoft}">Odoo 18 Certified  ·  22 ERP implementations  ·  13 countries</text>
  <text x="80" y="488" font-family="${BODY}" font-size="26" fill="${C.tdSoft}">ERP Implementation  ·  ERP Rescue  ·  AI + Odoo</text>
  ${bottomBand(W, H)}
</svg>`;

await render(defaultCard, `${OUT_OG}/default.png`);

/* ==================== per-case-study OG cards ==================== */
/** Minimal frontmatter reader — enough for the handful of fields a card needs. */
function frontmatter(src) {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return { heroKpis: [] };
  const out = { heroKpis: [] };
  for (const raw of m[1].split(/\r?\n/)) {
    const line = raw.trimEnd();
    if (/^\s*#/.test(line)) continue;
    const kv = line.match(/^([a-zA-Z]+):\s*(.+)$/);
    if (kv) {
      const [, k, v] = kv;
      out[k] = v.replace(/^['"]|['"]$/g, '');
      continue;
    }
    const kpi = line.match(/^\s*-\s*\{\s*value:\s*'([^']*)'\s*,\s*label:\s*'([^']*)'/);
    if (kpi) out.heroKpis.push({ value: kpi[1], label: kpi[2] });
  }
  return out;
}

const workDir = 'src/content/work';
const workFiles = (await readdir(workDir)).filter((f) => f.endsWith('.md'));

for (const file of workFiles) {
  const slug = file.replace(/\.md$/, '');
  const fm = frontmatter(await readFile(`${workDir}/${file}`, 'utf8'));

  const titleLines = wrap(fm.title || slug, { size: 44, maxWidth: 1030, maxLines: 3 });
  const eyebrow = [fm.industry, fm.country].filter(Boolean).join('  ·  ');
  const kpis = (fm.heroKpis || []).slice(0, 3);

  // Title block is bottom-anchored so 1-, 2- and 3-line titles all keep the
  // same relationship to the KPI row below.
  const lineH = 54;
  const titleBaseline = 292;
  const titleTop = titleBaseline - (titleLines.length - 1) * lineH;
  const ruleY = titleBaseline + 32;

  const card = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  ${shell(W, H, { flat: true })}
  ${logoTile(80, 58, 54)}
  <text x="150" y="97" font-family="${BRAND}" font-size="32" fill="${C.td}">Dhiren Narola</text>
  <text x="80" y="180" font-family="${BODY}" font-weight="600" font-size="21" fill="${C.teal}" letter-spacing="1.4">CASE STUDY${eyebrow ? `  ·  ${esc(eyebrow.toUpperCase())}` : ''}</text>
  ${titleLines
    .map(
      (l, i) =>
        `<text x="80" y="${titleTop + i * lineH}" font-family="${DISPLAY}" font-weight="700" font-size="44" fill="${C.white}">${esc(l)}</text>`
    )
    .join('\n  ')}
  <rect x="80" y="${ruleY}" width="56" height="6" rx="3" fill="#2f7df6"/>
  ${kpis
    .map((k, i) => {
      const x = 80 + i * 352;
      const labelLines = wrap(k.label, { size: 18, maxWidth: 310, maxLines: 2, perChar: 0.5 });
      return `<text x="${x}" y="446" font-family="${DISPLAY}" font-weight="700" font-size="40" fill="${C.accentOnDark}">${esc(k.value)}</text>
  ${labelLines
    .map((l, j) => `<text x="${x}" y="${478 + j * 23}" font-family="${BODY}" font-size="18" fill="${C.tdSoft}">${esc(l)}</text>`)
    .join('\n  ')}`;
    })
    .join('\n  ')}
  ${bottomBand(W, H)}
</svg>`;

  await render(card, `${OUT_OG}/work-${slug}.png`);
}

/* ==================== apple touch icon ==================== */
/* Was a hand-set "dn" wordmark — a third, inconsistent mark. Google Search
   often prefers apple-touch-icon over the declared favicons, which is why the
   SERP icon did not match the browser tab. Now rendered from the same paths as
   favicon.svg, so every surface shows one mark. */
const iconSvg = `
<svg width="180" height="180" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
  ${defs(false)}
  ${logoTile(0, 0, 180, C.navy900)}
</svg>`;
await render(iconSvg, `${OUT_ASSETS}/apple-touch-icon.png`, { width: 180 });

/* ==================== optimized portrait ==================== */
await sharp('src/assets/dhiren-narola.png')
  .resize(800, null, { withoutEnlargement: true })
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile(`${OUT_ASSETS}/dhiren-narola.jpg`);
console.log(`✓ ${OUT_ASSETS}/dhiren-narola.jpg`);

/* The old certificate.jpg step was removed: src/assets/certificate.jpg is not
   in the repo, so `npm run og` crashed before finishing. */
