import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    clientLabel: z.string(),
    industry: z.string(),
    country: z.string(),
    companySize: z.string().optional(),
    odooVersion: z.string(),
    role: z.string(),
    timeline: z.string().optional(),
    status: z.string(),
    summary: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    heroKpis: z.array(
      z.object({
        value: z.string(),
        label: z.string(),
        basis: z.string().optional(),
      })
    ),
    /** Problem/impact one-liners for storytelling cards (work index + home). May contain inline HTML. */
    story: z
      .object({
        problem: z.string(),
        impact: z.string(),
      })
      .optional(),
    modules: z.array(z.string()),
    integrations: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    testimonialName: z.string().optional(),
  }),
});

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    topic: z.string(),
    readingTime: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, insights };
