# DOMAIN-SETUP — dhirennarola.com

## 1 · Buy the domain
Any registrar works (Namecheap, Cloudflare Registrar, GoDaddy). ~$10–12/year for `.com`.

## 2 · DNS records (at your registrar)

| Type | Host / Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | dhirennarola.github.io |

## 3 · GitHub settings
Repo → **Settings → Pages → Custom domain** → enter `dhirennarola.com` → Save.
Wait for the DNS check (can take up to an hour), then tick **Enforce HTTPS**.

The repo already contains `public/CNAME` with `dhirennarola.com`, so the setting survives every deploy.

## 4 · What happens to old URLs
- `dhirennarola.github.io/portfolio/*` → GitHub 301-redirects to `dhirennarola.com/*` automatically once the custom domain is active.
- Old page paths (e.g. `/erp-rescue.html`, `/meeting.html`, `/case-study-automotive-ksa.html`) → redirect pages are built into the new site, forwarding to the new URLs. Nothing indexed goes dead.

## 5 · Email on the domain (recommended, later)
Options, cheapest first:
- **Free forwarding** (Cloudflare Email Routing / registrar forwarding): `hello@dhirennarola.com` → your Gmail. Receive-only professional address in ~10 min.
- **Google Workspace** (~$6/mo): full send/receive as `hello@dhirennarola.com`. The premium option worth having before big proposals go out.

When ready, update `contact.email` in `src/data/facts.ts` (one line) — the whole site follows.
