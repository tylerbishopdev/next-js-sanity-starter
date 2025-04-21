"use client"

import React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { PAGE_QUERYResult } from "@/sanity.types"
import PortableTextRenderer from "@/components/portable-text-renderer"

export interface BentoItem
{
	_key: string
	title: string
	description: string
	content?: any // This will be portable text
	link?: {
		href: string
		label: string
	}
}

export interface ThreeGridProps
{
	_type: "three-grid"
	_key: string
	title?: string
	description?: string
	items?: BentoItem[]
	padding?: string
	colorVariant?: string
}

const BentoBox: React.FC<{ item: BentoItem; className?: string }> = ({ item, className }) =>
{
	return (
		<div className={cn("border border-border bg-gradient-to-tl from-foreground/5 to-input/0 rounded-xl p-2  ", className)}>
			<div className="lg:h-4/5 flex flex-col justify-between pb-2 ">
				<div className="flex-grow flex flex-col justify-center ">
					<div className="mb-0 px-2">
						{item.content && <PortableTextRenderer value={item.content} />}
					</div>
					<div className="px-6 lg:px-10 pt-6 pb-4">
						<h3 className="mb-4 text-pretty">{item.title}</h3>
						<p className="leading-8 text-foreground max-w-2xl">{item.description}</p>
					</div>
				</div>
				{item.link && (
					<Link href={item.link.href} className="bg-primary text-primary-foreground shadow-sm hover:brightness-125 tracking-tight font-semibold  text-xs  px-4 pb-2 mb-4 pt-2 text-center w-28 mx-8 inline-flex align-top justify-center mt-4">
						{item.link.label}
					</Link>
				)}
			</div>
		</div>
	)
}

export default function ThreeGrid({ title, description, items = [], padding, colorVariant }: ThreeGridProps)
{
	if (items.length === 0)
	{
		return null
	}

	return (
		<section className={cn("w-full max-w-6xl mx-auto py-4 px-10 xl:px-0", padding, colorVariant)}>
			{title && (
				<div className="text-center text-gradient-primary mb-8">
					<h2 className="pb-4">{title}</h2>
					{description && <p className="text-foreground mx-auto max-w-4xl">{description}</p>}
				</div>
			)}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 z-40">
				{items[0] && <BentoBox item={items[0]} className="md:col-span-2 md:row-span-2 z-40 pb-2 rounded-lg" />}
				{items[1] && <BentoBox item={items[1]} className="pb-2 rounded-lg" />}
				{items[2] && <BentoBox item={items[2]} className="rounded-lg" />}
			</div>
		</section>
	)
} 