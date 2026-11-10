import { MetricCard } from "@/components/cards/MetricCard"
import { AppHeader } from "@/components/navigation/AppHeader"
import { LucidePlus } from "lucide-react"

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-">
      <AppHeader pageTitle="Overview" />
      <div className="flex flex-col gap-3 px-5">
        <h2 className="font-medium text-sm">Analytics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
<DiscoverSection/>
    </div>
  )
}


function DiscoverSection(){
  return (
    <section className="flex flex-col">
      <h2 className="text-sm mt-6">Discover</h2>

    </section>
  )
}