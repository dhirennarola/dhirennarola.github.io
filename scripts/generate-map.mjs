/**
 * Builds public/assets/world-delivery.svg: a plain world map with the
 * countries from src/data/delivery.json filled in blue.
 * Run with `npm run map` whenever that list changes. The page loads the
 * SVG as a lazy image, so the map costs nothing until it scrolls into view.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { geoEqualEarth, geoPath, geoCentroid } from 'd3-geo';
import { feature } from 'topojson-client';

const world = JSON.parse(readFileSync('node_modules/world-atlas/countries-110m.json', 'utf8'));
const { countries } = JSON.parse(readFileSync('src/data/delivery.json', 'utf8'));
const delivered = new Map(countries.map((c) => [c.id, c]));

const land = feature(world, world.objects.countries).features.filter(
  (f) => f.id !== '010' // Antarctica adds height and nothing else
);

const W = 1000;
const H = 470;
const projection = geoEqualEarth().fitExtent([[4, 4], [W - 4, H - 4]], {
  type: 'FeatureCollection',
  features: land,
});
const path = geoPath(projection);
const r = (n) => Math.round(n * 10) / 10;
// Whole pixels are precise enough at this size and halve the file.
const d = (f) => path(f).replace(/\d+\.\d+/g, (m) => String(Math.round(+m)));

const base = land.filter((f) => !delivered.has(f.id)).map(d).join('');
const on = land.filter((f) => delivered.has(f.id));

// Small countries vanish at this scale, so every delivered country also
// gets a dot at its centre.
const dots = on
  .map((f) => {
    const [x, y] = projection(geoCentroid(f));
    const home = delivered.get(f.id).home;
    return `<circle cx="${r(x)}" cy="${r(y)}" r="${home ? 5 : 4}" fill="${home ? '#12b5c9' : '#6aa6ff'}" stroke="#0e1b2e" stroke-width="1.5"/>`;
  })
  .join('');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="World map of the ${countries.length} countries where Dhiren Narola has delivered Odoo projects">
<path fill="#243954" d="${base}"/>
<path fill="#2f7df6" d="${on.map(d).join('')}"/>
${dots}
</svg>
`;

writeFileSync('public/assets/world-delivery.svg', svg);
console.log(`world-delivery.svg: ${countries.length} countries, ${(svg.length / 1024).toFixed(1)} KB`);
