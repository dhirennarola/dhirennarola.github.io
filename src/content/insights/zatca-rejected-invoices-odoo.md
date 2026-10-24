---
title: 'Rejected ZATCA invoices in Odoo: why you cannot delete them, and what to do instead'
metaTitle: 'Rejected ZATCA invoices in Odoo: why you cannot delete them'
description: 'Odoo blocks deleting a ZATCA-rejected invoice because of the hash chain. What the message means, why it happens, and how to fix and resend.'
publishDate: 2026-10-25
topic: 'Compliance'
readingTime: '6 min'
draft: true
---

If you run ZATCA Phase 2 in Odoo, sooner or later you will find an XML file on an invoice labelled "Rejected ZATCA Document not to be deleted", with the same sentence in Arabic. Try to delete it, or the invoice it belongs to, and Odoo stops you.

I run ZATCA Phase 2 in production on Odoo for a Saudi group at 1,500+ invoices a month, so this is part of normal operations for me. This article explains what the label means, why Odoo blocks deletion, and what to do for each kind of problem. It is based on Odoo's Saudi e-invoicing module (`l10n_sa_edi`) in versions 17, 18 and 19, and on the official Odoo documentation.

## What the message means

When ZATCA rejects an invoice (HTTP 400), Odoo does three things:

1. It posts a red note in the chatter with the status code and the ZATCA error codes, such as a `BR-KSA-...` rule.
2. It saves the exact signed XML it sent as an attachment named `...-rejected.xml`, with that description.
3. It shows a red banner on the invoice with a **Retry** button.

The description is not just a label. Odoo checks for it. If you try to delete the attachment, you get an error saying you cannot remove an EDI document refused by the government. In Odoo 19, once the company is in production mode, deleting the invoice itself is also blocked.

The Odoo documentation is clear that a rejected invoice is not legally valid and must be corrected and resubmitted.

## Why Odoo will not let you delete it

Phase 2 invoices are chained. Each XML carries two values that link it to the others:

- **ICV (invoice counter value):** a number from a no-gap sequence on each sales journal, created when you onboard the journal.
- **PIH (previous invoice hash):** the hash of the last XML the journal submitted. Odoo stores it on the journal as the latest submission hash.

The key detail is what happens on a rejection. Odoo updates the journal's latest submission hash with the rejected XML, exactly as it does for an accepted one. So the next invoice you send points back to the rejected XML.

Delete that file and the next invoice refers to a document you no longer have. To an auditor, that looks like a missing invoice. The Odoo commit that added this rule gives the same reason: keep the rejected XML for audit, so that each chain index matches exactly one submission.

That is also why a resend is not a copy of the first attempt. After a rejection, Odoo clears the invoice's ICV. On **Retry**, it takes a new ICV and builds a new UUID, XML and signature. The rejected attempt stays on record as its own submission.

## Rejected, accepted with warnings, or no answer

These look similar in the chatter, but you handle them differently.

- **Red, rejected (400):** ZATCA returned errors. The invoice is not valid. Fix the cause and click **Retry**.
- **Yellow, accepted with warnings (202):** the invoice is accepted and legally valid. The Odoo docs advise fixing the cause soon, because warnings may become rejections later.
- **Yellow, no clear answer (timeout, 401, 429, 5xx):** Odoo cannot tell whether ZATCA received the invoice. It keeps the ICV, and the scheduled job tries again. Until that invoice gets a real answer, Odoo blocks the next invoices in the same journal.

A 409 response means ZATCA already has the invoice. Odoo logs it as a warning, not a rejection.

## Common causes of rejection

Odoo checks some data when you confirm the invoice, before anything reaches ZATCA. The same data is behind many rejections, so check it first:

- **Company VAT:** 15 digits, starting and ending with 3 (ZATCA rules BR-KSA-39 and BR-KSA-40).
- **Company address:** city and state must be set. The docs also list district, building number, plot identification and the identification fields.
- **Customer identification:** if the scheme is Tax Identification Number, the customer needs a VAT number. Health and education VAT exemptions need a National ID.
- **Taxes:** every product line needs a tax. For global discounts, the docs say to use the 15% tax.
- **Dates:** no future-dated invoices in the Asia/Riyadh time zone.
- **Journal not onboarded:** no production CSID means no submission.
- **Credit and debit notes:** they need a ZATCA reason and a link to the original invoice.

Also check **standard vs simplified**. Odoo looks at the customer's commercial partner. A company is cleared as a standard tax invoice. An individual is reported as a simplified invoice. If a business customer is saved as an individual, or the reverse, the invoice goes through the wrong flow and different ZATCA rules apply.

If signing fails, Odoo asks you to retry and, if that does not work, to onboard the journal again. That points to a CSID or certificate problem, not invoice data.

## What to do, case by case

**1. Rejected because of data.** Read the error code in the red chatter note. Fix the data where it lives: the customer (Accounting ‣ Customers ‣ Customers), the company, the taxes or the invoice lines. Then click **Retry** in the red banner. If the fix is outside the invoice, you do not need to reset it to draft, because Odoo builds a fresh XML on every resend.

**2. Rejected, and the invoice itself is wrong.** The Odoo 18 docs note that only rejected invoices can be reset to draft and edited. Reset it, correct the lines or customer, and confirm again. It goes out with a new ICV. The rejected XML stays attached, as it should.

**3. Accepted, but the invoice was wrong.** In production you cannot reset an accepted invoice to draft. Create a credit note from the invoice and choose a ZATCA reason in the Credit/Debit window (it is also on the note's Other Info tab). For a note not created from the original invoice, put the original invoice number in Customer Reference. Then issue a new, correct invoice.

**4. No answer, and later invoices are blocked.** Do not try to remove the stuck invoice. Check the connection and, for a 401, the journal's onboarding (Accounting ‣ Configuration ‣ Journals, Sales journal, ZATCA tab). Once the stuck invoice gets a real answer, the ones behind it can go through. In 17 and 18 you click **Retry** on each blocked invoice. Odoo 19 releases them for you.

**5. Wrong API mode.** Check Accounting ‣ Configuration ‣ Settings, Saudi Arabia Electronic Invoicing section, ZATCA API mode. Once an invoice has been submitted in Production, you cannot switch back to Sandbox or Simulation.

## Differences between Odoo 17, 18 and 19

The core logic is the same in all three: the rejected XML is kept and protected, the ICV is cleared on a rejection and kept on a timeout. What changed:

- **Chatter wording:** 19 starts each note with Error, Warning or Success, and rewrote the blocked-chain message.
- **Blocked chain:** 19 links each blocked invoice to the one blocking it, and releases it automatically once that one is accepted.
- **Deleting the invoice:** only 19 blocks deleting the invoice itself in production. In Sandbox and Simulation, 19 lets you delete draft or cancelled invoices.
- **Reset to draft:** 17 and 18 hide it for any invoice with a chain index, in every mode. 19 shows it for accepted invoices in Sandbox and Simulation only, and hides it during a timeout.
- **PDF:** 18 and 19 also stop you deleting an invoice PDF made after the invoice was accepted, and make a fresh PDF on **Retry**.

## Checklist

- Read the ZATCA error code in the chatter before changing anything.
- Red: fix and **Retry**. Yellow with warnings: valid, but fix soon. Yellow with no answer: check the connection and wait.
- Never delete `-rejected.xml` files, by hand or by script.
- Fix master data (VAT, address, identification, customer type) at the source.
- Use a credit note with a ZATCA reason for accepted invoices.
- Watch for invoices stuck without an answer, because they block the journal.
- Set the API mode right before the first production submission.

---

*For the full setup, read my [ZATCA Phase 2 in Odoo guide](/insights/zatca-phase-2-odoo-guide/), or [get in touch](/contact/) if rejections are piling up.*
