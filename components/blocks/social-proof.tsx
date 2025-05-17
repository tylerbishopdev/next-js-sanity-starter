"use client"

import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel"
import Image from "next/image"
import {cn} from "@/lib/utils"
import {PAGE_QUERYResult} from "@/sanity.types"

export interface TestimonialStat {
  _key: string
  value: string
  label: string
  subLabel: string
}

export interface TestimonialItem {
  _key: string
  image: {
    asset: {
      url: string
    }
  }
  name: string
  position: string
  companyLogo: {
    asset: {
      url: string
    }
  }
  companyName: string
  quote: string
  stats: TestimonialStat[]
}

export interface SocialProofProps {
  _type: "social-proof"
  _key: string
  title?: string
  description?: string
  testimonials?: TestimonialItem[]
  padding?: string
  colorVariant?: string
}

export default function SocialProof({title, description, testimonials, padding, colorVariant}: SocialProofProps) {
  // Check if testimonials exists and has items
  if (!testimonials || testimonials.length === 0) {
    return null
  }

  return (
    <section className={cn(" lg:max-w-6xl w-11/12 lg:w-full mx-auto mt-10 bg-dots border border-border/50 rounded-xl px-4 lg:px-0", padding, colorVariant)}>
      {title && (
        <div className="text-center mb- container mx-auto w-full px-4 ">
          <h2>{title}</h2>
          <div className="my-4  pt-10mx-auto">{description && <p className="text-muted text-xs">{description}</p>}</div>
        </div>
      )}
      <div className="container mx-auto max-w-6xl px-4 mb-6 rounded-lg">
        <div className="relative  rounded-lg">
          <Carousel className="static">
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial._key} className="grid grid-cols-1 gap-y-10 pb-14 pl-8 pr-4 pt-4 sm:pt-8 lg:grid-cols-3 lg:gap-10 lg:p-20">
                  <div className="mx-auto">
                    {testimonial.image?.asset?.url && (
                      <Image src={testimonial.image.asset.url} alt={`${testimonial.name} placeholder`} className="h-auto border border-muted rounded-full overflow-clip mx-auto w-56 mt-2 lg:mx-0 lg:max-h-none" width={500} height={500} />
                    )}
                    <div className="mt-4 text-center">
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-foreground/70 uppercase text-xs">{testimonial.position}</p>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="mb-6 flex items-center justify-center gap-2 lg:mb-8 lg:justify-start">
                      {testimonial.companyLogo?.asset?.url && (
                        <Image src={testimonial.companyLogo.asset.url} alt={`${testimonial.companyName} logo`} className="h-auto opacity-50 w-8 lg:w-20  rounded-full p-2 border border-muted bg-zinc-900" width={100} height={100} />
                      )}
                      <span className="text-xl font-semibold lg:text-3xl">{testimonial.companyName}</span>
                    </div>
                    <p className="text-center border-l-2 border-accent pl-2 lg:text-left lg:text-lg">{testimonial.quote}</p>

                    <div className="grid justify-center gap-10 text-center md:grid-cols-2 lg:justify-start lg:text-left">
                      {testimonial.stats.map((stat) => (
                        <div key={stat._key} className="flex flex-col">
                          <span className="mb-4 text-4xl text-primary font-semibold md:text-5xl font-mono mt-10">{stat.value}</span>
                          <span className="font-bold">{stat.label}</span>
                          <span className="text-foreground/70 uppercase text-xs">{stat.subLabel}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute bottom-6 right-6 z-10 lg:bottom-10 lg:right-10">
              <div className="relative flex items-center gap-1">
                <CarouselPrevious className="static translate-y-5 bg-muted rounded-full" />
                <CarouselNext className="static translate-y-5 bg-muted rounded-full" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
