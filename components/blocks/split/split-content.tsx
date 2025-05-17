import {cn} from "@/lib/utils"
import PortableTextRenderer from "@/components/portable-text-renderer"
import {Button} from "@/components/ui/button"
import Link from "next/link"
import TagLine from "@/components/ui/tag-line"
import {createElement} from "react"
import {stegaClean} from "next-sanity"
import {PAGE_QUERYResult} from "@/sanity.types"

type Block = NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number]
type SplitRow = Extract<Block, {_type: "split-row"}>
type SplitContent = Extract<NonNullable<SplitRow["splitColumns"]>[number], {_type: "split-content"}>

interface SplitContentProps extends SplitContent {
  noGap?: boolean
}

export default function SplitContent({sticky, padding, noGap, tagLine, title, body, link}: SplitContentProps) {
  return (
    <div className={cn(!sticky ? "flex flex-col justify-center mx-auto" : undefined, padding?.top ? "pt-16 xl:pt-20" : undefined, padding?.bottom ? "pb-16 xl:pb-20" : undefined)}>
      <div className={cn("flex flex-col items-start px-6 lg:px-0", sticky ? "lg:sticky lg:top-56" : undefined, noGap ? "px-10" : undefined)}>
        {tagLine && <TagLine title={tagLine} className="bg-foreground/10 text-xs rounded-full text-foreground/80 border px-4 py-1" />}
        {title &&
          createElement(
            tagLine ? "h3" : "h2",
            {
              className: cn("my-4 leading-[1.2]")
            },
            title
          )}
        {body && <PortableTextRenderer value={body} />}
        {link?.href && (
          <div className="flex flex-col">
            <Button className="mt-2" variant={stegaClean(link?.buttonVariant)} size="lg" asChild>
              <Link href={link.href} target={link.target ? "_blank" : undefined}>
                {link.title}
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
