---
title: 'E-invoicing deadlines in 2027 that touch Odoo: UAE, Saudi Wave 25, Poland, Belgium'
metaTitle: 'E-Invoicing Deadlines 2027: UAE, Saudi, Poland, Belgium'
description: 'Verified 2027 e-invoicing dates for UAE, Saudi Arabia (ZATCA Wave 25), Poland (KSeF) and Belgium, with what to check in your Odoo system.'
publishDate: 2026-11-21
topic: 'Compliance'
readingTime: '4 min'
---

I checked each date below on an official government page on 21 November 2026. Where I could not confirm a date, I say so. Rules change, so check the source before you act.

## UAE: 1 January 2027 for large businesses

The UAE Ministry of Finance runs a Peppol-based system. You must use an Accredited Service Provider (ASP). The dates:

- **Businesses with revenue of AED 50 million or more:** appoint an ASP by **30 October 2026** and go live on **1 January 2027**. The appointment date was 31 July 2026 before the Ministry's May 2026 change. The go-live date did not move.
- **Smaller businesses:** appoint an ASP by **31 March 2027** and go live on **1 July 2027**.
- **Government entities:** appoint by 31 March 2027 and go live on 1 October 2027.

Sources: the Ministry of Finance announcements of 29 September 2025 and 10 May 2026, and Ministerial Decision No. 66 of 2026 on mof.gov.ae.

If you are a large business and have no ASP yet, the appointment date has already passed. Fix that first.

## Saudi Arabia: ZATCA Wave 25, by 1 February 2027

ZATCA announced Wave 25 on 24 July 2026. It covers taxpayers whose VAT-subject revenue went above SAR 187,500 in any of 2022, 2023, 2024 or 2025. They must integrate with Fatoora **no later than 1 February 2027**. ZATCA says it contacts the businesses directly.

ZATCA's rule is that later waves are told at least six months ahead. I found no wave after 25 on zatca.gov.sa, so I give no date for one. Source: ZATCA news page for Wave 25.

For how the integration works in practice, read my [ZATCA Phase 2 guide](/insights/zatca-phase-2-odoo-guide/).

## Poland: KSeF is mandatory for everyone from 1 January 2027

Poland's KSeF started on 1 February 2026 for the largest taxpayers and on 1 April 2026 for most others. From **1 January 2027** it applies to all remaining taxpayers, including the smallest ones (invoiced sales up to PLN 10,000 gross a month).

One point is still open. The Ministry of Finance wants to delay fines for KSeF errors until 31 December 2027. The Council of Ministers adopted the draft bill on 20 October 2026. On the Ministry's page of 16 November 2026 the bill was still in Parliament, so it is not law yet. The start date for using KSeF does not change. Sources: ksef.podatki.gov.pl and gov.pl/web/finanse.

## Belgium: no 2027 date I can confirm

B2B e-invoicing through Peppol has been mandatory since 1 January 2026. The first three months were a tolerance period, and that is over. The official portal lists fines of EUR 1,500, 3,000 and 5,000 for repeat offences.

For e-reporting, the portal says only "2028" and that it is not yet in Belgian law. I found no official Belgian deadline in 2027, so I leave it out. Source: einvoice.belgium.be.

## What to do in Odoo

1. Write down which Odoo version and which localisation modules you run for each country.
2. Send a test invoice through your real setup, not only a demo one.
3. Check customer and tax data: tax numbers, Peppol IDs, units and tax codes.
4. If you are on version 17 or older, the work competes with an upgrade. Plan them together. The [Odoo 17 support article](/insights/odoo-17-support-ended-before-you-upgrade/) explains why.

If you want a quick view of what an upgrade means for your system, ask for the [one-page upgrade check](/services/upgrade-readiness/). It arrives by email in two working days.
