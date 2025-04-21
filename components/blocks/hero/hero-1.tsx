import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { stegaClean } from "next-sanity";
import PortableTextRenderer from "@/components/portable-text-renderer";
import { PAGE_QUERYResult } from "@/sanity.types";

type Hero1Props = Extract<
	NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number],
	{ _type: "hero-1" }
>;

export default function Hero1({
	tagLine,
	title,
	body,
	image,
	links,
}: Hero1Props)
{
	return (
		<div className="container  py-20 lg:pt-40  ">

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-14 max-w-6xl mx-auto ">
				<div className="flex flex-col justify-center">
					{tagLine && (
						<p className="leading-[0] font-sans animate-fade-up [animation-delay:100ms] opacity-0 lg:text-left text-center">
							<span className=" border border-muted/50 bg-muted/20 mx-auto px-4  uppercase py-0.5 text-xs font-bold tracking-wider text-foreground mb-0.5">{tagLine}</span>
						</p>
					)}
					{title && (
						<h1 className="mt-3 font-bold leading-[1.1] text-gradient-primary animate-fade-up [animation-delay:200ms] opacity-0 lg:text-left text-center">
							{title}
						</h1>
					)}
					{body && (
						<div className="text-lg mt-6 animate-fade-up [animation-delay:300ms] opacity-0 lg:text-left text-center">
							<PortableTextRenderer value={body} />
						</div>
					)}
					{links && links.length > 0 && (
						<div className="mt-4 flex flex-wrap gap-4 animate-fade-up [animation-delay:400ms] opacity-0 lg:justify-start justify-center">
							{links.map((link) => (
								<Button
									key={link.title}
									variant={stegaClean(link?.buttonVariant)}
									asChild
								>
									<Link
										href={link.href as string}
										target={link.target ? "_blank" : undefined}
										rel={link.target ? "noopener" : undefined}
									>
										{link.title}
									</Link>
								</Button>
							))}
						</div>
					)}
				</div>
				<div className="flex flex-col justify-center">
					{image && image.asset?._id && (
						<Image
							className="rounded-xl animate-fade-up [animation-delay:500ms] opacity-0"
							src={urlFor(image).url()}
							alt={image.alt || ""}
							width={image.asset?.metadata?.dimensions?.width || 800}
							height={image.asset?.metadata?.dimensions?.height || 800}
							placeholder={image?.asset?.metadata?.lqip ? "blur" : undefined}
							blurDataURL={image?.asset?.metadata?.lqip || ""}
							quality={100}
						/>
					)}
				</div>

			</div>
		</div>
	);
}
