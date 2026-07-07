/** Industry landing page content — rendered by /industries/[slug].astro */

export interface Industry {
  slug: string;
  nav: string;
  name: string;
  headline: string;
  lede: string;
  metaTitle: string;
  metaDescription: string;
  pains: { title: string; body: string }[];
  capabilities: string[];
  proofStats: { value: string; label: string }[];
  caseStudySlug?: string;
  faqs: { q: string; a: string }[];
  whatsappMsg: string;
}

export const industries: Industry[] = [
  {
    slug: 'automotive-ksa',
    nav: 'Automotive & ZATCA (KSA)',
    name: 'Automotive & Gulf Compliance',
    headline: 'Odoo for automotive businesses in Saudi Arabia & the Gulf.',
    lede: 'Multi-branch servicing and parts retail, Saudi payroll with GOSI and end-of-service, ZATCA Phase 2 e-invoicing in production at 1,500+ invoices a month — delivered for a 300+ employee automotive group.',
    metaTitle: 'Odoo for Automotive & ZATCA Compliance in Saudi Arabia | Dhiren Narola',
    metaDescription:
      'Odoo ERP for automotive and multi-branch businesses in KSA: ZATCA Phase 2 e-invoicing, Saudi labor-law payroll (GOSI, EOS), WhatsApp service desks, and WooCommerce sync.',
    pains: [
      {
        title: 'ZATCA deadlines with real penalties',
        body: 'Phase 2 clearance means invoices must be cryptographically stamped and cleared with Fatoora in real time. Spreadsheet-era systems can’t comply — and your wave date doesn’t move.',
      },
      {
        title: 'Saudi payroll is its own discipline',
        body: 'GOSI contributions, overtime and violation rules, end-of-service benefits — labor-law payroll done manually for hundreds of employees is a monthly error factory.',
      },
      {
        title: 'Branches that don’t add up',
        body: 'Multiple branches and legal entities, each with its own records — and head office consolidating by hand. Management flies blind between month-ends.',
      },
    ],
    capabilities: [
      'ZATCA Phase 2 e-invoicing (onboarding → stamping → clearance → monitoring)',
      'Saudi payroll: GOSI, overtime, violations, end-of-service per regulations',
      'Multi-company, multi-branch accounting with consolidated reporting',
      'Workshop job cards + WhatsApp service desk customers actually use',
      'WooCommerce / e-commerce sync for parts retail',
      'Employee self-service portal (payslips, leave, shifts)',
    ],
    proofStats: [
      { value: '300+', label: 'employees on one platform' },
      { value: '1,500+', label: 'ZATCA e-invoices / month' },
      { value: '60%', label: 'less manual work' },
    ],
    caseStudySlug: 'ksa-automotive-erp',
    faqs: [
      {
        q: 'Our ZATCA wave is approaching — is there time?',
        a: 'Usually yes, if we start with a readiness review now. Clean partner master data is the long pole; the integration itself follows a proven pattern I run in production.',
      },
      {
        q: 'Can you work with our team in KSA time?',
        a: 'India and KSA are 2.5 hours apart — my working day overlaps almost entirely with Gulf business hours. All my GCC projects were delivered remotely with that overlap.',
      },
    ],
    whatsappMsg: 'Hi Dhiren, we run an automotive/multi-branch business in the Gulf and need Odoo help.',
  },
  {
    slug: 'manufacturing',
    nav: 'Manufacturing',
    name: 'Manufacturing',
    headline: 'Odoo for manufacturers who need traceability, not just software.',
    lede: 'From raw materials to finished goods: MRP, custom shop-floor workflows, quality control at every stage, and capacity-based multi-warehouse inventory — proven in regulated pharma production.',
    metaTitle: 'Odoo for Manufacturing — MRP, Quality, Shop Floor | Dhiren Narola',
    metaDescription:
      'Odoo manufacturing implementations: MRP, custom shop-floor flows, stage-gate quality control, batch traceability, and capacity-based inventory across multiple warehouses.',
    pains: [
      {
        title: 'Production tracking by memory and paper',
        body: 'When batch status lives in supervisors’ heads and QC lives in binders, every audit is a scramble and every error is discovered late — in finished goods instead of at the stage that caused it.',
      },
      {
        title: 'Systems that don’t agree',
        body: 'Production in one tool, accounting in another, quality on paper: three sources of truth that never match, reconciled by hand every month-end.',
      },
      {
        title: 'No idea what production actually costs',
        body: 'Without per-process and per-department costing, pricing is guesswork and improvement efforts aim at the wrong targets.',
      },
    ],
    capabilities: [
      'MRP configured to your actual production flows — batch generation, split work orders, unbuild logic',
      'Quality checkpoints at every production stage, recorded against the batch',
      'Capacity-based inventory across multiple warehouse locations',
      'Cost analytics: per employee, per process, per department',
      'Legacy accounting bridges (e.g. Tally) during safe, phased migration',
      'Structured sales flows for regulated buyers (Quotation → Proforma → SO → Invoice)',
    ],
    proofStats: [
      { value: '50%', label: 'fewer production tracking errors' },
      { value: '3 → 1', label: 'systems consolidated' },
      { value: '5+', label: 'warehouse locations managed' },
    ],
    caseStudySlug: 'pharma-manufacturing-erp',
    faqs: [
      {
        q: 'Our processes are non-standard. Will Odoo bend?',
        a: 'Odoo’s manufacturing stack covers more than most teams expect — and where your process is genuinely different (samples workflows, split orders, unbuilds), targeted customization handles it without wrecking your upgrade path. The discipline is knowing which is which.',
      },
      {
        q: 'Can we keep our accounting system during the transition?',
        a: 'Yes — I’ve engineered exactly that: an XML bridge kept Tally running while production stabilized, then accounting migrated fully once trust was earned. Sequence beats speed.',
      },
    ],
    whatsappMsg: 'Hi Dhiren, we’re a manufacturer evaluating Odoo and I’d like to talk.',
  },
  {
    slug: 'facility-management',
    nav: 'Facility Management',
    name: 'Facility Management & Field Service',
    headline: 'Odoo for subscription-based maintenance and field-service operations.',
    lede: 'Maintenance visits that schedule themselves from subscription plans, technicians tracked in real time, and WhatsApp self-service your customers adopt overnight — running in production for 4,000+ customers.',
    metaTitle: 'Odoo for Facility Management & Field Service | Dhiren Narola',
    metaDescription:
      'Odoo for facility management: subscription-driven maintenance scheduling, field technician tracking, WhatsApp customer self-service, and SLA-proof notification delivery.',
    pains: [
      {
        title: 'Missed visits are broken promises',
        body: 'Customers pay subscriptions specifically so maintenance happens on schedule. Manual dispatching guarantees some of it won’t — and every miss is churn fuel.',
      },
      {
        title: 'The call center is the product bottleneck',
        body: 'Status checks, scheduling, payment chasing — when every interaction needs a human on the phone, your biggest cost line is also your slowest customer experience.',
      },
      {
        title: 'Field reality is invisible',
        body: 'Who’s on site, who’s idle, which visits slipped — without live workforce data, operations manage by radio and guesswork.',
      },
    ],
    capabilities: [
      'Subscription plans that generate maintenance schedules automatically',
      'WhatsApp self-service: status, requests, visit reports, payments',
      'SMS fallback for notification reliability (98% delivery achieved)',
      'Real-time technician attendance via device integration',
      'Contract & renewal management tied to service delivery',
    ],
    proofStats: [
      { value: '4,000+', label: 'customers self-serving on WhatsApp' },
      { value: '50%', label: 'call-center load replaced' },
      { value: '35%', label: 'fewer missed visits' },
    ],
    caseStudySlug: 'elevator-maintenance-automation',
    faqs: [
      {
        q: 'Our customers aren’t tech-savvy. Will self-service work?',
        a: 'That’s exactly why WhatsApp beats portals: no app to install, no password to forget. Adoption in my deployments was immediate because customers already live there.',
      },
    ],
    whatsappMsg: 'Hi Dhiren, we run a maintenance/field-service business and want to discuss Odoo.',
  },
];
