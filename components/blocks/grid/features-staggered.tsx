"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { SparklesCore } from "@/components/magicui/sparkles"

export interface FeatureItem {
	_key: string
	title: string
	description: string
	image: {
		asset: {
			url: string
		}
	}
}

export interface FeaturesStaggeredProps {
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
}: FeaturesStaggeredProps) {
	return (
		<section className={cn("py-4 mx-auto px-8 lg:px-0   max-w-6xl ", padding, colorVariant)}>

			{title && (
				<div className="text-center mb-8 container mx-auto max-w-6xl ">
					<h2 className=" mb-4">{title}</h2>
					{description && <p className="mb-4 max-w-4xl mx-auto">{description}</p>}
				</div>
			)}
			<div className="container max-w-6xl mx-auto px-0  rounded-2xl bg-bento border">
				<div className="flex flex-col space-y-4 md:space-y-0 px-2 bg-dots">
					{features.map((feature, index) => (
						<div
							key={feature._key}
							className="w-full  "
						>
							<div className={cn(
								"flex flex-col gap-8 items-center rounded-2xl  m-1 ",
								index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
							)}>
								{/* Image Section */}
								<div className="flex-1 relative  aspect-video w-full max-w-3xl mx-auto md:max-w-none  overflow-hidden  rounded-xl">
									<div className="absolute inset-0 w-full h-full m-1 ">
										<div className="w-full h-full " />
									</div>
									{feature.image?.asset?.url && (
										<Image
											src={feature.image.asset.url}
											alt={feature.title}
											className="w-full h-full object-contain p-4 lg:p-6 relative z-10  opacity-90 rounded-xl"
											fill
											sizes="(max-width: 768px) 100vw, 50vw"
										/>
									)}
								</div>

								{/* Text Section */}
								<div className="flex-1 flex flex-col justify-center p-4 md:p-8 relative z-10 ">
									<h3 className="font-semibold mb-4 px-4 lg:-px-8">{feature.title}</h3>
									<p className="opacity-80 px-4 lg:-px-8">{feature.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
} 