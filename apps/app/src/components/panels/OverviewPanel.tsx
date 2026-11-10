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

export function OverviewPanel(){
    return (
        <Sidebar>
            <SidebarGroup>
                <SidebarHeader>
                    <SidebarGroupLabel>Overview</SidebarGroupLabel>
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