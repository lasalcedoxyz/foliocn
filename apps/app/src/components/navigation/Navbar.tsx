import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
    LucideHome,
    LucideCompass,
    LucideActivitySquare,
    LucideDatabaseZap,
    LucideMousePointer,
} from "lucide-react";

const navMain = [
    {
        id: 'home',
        label: 'Home',
        icon: LucideHome,
        href: '#',
    },
    {
        id: 'discover',
        label: 'Discover',
        icon: LucideCompass,
        href: '#',
    },
    {
        id: 'applications',
        label: 'Applications',
        icon: LucideActivitySquare,
        href: '#',
    },
    {
        id: 'data',
        label: 'Data',
        icon: LucideDatabaseZap,
        href: '#',
    },
    {
        id: 'editor',
        label: 'Editor',
        icon: LucideMousePointer,
        href: '#',
    },
]

export function Navbar() {
    return (
        <nav className="flex p-1 items-center gap-x-0 border rounded-full">
            {navMain.map((item) => {
                const Icon = item.icon;

                return (
                    <Button key={item.id} variant="ghost" size="xs" className="nav-item rounded-full">
                        <Icon/>
                        {item.label}
                    </Button>
                )
            })}
        </nav>
    )
}