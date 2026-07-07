# DEPLOY — how this site ships

## What this is
An [Astro](https://astro.build) static site. You edit files, push to GitHub, and GitHub Actions builds + deploys automatically. You never run the build manually for deployment.

## One-time setup (~10 minutes)

### 1 · Push to your GitHub repo
```bash
cd portfolio-main
git init
git add .
git commit -m "Complete redesign: Astro rebuild with new positioning"
git remote add origin https://github.com/dhirennarola/portfolio.git
git branch -M main
git push -u origin main --force
```
(`--force` replaces the old static site history. The old files are preserved locally as `*--remove.*` — and in the old git history on GitHub until this push, so take a ZIP backup of the repo first if you want extra safety: GitHub → Code → Download ZIP.)

### 2 · Switch Pages to Actions
GitHub repo → **Settings → Pages → Source: "GitHub Actions"** (instead of "Deploy from branch"). The included workflow (`.github/workflows/deploy.yml`) does the rest — every push to `main` deploys.

### 3 · Custom domain
Follow **DOMAIN-SETUP.md** after buying `dhirennarola.com`.

### 4 · Google Analytics (5 min)
1. Create a GA4 property at analytics.google.com → get the Measurement ID (`G-XXXXXXXXXX`).
2. Put it in `src/data/facts.ts` → `site.gaMeasurementId`.
3. Push. Done — the snippet only renders when the ID is set.

### 5 · Google Search Console
Add both `dhirennarola.com` (domain property, verified via DNS) and submit `https://dhirennarola.com/sitemap-index.xml`.

## Day-to-day editing

| What | Where |
|---|---|
| Any number, date, link, availability line | `src/data/facts.ts` (single source of truth) |
| Case studies | `src/content/work/*.md` |
| Articles | `src/content/insights/*.md` (add a new `.md` = new article) |
| Service page copy | `src/data/services.ts` |
| Industry page copy | `src/data/industries.ts` |
| Colors/typography | `src/styles/tokens.css` |

Local preview (optional): `npm install` once, then `npm run dev` → http://localhost:4321

Regenerate branded images (OG card, icons) after design changes: `npm run og`

## Pre-launch checklist
- [ ] `facts.ts` → GA4 ID set
- [ ] LinkedIn headline + experience updated to match site (20+, Synodica ended Jul 2026, independent 2026–)
- [ ] Search `TODO(Dhiren)` across `src/` — resolve or accept each
- [ ] Test contact form (submit → lands in inbox → /thanks page)
- [ ] Test Calendly booking end-to-end
- [ ] Old repo ZIP backup taken
