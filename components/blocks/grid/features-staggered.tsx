"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

export interface FeatureItem
{
	_key: string
	title: string
	description: string
	image: {
		asset: {
			url: string
		}
	}
}

export interface FeaturesStaggeredProps
{
	_type: "features-staggered"
	_key: string
	title?: string
	description?: string
	features?: FeatureItem[]
	padding?: string
	colorVariant?: string
}

export default function FeaturesStaggered({
	title,
	description,
	features = [],
	padding,
	colorVariant
}: FeaturesStaggeredProps)
{
	return (
		<section className={cn("py-4 mx-auto", padding, colorVariant)}>
			{title && (
				<div className="text-center mb-8 container mx-auto max-w-6xl px-4">
					<h2 className="text-gradient-primary mb-4">{title}</h2>
					{description && <p className="mb-4 max-w-4xl mx-auto">{description}</p>}
				</div>
			)}
			<div className="container max-w-6xl mx-auto px-4 ">
				<div className="grid gap-6 md:grid-cols-2 ">
					{features.map((feature) => (
						<div
							key={feature._key}
							className="flex flex-col max-w-6xl border-border "
						>
							<div className="flex flex-col h-full  rounded-t-lg">
								<div className="flex-1 flex flex-col text-center border p-4 border-border bg-gradient-to-tl from-muted/70 to-foreground/20  rounded-t-lg">
									<h3 className="font-semibold pt-4 text-center mb-2 text-2xl pb-4 ">{feature.title}</h3>
									<p className="text-foreground/80 text-lg mb-2">{feature.description}</p>
								</div>
								<div className="flex-1 relative aspect-video">
									{feature.image?.asset?.url && (
										<Image
											src={feature.image.asset.url}
											alt={feature.title}
											className="w-full h-full object-cover border  rounded-b-lg"
											fill
											sizes="(max-width: 768px) 100vw, 50vw"
										/>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
} 