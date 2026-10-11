---
title: 'Jewellery Jobwork Billing: From a Fixed-Column Sheet to Odoo'
metaTitle: 'Jewellery Jobwork Billing in Odoo — Case Study'
metaDescription: 'Live Odoo system for a B2B jewellery jobwork house in Surat: any number of named charges per item, clear metal and stone ownership, same printed bill.'
clientLabel: 'Visaman Jewels · B2B jewellery manufacturing & jobwork'
industry: 'Manufacturing'
country: 'India'
companySize: 'B2B manufacturing & jobwork'
odooVersion: 'Odoo'
role: 'Solution Architect'
status: 'Live in production'
# TODO(Dhiren): confirm Odoo version and year
summary: 'A live Odoo system for Visaman Jewels, a B2B jewellery manufacturer and jobwork house in Surat: packing-list bills with any number of named charges per item, clear ownership of metal, diamond and stone, and a printed bill in the format its customers already read.'
featured: false
order: 6
heroKpis:
  - { value: 'Any number', label: 'of charges per item', basis: 'the old sheet had room for three' }
  - { value: 'Every line', label: 'shows who supplied metal & stones', basis: 'customer or us, per component' }
  - { value: 'Same', label: 'printed bill layout', basis: 'column order customers already read' }
story:
  problem: 'Jobwork bills on a fixed-column sheet: three charges per item, totals counted by hand.'
  impact: '<strong>Any number of named charges per item</strong> · IGI totals as a report · clear metal &amp; stone ownership.'
modules: ['Custom Module']
integrations: []
tags: ['Jewellery', 'B2B', 'Jobwork Billing', 'Custom Module']
---

## Executive summary

**Visaman Jewels** in Surat makes jewellery for other businesses. Many of its customers are jewellers who send their own gold and pay Visaman for the work. Billing these jobs ran on a spreadsheet "packing list / jobwork bill", and the sheet had reached its limits. I designed and built an Odoo replacement, now live, based on three simple records: the bill, the item, and the charges on that item. It allows any number of named charges per piece, records who supplied each metal and stone, and still prints the bill in the layout Visaman's customers already know.

## The problem

- **Only three charges fitted per item.** The sheet had fixed columns, so labour, plating and IGI certification were stacked as unnamed sub-rows. Any extra charge had nowhere to go.
- **Ownership was unclear.** It was not obvious on each line whether the metal, diamonds or stones belonged to the customer or to Visaman, which matters for both the price and the stock.
- **Totals were counted by hand.** IGI totals and charge reports meant going through bills one by one.
- **Carried balances had no check.** Gold, silver and alloy balances and the running closing amount were typed in by hand, with nothing to catch a mistake.

## Solution architecture

<div class="arch">
  <div class="arch-title">Data design — jobwork billing</div>
  <div class="arch-tier">
    <span class="arch-label">Bill</span>
    <div class="arch-node arch-node--core">Packing list<small>one per bill, with carried balances</small></div>
  </div>
  <div class="arch-tier">
    <span class="arch-label">Per piece</span>
    <div class="arch-node arch-node--core">Item line<small>item no., design, metal &amp; purity, weights</small></div>
  </div>
  <div class="arch-tier">
    <span class="arch-label">Per charge</span>
    <div class="arch-node arch-node--core">Charge line<small>any number per item, each with a basis</small></div>
    <div class="arch-node arch-node--ext">Charge types<small>master data, added without a developer</small></div>
  </div>
</div>

## Key custom work

- **One item line per piece.** Each line holds the item number, design code, metal code with purity, and gross, net and pure weight. Pure weight is worked out as net weight × purity, but stays editable for the cases where the real figure differs.
- **Who supplied it, per component.** Metal, diamond and stone each have their own "supplied by Customer / Us" switch. When the customer supplied it, the rate and amount are forced to zero, but the weight is still recorded.
- **Charges as separate lines.** Charges are no longer columns. Each item can carry as many charge lines as it needs, and every line has a basis that decides how it is calculated:

| Basis | Typical use |
| --- | --- |
| Per gram of net weight, one-gram minimum | Labour |
| Per carat of diamond | IGI certification |
| Per carat of stone | Stone charges |
| Per piece | Per-item work |
| Fixed amount | Repairing, courier, plating |
| Per gram of gross weight | Charges based on full weight |

- **New charge types without code.** A new charge, such as hallmarking, is added as master data. No developer is needed.
- **Carried balances stay manual, but checked.** The closing amount and the gold, silver and alloy balances are still entered by hand, on purpose. Odoo shows this bill's own total beside them and flags any mismatch. It never overwrites them.
- **The same printed bill, made clearer.** The printed packing list keeps the column order customers already read. Every charge row is now named and shows its basis, and the summary separates this bill from the carried position.

## Challenges & decisions

**Change the data, not the paper.** Visaman's customers already know how to read this bill. Changing its layout would have meant explaining it again to every one of them. So the structure underneath changed completely, while the printout stayed familiar.

**Flag, don't overwrite.** The carried balances stay manual on purpose. Instead of replacing them with a calculation, Odoo shows the bill total beside the typed balance and flags any gap. People stay in control, and typing mistakes still get caught.

**Checked against real bills.** Before trusting the design, I reproduced real bill rows from the old sheet and made sure every formula gave the exact same result. For example, a diamond line of 42,000 × 0.014 × 4 comes to 2,352 on both.

## Business impact

| Area | Before | After |
| --- | --- | --- |
| Charges per item | Three, in fixed columns | Any number, each named |
| IGI collected per month | Counted by hand | A report |
| Metal, diamond & stone ownership | Unclear | Clear on every line |
| New charge types | Needed a sheet redesign | Added as master data |
| Carried balances | Typed, no check | Typed, checked against the bill |
| Printed bill | Familiar layout | Same layout, every charge named |

## Lessons learned

- **Columns are a limit; lines are not.** Moving charges from columns to their own records removed the "three charges only" problem for good.
- **Respect the document people already trust.** Keeping the bill layout the same made the new system an easy change for customers.

> Visaman's customers are not named in this case study.
