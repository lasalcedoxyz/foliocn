import { MetricCard } from "@/components/cards/MetricCard"
import { AnalyticsBlock } from "@/components/blocks/AnalyticsBlock"
import { DiscoverBlock } from "@/components/blocks/DiscoverBlock"
import { LucideCompass, LucidePlus } from "lucide-react"

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <AnalyticsBlock />
      <DiscoverBlock />
    </div>
  )
}
