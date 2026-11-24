import type React from "react"

interface SectionProps {
  children: React.ReactNode;
}

interface SectionHeaderProps {
  children: React.ReactNode;
}

interface SectionContentProps {
  children: React.ReactNode;
}

interface SectionTitleProps {
  children: React.ReactNode;
}

interface SectionActionsProps {
  children: React.ReactNode;
}

function Section({ children }: SectionProps) {
  return (
    <section className="flex flex-col gap-3 px-5 pt-6">
      {children}
    </section>
  )
};

function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <section className="flex items-center gap-x-2">
      {children}
    </section>
  )
};

function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="font-medium text-sm">
      {children}
    </h2>
  )
}

function SectionContent({ children }: SectionContentProps) {
  return (
    <div className="flex flex-col">
      {children}
    </div>
  )
}

function SectionActions({ children }: SectionActionsProps) {
  return (
    <div className="flex items-center gap-x-2">
      {children}
    </div>
  )
}

export {
  Section,
  SectionHeader,
  SectionTitle,
  SectionActions,
  SectionContent,
}

