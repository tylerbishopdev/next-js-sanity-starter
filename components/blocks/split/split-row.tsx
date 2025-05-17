import {cn} from "@/lib/utils"
import SectionContainer from "@/components/ui/section-container"
import {stegaClean} from "next-sanity"
import {PAGE_QUERYResult} from "@/sanity.types"
import SplitContent from "./split-content"
import SplitCardsList from "./split-cards-list"
import SplitImage from "./split-image"
import SplitInfoList from "./split-info-list"

type Block = NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number]
type SplitRow = Extract<Block, {_type: "split-row"}>
type SplitColumn = NonNullable<NonNullable<SplitRow["splitColumns"]>[number]>

const componentMap: {
  [K in SplitColumn["_type"]]: React.ComponentType<Extract<SplitColumn, {_type: K}>>
} = {
  "split-content": SplitContent,
  "split-cards-list": SplitCardsList,
  "split-image": SplitImage,
  "split-info-list": SplitInfoList
}

export default function SplitRow({padding, colorVariant, noGap, splitColumns}: SplitRow) {
  const color = stegaClean(colorVariant)

  return (
    <SectionContainer color={color} padding={padding} className="mx-auto flex w-full">
      {splitColumns && splitColumns?.length > 0 && (
        <div className={cn("grid grid-cols-1 lg:grid-cols-2 mx-auto", noGap ? "gap-0" : "gap-12 lg:gap-20 mx-auto")}>
          {splitColumns?.map((column) => {
            const Component = componentMap[column._type]
            if (!Component) {
              // Fallback for development/debugging of new component types
              console.warn(`No component implemented for split column type: ${column._type}`)
              return <div data-type={column._type} key={column._key} />
            }
            return <Component {...(column as any)} color={color} noGap={noGap} key={column._key} />
          })}
        </div>
      )}
    </SectionContainer>
  )
}
