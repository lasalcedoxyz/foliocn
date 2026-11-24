import type { Company } from './company'
import type { Location } from './location';

export type EmploymentType =
  | 'full-time'
  | 'part-time'
  | 'contract'
  | 'internship'
  | 'temporary'

export type WorkplaceType =
  | 'onsite'
  | 'hybrid'
  | 'remote';

export type JobSource =
  | 'manual'
  | 'company-website'
  | 'linkedin'
  | 'indeed'
  | 'glassdoor'
  | 'import'

export interface SalaryRange {
  min?: number;
  max?: number;
  currency: string;
  period?: 'hour' | 'daily' | 'biweekly' | 'monthly' | 'year'
}

interface Requirement {
  id: string;
  framework: 'manual' | 'star' | 'xyz';
  description: string;
}

export interface JobPost {
  id: string;
  title: string;
  company: Company;
  location?: Location;
  workplaceType?: WorkplaceType;
  employmentType?: EmploymentType;
  salary?: SalaryRange;
  requirements: Requirement[];
  source?: JobSource;
  sourceUrl?: string;
  postedAt?: string;
  expiresAt?: string;
}

