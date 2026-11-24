export interface Project {
    id: string;
    title: string;
    slug: string;
    description: string;
    meta: ProjectMetaData;
    thumbnail?: string;
    featured: boolean;
    caseStudy: CaseStudy;
}

export interface ProjectMetaData {
    role?: string;
    clientName?: string;
    startDate?: string;
    endDate?: string;
    demoUrl?: string;
    repositoryUrl?: string;
}

export interface CaseStudy {
    overview: string;
    problem?: string;
    objectives?: string[];
    process?: string[];
    metrics?: CaseStudyMetric[];
}

export interface CaseStudyMetric {
    label: string;
    value: string;
    description?: string;
}