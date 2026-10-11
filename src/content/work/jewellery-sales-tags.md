---
title: 'Product Tagging & Sales Workflow for Caratiro Jewels on Odoo 19'
metaTitle: 'Jewellery Retail Tagging on Odoo 19 — Case Study'
clientLabel: 'Caratiro Jewels · B2C jewellery retail'
industry: 'Retail'
country: 'India'
# TODO(Dhiren): confirm country
companySize: 'Retail operation'
odooVersion: 'Odoo 19'
role: 'Odoo Consultant & Developer'
status: 'Live in production'
summary: 'A focused Odoo 19 customization for a jewellery retailer that sells to consumers: a product tagging system built for how jewellery is actually catalogued and sold, plus a streamlined counter sales workflow.'
featured: false
order: 5
heroKpis:
  - { value: 'Odoo 19', label: 'platform', basis: 'built and shipped on Odoo 19' }
  - { value: 'Custom', label: 'product tag system', basis: 'jewellery-specific cataloguing' }
  - { value: 'Focused', label: 'scoped engagement', basis: 'targeted customization, not full ERP' }
story:
  problem: 'Catalogue structure flattened jewellery-specific attributes.'
  impact: 'Attribute-true tagging · faster counter sales · upgrade-safe build.'
modules: ['Sales', 'Inventory']
integrations: []
tags: ['Retail', 'B2C', 'Custom Module', 'Odoo 19']
---

## Executive summary

Not every engagement is a 300-employee ERP program — and a portfolio that pretends otherwise isn't honest. This was a focused, well-scoped customization for **Caratiro Jewels**, a B2C jewellery retailer that sells finished pieces to consumers, on **Odoo 19**: a product tagging system matched to how jewellery is actually catalogued (metal, purity, stone, collection), and sales workflow refinements for the retail counter. Delivered quickly, on a recent Odoo release.

## Why it's here

Two reasons. First, it shows recent-version fluency: this build runs on Odoo 19, a recent Odoo release. Second, it shows how I handle small scopes: tight requirements, clean code, no scope creep. The same discipline that keeps a $50K project on rails keeps a small one profitable for both sides.

## The problem

Jewellery inventory doesn't behave like normal retail inventory. Every piece carries attributes — metal, purity, weight, stones, collection, design — that standard product structures flatten or bury. Because the retailer sells to consumers at the counter, staff needed products taggable and searchable the way they and their customers actually think about jewellery, without rebuilding their whole catalogue.

## Key custom work

- **Jewellery-specific product tagging** — a tagging layer over the product catalogue so items can be classified and found by the attributes that matter at the counter.
- **Sales workflow refinements** — quotation and order handling streamlined for fast-moving sales to retail customers.
- **Odoo 19 delivery** — built and shipped on Odoo 19; the codebase is public on [GitHub](https://github.com/dhirennarola).

## Lessons learned

- **Small scopes deserve architecture too.** A tagging model designed around upgrade-safety takes the same care at 40 hours as at 400 — and the client keeps benefiting at every version bump.

> A deliberately small engagement, shown deliberately. If your need is a scoped customization rather than a full implementation, this is what working with me on one looks like.
