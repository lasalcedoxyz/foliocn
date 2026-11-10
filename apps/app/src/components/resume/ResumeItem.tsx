import * as React from "react";

interface ResumeSectionProps {
    title: string;
    children: React.ReactNode;
}

interface ResumeItemProps {

}

interface ResumeItemTitleProps {
    title: string;
    subtitle?: string;
}


interface ResumeItemDatesProps {
    startDate?: string;
    isCurrent: boolean;
    endDate?: string;
}

export function ResumeSection({
    title,
    children
}: ResumeSectionProps) {
    return (
        <section className="flex flex-col gap-3">
            <h4 className="font-medium text-xs">{title}</h4>
            <div className="flex flex-col gap-1">
                {children}
            </div>
        </section>
    )
}

export function ResumeItem({ }: ResumeItemProps) {
    return (
        <div>

        </div>
    )
}



function ResumeItemTitle({ title, subtitle }: ResumeItemTitleProps) {
    return (
        <div className="flex flex-col gap-1">
            <h2 className="text-xs font-medium">{title}</h2>
            <p className="text-xs text-secondary">{subtitle}</p>
        </div>
    )
}

function ResumeDates({ startDate, isCurrent, endDate }: ResumeItemDatesProps) {
    return (
        <div className="flex items-center gap-1">
            <span className="text-xs">{startDate}</span>
            <span className="text-xs">
                {isCurrent ? "-Current" : endDate ? `-${endDate}` : ""}
            </span>
        </div>
    )
}

export {
    ResumeItemTitle,
    ResumeDates,
}