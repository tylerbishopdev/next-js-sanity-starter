import {Button} from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import {urlFor} from "@/sanity/lib/image"
import {stegaClean} from "next-sanity"
import PortableTextRenderer from "@/components/portable-text-renderer"
import {PAGE_QUERYResult} from "@/sanity.types"

type Hero1Props = Extract<NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number], {_type: "hero-1"}>

export default function Hero1({tagLine, title, body, image, links}: Hero1Props) {
  return (
    <div className="container px-8 lg:px-0 py-10 lg:pt-14  ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 max-w-6xl mx-auto ">
        <div className="flex flex-col justify-center">
          {tagLine && (
            <p className="leading-[0]  animate-fade-up [animation-delay:100ms] opacity-0 lg:text-left text-center mb-4 lg:ml-4 ml-0">
              <span className="text-center text-foreground rounded-full font-bold text-[10px] border border-muted bg-muted/30 mx-auto px-4  uppercase py-1.5  tracking-wider ">{tagLine}</span>
            </p>
          )}
          {title && <h1 className="mt-3 text-5xl mx-auto px-4 text-gradient-primary animate-fade-up [animation-delay:200ms] opacity-0 lg:text-left text-center">{title}</h1>}
          {body && (
            <div className="mt-6 max-w-4xl w-3/4 lg:w-full mx-auto px-4 animate-fade-up [animation-delay:300ms] opacity-0 lg:text-left text-center">
              <PortableTextRenderer value={body} />
            </div>
          )}
          {links && links.length > 0 && (
            <div className="mt-4 lg:ml-4 ml-0 flex flex-wrap gap-4 animate-fade-up [animation-delay:400ms] opacity-0 lg:justify-start justify-center">
              {links.map((link) => (
                <Button key={link.title} variant={stegaClean(link?.buttonVariant)} asChild>
                  <Link href={link.href as string} target={link.target ? "_blank" : undefined} rel={link.target ? "noopener" : undefined}>
                    {link.title}
                  </Link>
                </Button>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center">
          {image && image.asset?._id && (
            <Image
              className="rounded-xl animate-fade-up [animation-delay:500ms] opacity-0 w-11/12 mx-auto lg:mx-0 lg:w-full"
              src={urlFor(image).url()}
              alt={image.alt || ""}
              width={image.asset?.metadata?.dimensions?.width || 800}
              height={image.asset?.metadata?.dimensions?.height || 800}
              placeholder={image?.asset?.metadata?.lqip ? "blur" : undefined}
              blurDataURL={image?.asset?.metadata?.lqip || ""}
              quality={100}
            />
          )}
        </div>
      </div>
    </div>
  )
}
