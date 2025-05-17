"use client"

import SectionContainer from "@/components/ui/section-container"
import {stegaClean} from "next-sanity"
import Image from "next/image"
import {urlFor} from "@/sanity/lib/image"
import type {SanityAsset} from "@sanity/image-url/lib/types/types"

interface CaseStudyHeroProps {
  padding?: {top?: boolean; bottom?: boolean} | null
  colorVariant?: string | null
  title?: string
  subtitle?: string
  image?: {
    asset: SanityAsset
    alt?: string
  }
  _type?: "case-study-hero"
  data?: any
  caseStudy?: any
}

export default function CaseStudyHero({padding, colorVariant, title, subtitle, image, data, caseStudy}: CaseStudyHeroProps) {
  const _padding = data?.padding || padding
  const _colorVariant = data?.colorVariant || colorVariant
  const _title = data?.title || title
  const _subtitle = data?.subtitle || subtitle
  const _image = data?.image || image

  const color = stegaClean(_colorVariant)

  return (
    <SectionContainer color={color as any} padding={_padding as any}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          {_title && <h2 className="text-3xl md:text-4xl font-diatype mb-4">{_title}</h2>}
          {_subtitle && <p className="text-xl text-muted-foreground">{_subtitle}</p>}
        </div>

        {_image && _image.asset && (
          <div className="overflow-hidden rounded-xl">
            <Image src={urlFor(_image.asset).width(800).url()} alt={_image.alt || "Case study hero image"} className="w-full h-auto" />
          </div>
        )}
      </div>
    </SectionContainer>
  )
}
