"use client"
import {cn} from "@/lib/utils"
import PortableTextRenderer from "@/components/portable-text-renderer"
import {motion, useInView} from "motion/react"
import {useRef} from "react"
import {PAGE_QUERYResult, ColorVariant} from "@/sanity.types"

type Block = NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number]
type TimelineRow = Extract<Block, {_type: "timeline-row"}>
type Timeline1 = NonNullable<NonNullable<TimelineRow["timelines"]>>[number]

interface Timeline1Props extends Timeline1 {
  color?: ColorVariant
}

export default function Timeline1({color, title, tagLine, body}: Timeline1Props) {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <div ref={ref} className="relative border-l-2 pl-10 lg:pl-20  py-8 max-w-6xl">
      <motion.div
        className="absolute w-8 h-8 rounded-full top-[3.5rem] lg:top-[3.75rem] left-[-1.1rem] border-8"
        initial={{
          backgroundColor: "hsl(var(--background))",
          opacity: 0.3
        }}
        animate={
          isInView && {
            backgroundColor: "hsl(var(--muted-foreground))",
            opacity: 1
          }
        }
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.6
        }}
      />
      <div className={cn(color === "primary" ? "text-background" : undefined)}>
        <h3 className="flex justify-between items-center  mb-4 text-xl">
          <motion.span
            className="text-2xl pr-4"
            initial={{opacity: 0, y: 10}}
            animate={
              isInView && {
                opacity: 1,
                y: 0
              }
            }
            transition={{
              duration: 0.8,
              ease: [0.21, 0.45, 0.27, 0.9],
              delay: 0.6
            }}
          >
            {title}
          </motion.span>
          <motion.span
            className="text-sm px-8 border-l"
            initial={{opacity: 0, y: 10}}
            animate={
              isInView && {
                opacity: 1,
                y: 0
              }
            }
            transition={{
              duration: 0.8,
              ease: [0.21, 0.45, 0.27, 0.9],
              delay: 0.6
            }}
          >
            {tagLine}
          </motion.span>
        </h3>
        {body && (
          <motion.div
            className="text-base"
            initial={{opacity: 0, y: 20}}
            animate={
              isInView && {
                opacity: 1,
                y: 0
              }
            }
            transition={{
              duration: 0.8,
              ease: [0.21, 0.45, 0.27, 0.9],
              delay: 0.7
            }}
          >
            <PortableTextRenderer value={body} />
          </motion.div>
        )}
      </div>
    </div>
  )
}
