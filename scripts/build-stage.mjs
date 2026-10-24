/**
 * Staging build: the same site, but it can never be indexed or counted.
 *  - every page gets <meta name="robots" content="noindex, nofollow">
 *  - Google Analytics is left out, so test visits do not reach GA4
 *  - dist/robots.txt blocks all crawlers
 *  - dist/_headers sends X-Robots-Tag: noindex on every response
 *    (read by Cloudflare Pages and Netlify; harmless elsewhere)
 * Run: npm run build:stage   (output in dist/, same as a normal build)
 * Keep the staging site behind a login as well (see docs/STAGING.md).
 */
import { spawnSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const res = spawnSync('npx astro build', {
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, PUBLIC_STAGE: '1' },
});
if (res.status !== 0) process.exit(res.status ?? 1);

writeFileSync('dist/robots.txt', 'User-agent: *\nDisallow: /\n');
writeFileSync('dist/_headers', '/*\n  X-Robots-Tag: noindex, nofollow\n');
console.log('Staging build ready in dist/ (noindex, no analytics).');
