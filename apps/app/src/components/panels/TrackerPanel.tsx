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

export function TrackerPanel(){
    return (
        <Sidebar>
            <SidebarGroup>
                <SidebarHeader>
                    <SidebarGroupLabel>Tracker</SidebarGroupLabel>
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