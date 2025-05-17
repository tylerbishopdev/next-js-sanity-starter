import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import SectionContainer from "@/components/ui/section-container"
import {stegaClean} from "next-sanity"
import Link from "next/link"
import PortableTextRenderer from "@/components/portable-text-renderer"
import {PAGE_QUERYResult} from "@/sanity.types"
import Image from "next/image"
import {FlickeringGrid} from "@/components/magicui/flickering-grid"

type Cta1Props = Extract<NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number], {_type: "cta-1"}>

export default function Cta1({padding, colorVariant, sectionWidth = "default", stackAlign = "left", tagLine, title, body, links}: Cta1Props) {
  const isNarrow = stegaClean(sectionWidth) === "narrow"
  const align = stegaClean(stackAlign)
  const color = stegaClean(colorVariant)

  return (
    <SectionContainer color={color} padding={padding} className="mt-10">
      <div className={cn("relative z-10 bg-bento border border-border/50 rounded-xl", align === "center" ? "max-w-6xl text-center py-24 px-12 xl:px-28 mx-auto text-xl h-auto " : undefined, isNarrow ? "max-w-[48rem] mx-auto" : undefined)}>
        <div className={cn(color === "primary" ? "text-background " : undefined)}>
          {tagLine && (
            <h2 className=" mb-6 ">
              <span className="tracking-wider font-bold  uppercase bg-foreground/80 text-background rounded-full  py-1 px-4 text-xs">{tagLine}</span>
            </h2>
          )}
          <h2 className="mb-4 text-gradient-primary py-1 text-5xl max-w-6xl w-full">{title}</h2>
          <span className="text-base ">{body && <PortableTextRenderer value={body} />}</span>
        </div>
        {links && links.length > 0 && (
          <div className={cn("pt-4 flex flex-wrap gap-3 ", align === "center" ? "justify-center " : undefined)}>
            {links &&
              links.length > 0 &&
              links.map((link) => (
                <Button key={link.title} variant={stegaClean(link?.buttonVariant)} asChild>
                  <Link href={link.href as string} target={link.target ? "_blank" : undefined} rel={link.target ? "noopener" : undefined}>
                    {link.title}
                  </Link>
                </Button>
              ))}
          </div>
        )}
      </div>
    </SectionContainer>
  )
}
