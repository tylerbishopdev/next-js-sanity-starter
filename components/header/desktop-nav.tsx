"use client";

import Link from "next/link";

type NavItem = {
	label: string;
	href: string;
	target?: boolean;
};

export default function DesktopNav({ navItems }: { navItems: NavItem[] })
{
	return (
		<div className="hidden xl:flex items-center gap-7 text-foreground mt-0.5">
			{navItems.map((navItem) => (
				<div key={navItem.label} className="relative group">
					<Link
						href={navItem.href}
						target={navItem.target ? "_blank" : undefined}
						rel={navItem.target ? "noopener noreferrer" : undefined}
						className={navItem.label === "Get Started" ?
							"inline-flex items-center justify-center whitespace-nowrap rounded-full text-xs tracking-tight font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-background hover:brightness-125 h-7 px-3 py-1" :
							"transition-colors hover:brightness-150 text-foreground text-sm"}
					>
						{navItem.label}
					</Link>
				</div>
			))}
		</div>
	);
}
