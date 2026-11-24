import type { Location } from "./location";

export type CompanySize =
    | "1-10"
    | "11-50"
    | "51-200"
    | "201-500"
    | "501-1000"
    | "1001-5000"
    | "5001+";

export interface Company {
    id: string;
    name: string;
    logo?: string;
    location?: Location;
    industry?: string;
    size?: CompanySize;
}