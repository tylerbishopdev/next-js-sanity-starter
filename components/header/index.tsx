import Link from "next/link";
import Logo from "@/components/logo";
import MobileNav from "@/components/header/mobile-nav";
import DesktopNav from "@/components/header/desktop-nav";
import { ModeToggle } from "@/components/menu-toggle";

const navItems = [
	{
		label: "Creators",
		href: "/creators",
		target: false,
	},
	{
		label: "Websites",
		href: "/websites",
		target: false,
	},
	{
		label: "About",
		href: "/about",
		target: false,
	},
	{
		label: "Blog",
		href: "/blog",
		target: false,
	},
	{
		label: "Login",
		href: "/login?",
		target: false,
	},
	{
		label: "Get Started",
		href: "/join?",
		target: false,
	}
];

export default function Header()
{
	return (
		<header className="sticky top-0  mx-auto  bg-background/80 backdrop-blur-sm z-50 py-2">
			<div className="container flex items-center justify-between h-12 align-middle">
				<Link href="/" aria-label="Home page">
					<Logo />
				</Link>
				<div className="hidden xl:flex gap-7 items-center justify-between">
					<DesktopNav navItems={navItems} />
					<ModeToggle />
				</div>
				<div className="flex items-center xl:hidden">
					<ModeToggle />
					<MobileNav navItems={navItems} />
				</div>
			</div>
		</header>
	);
}
