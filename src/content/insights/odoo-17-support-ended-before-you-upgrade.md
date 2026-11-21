---
title: 'Odoo 17 support has ended: what to check before you upgrade'
metaTitle: 'Odoo 17 Support Ended: What to Check Before Upgrading'
description: 'Odoo 17 standard support ended in September 2026. A short checklist from an Odoo architect: custom modules, data, integrations and which version to aim for.'
publishDate: 2026-11-21
topic: 'Upgrades'
readingTime: '3 min'
---

Odoo's support page says standard support for Odoo 17 ended in September 2026. Odoo 20 came out the same month. If you run version 17 or older, you are now deciding when to move, not whether to.

Here is the short list I go through before any upgrade.

## What the dates say

From the [Odoo support page](https://www.odoo.com/documentation/20.0/administration/standard_extended_support.html), checked on 21 November 2026:

- Odoo 18, 19 and 20 are in standard support. Their planned end dates are September 2027, 2028 and 2029.
- Odoo 17 on Odoo Online is no longer supported.
- On Odoo.sh and on-premise, extended support exists for an extra fee. It has no security updates.
- Odoo can upgrade a database from any version to a major version that is in standard support.

So an upgrade from 17 can go straight to 20. You do not need to stop at 18 or 19.

## 1. Count your custom modules

This is the biggest part of the work. Odoo's upgrade moves your standard data. A database with custom modules cannot be upgraded until those modules exist for the new version.

List every module that is not from Odoo. Split them into three groups: written by you or your partner, bought from the App Store, and built in Studio. Each group has a different owner and a different plan.

## 2. Ask what standard Odoo does now

After a few versions, some custom code is not needed. Standard Odoo may already do it. Every module you can drop is a module you do not have to port and test. I check this first, because it is the cheapest saving.

## 3. Check the data that hurts when it is wrong

Accounting and stock come first:

- Open invoices, bills and payments
- Stock valuation and the accounts it posts to
- Taxes, fiscal positions and e-invoicing setup
- Multi-company and multi-currency records

Write down a few numbers before the upgrade (trial balance, stock value, open receivables). Compare them after. If they differ, you know at once.

## 4. List what connects to Odoo

Payment gateways, shops, WhatsApp, bank feeds, reports in other tools, scripts that call the API. Each one can break on a new version. Most are small fixes, but only if you find them before go-live.

## 5. Test on a copy, with real users

Run the upgrade on a copy of your database. Let the people who use the system every day try their own work. Do not test only the happy path.

## 6. Pick the order of work

My usual order is: drop what you can, fix the red modules, test the data, then plan the cutover for a quiet week. A rough effort range at the start stops surprises later.

## Want this done for your system?

I offer a one-page upgrade check, by email, in two working days, with no call needed. It covers the custom modules that will break, the data checks, a rough effort range and the order of work. Fill in the short form on the [Odoo upgrade check page](/services/upgrade-readiness/).
