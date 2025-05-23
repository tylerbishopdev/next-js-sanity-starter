import React, {CSSProperties} from "react"

import {cn} from "@/lib/utils"

export interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string
  shimmerSize?: string
  borderRadius?: string
  shimmerDuration?: string
  background?: string
  className?: string
  children?: React.ReactNode
}

const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(({shimmerColor = "#010101", shimmerSize = "0.25em", shimmerDuration = "9s", borderRadius = "99px", background = "transparent", className, children, ...props}, ref) => {
  return (
    <button
      style={
        {
          "--spread": "90deg",
          "--shimmer-color": shimmerColor,
          "--radius": borderRadius,
          "--speed": shimmerDuration,
          "--cut": shimmerSize,
          "--bg": background
        } as CSSProperties
      }
      className={cn(
        "group relative z-0 flex cursor-pointer items-center border border-accent justify-center overflow-hidden whitespace-nowrap  px-3 py-1.5 text-primary [background:var(--bg)] [border-radius:var(--radius)] ",
        "transform-gpu transition-transform duration-300 ease-in-out text-xs active:translate-y-px",
        className
      )}
      ref={ref}
      {...props}
    >
      {/* spark container */}
      <div className={cn("-z-30 blur-[2px]", "absolute inset-0 overflow-visible [container-type:size]")}>
        {/* spark */}
        <div className="absolute inset-0 h-[50cqh] animate-shimmer-slide [aspect-ratio:0] [border-radius:1] [mask:none]">
          {/* spark before */}
          <div className="animate-spin-around absolute -inset-full w-auto rotate-1 [background:conic-gradient(from_calc(100deg-(var(--spread)*0.3)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
        </div>
      </div>
      {children}

      {/* Highlight */}
      <div
        className={cn(
          "insert-0 absolute size-full",

          "rounded-2xl px-4 py-1.5 text-sm font-semibold shadow-[inset_0_-8px_10px_#98D66610]",

          // transition
          "transform-gpu transition-all duration-300 ease-in-out",

          // on hover
          "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f] ",

          // on click
          "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"
        )}
      />

      {/* backdrop */}
      <div className={cn("absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]")} />
    </button>
  )
})

ShimmerButton.displayName = "ShimmerButton"

export default ShimmerButton
