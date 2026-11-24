import { Section, SectionContent, SectionHeader, SectionTitle } from "@/components/Section";
import {
  LucideSquareTerminal,
  LucideSquareKanban,
  LucideFolders,
  LucideGlobe,
  LucideDatabase
} from "lucide-react";
import { ExperienceForm } from "@/components/forms/profile/WorkExperienceForm";

const navMain = [
  {
    id: 'profile',
    title: "Profile",
    icon: LucideSquareTerminal,
  },
  {
    id: 'experience',
    title: "Experiences",
    icon: LucideSquareKanban,
  },
  {
    id: 'education',
    title: "Educations",
    icon: LucideFolders,
  },
  {
    id: 'projects',
    title: "Projects",
    icon: LucideGlobe,
  },
  {
    id: 'skills',
    title: "Skills",
    icon: LucideDatabase,
  },
];

export default function DataIndex() {
  return (
    <div className="flex flex-col gap-6">
      <Section>
        <SectionHeader>
          <SectionTitle>Experience</SectionTitle>
        </SectionHeader>
        <SectionContent>
          <ExperienceForm/>
        </SectionContent>
      </Section>
    </div>

  )
}
