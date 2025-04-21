"use client"

import { motion } from "framer-motion"
import { BarChart, Globe, Layout, PlayCircle, Store, Users } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export interface CardItem
{
	_key: string
	header: string
	subheader: string
	icon: string
}

export interface FeatureCardProps
{
	_type: "feature-card"
	_key: string
	heading?: string
	description?: string
	image?: {
		asset: {
			url: string
		}
	}
	cards?: CardItem[]
	padding?: string
	colorVariant?: string
}

// Icon mapping for dynamic icon rendering
const iconMap: Record<string, React.ReactNode> = {
	"store": <Store className="h-5 w-5" />,
	"globe": <Globe className="h-5 w-5" />,
	"users": <Users className="h-5 w-5" />,
	"bar-chart": <BarChart className="h-5 w-5" />,
	"layout": <Layout className="h-5 w-5" />,
	"play-circle": <PlayCircle className="h-5 w-5" />
}

// Create a motion div component
const MotionDiv = motion.div

export default function FeatureCard({
	heading,
	description,
	image,
	cards = [],
	padding,
	colorVariant
}: FeatureCardProps)
{
	return (
		<section className={cn("py-0 mx-auto px-4 max-w-6xl rounded-lg", padding, colorVariant)}>
			<div className="flex lg:flex-row flex-col  lg:max-w-6xl justify-center items-center pt-6 border mt-4  border-border p-6 mx-auto bg-gradient-to-tr from-input/20 to-muted/10 rounded-lg">
				<div className="lg:w-1/2 w-full pr-0 pt-2 grid lg:grid-cols-1 gap-0">
					<h2 className="tracking-tighter mb-0 lg:my-2 text-center px-6 lg:px-10">{heading}</h2>
					<p className="mx-auto text-sm px-12 text-center pb-6">{description}</p>
					{image?.asset?.url && (
						<Image
							src={image.asset.url}
							alt={heading || "Feature illustration"}
							width={400}
							height={300}
							unoptimized
							className="rounded-lg mx-auto w-2/3 h-auto"
						/>
					)}
					<div className="mt-0"></div>
				</div>
				<div className="lg:w-1/2 w-full">
					<div className="grid lg:grid-cols-2 gap-3">
						{cards.map((card) => (
							<MotionDiv
								key={card._key}
								className="flex flex-col justify-between border border-foreground/20 bg-gradient-to-tl from-foreground/5 to-input/10 rounded-xl p-3"
								initial={{ opacity: 1, scale: 1 }}
								whileHover={{ opacity: 0.8, scale: 1.02 }}
								transition={{
									duration: 0.2,
									ease: [0.22, 1, 0.36, 1]
								}}
							>
								<div className="flex gap-3">
									<div className="rounded size-6 pr-2 pl-1 pt-3 text-primary">
										{iconMap[card.icon] || <Store className="h-5 w-5" />}
									</div>
									<div>
										<h3 className="text-base pb-1.5 font-bold">{card.header}</h3>
										<p className="text-xs">{card.subheader}</p>
									</div>
								</div>
							</MotionDiv>
						))}
					</div>
				</div>
			</div>
		</section>
	)
} 