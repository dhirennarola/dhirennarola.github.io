---
title: 'Three Systems into One: Manufacturing ERP for a 225-Employee Pharma Producer'
clientLabel: 'Pharmaceutical & medical equipment manufacturer'
industry: 'Manufacturing'
country: 'India'
companySize: '225 employees · 5+ warehouse locations'
odooVersion: 'Odoo'
role: 'Solution Architect & Implementation Lead'
# TODO(Dhiren): confirm Odoo version + implementation year for this project
status: 'Live in production'
summary: 'Full raw-material-to-finished-goods manufacturing workflow with stage-by-stage quality control for a regulated pharma producer — consolidating three separate systems into one ERP and cutting production tracking errors by 50%.'
featured: true
order: 2
heroKpis:
  - { value: '3 → 1', label: 'systems consolidated', basis: 'accounting, production & records unified' }
  - { value: '50%', label: 'fewer tracking errors', basis: 'production tracking, measured post go-live' }
  - { value: '5+', label: 'warehouse locations', basis: 'capacity-based storage management' }
modules:
  [
    'Manufacturing (MRP)',
    'Quality',
    'Shop Floor',
    'Sales',
    'Accounting',
    'Purchase',
    'Inventory',
    'HR',
    'Payroll',
    'Attendance',
    'Dashboards',
    'Maintenance',
    'Repairs',
  ]
integrations: ['Tally (XML invoicing bridge)']
tags: ['Manufacturing', 'MRP', 'Quality Control', 'ERP Consolidation']
---

## Executive summary

A pharmaceutical and medical-equipment manufacturer with 225 employees was running production on one system, accounting on Tally, and quality records on paper — three sources of truth that never agreed. I led the consolidation into a single Odoo ERP covering the full manufacturing lifecycle, from raw material procurement to finished goods, with quality checkpoints at every production stage. Production tracking errors dropped by **50%**, and management got cost analytics — per employee, per process, per department — that simply hadn't existed before.

## Business context

Pharma manufacturing is unforgiving: batches must be traceable, quality checks documented, and regulatory audits survivable. As the company grew past 200 employees and five warehouse locations, the gaps between its systems became the biggest operational risk — inventory counts disagreed, production status lived in supervisors' heads, and month-end reconciliation between the production system and Tally consumed days.

## The problem

- Three disconnected systems (production, accounting, quality records) with no shared master data.
- Production tracking errors cascading into wrong stock, wrong costing, and audit anxiety.
- No visibility into what production actually cost — by batch, process, or department.
- Storage capacity at five-plus warehouses managed by experience, not by system.

## Solution architecture

<div class="arch">
  <div class="arch-title">System architecture — pharma manufacturing ERP</div>
  <div class="arch-tier">
    <span class="arch-label">External</span>
    <div class="arch-node arch-node--ext">Tally<small>XML invoicing bridge (transition period)</small></div>
  </div>
  <div class="arch-tier">
    <span class="arch-label">Odoo core — single database, full traceability</span>
    <div class="arch-node arch-node--core">Manufacturing / MRP</div>
    <div class="arch-node arch-node--core">Quality</div>
    <div class="arch-node arch-node--core">Inventory<small>capacity-based, 5+ locations</small></div>
    <div class="arch-node arch-node--core">Accounting</div>
    <div class="arch-node arch-node--core">Sales & Purchase</div>
    <div class="arch-node arch-node--core">HR · Payroll</div>
  </div>
  <div class="arch-tier">
    <span class="arch-label">Analytics</span>
    <div class="arch-node">Cost per employee</div>
    <div class="arch-node">Cost per process</div>
    <div class="arch-node">Cost per department</div>
  </div>
</div>

## Key custom work

- **Shop Floor, rebuilt around their reality** — custom production flows, batch generation, split work orders, unbuild-manufacturing-order logic, and a dedicated samples workflow for QC and R&D runs.
- **Quality control at every stage** — the QC process was redesigned so checks happen where defects actually occur, with results recorded against the batch, not in a binder.
- **Structured sales workflow** — Quotation → Proforma → Sale Order → Tax Invoice, matching how regulated buyers actually purchase.
- **Capacity-based inventory** — storage locations carry real capacity constraints, so putaway respects physical reality across 5+ warehouses.
- **Tally XML bridge** — during the accounting transition, invoices flowed to Tally via a custom XML integration; full accounting was then migrated into Odoo, retiring the third system for good.
- **Management dashboards** — cost-per-employee, per-process, and per-department analytics, giving leadership numbers they'd never been able to see.

## Challenges & decisions

**Migrate accounting on day one, or bridge?** Ripping out Tally immediately would have put the finance team's trust at risk during the most fragile phase. I built the XML bridge so finance kept familiar ground while production stabilized — then migrated accounting fully once the shop floor was proven. Slower on paper; far safer in practice. Three systems became one, in the right order.

**Standard MRP vs. their process.** Pharma workflows (samples, split orders, unbuilds) don't map cleanly to vanilla manufacturing flows. The line I held: configure standard Odoo wherever the business could adapt, customize only where regulation or physics said otherwise. That kept the customization surface small enough to upgrade later.

## Business impact

| Area | Before | After | Change |
| --- | --- | --- | --- |
| Systems of record | 3 disconnected | 1 unified ERP | **3 → 1** |
| Production tracking errors | Frequent, manual reconciliation | Batch-level traceability | **−50%** |
| Cost visibility | None below company level | Per employee / process / department | New capability |
| Month-end reconciliation | Days of manual work | Continuous, system-driven | Eliminated |
| Audit preparation | Paper chase | Traceable digital records | Materially faster |

## Lessons learned

- **Sequence the migration around trust, not architecture.** The Tally bridge looked like extra work; it was actually the reason finance championed the system instead of fighting it.
- **In regulated manufacturing, QC placement matters more than QC features.** Moving checks to where defects occur did more than any configuration option.
- **Cost analytics are the executive hook.** The dashboards weren't in the original scope conversation — they became the feature leadership talks about most.

> Client identity withheld under NDA. Reference available privately on request.
> <!-- TODO(Dhiren): add anonymised screenshots (shop floor view, QC checkpoint, dashboard) when cleared -->
