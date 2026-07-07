---
title: 'Hourly Billing on Autopilot: Subscription Platform for an IT Services Company'
clientLabel: 'IT services & cloud company'
industry: 'IT & SaaS'
country: 'United States'
companySize: 'B2B service provider'
odooVersion: 'Odoo (Odoo.sh)'
role: 'Solution Architect & Lead Developer'
# TODO(Dhiren): confirm implementation year
status: 'Live in production'
summary: 'A subscription-based hourly billing system with automatic project allocation, a full customer portal, and hardened security — eliminating 100% of manual billing and cutting client queries by 45%.'
featured: false
order: 4
heroKpis:
  - { value: '100%', label: 'of manual billing eliminated', basis: 'auto-allocation + auto-renewal' }
  - { value: '45%', label: 'fewer client queries', basis: 'after customer portal launch' }
  - { value: '2FA', label: 'enforced platform-wide', basis: 'with fraud detection at onboarding' }
story:
  problem: 'Hour packages in spreadsheets; billing disputes every month-end.'
  impact: '<strong>100% of manual billing eliminated</strong> · 45% fewer client queries.'
modules: ['Subscriptions', 'Project', 'Timesheets', 'Sales', 'Purchase', 'Website']
integrations: ['Backblaze B2 (documents + automated backups)', 'Odoo.sh deployment']
tags: ['Billing Automation', 'Customer Portal', 'Subscriptions', 'SaaS']
---

## Executive summary

A US-based IT services company sold support and development capacity by the hour — and burned real hours every month calculating, allocating, and invoicing those hours by hand. I designed a subscription platform on Odoo where customers buy monthly hour packages that allocate themselves to projects, renew automatically on payment, and are fully visible in a self-service portal. Manual billing effort went to **zero**; client "how many hours do we have left?" queries dropped **45%**.

## The problem

- Hour packages were tracked in spreadsheets; month-end billing was a manual reconciliation exercise prone to disputes.
- Customers had no visibility into consumed hours or task progress — every question became a support email.
- Buying more hours meant a human-generated quote, slowing down exactly the moment a customer wanted to spend money.
- Onboarding and access security didn't meet the standard the company sold to its own clients.

## Solution architecture

<div class="arch">
  <div class="arch-title">System architecture — hourly billing platform</div>
  <div class="arch-tier">
    <span class="arch-label">Customer-facing</span>
    <div class="arch-node arch-node--ext">Customer portal<small>hours, tasks, purchases</small></div>
  </div>
  <div class="arch-tier">
    <span class="arch-label">Odoo core (Odoo.sh)</span>
    <div class="arch-node arch-node--core">Subscriptions<small>hour packages, auto-renewal</small></div>
    <div class="arch-node arch-node--core">Projects & Timesheets<small>auto-allocation</small></div>
    <div class="arch-node arch-node--core">Sales<small>in-portal top-ups</small></div>
    <div class="arch-node arch-node--core">Purchase<small>multi-level approvals</small></div>
  </div>
  <div class="arch-tier">
    <span class="arch-label">Infrastructure</span>
    <div class="arch-node arch-node--ext">Backblaze B2<small>documents, attachments & automated DB backups</small></div>
  </div>
</div>

## Key custom work

- **Self-allocating hour packages** — purchased hours flow to projects automatically as timesheets land; packages renew on successful payment with no human touch.
- **Customer portal** — clients track consumed hours and task progress in real time and buy additional hours directly from their sale orders, with instant project allocation.
- **Security hardening** — multi-step onboarding verification with automatic fraud detection, enforced strong password policy, and mandatory two-factor authentication for all users.
- **Backblaze storage layer** — all documents, attachments, and automated database backups moved to Backblaze B2, replacing the default Odoo.sh filestore for cost and control.
- **Purchase governance** — multi-level approval workflow for internal procurement.

## Challenges & decisions

**Billing logic had to be dispute-proof.** When money maps to hours, every edge case (partial hours, package boundaries, mid-month top-ups) becomes an argument waiting to happen. The allocation engine was designed so every consumed hour is traceable to a timesheet line, a project, and a package — turning billing conversations from negotiations into lookups.

**Self-service without support risk.** Letting customers buy and allocate hours themselves required the fraud-detection and verification layer up front. Security wasn't a compliance checkbox; it was the enabler of the self-service business model.

## Business impact

| Area | Before | After | Change |
| --- | --- | --- | --- |
| Monthly billing effort | Manual reconciliation | Fully automated | **−100%** |
| Client status queries | Constant email traffic | Self-service portal | **−45%** |
| Hour top-up sales cycle | Quote → email → wait | In-portal, instant | Friction removed |
| Data protection | Default filestore | Backblaze + automated backups | Hardened |

## Lessons learned

- **Automation earns trust through traceability, not magic.** Clients accepted automated billing because every number could be drilled to its source.
- **The portal is a sales channel, not a cost center.** Making top-ups self-service turned support friction into revenue.

> Client identity withheld under NDA. Reference available privately on request.
