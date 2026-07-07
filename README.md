# dhirennarola.com

Personal consulting site of **Dhiren Narola — Odoo Architect & AI Automation Engineer**.
Built with [Astro](https://astro.build) as a fully static site; deployed to GitHub Pages by GitHub Actions on every push.

## Stack

- **Astro 5** — static output, content collections, image optimization
- **Vanilla CSS design system** — `src/styles/tokens.css` holds every color/space/type token
- **No client framework** — a few small vanilla scripts (reveals, nav, form)
- **Web3Forms** (contact form) · **Calendly** (booking) · **GA4** (analytics, ID in `src/data/facts.ts`)

## Project map

| Path | What lives there |
|---|---|
| `src/data/facts.ts` | **Single source of truth** — every number, date, contact, link |
| `src/data/services.ts` · `industries.ts` | Copy for service & industry pages (drive dynamic routes) |
| `src/content/work/*.md` | Case studies (frontmatter + markdown) |
| `src/content/insights/*.md` | Articles — add a `.md` file, get a page |
| `src/components/` · `src/layouts/` | Shared UI + SEO head/JSON-LD |
| `src/pages/` | Routes, including `[slug]` dynamic pages |
| `public/` | Static assets, favicon, robots.txt, CNAME, résumé PDF |
| `scripts/generate-og.mjs` | Regenerates OG card / icons / optimized images (`npm run og`) |
| `*--remove.*` | Pre-redesign files kept for verification — safe to delete |

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build → dist/
```

## Deployment

Push to `main` → `.github/workflows/deploy.yml` builds and publishes to GitHub Pages.

**One-time repo settings:** Settings → Pages → **Source: "GitHub Actions"** (not "Deploy from a branch").
Custom domain setup: see `DOMAIN-SETUP.md`. Full runbook: `DEPLOY.md`.

## Editing cheatsheet

- Change a number/date/link anywhere on the site → `src/data/facts.ts`
- New case study → copy a file in `src/content/work/`, edit frontmatter + body
- New article → add `src/content/insights/my-post.md`
- Colors/typography → `src/styles/tokens.css`
- Résumé → edit `src/pages/profile.astro`, then regenerate the PDF (headless Chrome print of `/profile`, see DEPLOY.md)

© Dhiren Narola. Content and case studies may not be reproduced without permission.
