import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionContent,
} from "../Section.tsx"
import { MetricCard } from "../cards/MetricCard.tsx";
import { LucidePlus, LucideSquareActivity } from "lucide-react";

export function AnalyticsBlock() {
  return (
    <Section>
      <SectionHeader>
        <LucideSquareActivity size={14} />
        <SectionTitle>Analytics</SectionTitle>
      </SectionHeader>
      <SectionContent>
        <div className="flex flex-col gap-3">
          <div className="w-full shrink-0 h-50 border rounded-md"></div>
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
      </SectionContent>
    </Section>
  )
}
