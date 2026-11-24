import * as z from 'zod';

export const CompanySchema = z.object({
    name: z.string().min(1).max(80),
    logo: z.url().optional(),
    industry: z.string().optional(),
    size: z.number().optional(),
})