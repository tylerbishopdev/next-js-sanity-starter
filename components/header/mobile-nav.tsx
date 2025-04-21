"use client";
import
{
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "@/components/logo";
import { useState } from "react";
import { AlignRight } from "lucide-react";

type NavItem = {
	label: string;
	href: string;
	target?: boolean;
};

export default function MobileNav({ navItems }: { navItems: NavItem[] })
{
	const [open, setOpen] = useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button
					aria-label="Open Menu"
					variant="ghost"
					className="w-10 p-5 focus-visible:ring-1 focus-visible:ring-offset-1 hover:bg-secondary/20"
				>
					<AlignRight className="dark:text-foreground" />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<div className="mx-auto pt-4">
						<Logo />
					</div>
					<div className="sr-only">
						<SheetTitle>Main Navigation</SheetTitle>
						<SheetDescription>Navigate to the website pages</SheetDescription>
					</div>
				</SheetHeader>
				<div className="pt-10 pb-20">
					<div className="container">
						<ul className="list-none text-center space-y-3">
							{navItems.map((navItem) => (
								<li key={navItem.label} className="mb-4">
									<Link
										onClick={() => setOpen(false)}
										href={navItem.href}
										target={navItem.target ? "_blank" : undefined}
										rel={navItem.target ? "noopener noreferrer" : undefined}
										className={navItem.label === "Get Started" ?
											"inline-flex items-center justify-center whitespace-nowrap text-lg font-medium ring-offset-background transition-colors bg-primary text-primary-foreground hover:bg-primary/50 px-6 py-2 mx-auto" :
											"hover:text-decoration-none hover:opacity-50 text-lg"}
									>
										{navItem.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
