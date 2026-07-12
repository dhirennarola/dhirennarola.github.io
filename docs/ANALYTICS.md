# Analytics — what's tracked & how to read it

**Property:** Google Analytics 4 · Measurement ID `G-WFFWGQVPX0`
**Installed in:** `src/layouts/Base.astro` (loads on every page) + `src/pages/contact.astro` (form conversion).

---

## What you can now answer

| Your question | Where in GA4 | Notes |
|---|---|---|
| Who opened which page | Reports → Engagement → **Pages and screens** | Pseudonymous (see "identity" below), not personal names |
| Where they came from | Reports → Acquisition → **Traffic acquisition** | Google, LinkedIn, WhatsApp, direct, referral, UTM campaigns |
| How far they scrolled | Reports → Engagement → Events → **`scroll_depth`** | Fires at 25 / 50 / 75 / 100 % per page |
| Which links they clicked out | Event **`outbound_click`** (LinkedIn/GitHub/Odoo store) + `click` (Enhanced Measurement) | |
| Did they reach the meeting page | Pages report → `/contact` page_views | |
| Did they *intend* to book | Event **`book_call_click`** | Any "Book a call" button / Calendly / contact link |
| **Did they actually book a meeting** | Event **`meeting_booked`** | Fired when Calendly confirms the booking inside the embed |
| Did they send an inquiry | Event **`generate_lead`** | Contact form success — carries budget/timeline/company-size (no PII) |
| Did they contact you another way | Event **`contact_click`** | `method` = email / phone / whatsapp |
| Did they download the résumé | Event **`file_download`** | |

The full funnel is therefore visible: **source → pages viewed → scroll depth → booking intent → booked / inquiry sent.**

## Custom events reference (all send a `page` param)
`book_call_click` · `meeting_booked` (method) · `generate_lead` (help_with, budget, company_size, timeline) · `contact_click` (method) · `outbound_click` (destination) · `file_download` (file_name) · `scroll_depth` (percent)

---

## One-time GA4 setup (do this in analytics.google.com)

1. **Confirm Enhanced Measurement is ON** — Admin → Data streams → your web stream → *Enhanced measurement* toggle. This adds page_view, scrolls, outbound clicks, site search, and file downloads automatically (on top of the custom events above).
2. **Mark key events (conversions)** — Admin → Events → toggle **"Mark as key event"** on `meeting_booked` and `generate_lead` (and optionally `book_call_click`). Custom events appear in this list ~24h after the first time each one fires, so trigger them once on the live site first.
3. **Register custom parameters (optional but recommended)** — Admin → Custom definitions → create custom dimensions for `method`, `destination`, `help_with`, `budget`, `percent` so they show up as columns in reports.
4. **Verify it's live** — open GA4 → Reports → **Realtime**, then load dhirennarola.com in another tab; your visit should appear within ~30s. Use **Admin → DebugView** (or the *Google Tag Assistant* extension) to watch each event fire with its parameters.

## Honest limits (so expectations are right)
- GA4 is **pseudonymous** — it shows a device/session, its city, source, and everything it did, but **not a person's name or email**. You get the actual identity only when they book (Calendly gives you their details) or submit the form (lands in your inbox). GA4 tells you *how many* and *from where*; the booking/inbox tells you *who*.
- IP anonymization is on, and the `/privacy` page discloses Google Analytics. If you start taking EU/UK clients seriously, add a consent banner (Google Consent Mode v2) — flagged but not urgent.
- Cloudflare Web Analytics (separate, cookieless) also runs on the domain via Cloudflare; it's independent of GA4.
