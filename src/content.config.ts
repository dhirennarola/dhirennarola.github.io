import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    /**
     * SERP title. The on-page `title` is written to sell the case study and
     * runs long — appended with " — Case Study | Dhiren Narola" it reached
     * ~105 characters, well past where Google truncates. Set this to a
     * ~55-60 character version; it falls back to the long form if omitted.
     */
    metaTitle: z.string().optional(),
    /** ~150 char SERP description; falls back to `summary`, which is written
     *  for the page body and runs longer than Google will show. */
    metaDescription: z.string().optional(),
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
    /** The tools and habits the client ran on before, in a few words each.
     *  Drawn as the "Before" side of the before/after diagram. Only list
     *  what the case study text itself describes. */
    before: z.array(z.string()).optional(),
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
    /** ~55-60 char SERP title; falls back to `title | Dhiren Narola`. */
    metaTitle: z.string().optional(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    topic: z.string(),
    readingTime: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, insights };
