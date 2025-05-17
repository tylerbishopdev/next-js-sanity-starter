"use client"

import Link from "next/link"
import {useState, useEffect, useRef} from "react"
// @ts-ignore - resolving lucide-react import issues
import {ChevronDown, ChevronUp} from "lucide-react"

type SubmenuItem = {
  title: string
  description: string
  ref: string
}

type NavItem = {
  label: string
  href: string
  target?: boolean
  submenu?: SubmenuItem[]
}

export default function DesktopNav({navItems}: {navItems: NavItem[]}) {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  // Handle click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveSubmenu(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleSubmenu = (label: string) => {
    setActiveSubmenu(activeSubmenu === label ? null : label)
  }

  return (
    <div className="hidden xl:flex items-center gap-7 text-foreground mt-0.5" ref={menuRef}>
      {navItems.map((navItem) => (
        <div key={navItem.label} className="relative group ">
          {navItem.submenu ? (
            <button onClick={() => toggleSubmenu(navItem.label)} className="flex items-center gap-1 transition-colors hover:text-foreground/50 dark:hover:text-accent text-foreground text-sm cursor-auto hover:cursor-pointer">
              {navItem.label}
              {activeSubmenu === navItem.label ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          ) : (
            <Link
              href={navItem.href}
              target={navItem.target ? "_blank" : undefined}
              rel={navItem.target ? "noopener noreferrer" : undefined}
              className={
                navItem.label === "Get Started"
                  ? "inline-flex items-center justify-center whitespace-nowrap rounded-full text-xs tracking-tight font-semibold  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-background hover:brightness-125 h-7 px-3 py-1"
                  : "transition-colors hover:brightness-150 text-foreground text-sm "
              }
            >
              {navItem.label}
            </Link>
          )}

          {/* Dropdown menu */}
          {navItem.submenu && activeSubmenu === navItem.label && (
            <div className="absolute top-full left-0 mt-2 w-84 p-3  bg-background py-2 shadow-xl z-50 grid gap-2 rounded-lg shadow-border/20 border-foreground/20 border">
              {navItem.submenu.map((item) => (
                <Link key={item.title} href={item.ref} onClick={() => setActiveSubmenu(null)} className="block group px-2 hover:bg-secondary/10 p-2 transition-colors ">
                  <div className="font-medium text-sm px-2">{item.title}</div>
                  <div className="text-xs text-foreground  group-hover:text-foreground/70 lg:text-left text-center lg:px-2 px-4">{item.description}</div>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
