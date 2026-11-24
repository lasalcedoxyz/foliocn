import z from 'zod'

export const SalaryRangeSchema = z.object({
    min: z.number(),
    max: z.number(),
    currency: z.string(),
    period: z.enum([
        'hour',
        'daily',
        'biweekly',
        'monthly',
        'year',
    ]).default('monthly'),
})

export const CreateJobPostSchema = z.object({
    title: z.string().min(1).max(80),
    company: z.object({

    }),
    workplaceType: z.enum([
        'onsite',
        'hybrid',
        'remote',
    ]).default('onsite'),
    employmentType: z.enum([
        'full-time',
        'part-time',
        'contract',
        'internship',
        'temporary',
    ]).default('full-time'),
    salary: SalaryRangeSchema.optional(),
    source: z.enum([
        'manual',
        'company-website',
        'linkedin',
        'indeed',
        'glassdoor',
        'import',
    ]).default('manual'),
    sourceUrl: z.url().optional(),
});

