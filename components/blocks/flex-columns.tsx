"use client"

import {cn} from "@/lib/utils"
import Image from "next/image"
import SectionContainer from "@/components/ui/section-container"
import {stegaClean} from "next-sanity"
import {ColorVariant, SectionPadding} from "@/sanity.types"
import {useTheme} from "next-themes"
import {useEffect, useState} from "react"

interface FlexColumnsProps {
  columns: {
    lightImage: {
      asset: {
        url: string
      }
      alt: string
    }
    darkImage?: {
      asset: {
        url: string
      }
      alt: string
    }
  }[]
  stackAlign?: "left" | "center"
  colorVariant?: ColorVariant
  padding?: SectionPadding
}

export default function FlexColumns({columns, stackAlign = "center", colorVariant = "background", padding}: FlexColumnsProps) {
  const color = stegaClean(colorVariant)
  const alignment = stegaClean(stackAlign)
  const {theme, resolvedTheme} = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch by only rendering theme-dependent content after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <SectionContainer color={color} padding={padding}>
      <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-0 lg:w-full w-11/12 mx-auto rounded-lg ", alignment === "center" ? "text-center" : "text-left", "items-center justify-items-center")}>
        {columns.map((column, index) => {
          // Always use light image for initial render and before mounting
          // Using resolvedTheme to properly handle system theme preference
          const isDarkMode = mounted && resolvedTheme === "dark"
          const currentImage = isDarkMode && column.darkImage ? column.darkImage : column.lightImage

          // If odd number of columns, first card spans two columns on desktop
          const isOddCount = columns.length % 2 === 1
          const isFirstCardWithOddCount = index === 0 && isOddCount

          return (
            <div key={index} className={cn("relative w-full aspect-[4/3] transition-all duration-300 hover:shadow-lg flex flex-col", columns.length === 1 && "max-w-6xl mx-auto justify-center ", isFirstCardWithOddCount ? "md:col-span-2" : "")}>
              <div className="absolute inset-0 z-0">
                <Image src="/images/backgrid.png" alt="background image" className="object-contain w-full h-full grayscale dark:invert opacity-30 border rounded-lg" fill priority sizes="(max-width: 1200px) 120vw, 1200px" />
              </div>
              <Image src={currentImage.asset.url} alt={currentImage.alt} fill className="object-contain py-0 px-4 lg:py- lg:px-0" sizes={columns.length > 1 ? "(min-width: 768px) 70vw, 100vw" : "(min-width: 768px) 75vw, 100vw"} />
            </div>
          )
        })}
      </div>
    </SectionContainer>
  )
}
