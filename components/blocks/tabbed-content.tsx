"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { CircleIcon, MaximizeIcon, MinimizeIcon, XIcon } from "lucide-react";
import SectionContainer from "@/components/ui/section-container";
import { stegaClean } from "next-sanity";
import { ColorVariant, SectionPadding, SanityImage, Slug } from "@/sanity.types";

interface TabItem
{
	_key: string;
	id: Slug;
	title: string;
	description: string;
	image: SanityImage;
}

interface TabbedContentProps
{
	_type: "tabbed-content";
	_key: string;
	title?: string;
	description?: string;
	tabs: TabItem[];
	padding?: SectionPadding;
	colorVariant?: ColorVariant;
	showBrowserFrame?: boolean;
}

export default function TabbedContent({
	title,
	description,
	tabs,
	padding,
	colorVariant = "background",
	showBrowserFrame = true,
}: TabbedContentProps)
{
	const color = stegaClean(colorVariant);
	const firstTabId = tabs && tabs.length > 0 ? tabs[0].id?.current || "tab-0" : "tab-0";
	const [activeTab, setActiveTab] = useState(firstTabId);

	if (!tabs || tabs.length === 0)
	{
		return null;
	}

	return (
		<SectionContainer color={color} padding={padding}>
			{(title || description) && (
				<div className="text-center mb-10">
					{title && <h2 className="text-gradient-primary tracking-tight mb-4">{title}</h2>}
					{description && (
						<p className="max-w-4xl mx-auto text-foreground">
							{description}
						</p>
					)}
				</div>
			)}

			<div className="w-full max-w-6xl mx-auto pt-8 border">
				{/* Dynamic title and description based on active tab */}
				<div className="mb-8 text-center">
					<h3 className="text-2xl font-bold mb-2 text-foreground px-4 ">
						{tabs.find((item) => item.id?.current === activeTab)?.title || ""}
					</h3>
					<p className="text-foreground max-w-2xl mx-auto">
						{tabs.find((item) => item.id?.current === activeTab)?.description || ""}
					</p>
				</div>

				<Tabs
					defaultValue={firstTabId}
					value={activeTab}
					onValueChange={setActiveTab}
					className="bg-muted"
				>
					<TabsList className={`grid mb-0 ${tabs.length <= 4 ? `grid-cols-${tabs.length}` : 'grid-cols-4'}`}>
						{tabs.map((item) => (
							<TabsTrigger
								key={item._key}
								value={item.id?.current || `tab-${item._key}`}
								className="text-sm md:text-sm border border-foreground/30 bg-background data-[state=active]:bg-primary data-[state=active]:text-background"
							>
								{item.title.split(" ")[0]}
							</TabsTrigger>
						))}
					</TabsList>

					{tabs.map((item) => (
						<TabsContent key={item._key} value={item.id?.current || `tab-${item._key}`} className="mt-0">
							{showBrowserFrame ? (
								<BrowserWindow>
									<Image
										src={item.image?.asset?.url || "/placeholder.svg"}
										alt={item.image?.alt || item.title}
										width={800}
										height={600}
										className="w-full h-auto"
									/>
								</BrowserWindow>
							) : (
								<div className="rounded-lg overflow-hidden border shadow-lg">
									<Image
										src={item.image?.asset?.url || "/placeholder.svg"}
										alt={item.image?.alt || item.title}
										width={800}
										height={600}
										className="w-full h-auto"
									/>
								</div>
							)}
						</TabsContent>
					))}
				</Tabs>
			</div>
		</SectionContainer>
	);
}

interface BrowserWindowProps
{
	children: React.ReactNode;
	className?: string;
}

function BrowserWindow({ children, className }: BrowserWindowProps)
{
	return (
		<div className={cn("rounded-lg overflow-hidden border shadow-lg", className)}>
			{/* Browser Header */}
			<div className="bg-foreground/30 p-1 flex items-center border-b">
				{/* Window Controls */}
				<div className="flex space-x-2 mr-4">
					<CircleIcon key="red-circle" className="h-3 w-3 text-pink-500 fill-pink-500" />
					<CircleIcon key="yellow-circle" className="h-3 w-3 text-yellow-400 fill-yellow-400" />
					<CircleIcon key="green-circle" className="h-3 w-3 text-primary fill-primary" />
				</div>

				{/* Address Bar */}
				<div className="flex-1 bg-muted rounded h-6 flex items-center px-3 text-sm text-foreground ">
					example.com/product-dashboard
				</div>

				{/* Window Actions */}
				<div className="flex space-x-3 ml-4">
					<MinimizeIcon key="minimize" className="h-4 w-4 text-foreground" />
					<MaximizeIcon key="maximize" className="h-4 w-4 text-foreground" />
					<XIcon key="close" className="h-4 w-4 text-foreground" />
				</div>
			</div>

			{/* Browser Content */}
			<div className="bg-background p-1">{children}</div>
		</div>
	);
} 