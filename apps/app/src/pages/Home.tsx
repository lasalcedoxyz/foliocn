import { MetricCard } from "@/components/cards/MetricCard"
import { AppHeader } from "@/components/navigation/AppHeader"
import { LucidePlus } from "lucide-react"

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-">
      <AppHeader pageTitle="Overview" />
      <div className="grid px-4 grid-cols-1 lg:grid-cols-4 gap-3">
        <MetricCard
          title="Applied"
          icon={LucidePlus}
          metric="12"
        />
        <MetricCard
          title="Interviewing"
          icon={LucidePlus}
          metric="12"
        />
        <MetricCard
          title="Offers"
          icon={LucidePlus}
          metric="12"
        />
        <MetricCard
          title="Rejected"
          icon={LucidePlus}
          metric="12"
        />
      </div>
    </div>
  )
}


