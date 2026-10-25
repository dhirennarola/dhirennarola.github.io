# STAGING: a private preview at stage.dhirennarola.com

Live since 25 Oct 2026. See the next version of the site on a real URL, on any
device, without it ever being indexed or open to the public.

## How it is protected

1. **Login wall (Cloudflare Access).** Zero Trust Free, team `proud-pond-157f`.
   Application **"Website staging"** covers `stage.dhirennarola.com` with the policy
   **"Dhiren only"**, which allows `hello@dhirennarola.com` and `dhnarola12@gmail.com`.
   Sign in with your Cloudflare account, or type your email and use the one-time code
   Cloudflare sends. Everyone else, search engines included, only sees the login page.
2. **No other address.** The site runs as the Cloudflare Worker `dhirennarola-stage`
   (`wrangler.stage.jsonc`) with `workers_dev` and preview URLs switched off, so there
   is no `*.workers.dev` or `*.pages.dev` copy to find.
3. **No indexing.** `npm run build:stage` adds `noindex, nofollow` to every page,
   a `robots.txt` that blocks all crawlers, and an `X-Robots-Tag: noindex` header.
4. **No analytics.** The staging build leaves Google Analytics out.

## Update the staging site

```bash
npm run deploy:stage
```

This runs the staging build and uploads `dist/` with
`wrangler deploy --config wrangler.stage.jsonc`. The first time on a new computer,
run `npx wrangler login` and approve it in the browser.

## Add or remove a reviewer

Cloudflare dashboard → Zero Trust → Access controls → Policies → "Dhiren only" →
add or remove the email address → Save. They sign in with a one-time code.

## Going live

Live deploys stay exactly as before: merge to `main` on GitHub and GitHub Actions
builds with `npm run build` (indexed, with analytics) and publishes to GitHub Pages.
Never upload a normal build to staging, and never publish a staging build to the
live site.
