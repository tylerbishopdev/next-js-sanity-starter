import { Button } from "@/components/ui/button";
import Link from "next/link";
import { stegaClean } from "next-sanity";
import PortableTextRenderer from "@/components/portable-text-renderer";
import { PAGE_QUERYResult } from "@/sanity.types";
import Image from "next/image";
type Hero2Props = Extract<
	NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number],
	{ _type: "hero-2" }
>;

export default function Hero2({ tagLine, title, body, links }: Hero2Props)
{
	return (



		<div className="container flex flex-col items-center justify-center  px-2 pt-10 mt-12 pb-10 max-w-6xl mx-auto">



			{tagLine && (
				<p className=" font-sans flex justify-center items-center animate-fade-up  [animation-delay:100ms] opacity-0">
					<span className="text-center  border border-muted/50 bg-muted/20 mx-auto px-4  uppercase py-0.5 text-xs font-bold tracking-wider text-foreground mb-0.5">{tagLine}</span>
				</p>
			)}
			{title && (
				<h1 className="mt-4 font-bold leading-[1.1] text-4xl md:text-5xl  lg:text-6xl animate-fade-up [animation-delay:200ms] opacity-0 text-gradient-primary">
					{title}
				</h1>
			)}
			{body && (
				<div className="text-lg mt-6 text-center max-w-4xl mx-auto animate-fade-up [animation-delay:300ms] opacity-0">
					<PortableTextRenderer value={body} />
				</div>
			)}
			{links && links.length > 0 && (
				<div className="mt-4 flex flex-wrap gap-4 justify-center animate-fade-up [animation-delay:400ms] opacity-0">
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

	);
}
