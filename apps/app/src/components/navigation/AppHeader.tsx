import { SidebarTrigger } from "@/components/ui/sidebar"
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


interface Props {
  pageTitle: string;
  actions?: React.ReactNode;
}



export function AppHeader({
  pageTitle,
  actions
}: Props) {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between px-4">
      
      <div className="flex items-center gap-2">
        <SidebarTrigger/>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Button variant="ghost" size="icon-sm">
                <LucideHome />
              </Button>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink render={<a href={`/${pageTitle}`} />}>
                {pageTitle}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex items-center justify-between">
        {actions}
      </div>
    </header>
  )
}
