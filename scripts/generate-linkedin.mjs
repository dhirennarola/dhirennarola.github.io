/**
 * LinkedIn profile banners — 1584×396, two concepts to choose between.
 *
 * These are NOT website assets. They are never written into public/, never
 * built, and never deployed; output goes to a folder outside this repo (see
 * OUT below) so nothing about them is reachable from dhirennarola.com.
 *
 * Layout constraint that drives both designs: LinkedIn renders the circular
 * profile photo over the banner's lower-left corner. Measured against a real
 * profile screenshot, the photo covers roughly x 60–410 and everything below
 * y 190. Both concepts therefore keep every piece of text right of
 * AVATAR_SAFE_X; the left band is intentional empty brand field.
 *
 * Run: npm run banners
 */
import { mkdir } from 'node:fs/promises';
import {
  C,
  BRAND,
  DISPLAY,
  BODY,
  esc,
  shell,
  logoTile,
  render,
} from './lib/brand.mjs';

/** Outside the repo on purpose — these are personal-brand assets, not site files. */
const OUT = '../../../Branding/LinkedIn';
await mkdir(OUT, { recursive: true });

const W = 1584;
const H = 396;

/** Nothing readable may sit left of this — the profile photo lands there. */
const SAFE = 440;

/** Proof numbers. "0 failed go-lives" is deliberately not here: on a banner,
 *  out of context, a big "0" reads as an empty stat before it reads as a
 *  perfect record. It stays on the site, where the label has room to explain. */
const STATS = [
  ['22', 'ERPs live'],
  ['13', 'Countries'],
  ['5', 'Continents'],
];

/* ============================================================
   Concept A — "Identity"
   The name is the hero. For someone people look up by name, or
   who is handing out a profile link, this reads as a business card:
   who, what, proof, where. Calm and credential-led.
   ============================================================ */
const conceptA = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  ${shell(W, H)}

  ${logoTile(SAFE, 58, 50)}
  <text x="${SAFE - 2}" y="188" font-family="${BRAND}" font-size="66" fill="${C.td}">Dhiren Narola<tspan fill="url(#grad)">.</tspan></text>
  <text x="${SAFE}" y="240" font-family="${DISPLAY}" font-weight="700" font-size="27" fill="${C.accentOnDark}">Odoo Architect &amp; AI Automation Engineer</text>

  <rect x="${SAFE}" y="266" width="48" height="4" rx="2" fill="url(#grad)"/>

  <text x="${SAFE}" y="308" font-family="${BODY}" font-size="21" fill="${C.tdSoft}">Odoo 18 Certified  ·  ERP Implementation · Rescue · AI + Odoo</text>
  <text x="${SAFE}" y="342" font-family="${BODY}" font-weight="600" font-size="21" fill="${C.td}">dhirennarola.com</text>

  ${STATS.map(([v, l], i) => {
    const x = 1216 + i * 132;
    return `<text x="${x}" y="170" font-family="${DISPLAY}" font-weight="700" font-size="54" fill="${C.white}" text-anchor="middle">${v}</text>
  <text x="${x}" y="200" font-family="${BODY}" font-size="15" fill="${C.tdFaint}" text-anchor="middle" letter-spacing="0.6">${esc(l)}</text>`;
  }).join('\n  ')}

  <rect x="1150" y="234" width="330" height="1" fill="${C.navyLine}"/>
  <text x="1480" y="278" font-family="${BODY}" font-size="19" fill="${C.tdSoft}" text-anchor="end">One accountable architect —</text>
  <text x="1480" y="306" font-family="${BODY}" font-size="19" fill="${C.tdSoft}" text-anchor="end">architecture to go-live.</text>
</svg>`;

await render(conceptA, `${OUT}/banner-a-identity.png`);

/* ============================================================
   Concept B — "Positioning"
   The offer is the hero. For discovery — someone who lands on the
   profile cold learns what you sell before they learn your name.
   The stack on the right makes "AI + ERP" concrete rather than a
   buzzword, and is the one element that differentiates the profile
   from every other Odoo consultant.
   ============================================================ */
const LAYERS = [
  ['Channels', 'WhatsApp · Portal · Email'],
  ['AI layer', 'Agents · LLMs · OCR'],
  ['Odoo core', 'Sales · MRP · Accounting'],
];

const conceptB = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${C.accent}"/>
      <stop offset="1" stop-color="${C.teal}"/>
    </linearGradient>
    <radialGradient id="glowB" cx="0.74" cy="0.45" r="0.72">
      <stop offset="0" stop-color="${C.teal}" stop-opacity="0.20"/>
      <stop offset="1" stop-color="${C.teal}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="${C.navy950}"/>
  <g stroke="${C.navyLine}" stroke-width="1" opacity="0.38">
    ${Array.from({ length: Math.ceil(W / 88) }, (_, i) => `<line x1="${i * 88}" y1="0" x2="${i * 88}" y2="${H}"/>`).join('')}
  </g>
  <rect width="${W}" height="${H}" fill="url(#glowB)"/>
  <rect x="0" y="0" width="10" height="${H}" fill="url(#grad)"/>

  <text x="${SAFE + 2}" y="104" font-family="${BODY}" font-weight="600" font-size="18" fill="${C.teal}" letter-spacing="2.8">ODOO ARCHITECT  ·  AI AUTOMATION ENGINEER</text>

  <text x="${SAFE}" y="172" font-family="${DISPLAY}" font-weight="700" font-size="40" fill="${C.white}">I design, build, and rescue</text>
  <text x="${SAFE}" y="220" font-family="${DISPLAY}" font-weight="700" font-size="40" fill="${C.white}">Odoo ERPs<tspan fill="${C.accentOnDark}">&#160;— and make them</tspan></text>
  <text x="${SAFE}" y="268" font-family="${DISPLAY}" font-weight="700" font-size="40" fill="${C.accentOnDark}">intelligent.</text>

  <rect x="${SAFE}" y="298" width="620" height="1" fill="${C.navyLine}"/>

  <text x="${SAFE + 2}" y="346" font-family="${BRAND}" font-size="32" fill="${C.td}">Dhiren Narola<tspan fill="url(#grad)">.</tspan></text>
  <text x="${SAFE + 290}" y="346" font-family="${BODY}" font-size="19" fill="${C.tdFaint}">Odoo 18 Certified  ·  22 ERPs live in 13 countries  ·  dhirennarola.com</text>

  ${LAYERS.map(([title, detail], i) => {
    const y = 96 + i * 78;
    const on = i === 1;
    return `<rect x="1152" y="${y}" width="336" height="60" rx="12" fill="${on ? 'rgba(18,181,201,0.13)' : 'rgba(233,239,248,0.05)'}" stroke="${on ? C.teal : C.navyLine}" stroke-width="1"/>
  <text x="1176" y="${y + 26}" font-family="${BODY}" font-weight="600" font-size="17" fill="${on ? C.teal : C.td}">${esc(title)}</text>
  <text x="1176" y="${y + 47}" font-family="${BODY}" font-size="14" fill="${C.tdFaint}">${esc(detail)}</text>`;
  }).join('\n  ')}

  ${[0, 1]
    .map((i) => {
      const y = 156 + i * 78;
      return `<path d="M1320 ${y} L1320 ${y + 14} M1314 ${y + 8} L1320 ${y + 15} L1326 ${y + 8}" stroke="${C.tdFaint}" stroke-width="2" fill="none" stroke-linecap="round"/>`;
    })
    .join('\n  ')}
</svg>`;

await render(conceptB, `${OUT}/banner-b-positioning.png`);

console.log(`\nBoth banners written to ${OUT} (outside the site repo).`);
