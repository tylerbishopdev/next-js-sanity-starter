"use client";
import {
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
import { AlignRight, ChevronDown, ChevronUp } from "lucide-react";

type SubmenuItem = {
	title: string;
	description: string;
	ref: string;
};

type NavItem = {
	label: string;
	href: string;
	target?: boolean;
	submenu?: SubmenuItem[];
};

export default function MobileNav({ navItems }: { navItems: NavItem[] }) {
	const [open, setOpen] = useState(false);
	const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});

	const toggleSubmenu = (label: string) => {
		setExpandedItems(prev => ({
			...prev,
			[label]: !prev[label]
		}));
	};

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
									{navItem.submenu ? (
										<div>
											<button
												onClick={() => toggleSubmenu(navItem.label)}
												className="flex items-center justify-center mx-auto gap-2 hover:opacity-70 text-lg transition-colors"
											>
												{navItem.label}
												{expandedItems[navItem.label] ?
													<ChevronUp className="h-5 w-5" /> :
													<ChevronDown className="h-5 w-5" />
												}
											</button>

											{/* Submenu items */}
											{expandedItems[navItem.label] && (
												<ul className=" pt-2 list-none space-y-2 py-4  my-3 border-b border-border/50 mx-auto text-center">
													{navItem.submenu.map((item) => (
														<li key={item.title} className="py-1">
															<Link
																href={item.ref}
																onClick={() => setOpen(false)}
																className="block text-sm text-foreground/90 hover:opacity-70 transition-opacity"
															>
																<div className="font-medium">{item.title}</div>
																<div className="text-xs text-foreground/60 max-w-xs mx-auto">{item.description}</div>
															</Link>
														</li>
													))}
												</ul>
											)}
										</div>
									) : (
										<Link
											onClick={() => setOpen(false)}
											href={navItem.href}
											target={navItem.target ? "_blank" : undefined}
											rel={navItem.target ? "noopener noreferrer" : undefined}
											className={navItem.label === "Get Started" ?
												"inline-flex items-center justify-center whitespace-nowrap text-sm mt-4 font-medium ring-offset-background transition-colors bg-primary rounded-full text-primary-foreground hover:bg-primary/50 px-6 py-2 mx-auto" :
												"hover:text-decoration-none hover:opacity-50 text-lg"}
										>
											{navItem.label}
										</Link>
									)}
								</li>
							))}
						</ul>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
