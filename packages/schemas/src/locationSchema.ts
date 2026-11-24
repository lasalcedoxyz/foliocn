import * as z from 'zod';

export const LocationSchema = z.object({
    city: z.string().min(1).optional(),
    state: z.string().min(1).optional(),
    country: z.string().min(1).optional(),
})