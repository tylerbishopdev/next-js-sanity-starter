import {cn} from "@/lib/utils"
import Image from "next/image"
import {urlFor} from "@/sanity/lib/image"
import {ChevronRight} from "lucide-react"
import {Badge} from "@/components/ui/badge"
import {format} from "date-fns"

interface CaseStudyCardProps {
  className?: string
  title?: string
  client?: string
  summary?: string
  projectDate?: string
  tags?: string[]
  featuredImage?: any
  slug?: {current: string}
}

export default function CaseStudyCard({className, title, client, summary, projectDate, tags, featuredImage, slug}: CaseStudyCardProps) {
  return (
    <div className={cn("flex w-full flex-col justify-between overflow-hidden transition ease-in-out group border-2 border-border/90 rounded-xl p-4 hover:border-foreground/50 bg-muted/30", className)}>
      <div className="flex flex-col">
        {featuredImage && featuredImage.asset?._id && (
          <div className="mb-4 relative h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[9.5rem] xl:h-[12rem] rounded-xl overflow-hidden">
            <Image
              src={urlFor(featuredImage).url()}
              alt={title || "Case Study"}
              placeholder={featuredImage?.asset?.metadata?.lqip ? "blur" : undefined}
              blurDataURL={featuredImage?.asset?.metadata?.lqip || ""}
              fill
              style={{
                objectFit: "cover"
              }}
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              quality={100}
            />
          </div>
        )}

        <div className="flex justify-between items-center mb-2">{title && <h3 className="font-bold text-[1.5rem] leading-[1.2]">{title}</h3>}</div>

        {client && <div className="mb-2 text-primary font-medium">{client}</div>}

        {summary && <p className="text-sm text-foreground mb-4 line-clamp-2">{summary}</p>}

        <div className="flex flex-wrap gap-2 mb-4">
          {projectDate && (
            <Badge variant="outline" className="text-xs">
              {format(new Date(projectDate), "MMM yyyy")}
            </Badge>
          )}
          {tags &&
            tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          {tags && tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{tags.length - 3} more
            </Badge>
          )}
        </div>
      </div>
      <div className="mt-3 xl:mt-6 w-10 h-10 border-2 rounded-full flex items-center justify-center group-hover:border-foreground/50">
        <ChevronRight className="text-border group-hover:text-foreground/50" size={24} />
      </div>
    </div>
  )
}
