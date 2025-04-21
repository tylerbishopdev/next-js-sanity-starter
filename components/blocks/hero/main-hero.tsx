"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

import { useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

export interface MainHeroProps
{
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
}: MainHeroProps)
{
	const ref = useRef(null)
	const isInView = useInView(ref, {
		once: true,
		margin: "-100px"
	}
	)

	return (
		<section className={cn("relative flex flex-col h-auto max-w-6xl mx-auto bg-center  bg-no-repeat font-sans mb-10 pb-10 overflow-hidden", padding, colorVariant)}>
			<div className="absolute inset-0 z-0">
				<Image
					src="/images/backgrid.png"
					alt="background image"
					className="object-fill w-full h-full invert-0 dark:invert-0 opacity-40 rounded-xl border"
					fill
					priority
					sizes="(max-width: 1200px) 100vw, 1200px"
				/>
			</div>

			<div ref={ref} className="flex flex-grow xl:w-full items-center justify-center mx-auto mt-0 h-full z-10 relative">
			</div>

			<div className="flex flex-col items-center justify-center gap-2 px-2 pt-20 pb-10 max-w-6xl mx-auto z-10 relative">
				{preherobold && <p className="text-center border border-muted/50 bg-muted/20 mx-auto px-4 uppercase py-0.5 text-xs font-light tracking-wider text-foreground mb-0.5">{preherobold}</p>}

				{heroheading1 && <h1 className="text-center mx-auto text-4xl  text-transparent bg-clip-text bg-gradient-to-br from-foreground via-zinc-500/80 to-foreground  md:text-6xl xl:text-[4.4rem]">{heroheading1} <br /> {heroheading2 && <span className="text-center mx-auto text-4xl text-transparent bg-clip-text bg-gradient-to-br from-primary via-accent to-primary/90 md:text-6xl xl:text-[4.4rem]">{heroheading2}</span>}</h1>}

				{heroDescription && <p className="text-center mt-2 tracking-tight xl:px-2 px-12 text-foreground/80 max-w-[45.25rem] mx-auto">{heroDescription}</p>}

				{heroButtonText && <Button className="h-fit text-xs mt-6 w-fit" variant="default">{heroButtonText}</Button>}
			</div>
		</section>
	)
} 