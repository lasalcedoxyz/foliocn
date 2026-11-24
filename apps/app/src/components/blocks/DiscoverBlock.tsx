import type { JobPost } from "@foliocn/types";

import { LucideCompass } from "lucide-react";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionTitle,
} from "../Section";
import { JobPostCard } from "../cards/JobPostCard";

const jobPosts: JobPost[] = [
  {
    id: '1',
    title: 'Senior Software Engeineer',
    company: {
      id: 'spotify',
      name: 'Spotify',
    },
    workplaceType: 'onsite',
    employmentType: 'full-time',
    requirements: [
      {
        id: '1',
        framework: 'manual',
        description: '1234'
      }
    ]
  },
  {
    id: '2',
    title: 'Software Engeineer II',
    company: {
      id: 'spotify',
      name: 'Trimble Inc',
    },
    workplaceType: 'onsite',
    employmentType: 'full-time',
    requirements: [
      {
        id: '1',
        framework: 'manual',
        description: '1234'
      }
    ]
  }
];

export function DiscoverBlock() {
  return (
    <Section>
      <SectionHeader>
        <LucideCompass size={14} />
        <SectionTitle>
          Discover
        </SectionTitle>
      </SectionHeader>
      <SectionContent>
        <div className="flex items-center gap-x-2">
          {jobPosts.map((item) => (
            <JobPostCard
              key={item.id}
              data={item}
            />
          ))}
        </div>
      </SectionContent>
    </Section>
  )
}
