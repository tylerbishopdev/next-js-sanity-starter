import React from "react"

import {cn} from "@/lib/utils"
interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function RainbowButton({children, className, ...props}: RainbowButtonProps) {
  return (
    <button
      className={cn(
        "group relative inline-flex h-9 animate-rainbow rounded-full cursor-pointer items-center justify-center  text-sm border-0 bg-[length:200%] px-5 py-1.5 font-semibold text-background hover:text-primary-foreground hover:shadow-md hover:shadow-primary/50 hover:opacity-80 transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none opacity-90 disabled:opacity-50",

        // before styles
        "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]",

        // light mode colors
        "bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",

        // dark mode colors
        "dark:bg-[linear-gradient(#CCD1C7,#C4D4B5),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",

        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
