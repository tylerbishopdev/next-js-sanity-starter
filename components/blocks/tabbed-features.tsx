"use client"

import React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ColorVariant, SectionPadding } from "@/sanity.types"
import { urlFor } from "@/sanity/lib/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PortableTextRenderer from "@/components/portable-text-renderer"
import { BeamsBackground } from "@/components/magicui/beams-background"

interface TabbedFeaturesTab {
	_key: string;
	title: string;
	content?: any;
	image?: {
		asset: {
			_id?: string;
			url?: string;
			metadata?: {
				dimensions?: {
					width: number;
					height: number;
				}
			}
		};
		alt?: string;
	};
}

interface TabbedFeaturesProps {
	_type: "tabbed-features";
	_key: string;
	title?: string;
	description?: string;
	tabs?: TabbedFeaturesTab[];
	padding?: SectionPadding;
	colorVariant?: ColorVariant;
}

export default function TabbedFeatures({
	title,
	description,
	tabs = [],
	padding,
	colorVariant
}: TabbedFeaturesProps) {
	// Calculate padding class based on padding object
	const paddingClass = cn({
		'pt-10': padding?.top,
		'pb-10': padding?.bottom,
	})

	if (!tabs || tabs.length === 0) {
		return null
	}

	// Set default tab value to first tab's key
	const defaultTabValue = tabs[0]._key

	return (
		<section className={cn("relative overflow-hidden max-w-6xl mx-auto lg:px-0 px-5", paddingClass, colorVariant)}>
			<div className="text-center mb-8">
				{title && <h2 className="text-3xl font-bold tracking-tight mb-4">{title}</h2>}
				{description && <p className="text-muted-foreground max-w-3xl mx-auto">{description}</p>}
			</div>

			<Tabs defaultValue={defaultTabValue} className="w-full rounded-lg mx-auto justify-center items-center">
				<TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8 w-full h-auto rounded-lg bg-transparent lg:px-8 px-4 justify-center items-center">
					{tabs.map((tab) => (
						<TabsTrigger
							key={tab._key}
							value={tab._key}
							className="flex items-center text-muted-foreground border-2 border-background bg-muted/90 py-2 px-6 gap-2 rounded-none"
						>

							{tab.title}

						</TabsTrigger>
					))}
				</TabsList>

				{tabs.map((tab) => (
					<TabsContent
						key={tab._key}
						value={tab._key}
						className="border-2 rounded--lg border-border px-6 rounded-none bg-background py-12 align-middle justify-center items-center"
					>
						<div className="absolute h-96 inset-0 z-[-1]">
							<Image
								src="/images/backgrid.png"
								alt="background image"
								className="object-fill w-full h-auto invert-0 dark:invert-0 opacity-40  "
								fill
								priority
								sizes="(max-width: 1200px) 100vw, 1200px"
							/>
						</div>
						<div className="lg:flex items-start gap-8 align-middle justify-center ">
							{tab.image && (
								<div className="lg:w-2/3 mb-6 lg:mb-0 flex justify-center">
									<Image
										src={urlFor(tab.image).url()}
										alt={tab.image.alt || tab.title}
										width={tab.image.asset.metadata?.dimensions?.width || 400}
										height={tab.image.asset.metadata?.dimensions?.height || 300}
										className="rounded-lg shadow-lg object-cover"
									/>
								</div>
							)}
							<div className={cn("lg:w-1/3  items-center justify-center flex-col pt-10 px-4 lg-px-6", !tab.image && "w-full")}>
								<h3 className="text-2xl font-bold mb-4">{tab.title}</h3>
								{tab.content && (
									<div className="prose dark:prose-invert  max-w-none">
										<PortableTextRenderer value={tab.content} />
									</div>
								)}
							</div>
						</div>
					</TabsContent>
				))}
			</Tabs>
		</section>
	)
} 