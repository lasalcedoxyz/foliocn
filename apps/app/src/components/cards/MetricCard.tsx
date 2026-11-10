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
  const Icon = icon;

  return (
    <div className="flex justify-between h-full p-3 border rounded-md">
      {/** Card Content **/}
      <div className="flex flex-col">
        <div className="flex h-6 w-6 justify-center items-center border rounded-sm">
          <Icon size={14} />
        </div>
        <h4 className="text-sm mt-3">{title}</h4>
        <div className="block gap-2">
          <div className="text-xl">{metric}</div>
        </div>
      </div>
    </div>
  )
}
