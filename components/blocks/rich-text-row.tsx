import {cn} from "@/lib/utils"
import PortableTextRenderer from "@/components/portable-text-renderer"
import SectionContainer from "@/components/ui/section-container"
import {ColorVariant, SectionPadding} from "@/sanity.types"

interface RichTextRowProps {
  title?: string
  content: any
  colorVariant?: ColorVariant
  padding?: SectionPadding
  width?: "default" | "narrow"
  textAlign?: "left" | "center" | "right"
}

export default function RichTextRow({title, content, colorVariant = "background", padding, width = "default", textAlign = "left"}: RichTextRowProps) {
  // Container class based on width
  const containerClass = width === "narrow" ? "max-w-4xl mx-auto" : ""

  return (
    <SectionContainer color={colorVariant} padding={padding}>
      <div className={cn(containerClass)}>
        <div
          className={cn("rich-text-container", {
            "text-left": textAlign === "left",
            "text-center": textAlign === "center",
            "text-right": textAlign === "right"
          })}
        >
          {title && <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">{title}</h2>}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <PortableTextRenderer value={content} />
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
