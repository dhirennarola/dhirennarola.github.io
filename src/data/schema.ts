/** JSON-LD builders shared across pages. */
import { site } from './facts';

export const breadcrumbs = (
  items: { name: string; path: string }[]
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: new URL(item.path, site.url).href,
  })),
});

export const faqSchema = (items: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a.replace(/<[^>]+>/g, ''),
    },
  })),
});

export const serviceSchema = (opts: {
  name: string;
  description: string;
  path: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: opts.name,
  description: opts.description,
  url: new URL(opts.path, site.url).href,
  provider: {
    '@type': 'Person',
    name: site.name,
    url: site.url,
  },
  areaServed: ['Saudi Arabia', 'UAE', 'Qatar', 'Europe', 'New Zealand', 'Australia', 'India', 'United States'],
});

export const articleSchema = (opts: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: opts.headline,
  description: opts.description,
  url: new URL(opts.path, site.url).href,
  datePublished: opts.datePublished,
  dateModified: opts.dateModified ?? opts.datePublished,
  image: new URL(opts.image ?? '/og/default.png', site.url).href,
  author: {
    '@type': 'Person',
    name: site.name,
    url: site.url,
  },
});

export const professionalServiceSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: `${site.name} — Odoo ERP & AI Automation Consulting`,
  url: site.url,
  image: `${site.url}/assets/dhiren-narola.jpg`,
  priceRange: '$$',
  areaServed: ['Saudi Arabia', 'UAE', 'Qatar', 'Netherlands', 'Germany', 'New Zealand', 'Australia', 'India', 'United States'],
  serviceType: [
    'Odoo ERP Implementation',
    'ERP Rescue & Recovery',
    'AI & Business Automation',
    'Custom Odoo Development',
    'ZATCA e-Invoicing Compliance',
    'Dedicated Odoo Teams',
  ],
  founder: { '@type': 'Person', name: site.name },
});
