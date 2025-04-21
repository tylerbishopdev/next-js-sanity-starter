"use client"

import React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Import your fixed components/animations here
import { AnimatedBeamDemo } from "@/components/ui/magicui/animated-beam-six"
import { MarqueeDemo } from "@/components/ui/magicui/marquee-visitors"
import { PersonalizedFeatureCard } from "@/components/ui/magicui/personalized-feature"

// Map component keys to actual React components
const COMPONENT_MAP: Record<string, React.ReactElement> = {
	component1: <AnimatedBeamDemo />,
	component2: <MarqueeDemo />,
	component3: <PersonalizedFeatureCard />,
	// Add more components as needed
}

export interface BentoItem
{
	_key: string
	title: string
	description: string
	componentKey?: string
	link?: {
		href: string
		label: string
	}
}

export interface ThreeGridAnimatedProps
{
	_type: "three-grid-animated"
	_key: string
	title?: string
	description?: string
	items?: BentoItem[]
	padding?: {
		top: boolean
		bottom: boolean
	}
	colorVariant?: string
}

const BentoBox: React.FC<{ item: BentoItem; className?: string }> = ({ item, className }) =>
{
	// Get the component based on the componentKey or use a fallback
	const component = item.componentKey ? COMPONENT_MAP[item.componentKey] : null

	return (
		<div className={`border border-border bg-gradient-to-tl from-foreground/5 to-input/10  p-2 ${className}`}>
			<div className="lg:h-full flex flex-col justify-between ">
				<div className="flex-grow flex flex-col justify-center">
					<div className="mb-0">{component}</div>
					<div className="px-6 lg:px-10">
						<h3 className="mb-0 text-pretty text-gradient pb-1">{item.title}</h3>
						<p className="leading-6 text-foreground max-w-3xl pt-4 pb-6">{item.description}</p>
					</div>
				</div>
				{item.link && (
					<Link href={item.link.href} className="bg-primary text-primary-foreground shadow-sm hover:brightness-125 tracking-tight font-semibold  text-xs  px-2 pb-2 mb-4 pt-2 text-center w-28 mx-8 inline-flex align-top justify-center mt-4">
						{item.link.label}
					</Link>
				)}
			</div>
		</div>
	)
}

export default function ThreeGridAnimated({ title, description, items = [], padding, colorVariant }: ThreeGridAnimatedProps)
{
	if (items.length === 0)
	{
		return null
	}

	// Calculate padding class based on padding object
	const paddingClass = cn({
		'pt-16': padding?.top,
		'pb-16': padding?.bottom,
	})

	return (
		<section className={cn("w-full max-w-6xl mx-auto p-4", paddingClass, colorVariant)}>
			{title && (
				<div className="text-center mb-10">
					<h2>{title}</h2>
					{description && <p className="text-muted-foreground">{description}</p>}
				</div>
			)}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 z-40 ">
				{items[0] && <BentoBox item={items[0]} className="md:col-span-2 md:row-span-2 z-40 pb-12 gap-2 rounded-lg" />}
				{items[1] && <BentoBox item={items[1]} className="pb-2 rounded-lg" />}
				{items[2] && <BentoBox item={items[2]} className="rounded-lg" />}
			</div>
		</section>
	)
} 