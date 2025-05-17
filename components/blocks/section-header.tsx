import {cn} from "@/lib/utils"
import SectionContainer from "@/components/ui/section-container"
import {stegaClean} from "next-sanity"

import {PAGE_QUERYResult} from "@/sanity.types"

type SectionHeaderProps = Extract<NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number], {_type: "section-header"}>

export default function SectionHeader({padding, colorVariant, sectionWidth = "default", stackAlign = "left", tagLine, title, description}: SectionHeaderProps) {
  const isNarrow = stegaClean(sectionWidth) === "narrow"
  const align = stegaClean(stackAlign)
  const color = stegaClean(colorVariant)

  return (
    <SectionContainer color={color} padding={padding} className="px-8 mx-auto lg:px-0">
      <div className={cn(align === "center" ? "max-w-6xl text-center mx-auto" : undefined, isNarrow ? "max-w-4xl mx-auto" : undefined)}>
        <div className={cn(color === "primary" ? "text-background" : undefined)}>
          {tagLine && (
            <h1 className="leading-[0] mb-2">
              <span className="   uppercase  p-4  text-foreground/80 tracking-normal text-xs">{tagLine}</span>
            </h1>
          )}
          <h2 className=" mb-2 text-primary">{title}</h2>
        </div>
        <p className="text-muted-foreground max-w-4xl mx-auto">{description}</p>
      </div>
    </SectionContainer>
  )
}
