
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { LucideHome } from "lucide-react";
import { Navbar } from "./Navbar";
import { UserDropdown } from "../dropdowns/UserDropdown";
import { DropdownMenu } from "../ui/dropdown-menu";

interface Props {
  actions?: React.ReactNode;
}

export function AppHeader({
  actions
}: Props) {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between px-4">
      <h1>FolioCN</h1>
      <Navbar />
      <div className="flex items-center justify-between">
        <UserDropdown />
      </div>
    </header>
  )
}
