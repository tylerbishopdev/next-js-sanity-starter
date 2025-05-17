import {urlFor} from "@/sanity/lib/image"
import Image from "next/image"

export const portableTextComponents = {
  types: {
    image: ({value}: any) => {
      if (!value || !value.asset) {
        return null
      }

      // Get image dimensions from metadata if available, or use sensible defaults
      const width = value.asset?.metadata?.dimensions?.width || 800
      const height = value.asset?.metadata?.dimensions?.height || 450

      return (
        <div className="my-8" key={value._key || `image-${value.asset._ref || Date.now()}`}>
          <Image src={urlFor(value).url()} alt={value.alt || ""} width={width} height={height} className="rounded-lg w-full h-auto" />
          {value.caption && <p className="mt-2 text-sm text-foreground text-center">{value.caption}</p>}
        </div>
      )
    }
  },
  marks: {
    link: ({children, value}: any) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined
      return (
        <a href={value.href} rel={rel} className="text-primary hover:underline">
          {children}
        </a>
      )
    }
  },
  block: {
    h2: ({children}: any) => <h2 className="text-3xl text-primary font-bold mt-8 mb-4">{children}</h2>,
    h3: ({children}: any) => <h3 className="text-2xl text-primary font-bold mt-6 mb-3">{children}</h3>,
    h4: ({children}: any) => <h4 className="text-lg text-primary font-bold mt-4 mb-2">{children}</h4>,
    normal: ({children}: any) => <p className="mb-4">{children}</p>,
    blockquote: ({children}: any) => <blockquote className="border-l-4 border-primary pl-4 italic my-6">{children}</blockquote>
  },
  list: {
    bullet: ({children}: any) => <ul className="list-disc pl-6 mb-6">{children}</ul>,
    number: ({children}: any) => <ol className="list-decimal pl-6 mb-6">{children}</ol>
  },
  listItem: {
    bullet: ({children}: any) => <li className="mb-1">{children}</li>,
    number: ({children}: any) => <li className="mb-1">{children}</li>
  }
}
