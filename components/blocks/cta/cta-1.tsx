import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import SectionContainer from "@/components/ui/section-container";
import { stegaClean } from "next-sanity";
import Link from "next/link";
import PortableTextRenderer from "@/components/portable-text-renderer";
import { PAGE_QUERYResult } from "@/sanity.types";
import Image from "next/image";

type Cta1Props = Extract<
	NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number],
	{ _type: "cta-1" }
>;

export default function Cta1({
	padding,
	colorVariant,
	sectionWidth = "default",
	stackAlign = "left",
	tagLine,
	title,
	body,
	links,
}: Cta1Props)
{
	const isNarrow = stegaClean(sectionWidth) === "narrow";
	const align = stegaClean(stackAlign);
	const color = stegaClean(colorVariant);

	return (
		<SectionContainer color={color} padding={padding}>
			<div
				className={cn(
					align === "center" ? "max-w-6xl text-center p-4 px-4 xl:px-28 mx-auto text-xl h-auto pb-8 " : undefined,
					isNarrow ? "max-w-[48rem] mx-auto" : undefined
				)}
			>
				<div className="absolute inset-0 z-0 my-12 max-w-6xl mx-auto">
					<Image
						src="/images/backgrid.png"
						alt="background image"
						className="object-fill max-w-6xl mx-auto h-full invert-0 dark:invert-0 opacity-30 rounded-lg  border"
						fill
						priority
						sizes="(max-width: 1200px) 200vw, 1200px"
					/>
				</div>
				<div
					className={cn(color === "primary" ? "text-background " : undefined)}
				>
					{tagLine && (
						<h2 className=" mb-6">
							<span className="tracking-wider font-light uppercase bg-muted/20 border py-1 px-2 text-xs">{tagLine}</span>
						</h2>
					)}
					<h2 className="mb-4 text-gradient-primary py-2 text-5xl ">{title}</h2>
					{body && <PortableTextRenderer value={body} />}
				</div>
				{links && links.length > 0 && (
					<div
						className={cn(
							"mt-0 flex flex-wrap gap-2 ",
							align === "center" ? "justify-center " : undefined
						)}
					>
						{links &&
							links.length > 0 &&
							links.map((link) => (
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
			<div className="absolute inset-0 z-0"></div>
		</SectionContainer>

	);
}
