"use client"

import SectionContainer from "@/components/ui/section-container"
import {stegaClean} from "next-sanity"

interface Stat {
  value: string
  label: string
  _key?: string
}

interface CaseStudyResultsProps {
  padding?: {top?: boolean; bottom?: boolean} | null
  colorVariant?: string | null
  stats?: Array<Stat>
  _type?: "case-study-results"
  data?: any
}

export default function CaseStudyResults({colorVariant, padding, stats = [], data}: CaseStudyResultsProps) {
  const _padding = data?.padding || padding
  const _colorVariant = data?.colorVariant || colorVariant
  const _stats = data?.stats || stats

  const color = stegaClean(_colorVariant)

  return (
    <SectionContainer color={color as any} padding={_padding as any}>
      <h2 className="text-2xl md:text-3xl font-sans font-light mb-12 w-full border-b-2 pb-1">The Results</h2>

      {_stats.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {_stats.map((stat: Stat, index: number) => (
            <div key={stat._key || `stat-${index}`} className="rounded-xl border p-8 text-center flex flex-col items-center justify-center bg-bento">
              <div className="text-4xl md:text-5xl font-diatype font-bold mb-2 font-mono text-primary">{stat.value}</div>
              <div className="text-muted-foreground text-sm font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-muted-foreground">No metrics have been added yet. Add some metrics in the Sanity Studio.</div>
      )}
    </SectionContainer>
  )
}
