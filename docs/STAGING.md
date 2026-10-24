# STAGING — a private preview at stage.dhirennarola.com

Goal: see the next version of the site on a real URL, on any device, without it
ever being indexed or open to the public.

## Three layers of protection

1. **Login wall (Cloudflare Access).** Only listed email addresses can open the site.
   They get a one-time code by email. Everyone else, including search engines, sees a
   Cloudflare login page.
2. **No indexing.** `npm run build:stage` adds `noindex, nofollow` to every page,
   a `robots.txt` that blocks all crawlers, and an `X-Robots-Tag: noindex` header.
3. **No analytics.** The staging build leaves Google Analytics out, so test visits
   never reach GA4.

## One-time setup (about 15 minutes, Cloudflare free plan)

DNS for dhirennarola.com is already on Cloudflare.

1. **Create the Pages project and upload the first build**
   ```bash
   npm run build:stage
   npx wrangler login
   npx wrangler pages deploy dist --project-name dhirennarola-stage --branch main
   ```
   `wrangler login` opens a browser window: sign in to Cloudflare and approve.
2. **Attach the subdomain.** Cloudflare dashboard → Workers & Pages →
   `dhirennarola-stage` → Custom domains → add `stage.dhirennarola.com`.
3. **Add the login wall.** Cloudflare dashboard → Zero Trust → Access → Applications →
   Add an application → Self-hosted.
   - Application domain: `stage.dhirennarola.com` (and also `dhirennarola-stage.pages.dev`)
   - Policy: Allow, rule "Emails": `hello@dhirennarola.com`, `dhnarola12@gmail.com`
     (add anyone else who should review)
   - Login method: One-time PIN
4. Open `https://stage.dhirennarola.com` in a private window. You should see the
   Cloudflare login page first.

## Every update after that

```bash
npm run build:stage
npx wrangler pages deploy dist --project-name dhirennarola-stage --branch main
```

## Going live

Live deploys stay exactly as before: merge to `main` on GitHub and GitHub Actions
builds with `npm run build` (indexed, with analytics). Never upload a normal build
to the staging project, and never upload a staging build to the live site.
