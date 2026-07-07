/** Service page content — rendered by /services/[slug].astro */

export interface Service {
  slug: string;
  nav: string;
  name: string;
  pill?: { label: string; kind: 'accent' | 'rescue' | 'ok' };
  headline: string;
  lede: string;
  metaTitle: string;
  metaDescription: string;
  problems: { title: string; body: string }[];
  approach: { title: string; body: string }[];
  deliverables: string[];
  proof: {
    stats: { value: string; label: string }[];
    caseStudy?: { slug: string; label: string };
    quoteFrom?: string; // recommendation name in facts.ts
  };
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  whatsappMsg: string;
}

export const services: Service[] = [
  {
    slug: 'erp-implementation',
    nav: 'ERP Implementation',
    name: 'Odoo ERP Implementation & Architecture',
    pill: { label: 'Core offer', kind: 'accent' },
    headline: 'An ERP implementation with one owner — from first requirement to go-live.',
    lede: 'I architect and deliver complete Odoo implementations: requirements, solution design, custom development, integrations, data migration, training, and a calm go-live. You get one accountable expert, not a rotating cast.',
    metaTitle: 'Odoo ERP Implementation Services | Dhiren Narola',
    metaDescription:
      'Full-cycle Odoo ERP implementation by an Odoo 18 certified architect — 20+ implementations across 12+ countries. Requirements to go-live, one accountable owner.',
    problems: [
      {
        title: 'Most ERP projects fail before the first line of code',
        body: 'They fail in the gap between what the business needs and what gets configured. Requirements gathered by a salesperson, built by developers who never met your team — that gap is where budgets die.',
      },
      {
        title: 'Agencies scale by adding layers',
        body: 'Account manager, project manager, team lead, developers — each handoff loses fidelity. By layer four, your invoicing edge case is a ticket nobody understands.',
      },
      {
        title: 'Over-customization is the silent killer',
        body: 'Odoo covers a remarkable amount standard. Teams that don’t know the standard product build custom everything — and hand you a system too expensive to ever upgrade.',
      },
    ],
    approach: [
      {
        title: 'Discovery & architecture first',
        body: 'I map your actual processes — how decisions are made, where operations break — before touching the system. You sign off on a written solution architecture, so we build the right thing once.',
      },
      {
        title: 'Configuration-first, custom where it counts',
        body: 'Standard Odoo wherever the business can adapt; custom development only where regulation, physics, or genuine competitive advantage demands it. Your upgrade path stays open.',
      },
      {
        title: 'Sprint-based delivery with written updates',
        body: 'Structured sprints, proactive progress notes, demos of working software — accelerated by AI-assisted development workflows that measurably cut iteration time.',
      },
      {
        title: 'Go-live like it’s routine — because it is',
        body: 'Parallel runs for critical flows (payroll gets two full cycles), staged data migration, UAT with your real users, and training so your team owns the system. 20+ go-lives, zero failures.',
      },
    ],
    deliverables: [
      'Signed-off solution architecture document',
      'Configured & customized Odoo (Community or Enterprise)',
      'Data migration with reconciliation reports',
      'Integrations (e-commerce, payments, compliance, devices)',
      'User training + admin documentation',
      'Hypercare period + SLA support option',
    ],
    proof: {
      stats: [
        { value: '20+', label: 'implementations live' },
        { value: '12+', label: 'countries' },
        { value: '0', label: 'failed go-lives' },
      ],
      caseStudy: { slug: 'ksa-automotive-erp', label: '300+ employee automotive group, KSA' },
      quoteFrom: 'Raed Alsuraybi',
    },
    faqs: [
      {
        q: 'Odoo Community or Enterprise?',
        a: 'It depends on your workflows, not ideology. I implement both and will tell you plainly which fits — including the honest cost comparison over 3 years.',
      },
      {
        q: 'How long does an implementation take?',
        a: 'A focused single-company implementation typically runs 2–4 months; multi-entity programs with compliance requirements (like ZATCA) run 6–12. You get a phased timeline in the proposal — and phased go-lives so value lands early.',
      },
      {
        q: 'What will it cost?',
        a: 'Implementations are quoted per scope after discovery — always a written, fixed proposal. Typical engagements start at $2,000 USD; full implementations vary widely with scope, and you’ll know your number before we begin.',
      },
    ],
    ctaTitle: 'Planning an Odoo implementation?',
    whatsappMsg: "Hi Dhiren, we're planning an Odoo implementation and I'd like to discuss it.",
  },
  {
    slug: 'erp-rescue',
    nav: 'ERP Rescue',
    name: 'ERP Rescue & Recovery',
    pill: { label: 'Urgent work, handled calmly', kind: 'rescue' },
    headline: 'Your Odoo project went wrong. That’s recoverable — and you’re not alone.',
    lede: 'Roughly 40% of ERP projects underdeliver. I specialize in the ones that already have: stalled builds, broken go-lives, vanished partners. Rapid independent assessment, honest verdict, fixed-quote recovery.',
    metaTitle: 'Odoo ERP Rescue & Recovery — Failed Implementation Help | Dhiren Narola',
    metaDescription:
      'Failed or stalled Odoo implementation? Independent rescue assessment in days, not weeks — honest verdict on what’s salvageable and a fixed-quote recovery plan.',
    problems: [
      {
        title: 'The signs are usually unmistakable',
        body: 'Go-live has moved twice. Your team keeps the old system alive “just in case.” Reports don’t match reality. Invoices keep coming while demos don’t. If three of those sound familiar, you already know.',
      },
      {
        title: 'Sunk cost is steering the ship',
        body: 'After $30K spent, “just a few more sprints” feels cheaper than stopping. It almost never is. An independent read on what’s actually salvageable turns an emotional decision into an arithmetic one.',
      },
      {
        title: 'The diagnosis is usually simpler than the mess',
        body: 'In most rescues the code isn’t even the core problem — it’s requirements never truly understood, workflows forced into wrong modules, and nobody fluent in both business and Odoo. That’s fixable.',
      },
    ],
    approach: [
      {
        title: 'Rapid independent audit — days, not weeks',
        body: 'Technical and functional review of the system, the customizations, and the original requirements. Not a sales audit hunting for a rebuild: if it’s salvageable (it usually is), I say so.',
      },
      {
        title: 'Written verdict with a fixed quote',
        body: 'What works, what doesn’t, what go-live actually requires — with a clear, fixed remediation quote before any work begins. No open-ended billing on a project that’s already burned budget.',
      },
      {
        title: 'Stabilize one workflow first',
        body: 'Failing projects try to fix everything at once. I pick the most painful business flow — usually invoicing or inventory — and make it genuinely reliable. Trust returns one working workflow at a time.',
      },
      {
        title: 'Re-deliver what was promised',
        body: 'Then we work the plan: remediation sprints, honest demos, UAT, and the go-live you were originally sold — with documentation so you’re never captive again.',
      },
    ],
    deliverables: [
      'Independent technical + functional audit report',
      'Salvage verdict: keep / fix / rebuild, per component',
      'Fixed-quote remediation plan with timeline',
      'Stabilized system with prioritized workflows live',
      'Documentation & training the first partner never wrote',
    ],
    proof: {
      stats: [
        { value: '3 → 1', label: 'systems consolidated in one rescue' },
        { value: '50%', label: 'error reduction post-rescue' },
        { value: 'Days', label: 'to an honest verdict' },
      ],
      caseStudy: { slug: 'pharma-manufacturing-erp', label: 'Pharma manufacturer — 3 systems into 1' },
      quoteFrom: 'Bassem Mohamed',
    },
    faqs: [
      {
        q: 'Will you tell us to scrap everything and start over?',
        a: 'Only if it’s true — and it usually isn’t. Most rescued systems keep 60–80% of the original work. The audit is independent: I have no incentive to inflate the rebuild.',
      },
      {
        q: 'Our previous partner still has server access. Awkward?',
        a: 'Common, and manageable. I’ll guide the access transition professionally — credentials, code repositories, hosting — without burning bridges you may still need.',
      },
      {
        q: 'What does a rescue assessment cost?',
        a: 'Most assessments complete within 2–3 days of focused work and are quoted as a small fixed fee up front. Remediation scope comes out of the audit — you’ll have a written quote before committing to anything further.',
      },
      {
        q: 'How fast can you start?',
        a: 'Rescue work is triaged first — urgent assessments usually start within days. If invoicing or payroll is down, say so and it jumps the queue.',
      },
    ],
    ctaTitle: 'Get an honest read on your stalled project.',
    whatsappMsg: 'Hi Dhiren, our Odoo project is in trouble and I need a rescue assessment.',
  },
  {
    slug: 'ai-odoo',
    nav: 'AI + Odoo',
    name: 'AI + Odoo — Intelligent ERP',
    pill: { label: 'Flagship offering', kind: 'accent' },
    headline: 'AI where it pays for itself — inside the system that runs your business.',
    lede: 'WhatsApp self-service that replaced half a call center. Billing that runs itself. Documents that become records without retyping. I build automation into Odoo where the ROI is measurable — and I’ll tell you where AI is just expensive.',
    metaTitle: 'AI + Odoo — Intelligent ERP & Business Automation | Dhiren Narola',
    metaDescription:
      'AI-powered automation inside Odoo ERP: WhatsApp self-service flows, document intelligence & OCR, LLM integrations and workflow agents — built where ROI is measurable.',
    problems: [
      {
        title: 'Your team is the integration layer',
        body: 'People retyping documents into the ERP, answering the same status questions, chasing approvals — skilled staff doing work software should do. That’s not a headcount problem; it’s an automation gap.',
      },
      {
        title: 'AI proposals rarely name a workflow',
        body: 'If a pitch can’t name the specific workflow, the input, the output, and who reviews exceptions — it’s a demo, not a system. Businesses that start with “AI strategy” instead of a workflow get invoices, not returns.',
      },
      {
        title: 'Automation on a shaky ERP multiplies chaos',
        body: 'AI multiplies whatever your system already is. Clean processes get multiplied into leverage; chaos gets multiplied into faster chaos. Sequencing matters — and I hold clients to it.',
      },
    ],
    approach: [
      {
        title: 'Conversational self-service, on channels customers already use',
        body: 'I’ve put subscription management, service requests, visit reports, and payments into guided WhatsApp flows used by 4,000+ customers in production — replacing ~50% of a call center’s workload. The channel and the ERP integration drive the ROI.',
      },
      {
        title: 'Document-to-record automation',
        body: 'Vendor bills, orders, statements: LLM-based extraction wired into Odoo’s validation logic — auto-posted above a confidence threshold, one-click review below it. Your team handles exceptions, not everything.',
      },
      {
        title: 'Workflow agents & LLM integrations',
        body: 'Agents that read ERP context and prepare the connective-tissue work — triage, drafts, summaries, follow-ups — for human approval. Built with modern integration standards (including MCP) rather than copy-paste AI chaos.',
      },
      {
        title: 'AI-accelerated delivery, included',
        body: 'I introduced AI-driven development workflows that raised my team’s productivity ~30% at an Odoo Silver Partner. Every project I deliver ships faster because of it — you receive it as speed, not a line item.',
      },
    ],
    deliverables: [
      'Automation opportunity map of your workflows (with honest “not worth it” calls)',
      'WhatsApp / conversational flows integrated with Odoo',
      'Document extraction pipelines with human-in-the-loop review',
      'LLM & agent integrations with audit trails',
      'Measurable before/after on every automated workflow',
    ],
    proof: {
      stats: [
        { value: '4,000+', label: 'customers on WhatsApp self-service' },
        { value: '50%', label: 'call-center load replaced' },
        { value: '100%', label: 'of one client’s manual billing eliminated' },
      ],
      caseStudy: { slug: 'elevator-maintenance-automation', label: 'Subscription & maintenance automation at scale' },
      quoteFrom: 'Abdulla Musthafa',
    },
    faqs: [
      {
        q: 'Do we need AI, or “just” automation?',
        a: 'Often the honest answer is deterministic automation first — rules, integrations, and workflows with no model involved. AI earns its place where judgment is repetitive: documents, conversations, triage. The opportunity map tells you which is which.',
      },
      {
        q: 'Which AI models and tools do you work with?',
        a: 'Model-pragmatic: OpenAI and Anthropic (Claude) APIs, plus workflow tooling and MCP-based integrations where they fit. The architecture keeps you portable — models change; your workflows shouldn’t break when they do.',
      },
      {
        q: 'What about data privacy?',
        a: 'Automation designs specify exactly what data leaves your system, to which processor, under what terms — with redaction where needed. For sensitive workflows, extraction can run on EU-hosted or self-hosted models.',
      },
    ],
    ctaTitle: 'Which of your workflows would pay for automation first?',
    whatsappMsg: "Hi Dhiren, I'd like to discuss AI/automation for our business.",
  },
  {
    slug: 'integrations-einvoicing',
    nav: 'Integrations & e-Invoicing',
    name: 'Integrations & e-Invoicing',
    headline: 'Systems that talk to each other — and invoices regulators accept.',
    lede: 'ZATCA Phase 2 e-invoicing running at 1,500+ invoices a month. WooCommerce syncing 1,000+ orders a month. WhatsApp, payment gateways, attendance devices, legacy bridges — integrated with retry logic, not hope.',
    metaTitle: 'Odoo Integrations & ZATCA e-Invoicing Compliance | Dhiren Narola',
    metaDescription:
      'Odoo integration specialist: ZATCA Phase 2 e-invoicing, WooCommerce, WhatsApp Business API, payment gateways, and legacy system bridges — production-hardened.',
    problems: [
      {
        title: 'Compliance deadlines don’t negotiate',
        body: 'ZATCA Phase 2 waves in Saudi Arabia, e-invoicing mandates spreading across the Gulf and Europe — when your wave arrives, invoices that don’t clear are invoices that don’t count.',
      },
      {
        title: 'Integrations fail at 2 a.m., not in the demo',
        body: 'Anyone can sync a test order. Production integration is retry queues, failure alerts, idempotency, and reconciliation — the unglamorous engineering that decides whether sync errors become accounting errors.',
      },
      {
        title: 'Every disconnected system is manual work with a salary',
        body: 'Re-keying e-commerce orders, copying attendance to payroll, emailing spreadsheets to accounting — each gap between systems is paid for monthly, in hours and in errors.',
      },
    ],
    approach: [
      {
        title: 'Compliance engineered as a pipeline',
        body: 'For ZATCA: queued submission, cryptographic stamping, automatic retries, and a monitored exception queue — so clearance failures never block sales, and finance sees status without asking IT.',
      },
      {
        title: 'Production-hardened connections',
        body: 'REST APIs and webhooks with idempotent processing, backoff retries, and reconciliation reports. The 98% notification delivery rate on one platform came from designing the SMS fallback before launch, not after the first outage.',
      },
      {
        title: 'Legacy bridges that respect the transition',
        body: 'Sometimes the right architecture keeps the old system alive during migration — like the Tally XML bridge that let a manufacturer’s finance team move at a safe pace, then retired cleanly.',
      },
    ],
    deliverables: [
      'ZATCA Phase 2 implementation (onboarding, stamping, clearance, monitoring)',
      'E-commerce sync: WooCommerce / Shopify ↔ Odoo',
      'WhatsApp Business API flows & notifications',
      'Payment gateways, biometric/attendance devices, storage layers',
      'Integration monitoring with failure alerts & reconciliation',
    ],
    proof: {
      stats: [
        { value: '1,500+', label: 'ZATCA e-invoices cleared monthly' },
        { value: '1,000+', label: 'e-commerce orders synced monthly' },
        { value: '98%', label: 'notification delivery (with fallback)' },
      ],
      caseStudy: { slug: 'ksa-automotive-erp', label: 'ZATCA + WooCommerce + WhatsApp, one platform' },
    },
    faqs: [
      {
        q: 'Our ZATCA wave deadline is close. How fast can this happen?',
        a: 'If your master data is reasonable, a focused ZATCA implementation fits inside most wave windows. The first step is a quick readiness review of your invoice types and partner data — that tells us the true timeline within days.',
      },
      {
        q: 'Can you integrate a system that has no API?',
        a: 'Usually yes — file-based bridges (like Tally XML), database-level sync, or structured exports can work reliably when engineered with the same discipline as an API. The audit answer comes before the quote.',
      },
    ],
    ctaTitle: 'Have a compliance deadline or a stubborn integration?',
    whatsappMsg: 'Hi Dhiren, I need help with an Odoo integration / ZATCA compliance.',
  },
  {
    slug: 'dedicated-team',
    nav: 'Dedicated Team',
    name: 'Dedicated Odoo Team',
    pill: { label: 'For partners & agencies', kind: 'ok' },
    headline: 'Senior-led Odoo capacity for agencies, partners, and product companies.',
    lede: 'Overflow delivery, long-term development capacity, or a build team for your Odoo-based product — led by an architect who ran a 7-developer team at an Odoo Silver Partner and hired every one of them.',
    metaTitle: 'Dedicated Odoo Development Team & Staff Augmentation | Dhiren Narola',
    metaDescription:
      'Dedicated Odoo development capacity led by an Odoo 18 certified architect — for agencies, Odoo partners, and companies needing senior-led offshore delivery.',
    problems: [
      {
        title: 'Overflow work arrives in waves',
        body: 'Partners and agencies win projects faster than they can hire for them. Turning work away is expensive; hiring for a wave that recedes is worse.',
      },
      {
        title: 'Offshore capacity without senior ownership fails quietly',
        body: 'Bodies-for-hours arrangements produce code, not outcomes. Without an architect reviewing every decision, you discover the quality gap at UAT — the most expensive possible moment.',
      },
    ],
    approach: [
      {
        title: 'Architect-led, not body-shopped',
        body: 'Every engagement runs under my technical direction: architecture reviews, code review standards, and delivery process — the same system that cut post-deployment issues ~30% at Synodica.',
      },
      {
        title: 'Vetted developers, deliberately',
        body: 'I led talent acquisition for my previous team — conducting the technical interviews and finalizing every hire. The same bar applies to anyone who touches your project.',
      },
      {
        title: 'Your process or mine',
        body: 'Plug into your sprint cadence, tooling, and standards — or adopt my delivery framework wholesale. Either way: written updates, demo-driven progress, no surprises.',
      },
    ],
    deliverables: [
      'Dedicated developer(s) under senior architectural direction',
      'Code review & quality gate on every merge',
      'Sprint reporting your PM can forward to clients',
      'Flexible scaling — monthly terms, no long lock-ins',
    ],
    proof: {
      stats: [
        { value: '7', label: 'developers led & hired' },
        { value: '4', label: 'concurrent projects managed' },
        { value: '~30%', label: 'fewer post-deployment issues' },
      ],
      quoteFrom: 'Nikunj Antala',
    },
    faqs: [
      {
        q: 'Is this white-label?',
        a: 'Yes, if you need it to be. Your clients, your brand, your front line — my team’s delivery quality behind it. NDAs are standard.',
      },
      {
        q: 'Minimum commitment?',
        a: 'Monthly, renewable. Long enough to be productive, short enough that the quality has to keep earning the renewal.',
      },
    ],
    ctaTitle: 'Need senior-led Odoo capacity?',
    whatsappMsg: "Hi Dhiren, I'm interested in dedicated Odoo team capacity.",
  },
];
