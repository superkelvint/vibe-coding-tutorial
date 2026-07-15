import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lessons = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/lessons' }),
  schema: z.object({
    title: z.string(),
    section: z.string(),
    order: z.number().int().nonnegative(),
    estimatedTime: z.string(),
    mentalModel: z.string(),
    verificationFocus: z.string(),
    description: z.string(),
  }),
});

export const collections = { lessons };
