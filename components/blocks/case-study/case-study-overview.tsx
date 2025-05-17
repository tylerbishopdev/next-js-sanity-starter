"use client"

import SectionContainer from "@/components/ui/section-container"
import {stegaClean} from "next-sanity"
import {PortableText} from "@portabletext/react"
import {portableTextComponents} from "@/components/portable-text-components"

interface CaseStudyOverviewProps {
  padding?: {top?: boolean; bottom?: boolean} | null
  colorVariant?: string | null
  title?: string
  content?: any[]
  _type?: "case-study-overview"
  data?: any
}

export default function CaseStudyOverview({padding, colorVariant, title, content, data}: CaseStudyOverviewProps) {
  const _padding = data?.padding || padding
  const _colorVariant = data?.colorVariant || colorVariant
  const _title = data?.title || title
  const _content = data?.content || content

  const color = stegaClean(_colorVariant)

  return (
    <SectionContainer color={color as any} padding={_padding as any}>
      <div className="max-w-6xl mx-auto">
        {_title && <h2 className="text-3xl md:text-4xl font-diatype mb-6">{_title}</h2>}

        {_content && (
          <div className="prose prose-lg max-w-none">
            <PortableText value={_content} components={portableTextComponents} />
          </div>
        )}
      </div>
    </SectionContainer>
  )
}
