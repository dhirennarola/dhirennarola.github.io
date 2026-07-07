# TODO — everything left to go fully live

All build/deploy problems are fixed; every remaining item is an account or DNS
action only Dhiren can do. Detailed how-tos live in
[docs/DEPLOY.md](docs/DEPLOY.md) and [docs/DOMAIN-SETUP.md](docs/DOMAIN-SETUP.md).

## 1 · Domain — dhirennarola.com (do first)
- [ ] Buy `dhirennarola.com` at any registrar (~$10/yr).
- [ ] Add DNS records (4 × A records + `www` CNAME) — table in docs/DOMAIN-SETUP.md §2.
- [ ] GitHub repo → Settings → Pages → Custom domain → `dhirennarola.com` → wait for DNS check → tick **Enforce HTTPS**.
- [ ] `public/CNAME` already contains the domain — nothing to change in the repo.

## 2 · Email — hello@dhirennarola.com (URGENT after domain)
The site now shows `hello@dhirennarola.com` everywhere (contact page, footer,
mailto links). **Until forwarding exists, mail to that address bounces.**
- [ ] Set up Cloudflare Email Routing (free) or registrar forwarding: `hello@dhirennarola.com` → your Gmail. (~10 min, receive-only.)
- [ ] Later, optional: Google Workspace (~$6/mo) to also *send* from the address.

## 3 · Analytics & Search
- [ ] Create GA4 property → paste Measurement ID into `src/data/facts.ts` → `site.gaMeasurementId` → push.
- [ ] Google Search Console: add `dhirennarola.com` domain property (DNS verification) and submit `https://dhirennarola.com/sitemap-index.xml`.

## 4 · Final checks
- [ ] Submit the contact form once — confirm it lands in your inbox and redirects to /thanks.
- [ ] Book a test Calendly slot end-to-end.
- [ ] Update LinkedIn headline/experience to match the site (20+ implementations, Synodica ended Jul 2026, independent 2026–).
- [ ] Calendly URL still uses the `dhnarola12` account slug (`calendly.com/dhnarola12/30min`) — works fine; rename the Calendly account if you want it cleaner.
