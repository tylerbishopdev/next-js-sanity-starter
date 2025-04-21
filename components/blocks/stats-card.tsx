"use client"

import React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { urlFor } from "@/sanity/lib/image"

export interface Metric
{
	_key: string
	label: string
	sublabel: string
	percentage: number
	barWidth?: string
}

export interface SanityImage
{
	asset: {
		_id: string
		url: string
		metadata: {
			lqip: string
			dimensions: {
				width: number
				height: number
			}
		}
	}
	alt?: string
	hotspot?: {
		x: number
		y: number
		height: number
		width: number
	}
	crop?: {
		top: number
		bottom: number
		left: number
		right: number
	}
}

export interface StatsCardProps
{
	_type: "stats-card"
	_key: string
	title?: string
	description?: string
	image?: SanityImage
	metrics?: Metric[]
	padding?: {
		top: boolean
		bottom: boolean
	}
	colorVariant?: string
}

const MetricBar: React.FC<{ metric: Metric }> = ({ metric }) =>
{
	// Determine width - use provided barWidth or calculate from percentage
	const barWidthStyle = metric.barWidth ?
		// Use the barWidth directly if it's provided (e.g. "84%") 
		metric.barWidth :
		// Otherwise calculate from percentage
		`${Math.min(metric.percentage, 100)}%`;

	return (
		<div className="space-y-0 rounded-lg">
			<div className="space-y-1 ">
				<div className="font-semibold text-foreground">{metric.label}</div>
				<div className="font-mono text-muted">{metric.sublabel}</div>
			</div>
			<div className="relative h-7 ">
				<div
					className="absolute inset-1 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
					style={{ width: barWidthStyle }}
				/>
				<div className="absolute text-foreground text-xl  font-mono right-0 top-1/2 -translate-y-1/2 text-bold whitespace-nowrap pl-2">
					+{metric.percentage}%
				</div>
			</div>
		</div>
	)
}

export default function StatsCard({
	title,
	description,
	image,
	metrics = [],
	padding,
	colorVariant
}: StatsCardProps)
{
	// Calculate padding class based on padding object
	const paddingClass = cn({
		'pt-16': padding?.top,
		'pb-16': padding?.bottom,
	})

	if (!metrics || metrics.length === 0)
	{
		return null
	}

	// Default fallback image
	const fallbackImage = "/assets/ezid-lg.png"

	// Get image URL from Sanity if available
	const imageUrl = image?.asset
		? urlFor(image).url()
		: fallbackImage

	return (
		<section className={cn("w-full", paddingClass, colorVariant)}>
			<div className="justify-center items-center flex max-w-6xl px-4 mx-auto">
				<div className="justify-items-center w-full p-4 border border-border py-12 mb-6 bg-gradient-to-tr from-muted/30 to-foreground/5 rounded-lg">
					<div className="lg:flex lg:items-center lg:justify-between mb-10 ">
						<div className="lg:w-1/3 lg:pr-6 flex lg:justify-end">
							<Image
								src={imageUrl}
								alt={image?.alt || title || "Stats Comparison"}
								width={image?.asset?.metadata?.dimensions?.width || 600}
								height={image?.asset?.metadata?.dimensions?.height || 400}
								className="w-1/2 lg:w-2/3 my-4 mx-auto lg:mx-0"
							/>
						</div>
						<div className="lg:w-2/3 lg:text-left max-w-2xl rounded-lg">
							<h2 className="mx-auto lg:mx-0 text-center lg:text-left">{title}</h2>
							<p className="w-3/4">{description}</p>
						</div>
					</div>
					<div className="flex flex-col gap-3.5 py-4 px-5 mt-10 max-w-4xl mx-auto text-lg font-bold text-muted border border-border/40 shadown-lg rounded-lg bg-gradient-to-tr from-muted/30 to-foreground/5">
						{metrics.map((metric) => (
							<MetricBar key={metric._key} metric={metric} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
} 