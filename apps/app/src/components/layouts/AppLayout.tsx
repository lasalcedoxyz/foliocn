import { Outlet } from "react-router";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "../navigation/AppSidebar";
import { AppHeader } from "../navigation/AppHeader";

export function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main className="dark flex-1 mx-auto w-full min-h-svh max-w-xl">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
