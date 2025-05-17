"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import SectionContainer from "@/components/ui/section-container";
import { stegaClean } from "next-sanity";
import { ColorVariant } from "@/sanity.types";
import Link from "next/link";

import { SparklesCore } from "@/components/magicui/sparkles";

interface CardFeature {
	_key: string;
	image: {
		asset?: {
			_ref?: string;
			url?: string;
		};
		alt?: string;
	};
	title: string;
	description: string;
	actionText?: string;
	actionUrl?: string;
}

interface CardsProps {
	_type: "cards";
	_key: string;
	title?: string;
	description?: string;
	cards: CardFeature[];

	colorVariant?: ColorVariant;
}

export default function Cards({
	title,
	description,
	cards,

	colorVariant = "background",
}: CardsProps) {
	const color = stegaClean(colorVariant);
	const isOddCount = cards?.length % 2 !== 0;

	return (
		<section className="max-w-6xl mx-auto w-11/12 pt-4">
			{(title || description) && (
				<div className="text-center mb-12 px-4 ">
					{title && <h2 className="tracking-tight mb-4">{title}</h2>}
					{description && (
						<p className="max-w-2xl mx-auto text-foreground">
							{description}
						</p>
					)}
				</div>
			)}

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
				{cards?.map((feature, index) => {
					// First card gets full width if there's an odd number of cards
					const isFirstCardWithOddCount = index === 0 && isOddCount;

					return (
						<Card
							key={feature._key}
							className={`transition-all border border-border-muted duration-300 text-sm align  hover:shadow-lg w-full h-min-[440px] flex flex-col object-fill overflow-hidden ${isFirstCardWithOddCount ? "md:col-span-2" : ""
								}`}
						>

							<div className="w-full h-96 relative ">
								<div className="bg-gradient-to-b from-transparent to-muted/20 inset-0 w-full h-full" />
								{/* <div className="absolute inset-0 w-full h-full">
									<SparklesCore
										background="#1a1b1a24"
										minSize={0.9}
										maxSize={0.5}
										particleDensity={150}
										className="w-full h-full"
										particleColor="#7b9e76"
									/>
								</div> */}
								<Image
									src={feature.image?.asset?.url || "/placeholder.svg"}
									alt={feature.image?.alt || feature.title}
									fill
									className="object-contain rounded-sm  align-middle  lg:p-0 xl:p-0"
								/>
							</div>
							<CardHeader className="px-5 py-4 bg-gradient-to-t from-muted/30 to-muted/20">

								<CardTitle className="text-2xl px-2 text-foreground">{feature.title}</CardTitle>
							</CardHeader>
							<CardContent className="flex-grow px-5   pt-0 pb-8 bg-gradient-to-b from-muted/30 to-muted/10">

								<CardDescription className="text-base px-2 text-foreground">{feature.description}</CardDescription>
							</CardContent>
							<CardFooter className="px-5 bg-gradient-to-b from-muted/10 to-transparent ">
								{feature.actionText && feature.actionUrl && (
									<Link href={feature.actionUrl}>
										<Button variant="outline" className="border-foreground text-foreground">
											{feature.actionText} →
										</Button>
									</Link>
								)}
							</CardFooter>
						</Card>
					);
				})}
			</div>
		</section >
	);
}