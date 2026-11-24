import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Button } from "@/components/ui/button";
import {
  LucideHome,
  LucideCompass,
  LucideActivitySquare,
  LucideDatabaseZap,
  LucideMousePointer,
  LucideCommand,
} from "lucide-react";
import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
  icon?: LucideIcon;
  href?: string;
  action?: () => void;
}

const navMain: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: LucideHome,
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
    id: 'more',
    label: 'More',
    icon: LucideCommand,
    href: '#',
  },
];


interface NavItemProps {
  data: NavItem;
}

export function Navbar() {
  const container = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: container });

  const toggleHover = contextSafe(() => (
    gsap.fromTo(
      '.metric',
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      }
    )
  ))

  return (
    <nav ref={container} className="flex p-1 items-center gap-x-0 border rounded-full">
      {navMain.map((item) => {
        const Icon = item.icon;

        return (
          <NavItem
            key={item.id}
            data={item}
          />
        )
      })}
    </nav>
  )
}

function NavItem({ data }: NavItemProps) {
  const navItem = useRef<HTMLButtonElement>(null);
  const Icon = data.icon;

  const { contextSafe } = useGSAP({ scope: navItem });

  const toggleHover = contextSafe(() => (
    gsap.fromTo(
      '.item-label',
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "bounce.out"
      }
    )
  ));

  return (
    <Button
      ref={navItem}
      variant="ghost"
      onMouseEnter={toggleHover}
      className="rounded-full"
    >
      <Icon />
      <span className='item-label'>{data.label}</span>
    </Button>
  )
}

