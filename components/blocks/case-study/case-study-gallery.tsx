import SectionContainer from "@/components/ui/section-container"
import {stegaClean} from "next-sanity"
import Image from "next/image"
import {urlFor} from "@/sanity/lib/image"
import type {SanityAsset} from "@sanity/image-url/lib/types/types"

type GalleryImage = {
  _key: string
  asset: SanityAsset
  caption?: string
  alt?: string
}

interface CaseStudyGalleryProps {
  padding?: {top?: boolean; bottom?: boolean} | null
  colorVariant?: string | null
  title?: string
  subtitle?: string
  images?: GalleryImage[]
  _type: "case-study-gallery"
}

export default function CaseStudyGallery({padding, colorVariant, title, subtitle, images}: CaseStudyGalleryProps) {
  const color = stegaClean(colorVariant)

  return (
    <SectionContainer color={color as any} padding={padding as any}>
      <div className="max-w-6xl mx-auto">
        {title && <h2 className="text-3xl md:text-4xl font-diatype mb-2">{title}</h2>}
        {subtitle && <p className="text-xl text-muted-foreground mb-8">{subtitle}</p>}

        {images && images.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {images.map((image) => (
              <figure key={image._key} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <Image src={urlFor(image.asset).url()} alt={image.alt || "Gallery image"} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                {image.caption && <figcaption className="p-3 text-sm text-muted-foreground bg-muted/50">{image.caption}</figcaption>}
              </figure>
            ))}
          </div>
        )}
      </div>
    </SectionContainer>
  )
}
