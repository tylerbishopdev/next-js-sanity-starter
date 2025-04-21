"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import SectionContainer from "@/components/ui/section-container";
import { stegaClean } from "next-sanity";
import { ColorVariant, SectionPadding, SanityImage } from "@/sanity.types";
import Link from "next/link";

interface CardFeature
{
	_key: string;
	image: SanityImage;
	title: string;
	description: string;
	actionText?: string;
	actionUrl?: string;
}

interface CardsProps
{
	_type: "cards";
	_key: string;
	title?: string;
	description?: string;
	cards: CardFeature[];
	padding?: SectionPadding;
	colorVariant?: ColorVariant;
}

export default function Cards({
	title,
	description,
	cards,
	padding,
	colorVariant = "background",
}: CardsProps)
{
	const color = stegaClean(colorVariant);
	const isOddCount = cards?.length % 2 !== 0;

	return (
		<SectionContainer color={color} padding={padding}>
			{(title || description) && (
				<div className="text-center mb-12 rounded-lg">
					{title && <h2 className="text-gradient-primary tracking-tight mb-4">{title}</h2>}
					{description && (
						<p className="max-w-2xl mx-auto text-foreground">
							{description}
						</p>
					)}
				</div>
			)}

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full rounded-lg">
				{cards?.map((feature, index) =>
				{
					// First card gets full width if there's an odd number of cards
					const isFirstCardWithOddCount = index === 0 && isOddCount;

					return (
						<Card
							key={feature._key}
							className={`transition-all rounded-lg duration-300 hover:shadow-lg w-full h-[450px] flex flex-col ${isFirstCardWithOddCount ? "md:col-span-2" : ""
								}`}
						>
							<div className="w-full h-48 relative bg-foreground/30 overflow-hidden">
								<Image
									src={feature.image?.asset?.url || "/placeholder.svg"}
									alt={feature.image?.alt || feature.title}
									fill
									className="object-cover"
								/>
							</div>
							<CardHeader>
								<CardTitle className="text-2xl py-2 text-foreground">{feature.title}</CardTitle>
							</CardHeader>
							<CardContent className="flex-grow">
								<CardDescription className="text-base text-foreground">{feature.description}</CardDescription>
							</CardContent>
							<CardFooter>
								{feature.actionText && feature.actionUrl && (
									<Link href={feature.actionUrl}>
										<Button variant="ghost" className="p-0 h-auto font-medium">
											{feature.actionText} →
										</Button>
									</Link>
								)}
							</CardFooter>
						</Card>
					);
				})}
			</div>
		</SectionContainer>
	);
} 