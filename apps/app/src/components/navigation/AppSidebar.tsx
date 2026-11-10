import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import {
  LucideCompass,
  LucideDatabaseZap,
  LucideSplinePointer
} from "lucide-react"

const navMain = [
  {
    id: "overview",
    title: "Overview",
    icon: LucideSplinePointer,
    url: "/",
  },
  {
    id: "discover",
    title: "Discover",
    icon: LucideCompass,
    url: "/discover",
  },
  {
    id: "tracker",
    title: "Tracker",
    icon: LucideSplinePointer,
    url: "/tracker",
  },
  {
    id: "data",
    title: "Data",
    icon: LucideDatabaseZap,
    url: "/data",
  },
  {
    id: "editor",
    title: "Editor",
    icon: LucideSplinePointer,
    url: "/editor",
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <NavMain />
      <SidebarRail />
    </Sidebar>
  )
}

function NavMain() {
  return (
    <SidebarContent>
      {navMain.map((item) => (
        <SidebarGroup key={item.id}>
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton tooltip={item.title}>
              {item.icon && <item.icon />}
              <span>{item.title}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarGroup>
      ))}
    </SidebarContent>
  )
}
