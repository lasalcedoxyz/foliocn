import { AppHeader } from "@/components/navigation/AppHeader";
import { Button } from "@/components/ui/button"
import {
  LucideSquareTerminal,
  LucideSquareKanban,
  LucideFolders,
  LucideGlobe,
  LucideDatabase
} from "lucide-react";

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
      <AppHeader pageTitle="Profile" />
    </div>

  )
}