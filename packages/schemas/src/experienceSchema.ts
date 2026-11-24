import { z } from "zod";
import { CompanySchema } from "../src/companySchema.ts"

const workplaceTypeSchema = z.enum([
  'on-site',
  'hybrid',
  'remote'
]).default('on-site');

const employmentTypeSchema = z.enum([
  'full-time',
  'part-time',
  'contract',
  'internship',
  'temporary',
]).default('full-time');

const locationSchema = z.object({
  city: z.string().optional(),
  state: z.string().optional(),
  country: z.string().optional(),
})

const experienceSchema = z.object({
  title: z.string().min(1),
  company: CompanySchema,
  workplaceType: workplaceTypeSchema,
  employmentType: employmentTypeSchema,
  location: locationSchema,
  startDate: z.coerce.date(),
  isCurrent: z.boolean().default(false),
  endDate: z.coerce.date().optional(),
  description: z.string().optional(),
});

const EducationSchema = z.object({
  title: z.string().min(1),
  startDate: z.coerce.date(),
  isCurrent: z.boolean().default(false),
  endDate: z.coerce.date().optional(),
});

export {
  experienceSchema,
  EducationSchema,
}

