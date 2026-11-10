import { 
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuAction,
    SidebarMenuBadge, 
} from '@/components/ui/sidebar'

export function EventsPanel(){
    return (
        <Sidebar>
            <SidebarGroup>
                <SidebarHeader>
                    <SidebarGroupLabel>Events</SidebarGroupLabel>
                </SidebarHeader>
                <SidebarGroup>
                    <SidebarMenuItem>
                        <SidebarMenuButton>De</SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarGroup>
            </SidebarGroup>
        </Sidebar>
    )
}