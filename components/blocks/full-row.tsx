"use client"
import SectionContainer from "@/components/ui/section-container"
import { stegaClean } from "next-sanity"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import { Globe, Zap, BarChart, ChevronDown, ChevronUp, Check } from "lucide-react"
import { useState } from "react"
import PortableTextRenderer from "@/components/portable-text-renderer"

// Simple interface that matches what's expected in the componentMap
interface FullRowProps {
  _type: string;
  _key: string;
  padding: any;
  colorVariant: any;
  items?: any[];
}

interface FullRowItem {
  _key: string
  title: string
  image?: {
    asset?: {
      _id: string
      url: string
      mimeType?: string
      metadata?: {
        lqip?: string
        dimensions?: {
          width: number
          height: number
        }
      }
    }
    alt?: string
  }
  icon?: "globe" | "zap" | "bar-chart"
  revenueRange?: string
  support?: string
  featuredBenefits?: string[]
  additionalBenefits?: any
}

export default function FullRow(props: FullRowProps) {
  const { padding, colorVariant, items = [] } = props || {}
  const color = stegaClean(colorVariant || "background")

  const validItems = Array.isArray(items)
    ? (items as FullRowItem[]).filter((item) => item && typeof item._key === "string")
    : []

  if (validItems.length === 0) {
    if (process.env.NODE_ENV === "development") {
      return (
        <SectionContainer color={color} padding={padding}>
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800/30 dark:bg-red-900/10">
            <h3 className="font-medium text-red-800 dark:text-red-400">Content Error</h3>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">No valid content items found.</p>
          </div>
        </SectionContainer>
      )
    }
    return null
  }

  return (
    <SectionContainer color={color} padding={padding}>
      <div className="mx-auto w-full max-w-7xl bg-bento">
        <div className="relative overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm">
          <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-gray-900/50"></div>
          <div className="relative space-y-16 px-4 py-8 sm:space-y-24 sm:px-6 sm:py-12 lg:space-y-32 lg:px-8 lg:py-16">
            {validItems.map((item, index) => (
              <ServiceRow key={item._key || index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

function ServiceRow({ item, index }: { item: FullRowItem; index: number }) {
  if (!item) return null

  const [isExpanded, setIsExpanded] = useState(false)
  const IconComponent =
    item.icon === "globe" ? Globe : item.icon === "zap" ? Zap : item.icon === "bar-chart" ? BarChart : null

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12  py-10">
      {/* Image column */}
      <div className="lg:col-span-5">
        {item.image?.asset && (
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg  ring-1 ring-gray-900/50 dark:ring-white/10">
            <Image
              src={urlFor(item.image)?.url() || ""}
              alt={item.image.alt || ""}
              fill
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover"
              priority={index === 0}
            />
          </div>
        )}
      </div>

      {/* Content column */}
      <div className="flex flex-col space-y-6 lg:col-span-7">
        {/* Icon and Title */}
        <div className="flex items-start gap-4">
          {IconComponent && (
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
              <IconComponent className="h-6 w-6" />
            </div>
          )}
          {item.title && <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{item.title}</h2>}
        </div>

        {/* Revenue Range and Support */}
        {(item.revenueRange || item.support) && (
          <div className="grid gap-4 rounded-lg bg-muted/20 p-4 sm:grid-cols-2">
            {item.revenueRange && (
              <div className="space-y-1">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Revenue Range</p>
                <p className="font-medium">{item.revenueRange}</p>
              </div>
            )}
            {item.support && (
              <div className="space-y-1">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Support Level</p>
                <p className="font-medium">{item.support}</p>
              </div>
            )}
          </div>
        )}

        {/* Featured Benefits */}
        {item.featuredBenefits && item.featuredBenefits.length > 0 && (
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Featured Benefits</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {item.featuredBenefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-2 rounded-md border border-accent/20 bg-accent/5 p-3">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Benefits - Collapsible */}
        {item.additionalBenefits && <CollapsibleSection content={item.additionalBenefits} />}
      </div>
    </div>
  )
}

function CollapsibleSection({ content }: { content: any }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="overflow-hidden rounded-lg border">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between bg-muted/10 p-4 text-left font-medium transition-colors hover:bg-muted/20"
        aria-expanded={isExpanded}
      >
        <span>Additional Benefits</span>
        {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>
      {isExpanded && (
        <div className="p-4">
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <PortableTextRenderer value={content} />
          </div>
        </div>
      )}
    </div>
  )
}
