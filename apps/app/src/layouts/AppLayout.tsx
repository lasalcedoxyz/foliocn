import { Outlet } from "react-router";
import {  SidebarProvider } from "@/components/ui/sidebar"
import { AppHeader } from "@/components/navigation/AppHeader";

export function AppLayout() {
  return (
    <SidebarProvider>
      <main className="dark flex flex-1 flex-col mx-auto w-full min-h-svh max-w-lg">
        <AppHeader/>
        <Outlet />
      </main>
    </SidebarProvider>
  )
}
