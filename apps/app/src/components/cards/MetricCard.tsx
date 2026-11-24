import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  icon: LucideIcon;
  metric: string;
}

export function MetricCard({
  title,
  icon,
  metric
}: Props) {
  const container = useRef<HTMLDivElement>(null);
  const Icon = icon;

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
    <div ref={container} onMouseEnter={toggleHover} className="flex justify-between h-full p-3 bg-card border rounded-md">
      {/** Card Content **/}
      <div className="flex flex-col">
        <div className="flex h-10 items-center gap-2">
          <div className="flex h-8 w-8 justify-center items-center bg-primary border rounded-sm">
            <Icon size={14} />
          </div>
          <h4 className="text-sm">{title}</h4>
        </div>
        <div className="block gap-2">
          <div className="metric text-xl">{metric}</div>
        </div>
      </div>
    </div>
  )
}


