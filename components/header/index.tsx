import Link from "next/link"
import Logo from "@/components/logo"
import MobileNav from "@/components/header/mobile-nav"
import DesktopNav from "@/components/header/desktop-nav"
import {ModeToggle} from "@/components/menu-toggle"

// Submenu items for Solutions
const solutions = [
  {
    title: "Ezoic Ads Platform ®",
    description: "AI-driven monetization technology",
    ref: "/ezoic-ads"
  },
  {
    title: "ezID ® ",
    description: "Integrate lists into ad monetization",
    ref: "/ezid"
  },
  {
    title: "Video",
    description: "Monetize video on your own domain",
    ref: "/video"
  },
  {
    title: "FlexFusion Integration",
    description: "Fast, flexible ad-serving options",
    ref: "/setup"
  },
  {
    title: "Saas Monetization",
    description: "Generate SaaS revenue",
    ref: "/saas"
  },
  {
    title: "Newsletter Websites",
    description: "Build programmatic ad revenue",
    ref: "/newsletters"
  }
]

// Submenu items for Resources
const resources = [
  {
    title: "Services",
    description: "Expert ad management and support",
    ref: "/services"
  },

  {
    title: "Advertisers",
    description: "Learn about our identity-rich inventory",
    ref: "/advertisers"
  },
  {
    title: "Partners",
    description: "Explore our wide range of partnerships",
    ref: "/partners"
  },

  {
    title: "FAQ",
    description: "Frequently asked questions",
    ref: "/faq"
  },
  {
    title: "Docs",
    description: "Product docs and guides",
    ref: "https://docs.ezoic.com"
  },
  {
    title: "Support",
    description: "Get product support",
    ref: "https://support.ezoic.com"
  }
]

// Submenu items for Discover
const discover = [
  {
    title: "About Us",
    description: "Who we are, our history, and our values",
    ref: "/about-us"
  },
  {
    title: "Reviews & Studies",
    description: "Read reviews and studies",
    ref: "/ezoic-reviews"
  },
  {
    title: "EPMV Calculator",
    description: "Calculate revenue per session",
    ref: "/epmv-calculator"
  },
  {
    title: "Ad Index",
    description: "Analyze ad rates by niche and location",
    ref: "https://adrevenueindex.ezoic.com"
  }
]

const navItems = [
  {
    label: "Solutions",
    href: "/solutions",
    target: false,
    submenu: solutions
  },
  {
    label: "Resources",
    href: "/resources",
    target: false,
    submenu: resources
  },
  {
    label: "Discover",
    href: "/discover",
    target: false,
    submenu: discover
  },
  {
    label: "Blog",
    href: "/blog",
    target: false
  },
  {
    label: "Login",
    href: "https://login.ezoic.com/?",
    target: false
  },
  {
    label: "Get Started",
    href: "https://pubdash.ezoic.com/join?",
    target: false
  }
]

export default function Header() {
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
  )
}
