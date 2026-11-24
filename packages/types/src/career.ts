import { Company } from "./company";
import { EmploymentType } from "./job";
import { Location } from "./location";

export interface Experience {
    id: string;
    company: Company;
    jobTitle: string;
    location?: Location;
    employmentType: EmploymentType
    startDate: string;
    endDate?: string;
    isCurrent: boolean;
    description?: string;
    achievements?: Achievement[];
}

export interface Education {
    id: string;
    degree?: string;
    studyField?: string;
    gpa?: number;
    startDate: string;
    endDate?: string;
    isCurrent: boolean;
    description?: string;
    achievements?: Achievement[];
}

export interface Certification {
    id: string;
    name: string;
    expirationDate?: string;
    credentialUrl?: string;
}

export interface Achievement {
    id: string;
    description: string;
    metrics?: string;
}

export type Framework =
| 'manual'
| 'star'
| 'xyz';