---
title: 'ZATCA Phase 2 e-Invoicing in Odoo: A Practical Implementation Guide'
description: 'What actually matters when connecting Odoo to ZATCA Fatoora — clearance flows, failure handling, and the mistakes that cause rejected invoices. From running 1,500+ cleared invoices a month in production.'
publishDate: 2026-07-01
topic: 'Compliance'
readingTime: '7 min'
---

Saudi Arabia's ZATCA Phase 2 ("Integration Phase") turned e-invoicing from a formatting requirement into a real-time integration problem. Your ERP now signs invoices cryptographically and clears them with the Fatoora platform — before they're legally valid.

I've implemented this in production for a Saudi group processing **1,500+ invoices a month**. This is the guide I wish had existed before that project.

## What Phase 2 actually requires

Phase 1 (Generation, since Dec 2021) required structured XML invoices. Phase 2 adds the hard parts:

- **Cryptographic stamping** — each invoice is signed with a device-registered cryptographic stamp identifier (CSID).
- **Clearance (B2B) / Reporting (B2C)** — standard tax invoices must be *cleared* by Fatoora in real time; simplified invoices are *reported* within 24 hours.
- **UUID, hash chaining, and QR codes** — every invoice links to the previous one's hash. Break the chain and you have an audit problem, not a bug.
- **Wave-based enrollment** — ZATCA notifies businesses of their integration wave based on revenue. When your wave arrives, the deadline is real.

## The architecture decision that matters most

The naive design calls ZATCA synchronously when an invoice is posted. In production this fails for a simple reason: **networks fail, and sales can't stop when they do.**

The design that survives:

1. Invoice is posted in Odoo and queued for clearance.
2. A worker signs the XML, submits to Fatoora, and processes the response.
3. Success → the cleared XML and QR are stored against the invoice.
4. Failure → automatic retry with backoff, and a loud exception queue a human actually monitors.

The failure queue is not an edge case feature. During ZATCA-side slowdowns, it's the thing keeping your invoicing legal *and* your business running.

## The five mistakes that cause rejected invoices

1. **VAT number and address mismatches** — buyer details must match registration data. Garbage master data becomes rejected invoices on day one. Clean your partner records *before* go-live.
2. **Rounding differences** — Odoo's line-level rounding vs. ZATCA's validation rules can disagree by a halala. That's a rejection. Test with real, messy invoices — discounts, multi-line, credit notes — not clean demo data.
3. **Credit notes without references** — a credit note must reference its original invoice correctly in the XML. Untested credit note flows are the most common post-go-live surprise.
4. **Certificate lifecycle neglect** — CSIDs expire and must be renewed. If nobody owns that calendar, invoicing stops on a random Tuesday.
5. **Testing only in sandbox** — the compliance sandbox is more forgiving than production onboarding. Budget time for the production CSID onboarding process itself.

## What to check before your wave deadline

- Partner master data: VAT numbers, addresses, buyer identity fields — validated.
- All invoice types tested: standard, simplified, credit notes, debit notes, prepayments.
- Failure queue and retry logic proven by *deliberately* breaking connectivity in UAT.
- Certificate renewal ownership assigned, with calendar reminders.
- Archive strategy for cleared XML (you must retain it) confirmed.

## Where Odoo fits well — and where you'll customize

Recent Odoo versions ship Saudi e-invoicing support that handles the format and signing fundamentals well. Where real projects add work: multi-company setups with per-entity onboarding, high-volume queue hardening, custom invoice layouts that must still satisfy the QR/XML rules, and operational monitoring so finance sees clearance status without asking IT.

---

*Facing a ZATCA deadline, or already seeing rejected invoices? I've been through this in production — [book a discovery call](/contact) and bring your ugliest invoice example.*
