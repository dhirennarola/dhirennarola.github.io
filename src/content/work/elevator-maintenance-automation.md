---
title: 'Subscription-Driven Maintenance for 4,000+ Customers — Half the Call Center Load'
clientLabel: 'Elevator maintenance & subscription company'
industry: 'Facility Management'
country: 'Rwanda'
companySize: '70 internal users · 35+ field technicians'
odooVersion: 'Odoo'
role: 'Solution Architect & Lead Developer'
# TODO(Dhiren): confirm Odoo version + implementation year
status: 'Live in production'
summary: 'Automated maintenance scheduling tied to subscription plans, with a WhatsApp self-service flow for 4,000+ customers — cutting missed service visits by 35% and replacing half the call-center workload.'
featured: false
order: 3
heroKpis:
  - { value: '4,000+', label: 'customers on WhatsApp self-service', basis: 'production usage' }
  - { value: '50%', label: 'call-center load replaced', basis: 'after WhatsApp flow launch' }
  - { value: '35%', label: 'fewer missed service visits', basis: 'automated scheduling vs. manual' }
modules: ['CRM', 'Subscriptions', 'Maintenance', 'Attendance', 'Contacts']
integrations: ['WhatsApp Business API', 'Messagebird', 'LanaTime attendance devices', 'SMS gateway (fallback)']
tags: ['Business Automation', 'Subscriptions', 'Field Service', 'WhatsApp']
---

## Executive summary

An elevator maintenance company serving 4,000+ customers ran its service operation on phone calls: customers called to schedule, called to check status, called to pay. Meanwhile, missed maintenance visits — the exact thing customers pay a subscription to avoid — kept happening because scheduling was manual. I built an Odoo platform where maintenance visits generate themselves from subscription plans, technicians are tracked in real time, and customers handle subscriptions, visit reports, maintenance requests, and payments entirely over WhatsApp. Missed visits fell **35%**; the WhatsApp flow **replaced ~50% of call-center workload**.

## Business context

Elevator maintenance is a subscription business with a field-service heart. Revenue depends on recurring contracts; reputation depends on showing up when the contract says you will. With 35+ technicians serving thousands of sites, "who goes where, when" had outgrown the whiteboard — and the call center had become both the biggest cost line and the biggest customer-experience bottleneck.

## The problem

- Maintenance scheduling was manual, so visits slipped through — directly breaching subscription SLAs.
- Every customer interaction required a human on the phone: status checks, requests, payment follow-ups.
- No real-time view of the field workforce; attendance and assignment lived in separate silos.
- Notifications didn't reliably reach customers, so even completed work went unseen.

## Solution architecture

<div class="arch">
  <div class="arch-title">System architecture — maintenance & subscription platform</div>
  <div class="arch-tier">
    <span class="arch-label">Customer channels</span>
    <div class="arch-node arch-node--ext">WhatsApp Business API<small>self-service flow</small></div>
    <div class="arch-node arch-node--ext">SMS gateway<small>automatic fallback</small></div>
  </div>
  <div class="arch-tier">
    <span class="arch-label">Field & data layer</span>
    <div class="arch-node arch-node--ext">LanaTime devices<small>real-time attendance</small></div>
    <div class="arch-node arch-node--ext">Messagebird<small>contact synchronization</small></div>
  </div>
  <div class="arch-tier">
    <span class="arch-label">Odoo core</span>
    <div class="arch-node arch-node--core">Subscriptions<small>plans drive scheduling</small></div>
    <div class="arch-node arch-node--core">Maintenance<small>auto-generated visits</small></div>
    <div class="arch-node arch-node--core">CRM & Contacts</div>
    <div class="arch-node arch-node--core">Attendance<small>35+ technicians</small></div>
  </div>
</div>

## Key custom work

- **Subscription-driven scheduling** — maintenance visits are generated automatically from each customer's plan and cadence. No human dispatcher deciding what's due; the system knows.
- **WhatsApp self-service flow** — customers check subscription status, receive visit reports, raise maintenance requests, and complete payments in a guided WhatsApp conversation. 4,000+ customers use it in production.
- **Notification reliability engineering** — when WhatsApp delivery fails, the system falls back to SMS automatically, achieving a **98% customer notification rate** across subscription, maintenance, and service updates.
- **Real-time workforce tracking** — LanaTime attendance devices feed Odoo directly; Messagebird keeps contact data synchronized.

## Challenges & decisions

**Automation had to survive bad connectivity.** A notification system that works 90% of the time destroys trust the other 10%. The WhatsApp-first, SMS-fallback design treated message delivery as an engineering problem with a measurable SLA — that 98% delivery rate is the number the whole customer experience rests on.

**Replacing calls without abandoning callers.** Half the call volume could be automated; the other half genuinely needed a human. The WhatsApp flow was designed to hand off to staff cleanly, with context — so automation reduced the queue instead of just deflecting it.

## Business impact

| Area | Before | After | Change |
| --- | --- | --- | --- |
| Missed service visits | Manual scheduling | Subscription-driven auto-scheduling | **−35%** |
| Call-center workload | Every interaction by phone | WhatsApp self-service for 4,000+ customers | **~50% replaced** |
| Customer notification delivery | Unreliable | WhatsApp + SMS fallback | **98% delivery rate** |
| Workforce visibility | Paper attendance, radio checks | Real-time device-fed tracking | Live view of 35+ technicians |

## Lessons learned

- **Subscriptions and operations must share one brain.** The moment plans drove scheduling directly, an entire class of human error disappeared.
- **Design for the fallback, not the demo.** The SMS fallback felt like over-engineering until the first WhatsApp outage — then it was the feature.
- **Self-service adoption follows habit, not features.** Customers adopted WhatsApp instantly because they already lived there.

> Client identity withheld under NDA. Reference available privately on request.
