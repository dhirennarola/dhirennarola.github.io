---
title: 'One ERP for a 300-Employee Automotive Group — with ZATCA Phase 2 Compliance'
clientLabel: 'Premium car servicing & spare-parts retail group'
industry: 'Automotive'
country: 'Saudi Arabia'
companySize: '300+ employees · multi-company, multi-branch'
odooVersion: 'Odoo 16'
role: 'Solution Architect & Implementation Lead'
# TODO(Dhiren): confirm implementation year/duration, e.g. "2023 · ~9 months to go-live"
status: 'Live in production'
summary: 'End-to-end HR, payroll, accounting, and sales ecosystem for a Saudi automotive group — ZATCA Phase 2 e-invoicing at 1,500+ invoices a month, WooCommerce sync at 1,000+ orders a month, and a WhatsApp helpdesk that cut ticket response times by ~40%.'
featured: true
order: 1
heroKpis:
  - { value: '60%', label: 'less manual work', basis: 'across invoicing, payroll & job cards' }
  - { value: '1,500+', label: 'ZATCA e-invoices / month', basis: 'production volume' }
  - { value: '~40%', label: 'faster ticket response', basis: 'client-reported after WhatsApp helpdesk launch' }
modules:
  [
    'Accounting',
    'Payroll',
    'HR',
    'Attendance',
    'Sales',
    'Purchase',
    'Inventory',
    'Helpdesk',
    'CRM',
    'Appraisals',
    'Expenses',
    'Time Off',
    'Portal',
  ]
integrations: ['ZATCA Phase 2 (Fatoora)', 'WooCommerce', 'WhatsApp Business API']
tags: ['ERP Implementation', 'ZATCA', 'Multi-company', 'GCC']
testimonialName: 'Raed Alsuraybi'
---

## Executive summary

A premium car-servicing and spare-parts retail group in Saudi Arabia — 300+ employees across multiple branches and legal entities — was running its business on disconnected spreadsheets, a legacy accounting tool, and manual processes for everything from payroll to job cards. I architected and led the delivery of a single Odoo 16 platform covering HR, payroll, accounting, sales, inventory, and customer service, integrated with ZATCA Phase 2 e-invoicing, WooCommerce, and WhatsApp. The result: roughly **60% less manual work**, **1,500+ compliant e-invoices a month**, and a customer-service operation that responds **~40% faster**.

## Business context

The group operates two intertwined businesses: multi-branch vehicle servicing and a spare-parts retail operation with a growing online channel. Growth had outpaced systems — each branch kept its own records, head office consolidated numbers by hand, and Saudi Arabia's ZATCA Phase 2 e-invoicing mandate was approaching with hard deadlines and real penalties.

## The problem

- **Compliance risk:** ZATCA Phase 2 requires cryptographically signed, cleared e-invoices submitted to the Fatoora platform. The existing tools couldn't do it.
- **Payroll complexity:** Saudi labor law — GOSI contributions, overtime rules, violation management, and end-of-service benefits — was handled manually for 300+ employees, with predictable errors.
- **Fragmented operations:** sales, workshop job cards, inventory, and accounting lived in separate systems (or on paper), so management had no consolidated view across branches.
- **Slow customer service:** service requests and job-card updates flowed through phone calls, keeping response times high and staff overloaded.

## Requirements

Must-haves: ZATCA Phase 2 compliance before the mandate window; multi-company, multi-branch accounting with consolidated reporting; full Saudi payroll (GOSI, overtime, end-of-service) with an employee self-service portal; two-way WooCommerce sync for the online parts store; and a helpdesk customers would actually use — which in the Gulf means WhatsApp.

## Solution architecture

<div class="arch">
  <div class="arch-title">System architecture — automotive group ERP</div>
  <div class="arch-tier">
    <span class="arch-label">External systems</span>
    <div class="arch-node arch-node--ext">ZATCA Fatoora<small>e-invoice clearance</small></div>
    <div class="arch-node arch-node--ext">WooCommerce<small>online parts store</small></div>
    <div class="arch-node arch-node--ext">WhatsApp Business API<small>customer service</small></div>
  </div>
  <div class="arch-tier">
    <span class="arch-label">Integration layer — REST APIs & webhooks, queued with retry logic</span>
    <div class="arch-node">e-Invoice signing & clearance</div>
    <div class="arch-node">Order & stock sync</div>
    <div class="arch-node">Helpdesk bot & notifications</div>
  </div>
  <div class="arch-tier">
    <span class="arch-label">Odoo 16 core — multi-company, multi-branch</span>
    <div class="arch-node arch-node--core">Accounting</div>
    <div class="arch-node arch-node--core">Sales & CRM</div>
    <div class="arch-node arch-node--core">Inventory & Purchase</div>
    <div class="arch-node arch-node--core">HR · Payroll · Attendance</div>
    <div class="arch-node arch-node--core">Helpdesk & Portal</div>
  </div>
</div>

The platform runs as one Odoo database with company-level separation for each legal entity and branch-level analytic dimensions — so branch managers see their own numbers while head office gets consolidated statements without manual work.

## Key custom work

- **ZATCA Phase 2 e-invoicing** — invoice XML generation, cryptographic stamping, and clearance against the Fatoora platform, hardened for 1,500+ invoices a month with failure queues and automatic retries.
- **Saudi payroll engine** — GOSI contribution rules, overtime and violation management aligned with labor law, shift management with approval chains, and an end-of-service benefits module built to local regulations.
- **Employee self-service portal** — payslips, leave, expenses, and shift requests for 300+ employees, removing a paper bottleneck from HR.
- **WooCommerce ↔ Odoo sync** — products, stock, and 1,000+ monthly orders flowing both ways over REST, so the online store stopped being an island.
- **WhatsApp helpdesk** — a multi-channel service desk where customers open and track service requests over WhatsApp; job-card status updates go out automatically.
- **Custom appraisals** — performance workflows tied to bonus and allowance management, replacing an annual spreadsheet exercise.

## Challenges & decisions

**Clearance failures couldn't block sales.** ZATCA clearance is synchronous in spirit but the network isn't. I designed the e-invoicing flow around a queued submission model: invoices are issued immediately, signed and cleared in the background, and flagged loudly if clearance fails — protecting both cash flow and compliance.

**Payroll cutover risk.** Running 300+ employees' pay through a new system for the first time is the moment ERP projects lose trust. We ran two full parallel payroll cycles — old process and Odoo side by side — reconciling to the riyal before switching over.

**Multi-company structure.** The group's entities share suppliers and sometimes stock. Getting inter-company flows right (and keeping ZATCA reporting per-entity clean) drove the decision to model branches as analytic dimensions inside companies rather than as separate companies — less structural complexity, same reporting depth.

## Business impact

| Area | Before | After | Change |
| --- | --- | --- | --- |
| Manual work across invoicing, payroll & job cards | Manual, spreadsheet-driven | Automated in one ERP | **−60%** |
| E-invoicing compliance | Not possible | 1,500+ cleared invoices/mo | **ZATCA Phase 2 compliant** |
| Online order handling | Re-keyed by hand | Synced automatically | **1,000+ orders/mo untouched** |
| Ticket first response | Phone-based, slow | WhatsApp-automated | **~40% faster** (client-reported) |
| Payroll for 300+ employees | Manual GOSI & EOS calculations | Rule-driven payroll engine | Errors eliminated at source |

## Lessons learned

- **Compliance deadlines are the best executive sponsor.** ZATCA's mandate created urgency that made process change stick — we sequenced the hardest workflow changes to ride that momentum.
- **In the Gulf, WhatsApp *is* the customer portal.** The web portal saw modest use; the WhatsApp channel was adopted overnight. Meeting customers where they already are beat building where we wished they were.
- **Parallel payroll runs are non-negotiable.** They cost two extra weeks and saved the project's credibility.

> Client identity withheld under NDA. Reference available privately on request.
> <!-- TODO(Dhiren): add 2–4 anonymised screenshots when cleared by client -->
