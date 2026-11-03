/**
 * Shared brand primitives for the image generators.
 *
 * Everything renders through resvg with the TTFs vendored in scripts/fonts —
 * never the system font stack. The site's wordmark (src/components/Brand.astro)
 * ships Pacifico as outlines; using the same Pacifico here is what makes the
 * generated cards typographically identical to the site header.
 */
import { Resvg } from '@resvg/resvg-js';
import { writeFile } from 'node:fs/promises';

/** Palette — mirrors src/styles/tokens.css. */
export const C = {
  navy950: '#06101f',
  navy900: '#0a1a33',
  navy850: '#0d2140',
  navyLine: '#1e3556',
  td: '#e9eff8',
  tdSoft: '#a9bbd4',
  tdFaint: '#7288a6',
  accent: '#2f7df6',
  accentOnDark: '#5b9bff',
  teal: '#12b5c9',
  ok: '#1fa36b',
  white: '#ffffff',
};

const FONTS = 'scripts/fonts';
export const FONT_FILES = [
  `${FONTS}/Pacifico-Regular.ttf`,
  `${FONTS}/SpaceGrotesk-Bold.ttf`,
  `${FONTS}/Inter-Regular.ttf`,
  `${FONTS}/Inter-SemiBold.ttf`,
];

/** Same three families the site uses. */
export const BRAND = 'Pacifico';
export const DISPLAY = 'Space Grotesk';
export const BODY = 'Inter';

/** SVG text is XML — escape before interpolating, and never uppercase after. */
export const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * Greedy word wrap. resvg does not lay out text, so lines are computed here.
 * `perChar` is average advance as a fraction of font size — deliberately
 * generous so a wide string wraps early rather than overflowing.
 */
export function wrap(text, { size, maxWidth, maxLines = 3, perChar = 0.55 }) {
  const maxChars = Math.floor(maxWidth / (size * perChar));
  const words = String(text).split(/\s+/);
  const lines = [];
  let line = '';
  let used = 0;
  for (const w of words) {
    const next = line ? `${line} ${w}` : w;
    if (next.length <= maxChars) {
      line = next;
    } else {
      if (line) {
        lines.push(line);
        if (lines.length === maxLines) break;
      }
      line = w;
    }
    used += 1;
  }
  if (line && lines.length < maxLines) lines.push(line);
  if (lines.length === maxLines && used < words.length) lines[maxLines - 1] += '…';
  return lines;
}

/** Rough advance width, for positioning things next to right-anchored text. */
export const textWidth = (str, size, perChar = 0.52) => str.length * size * perChar;

/** Gradient + glow defs, shared by every card. */
export const defs = (glow = true) => `
  <defs>
    <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${C.accent}"/>
      <stop offset="1" stop-color="${C.teal}"/>
    </linearGradient>
    ${
      glow
        ? `<radialGradient id="glow" cx="0.85" cy="0" r="0.9">
      <stop offset="0" stop-color="${C.accent}" stop-opacity="0.28"/>
      <stop offset="1" stop-color="${C.accent}" stop-opacity="0"/>
    </radialGradient>`
        : ''
    }
  </defs>`;

/** Navy field + grid motif + corner glow. `flat: true` gives the plain navy
 *  field the V3 site uses (Open Graph cards); banners keep the grid. */
export const shell = (w, h, { grid = 80, opacity = 0.55, flat = false } = {}) => flat ? `
  ${defs(false)}
  <rect width="${w}" height="${h}" fill="#0e1b2e"/>` : `
  ${defs()}
  <rect width="${w}" height="${h}" fill="${C.navy900}"/>
  <g stroke="${C.navyLine}" stroke-width="1" opacity="${opacity}">
    ${Array.from({ length: Math.ceil(w / grid) }, (_, i) => `<line x1="${i * grid}" y1="0" x2="${i * grid}" y2="${h}"/>`).join('')}
    ${Array.from({ length: Math.ceil(h / grid) }, (_, i) => `<line x1="0" y1="${i * grid}" x2="${w}" y2="${i * grid}"/>`).join('')}
  </g>
  <rect width="${w}" height="${h}" fill="url(#glow)"/>`;

/* The brand mark — the same two paths as public/favicon.svg and Brand.astro. */
export const D_GLYPH =
  'M14.78 0.24Q12 0.24 8.5 -0.24L8.5 -0.24Q6.58 -0.48 5.86 -1.25Q5.14 -2.02 5.23 -3.74L5.23 -3.74Q5.57 -8.5 6.82 -15.48Q8.06 -22.46 9.84 -28.94L9.84 -28.94Q10.18 -30.14 11.18 -30.62Q12.19 -31.1 13.82 -31.1L13.82 -31.1Q16.75 -31.1 16.75 -29.47L16.75 -29.47Q16.75 -28.8 16.46 -27.94L16.46 -27.94Q15.22 -24.1 13.97 -17.64Q12.72 -11.18 12.19 -5.33L12.19 -5.33Q13.63 -5.18 15.46 -5.18L15.46 -5.18Q23.86 -5.18 28.01 -10.27Q32.16 -15.36 32.16 -23.86L32.16 -23.86Q32.16 -29.57 28.9 -32.69Q25.63 -35.81 19.68 -35.81L19.68 -35.81Q15.84 -35.81 12.07 -34.61Q8.3 -33.41 5.28 -31.44L5.28 -31.44Q4.66 -31.01 3.94 -31.01L3.94 -31.01Q3.12 -31.01 2.64 -31.7Q2.16 -32.4 2.16 -33.41L2.16 -33.41Q2.16 -34.56 2.54 -35.3Q2.93 -36.05 3.84 -36.67L3.84 -36.67Q7.15 -38.93 11.62 -40.1Q16.08 -41.28 20.21 -41.28L20.21 -41.28Q26.06 -41.28 30.34 -39.24Q34.61 -37.2 36.91 -33.26Q39.22 -29.33 39.22 -23.76L39.22 -23.76Q39.22 -16.51 36.34 -11.11Q33.46 -5.71 27.94 -2.74Q22.42 0.24 14.78 0.24L14.78 0.24';
export const D_DOT =
  'M43.1 0.24Q40.99 0.24 39.91 -0.91Q38.83 -2.06 38.83 -3.94L38.83 -3.94Q38.83 -6.1 40.06 -7.39Q41.28 -8.69 43.49 -8.69L43.49 -8.69Q45.6 -8.69 46.68 -7.66Q47.76 -6.62 47.76 -4.61L47.76 -4.61Q47.76 -2.4 46.51 -1.08Q45.26 0.24 43.1 0.24L43.1 0.24';

/** The rounded logo tile, at any size. */
export const logoTile = (x, y, size, tileFill = C.navy950) => {
  const s = size / 64;
  return `<g transform="translate(${x} ${y}) scale(${s})">
    <rect width="64" height="64" rx="14" fill="${tileFill}"/>
    <g transform="translate(9.5 50) scale(0.88)">
      <path fill="${C.td}" d="${D_GLYPH}"/>
      <path fill="url(#grad)" d="${D_DOT}"/>
    </g>
  </g>`;
};

/** Render an SVG string to a PNG file. */
export async function render(svg, outPath, { width } = {}) {
  const r = new Resvg(svg, {
    font: { fontFiles: FONT_FILES, loadSystemFonts: false, defaultFontFamily: BODY },
    ...(width ? { fitTo: { mode: 'width', value: width } } : {}),
  });
  await writeFile(outPath, r.render().asPng());
  console.log(`✓ ${outPath}`);
}
