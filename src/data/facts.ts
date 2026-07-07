/**
 * SINGLE SOURCE OF TRUTH — every number, date, title, and link on the site.
 * Approved by Dhiren on 2026-07-07 (QUESTIONS.md answers). Edit here, never inline.
 */

export const site = {
  url: 'https://dhirennarola.com',
  name: 'Dhiren Narola',
  title: 'Odoo Architect & AI Automation Engineer',
  tagline:
    'I design, build, and rescue Odoo ERPs — and make them intelligent with AI-powered automation.',
  locale: 'en',
  location: 'Surat, Gujarat, India · Working globally (GCC, Europe, ANZ)',
  // TODO: replace with GA4 Measurement ID once Dhiren creates the property (see DEPLOY.md §4)
  gaMeasurementId: '',
} as const;

export const contact = {
  email: 'dhnarola12@gmail.com', // TODO: switch to hello@dhirennarola.com once domain mail is configured
  phoneDisplay: '+91 97144 15771',
  whatsappNumber: '919714415771',
  whatsappMessage:
    "Hi Dhiren, I'd like to discuss an Odoo ERP project. Are you available?",
  calendly: 'https://calendly.com/dhnarola12/30min',
  linkedin: 'https://www.linkedin.com/in/dhirennarola/',
  github: 'https://github.com/dhirennarola',
  odooApps: 'https://apps.odoo.com/apps/browse?repo_maintainer_id=896503',
  web3formsKey: '552410a0-db58-44da-91d0-cd5782abf7ae',
  responseTime: '8 business hours',
} as const;

export const whatsappUrl = (msg: string = contact.whatsappMessage) =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(msg)}`;

/** Availability — reviewed quarterly. */
export const availability = {
  active: true,
  label: 'Accepting 1–2 new engagements · Q3–Q4 2026',
  short: 'Available for new projects',
} as const;

/** Engagement / pricing signal (approved: replaces the old "$200" line). */
export const engagement = {
  models: ['Project-based', 'Monthly retainer', 'Dedicated team', 'Advisory'],
  note: 'Typical engagements start at $2,000 USD. Full implementations are quoted per scope — you get a written, fixed proposal before any work begins.',
  budgetTiers: [
    'Under $2,000',
    '$2,000 – $10,000',
    '$10,000 – $30,000',
    '$30,000+',
    'Not sure yet',
  ],
} as const;

/** Career numbers — resume-consistent, approved 2026-07-07. */
export const numbers = {
  implementations: '20+',
  implementationsExact: '22 delivered and live',
  countries: '12+',
  yearsOdoo: '4+',
  odooVersions: 'Odoo 11 – 19',
  developersLed: '7',
  failedGoLives: '0',
  largestDeployment: '300+ employees on one ERP',
} as const;

export const career = {
  independent: {
    role: 'Independent Odoo Architect & AI Automation Engineer',
    period: '2026 – Present',
    note: 'Direct engagements across the GCC, Europe, and Asia-Pacific.',
  },
  currentEngagement: {
    client: 'Total Telco Solutions',
    location: 'New Zealand',
    summary:
      'Currently architecting and building an end-to-end Odoo ERP platform for Total Telco Solutions, a New Zealand telecommunications group — under a long-term build contract.',
  },
  synodica: {
    company: 'Synodica Solutions Pvt. Ltd.',
    badge: 'Odoo Silver Partner',
    partnerUrl:
      'https://www.odoo.com/partners/synodica-solutions-pvt-ltd-5985053',
    location: 'Surat, India',
    period: 'Sep 2021 – Jul 2026',
    roles: [
      {
        title: 'Development Team Lead',
        period: 'Sep 2024 – Jul 2026',
        highlights: [
          'Led 7 developers across 4 concurrent ERP projects — architecture, resourcing, and delivery',
          'Raised team productivity ~30% by introducing AI-driven development workflows',
          'Cut delivery delays ~25% via structured deployment processes',
        ],
      },
      {
        title: 'Senior Software Engineer',
        period: 'Mar 2024 – Aug 2024',
        highlights: [
          'Delivered full-cycle ERP projects across HR, retail, manufacturing, facilities, and IT services',
          'Owned client relationships end-to-end; ~20% improvement in client retention',
        ],
      },
      {
        title: 'Software Engineer',
        period: 'Dec 2022 – Feb 2024',
        highlights: [
          'Revamped a 10,000+ line legacy module — ~30% faster, far less technical debt',
          'Delivered 4 projects with ~20% higher client satisfaction',
        ],
      },
      {
        title: 'Junior Software Engineer',
        period: 'Sep 2021 – Nov 2022',
        highlights: [
          'Custom Odoo development across versions 11–14 while completing an engineering degree',
        ],
      },
    ],
  },
} as const;

export const certifications = [
  {
    name: 'Odoo 18 Functional Certification',
    issuer: 'Odoo S.A.',
    year: '2025',
    tier: 'vendor',
    note: 'Official vendor certification covering all core business modules.',
  },
  {
    name: 'Global AI for Data-Driven Business Decision-Making',
    issuer: 'IIM Mumbai',
    year: '2025',
    tier: 'professional',
  },
  {
    name: 'Business Analysis & Process Management',
    issuer: 'Coursera',
    year: '2024',
    tier: 'professional',
  },
] as const;

export const education = {
  degree: 'B.E. Computer Engineering',
  school: 'Sarvajanik College of Engineering & Technology',
  year: '2023',
  detail: '8.5 CGPA — completed while working full-time at Synodica',
} as const;

/** Published Odoo App Store apps (verified 2026-07-07). */
export const odooStoreApps = [
  {
    name: 'Chatter Panel Control',
    version: 'Odoo 19',
    desc: 'Reposition, relocate, or hide the chatter panel — per user, without code.',
  },
  {
    name: 'Chatter Access Control',
    version: 'Odoo 19',
    desc: 'Per-user, per-model control over chatter visibility and access.',
  },
  {
    name: 'POS Product Quick Favourites',
    version: 'Odoo 19',
    desc: 'Star products directly on the POS screen for faster checkout.',
  },
] as const;

/**
 * LinkedIn recommendations — real, public, verbatim excerpts.
 * Full texts captured from linkedin.com/in/dhirennarola/details/recommendations/ on 2026-07-06.
 * Approved for publication (all four) on 2026-07-07.
 */
export const recommendations = [
  {
    quote:
      'What impressed me the most was his ability to understand complex business requirements and translate them into practical, scalable Odoo solutions. He is responsive, professional, and always committed to delivering high-quality work. I highly recommend him to any organization looking for an experienced Odoo consultant and ERP architect.',
    name: 'Raed Alsuraybi',
    role: 'Executive HR Operations Supervisor',
    context: 'Client · Saudi Arabia',
    relation: 'was a client',
  },
  {
    quote:
      'What stood out most was his reliability and sense of ownership. He approached challenges with a solution-oriented mindset, paid close attention to detail, and was always focused on delivering the best possible outcome. I would confidently recommend Dhiren to any organization looking for an experienced Odoo consultant or ERP implementation partner.',
    name: 'Bassem Mohamed',
    role: 'IT Manager (at time of project) · Infrastructure & Cloud Professional',
    context: 'Client',
    relation: 'was a client',
  },
  {
    quote:
      'Dhiren is a dependable team player who communicates effectively, takes ownership of his responsibilities, and is always willing to go the extra mile to ensure project success. His ability to learn quickly and adapt to new technologies makes him a valuable asset to any organization.',
    name: 'Nikunj Antala',
    role: 'Project Manager & Director, Synodica Solutions',
    context: 'Managed Dhiren directly',
    relation: 'managed Dhiren',
  },
  {
    quote:
      'Dhiren showed solid expertise in Odoo, particularly in Accounting, as well as HR, Expense, Sales, Inventory, and Purchase modules. He was able to understand requirements quickly, communicate clearly, and consistently deliver reliable and well-structured work.',
    name: 'Abdulla Musthafa',
    role: 'Entrepreneur · AI Engineer · CTO',
    context: 'Worked on the same team',
    relation: 'worked with Dhiren',
  },
] as const;

export const recommendationsUrl =
  'https://www.linkedin.com/in/dhirennarola/details/recommendations/';

/** Countries served — text labels, no emoji. */
export const countriesServed = [
  'United States',
  'Saudi Arabia',
  'Netherlands',
  'Germany',
  'New Zealand',
  'India',
  'UAE',
  'Qatar',
  'Rwanda',
  'Australia',
  'Egypt',
  'Mexico',
  'Laos',
] as const;
