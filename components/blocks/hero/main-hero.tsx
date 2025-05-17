"use client"

import {Button} from "@/components/ui/button"
import Image from "next/image"

import {useInView} from "framer-motion"
import {useRef} from "react"
import {cn} from "@/lib/utils"
import Link from "next/link"

export interface MainHeroProps {
  _type: "main-hero"
  _key: string
  preherobold?: string
  heroheading1?: string
  heroheading2?: string
  heroDescription?: string
  heroButtonText?: string
  /* not using this image for now
  image?: {
	asset: {
	  url: string
	}
  }
  */
  padding?: string
  colorVariant?: string
}

export default function MainHero({
  preherobold,
  heroheading1,
  heroheading2,
  heroDescription,
  heroButtonText,
  /*image,  */
  padding,
  colorVariant
}: MainHeroProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  })

  return (
    <section className={cn("relative flex flex-col h-auto max-w-6xl mx-auto mt-4 w-full lg:w-full mb-10 pb-10 overflow-hidden halftone border border-border/60 rounded-2xl", padding, colorVariant)}>
      <div ref={ref} className="flex flex-grow xl:w-full items-center justify-center mx-auto mt-0 h-full z-10 relative "></div>

      <div className="flex flex-col items-center justify-center gap-2 px-2 pt-14 pb-10 max-w-6xl mx-auto z-10 relative  ">
        {preherobold && <p className="text-center mb-4 text-foreground rounded-full font-bold text-[10px] border border-muted bg-muted/30 mx-auto px-4  uppercase py-1.5  tracking-wider ">{preherobold}</p>}

        {heroheading1 && (
          <h1 className="text-center w-full px-4 mx-auto font-bold text-gradient-primary">
            {heroheading1} <br /> {heroheading2 && <span className="text-center mx-auto ">{heroheading2}</span>}
          </h1>
        )}

        {heroDescription && <p className="text-center mt-2 tracking-tight lg:px-4 px-12 text-foreground/90 max-w-[45.25rem] mx-auto">{heroDescription}</p>}

        {heroButtonText && (
          <Button className="h-fit text-xs mt-6 w-fit mx-auto" variant="default">
            <Link href="https://pubdash.ezoic.com/join?">{heroButtonText}</Link>
          </Button>
        )}
      </div>
    </section>
  )
}
