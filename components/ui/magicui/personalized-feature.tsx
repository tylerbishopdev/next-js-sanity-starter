"use client"

import {cubicBezier, motion} from "framer-motion"
import {Button} from "@/components/ui/button" // Add this import
import Image from "next/image"

export function PersonalizedFeatureCard() {
  const variant1 = {
    initial: {
      x: 35,
      y: 5,
      scale: 0.8,
      rotate: -3,
      zIndex: 1,
      transition: {
        delay: 0.05,
        duration: 0.1,
        ease: cubicBezier(0.22, 1, 0.36, 1)
      }
    },
    whileHover: {
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      boxShadow: "rgba(39,245,76,0.15) 10px 20px 70px -20px, rgba(36,42,66,0.04) 0px 10px 24px -8px, rgba(36,42,66,0.06) 0px 1px 4px -1px",
      transition: {
        delay: 0.05,
        duration: 0.1,
        ease: cubicBezier(0.22, 1, 0.36, 1)
      }
    }
  }
  const variant2 = {
    initial: {
      scale: 1.1,
      zIndex: 2,
      transition: {
        delay: 0.05,
        duration: 0.1,
        ease: cubicBezier(0.22, 1, 0.36, 1)
      }
    },
    whileHover: {
      scale: 1,
      boxShadow: "rgba(39,127,245,0.15) 0px 20px 70px -10px, rgba(36,42,66,0.04) 0px 10px 24px -8px, rgba(36,42,66,0.06) 0px 1px 4px -1px",
      transition: {
        delay: 0.05,
        duration: 0.1,
        ease: cubicBezier(0.22, 1, 0.36, 1)
      }
    }
  }
  const variant3 = {
    initial: {
      x: -35,
      y: 5,
      scale: 0.8,
      rotate: 3,
      zIndex: 1,
      transition: {
        delay: 0.05,
        duration: 0.1,
        ease: cubicBezier(0.22, 1, 0.36, 1)
      }
    },
    whileHover: {
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      boxShadow: "rgba(245,40,145,0.15) 0px 20px 70px -10px, rgba(36,42,66,0.04) 0px 10px 24px -8px, rgba(36,42,66,0.06) 0px 1px 4px -1px",
      transition: {
        delay: 0.05,
        duration: 0.1,
        ease: cubicBezier(0.22, 1, 0.36, 1)
      }
    }
  }

  const containerVariants = {
    initial: {},
    whileHover: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="relative px-2 h-full w-full  max-w-[32rem] transform-gpu   md:max-h-[500px]">
      <motion.div variants={containerVariants} initial="initial" whileHover="whileHover" className="flex h-full w-full cursor-pointer flex-col items-start justify-between">
        <div className="flex h-full w-full items-center justify-center rounded-t-xl bg-transparent p-2">
          <motion.div className="flex h-[230px] w-full items-center justify-between gap-x-4">
            <motion.div variants={variant1} className="z-[3] flex h-fit w-full  flex-col items-center justify-between gap-x-2 gap-y-2 rounded-md border border-muted/40 bg-muted-foreground/90 p-5 px-2.5 transition-all duration-100 ease-linear ">
              <div className="h-8 w-8 rounded-full bg-accent">
                <Image className="h-full w-full rounded-full object-cover" src="/images/icon2.png" alt="3" width={100} height={100} />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-2 w-10 rounded-full bg-muted/70"></div>
                <div className="h-2 w-10 rounded-full bg-muted/60"></div>
                <div className="h-2 w-10 rounded-full bg-foreground/30"></div>
                <div className="h-2 w-10 rounded-full bg-muted/80"></div>
              </div>
            </motion.div>
            <motion.div variants={variant2} className="z-[3] flex h-fit w-full  flex-col items-center justify-between gap-x-2 gap-y-2 rounded-md border border-muted/40 bg-[#787878]/90 p-5 px-2.5 transition-all duration-100 ease-linear ">
              <div className="h-8 w-8 rounded-full bg-accent">
                <Image className="h-full w-full rounded-full object-cover" src="/images/icon1.png" alt="1" width={100} height={100} />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-2 w-10 rounded-full bg-muted-foreground"></div>
                <div className="h-2 w-10 rounded-full bg-muted-foreground/90"></div>
                <div className="h-2 w-10 rounded-full bg-muted-foreground/70"></div>
                <div className="h-2 w-10 rounded-full bg-muted-foreground/80"></div>
              </div>
            </motion.div>
            <motion.div variants={variant3} className="z-[3] flex h-fit w-full flex-col items-center justify-between gap-x-2 gap-y-2 rounded-md border border-muted/40 bg-muted-foreground/90 p-5 px-2.5 transition-all duration-100 ease-linear ">
              <div className="h-8 w-8 rounded-full bg-secondary">
                <Image className="h-full w-full rounded-full object-cover" src="/images/icon3.png" alt="2" width={100} height={100} />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-2 w-10 rounded-full bg-muted"></div>
                <div className="h-2 w-10 rounded-full bg-muted/80"></div>
                <div className="h-2 w-10 rounded-full bg-foreground/50"></div>
                <div className="h-2 w-10 rounded-full bg-muted/90"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        
      </motion.div>
    </div>
  )
}
