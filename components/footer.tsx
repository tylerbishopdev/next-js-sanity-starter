import Link from "next/link"
import Image from "next/image"
import React from "react"


interface FooterNavItem
{
	href: string
	name: string
}

interface FooterNav
{
	label: string
	items: FooterNavItem[]
}

interface FooterBottomItem
{
	href: string
	name: string
}

interface SocialLink
{
	href: string
	label: string
	icon: React.ReactNode
}

interface SiteFooterProps
{
	navs?: FooterNav[]
	bottomLinks?: FooterBottomItem[]
	socialLinks?: SocialLink[]
	logoSrc?: string
}

export default function Footer({ navs, bottomLinks, socialLinks, logoSrc }: SiteFooterProps)
{
	// Default navigation data
	const defaultNavs: FooterNav[] = [
		{
			label: "MORE",
			items: [
				{ href: "/creators", name: "Creators" },
				{ href: "/websites", name: "Websites" },
				{ href: "/video-ads", name: "Video Ads" },
				{ href: "/integrations", name: "Integrations" }
			]
		},
		{
			label: "RESOURCES",
			items: [
				{ href: "/about-us", name: "About Us" },
				{ href: "/help-center", name: "Help Center" },
				{ href: "/guides", name: "Guides" },
				{ href: "/blog", name: "Blog" }
			]
		}
	]

	// Default bottom links
	const defaultBottomLinks: FooterBottomItem[] = [
		{ href: "/privacy-policy", name: "Privacy Policy" },
		{ href: "/terms", name: "Terms" }
	]

	// Default social links
	const defaultSocialLinks: SocialLink[] = [
		{
			href: "https://www.facebook.com/ezoic",
			label: "Facebook",
			icon: (
				<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path
						fillRule="evenodd"
						d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
						clipRule="evenodd"
					/>
				</svg>
			)
		},
		{
			href: "https://x.com/ezoic",
			label: "X",
			icon: (
				<svg viewBox="0,0,256,256" width="26px" height="26px" className="dark:invert-0 invert">
					<g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
						<g transform="scale(5.12,5.12)">
							<path d="M11,4c-3.85433,0 -7,3.14567 -7,7v28c0,3.85433 3.14567,7 7,7h28c3.85433,0 7,-3.14567 7,-7v-28c0,-3.85433 -3.14567,-7 -7,-7zM11,6h28c2.77367,0 5,2.22633 5,5v28c0,2.77367 -2.22633,5 -5,5h-28c-2.77367,0 -5,-2.22633 -5,-5v-28c0,-2.77367 2.22633,-5 5,-5zM13.08594,13l9.22266,13.10352l-9.30859,10.89648h2.5l7.9375,-9.29297l6.53906,9.29297h7.9375l-10.125,-14.38672l8.21094,-9.61328h-2.5l-6.83984,8.00977l-5.63672,-8.00977zM16.91406,15h3.06445l14.10742,20h-3.06445z"></path>
						</g>
					</g>
				</svg>
			)
		},
		{
			href: "https://www.linkedin.com/company/ezoic",
			label: "LinkedIn",
			icon: (
				<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path
						fillRule="evenodd"
						d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
						clipRule="evenodd"
					/>
				</svg>
			)
		}
	]

	// Use passed-in props or fallback to defaults.
	const navData = navs || defaultNavs
	const bottomData = bottomLinks || defaultBottomLinks
	const socialData = socialLinks || defaultSocialLinks
	const logo = logoSrc || "/images/wtlogo.png"

	return (
		<footer className="bg-black text-white">
			<div className="mx-auto w-full max-w-screen-xl">
				{/* Main Navigation Sections */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-12">
					{navData.map((nav) => (
						<div key={nav.label} className="flex flex-col">
							<h2 className="text-sm font-medium mb-6">{nav.label}</h2>
							<ul className="space-y-4">
								{nav.items.map((item) => (
									<li key={item.name}>
										<Link href={item.href}>
											<span className="cursor-pointer text-sm hover:text-gray-300">{item.name}</span>
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Logo and Bottom Section */}
				<div className="border-t border-gray-800 px-8 py-6">
					<div className="flex flex-col md:flex-row justify-between items-center">
						{/* Logo */}
						<div className="mb-4 md:mb-0">
							<Link href="/">
								<Image src={logo} alt="Logo" width={120} height={40} className="invert" />
							</Link>
						</div>

						{/* Bottom Links */}
						<div className="flex flex-wrap items-center gap-6">
							{/* Social Links */}
							<div className="flex space-x-4">
								{socialData.map((social) => (
									<Link key={social.label} href={social.href} className="text-gray-400 hover:text-white">
										<span className="sr-only">{social.label}</span>
										{social.icon}
									</Link>
								))}
							</div>

							{/* Privacy & Terms */}
							<div className="flex space-x-4 text-xs text-gray-400">
								{bottomData.map((link) => (
									<Link key={link.name} href={link.href}>
										<span className="hover:text-white">{link.name}</span>
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}