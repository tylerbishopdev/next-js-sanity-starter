"use client"

import Link from "next/link"
import {Check, Database, Lock, Zap, HardDrive, Network, FileJson} from "lucide-react"
import type React from "react"
import {useEffect, useState, useRef} from "react"
import {motion, type SpringOptions, useMotionValue, useSpring, AnimatePresence, type Transition, type Variant} from "motion/react"
import {cn} from "@/lib/utils"
import type {SVGProps} from "react"

export default function BentoGrid() {
  return (
    <div className="w-full">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6 sm:py-9">
        {/* Top row - 12 column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3">
          {/* Database Card */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-6 w-full">
            <Link
              href="/database"
              className="group block h-[300px] sm:h-[350px] lg:h-[375px] relative overflow-hidden rounded-xl bg-[#1C1C1C] border border-[#2E2E2E] hover:border-cyan-500/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg w-full"
            >
              <motion.div className="relative w-full h-full" whileHover="hover">
                <motion.div
                  className="relative z-10 p-5 sm:p-8 lg:p-10 w-full"
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{duration: 0.5}}
                  variants={{
                    hover: {y: -10}
                  }}
                >
                  <div className="flex items-center gap-2">
                    <motion.div whileHover={{rotate: 360}} transition={{duration: 0.6}}>
                      <Database className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
                    </motion.div>
                    <h3 className="text-[14px] sm:text-[15px] font-medium text-white tracking-wide">Neural Engine</h3>
                  </div>
                  <p className="mt-3 sm:mt-4 lg:mt-6 text-[12px] sm:text-[13px] lg:text-[13.5px] leading-[1.6] sm:leading-[21px] text-[#979797] max-w-[280px] sm:max-w-none">
                    Every project includes <span className="text-white">advanced neural networks</span>, powered by state-of-the-art machine learning models.
                  </p>
                  <div className="mt-4 sm:mt-6 lg:mt-8 space-y-2">
                    {["Multi-modal processing", "Auto-scaling compute", "Custom model support"].map((feature, index) => (
                      <motion.div key={feature} className="flex items-center gap-2" initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.3, delay: 0.1 * index}} whileHover={{x: 5}}>
                        <motion.div whileHover={{scale: 1.2}} transition={{type: "spring", stiffness: 400, damping: 10}}>
                          <Check className="w-4 h-4 text-cyan-500" />
                        </motion.div>
                        <span className="text-[13.5px] text-[#979797]">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                <motion.div className="absolute right-0 top-0 w-[55%] h-full" initial={{opacity: 0.4}} whileHover={{opacity: 0.6}} transition={{duration: 0.3}}>
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <defs>
                      <linearGradient id="postgresGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3ECF8E" />
                        <stop offset="100%" stopColor="#3ECF8E" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>
                    <motion.path d="M20,50 Q50,20 80,50 T140,50 T200,50" stroke="url(#postgresGradient)" strokeWidth="4" fill="none" initial={{pathLength: 0}} whileHover={{pathLength: 1}} transition={{duration: 1, ease: "easeInOut"}} />
                    <motion.circle cx="100" cy="100" r="50" fill="none" stroke="url(#postgresGradient)" strokeWidth="4" initial={{scale: 0.8, opacity: 0}} whileHover={{scale: 1, opacity: 1}} transition={{duration: 0.5}} />
                    <motion.rect x="75" y="75" width="50" height="50" fill="none" stroke="url(#postgresGradient)" strokeWidth="4" initial={{rotate: 0}} whileHover={{rotate: 180}} transition={{duration: 0.8}} />
                  </svg>
                </motion.div>
              </motion.div>
            </Link>
          </div>

          {/* Auth Card */}
          <div className="col-span-3">
            <Link href="/auth" className="group block h-[300px] sm:h-[350px] lg:h-[375px] relative overflow-hidden rounded-xl bg-[#1C1C1C] border border-[#2E2E2E] hover:border-cyan-500/50 transition-all duration-300 ease-in-out">
              <motion.div className="relative z-10 p-5 sm:p-8 lg:p-10 h-full flex flex-col" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5}} whileHover="hover">
                <div className="flex items-center gap-2">
                  <motion.div whileHover={{scale: 1.2, rotate: 360}} transition={{duration: 0.6}}>
                    <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
                  </motion.div>
                  <h3 className="text-[14px] sm:text-[15px] font-medium text-white tracking-wide">Secure Training</h3>
                </div>
                <p className="mt-3 sm:mt-4 lg:mt-6 text-[12px] sm:text-[13px] lg:text-[13.5px] leading-[1.6] sm:leading-[21px] text-[#979797]">Train and fine-tune models with enterprise-grade security and data protection.</p>
                <div className="flex-grow flex items-center justify-center">
                  <motion.div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}}>
                    <motion.div
                      className="absolute inset-0 border-4 border-cyan-500/30 rounded-full"
                      variants={{
                        hover: {
                          scale: 1.1,
                          borderColor: "rgba(16, 185, 129, 0.6)",
                          transition: {duration: 0.3}
                        }
                      }}
                    />
                    <motion.div
                      className="absolute inset-4 bg-cyan-500/10 rounded-full flex items-center justify-center"
                      variants={{
                        hover: {
                          scale: 1.1,
                          backgroundColor: "rgba(16, 185, 129, 0.2)",
                          transition: {duration: 0.3, delay: 0.1}
                        }
                      }}
                    >
                      <motion.div
                        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 border-2 border-cyan-500 rounded-full flex items-center justify-center"
                        variants={{
                          hover: {
                            scale: 1.1,
                            borderColor: "rgba(16, 185, 129, 1)",
                            transition: {duration: 0.3, delay: 0.2}
                          }
                        }}
                      >
                        <motion.div
                          className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-cyan-500 inline-flex items-center justify-center rounded-full"
                          variants={{
                            hover: {
                              scale: 1.2,
                              backgroundColor: "rgba(16, 185, 129, 1)",
                              transition: {duration: 0.3, delay: 0.3}
                            }
                          }}
                        >
                          <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 fill-cyan-200 mx-auto text-black" />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          </div>

          {/* Edge Functions Card */}
          <div className="col-span-3">
            <Link href="/edge-functions" className="group block h-[300px] sm:h-[350px] lg:h-[375px] relative overflow-hidden rounded-xl bg-[#1C1C1C] border border-[#2E2E2E] hover:border-cyan-500/50 transition-all duration-300 ease-in-out">
              <motion.div className="relative z-10 p-5 sm:p-8 lg:p-10 h-full flex flex-col" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5}} whileHover="hover">
                <div className="flex items-center gap-2">
                  <motion.div whileHover={{scale: 1.2, rotate: 360}} transition={{duration: 0.6}}>
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
                  </motion.div>
                  <h3 className="text-[14px] sm:text-[15px] font-medium text-white tracking-wide">Inference API</h3>
                </div>
                <p className="mt-3 sm:mt-4 lg:mt-6 text-[12px] sm:text-[13px] lg:text-[13.5px] leading-[1.6] sm:leading-[21px] text-[#979797]">
                  Deploy models <span className="text-white">instantly</span> with our high-performance inference API.
                </p>
                <div className="flex-grow flex items-center justify-center">
                  <motion.div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}}>
                    <motion.div
                      className="absolute inset-0 bg-cyan-500/10 rounded-lg"
                      variants={{
                        hover: {
                          backgroundColor: "rgba(16, 185, 129, 0.2)",
                          transition: {duration: 0.3}
                        }
                      }}
                    />
                    <motion.div
                      className="absolute inset-3 sm:inset-4 border-2 border-cyan-500/30 rounded-lg flex items-center justify-center overflow-hidden"
                      variants={{
                        hover: {
                          borderColor: "rgba(16, 185, 129, 0.6)",
                          transition: {duration: 0.3, delay: 0.1}
                        }
                      }}
                    >
                      <motion.div
                        className="w-full h-1 bg-cyan-500"
                        initial={{x: "-100%"}}
                        variants={{
                          hover: {
                            x: "100%",
                            transition: {duration: 1, ease: "linear", repeat: Number.POSITIVE_INFINITY}
                          }
                        }}
                      />
                    </motion.div>
                    <motion.div
                      className="absolute inset-6 sm:inset-8 flex items-center justify-center"
                      variants={{
                        hover: {
                          scale: 1.1,
                          transition: {duration: 0.3, delay: 0.2}
                        }
                      }}
                    >
                      <motion.div
                        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center"
                        variants={{
                          hover: {
                            backgroundColor: "rgba(16, 185, 129, 0.4)",
                            transition: {duration: 0.3, delay: 0.3}
                          }
                        }}
                      >
                        <Zap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-cyan-500" />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
                <motion.div
                  className="mt-3 font-mono text-[10px] sm:text-[11px] lg:text-[12px] text-cyan-500 text-center"
                  variants={{
                    hover: {
                      y: -5,
                      transition: {duration: 0.3}
                    }
                  }}
                >
                  $ supabase functions serve
                </motion.div>
              </motion.div>
            </Link>
          </div>
        </div>

        {/* Bottom row - 4 equal columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 mt-3">
          {/* Storage Card */}
          <div className="col-span-1 lg:col-span-3 w-full">
            <Link href="/storage" className="group block h-[300px] sm:h-[350px] lg:h-[375px] relative overflow-hidden rounded-xl bg-[#1C1C1C] border border-[#2E2E2E] hover:border-cyan-500/50 transition-all duration-300 ease-in-out w-full">
              <motion.div className="relative z-10 p-5 sm:p-8 lg:p-10 h-full flex flex-col" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <div className="flex items-center gap-2">
                  <motion.div whileHover={{scale: 1.2, rotate: 360}} transition={{duration: 0.6}}>
                    <HardDrive className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
                  </motion.div>
                  <h3 className="text-[14px] sm:text-[15px] font-medium text-white tracking-wide">Model Registry</h3>
                </div>
                <p className="mt-3 sm:mt-4 lg:mt-6 text-[12px] sm:text-[13px] lg:text-[13.5px] leading-[1.6] sm:leading-[21px] text-[#979797]">Version, store, and manage your AI models with enterprise-grade reliability.</p>
                <div className="flex-grow flex items-end w-full">
                  <motion.div className="w-full" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.2}}>
                    <div className="grid grid-cols-4 sm:grid-cols-5 gap-1 sm:gap-1.5 lg:gap-2">
                      {Array.from({length: 15}).map((_, i) => (
                        <motion.div
                          key={i}
                          className="aspect-square bg-[#2E2E2E] rounded-sm"
                          whileHover={{scale: 1.1, backgroundColor: "#3E3E3E"}}
                          transition={{duration: 0.2}}
                          initial={{opacity: 0, scale: 0.8}}
                          animate={{opacity: 1, scale: 1}}
                          exit={{opacity: 0, scale: 0.8}}
                          custom={i}
                          variants={{
                            animate: (i) => ({
                              transition: {delay: i * 0.02}
                            })
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          </div>

          {/* Realtime Card */}
          <div className="col-span-3">
            <Link href="/realtime" className="group block h-[375px] relative overflow-hidden rounded-xl bg-[#1C1C1C] border border-[#2E2E2E] hover:border-cyan-500/50 transition-all duration-300 ease-in-out">
              <motion.div className="relative z-10 p-10" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <div className="flex items-center gap-2.5">
                  <motion.div whileHover={{scale: 1.2, rotate: 360}} transition={{duration: 0.6}}>
                    <Network className="w-6 h-6 text-cyan-500" />
                  </motion.div>
                  <h3 className="text-[15px] font-medium text-white tracking-wide">Distributed Training</h3>
                </div>
                <p className="my-6 text-[13.5px] leading-[21px] text-[#979797]">Scale your training across multiple GPUs.</p>

                <div className="flex-grow flex items-center justify-center">
                  <motion.div className="relative w-48 h-48" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}}>
                    <motion.div
                      className="absolute inset-0 bg-cyan-500/10 rounded-sm"
                      variants={{
                        hover: {
                          scale: 1.1,
                          backgroundColor: "rgba(16, 185, 129, 0.2)",
                          transition: {duration: 0.3}
                        }
                      }}
                    />
                    {[0, 1, 2].map((index) => (
                      <motion.div
                        key={index}
                        className="absolute inset-0 border-2 border-cyan-500/30 rounded-sm"
                        initial={{scale: 0.8 + index * 0.1}}
                        variants={{
                          hover: {
                            scale: 1 + index * 0.1,
                            opacity: 1 - index * 0.2,
                            transition: {duration: 0.3, delay: index * 0.1}
                          }
                        }}
                      />
                    ))}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      variants={{
                        hover: {
                          rotate: 360,
                          transition: {duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear"}
                        }
                      }}
                    >
                      <Network className="w-12 h-12 text-cyan-500" />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              <Cursor
                attachToParent
                variants={{
                  initial: {scale: 0.3, opacity: 0},
                  animate: {scale: 1, opacity: 1},
                  exit: {scale: 0.3, opacity: 0}
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.15
                }}
                className="left-12 top-4"
              >
                <motion.div className="relative z-10 p-10 h-full flex flex-col" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5}} whileHover="hover">
                  <MouseIcon />

                  <p className="bg-cyan-400 px-2 py-1  rounded-full mt-6 text-[13.5px] leading-[21px] text-[#979797]">User 1</p>
                </motion.div>
              </Cursor>
            </Link>
          </div>

          {/* Vector Card */}
          <div className="col-span-3">
            <Link href="/vector" className="group block h-[375px] relative overflow-hidden rounded-xl bg-[#1C1C1C] border border-[#2E2E2E] hover:border-cyan-500/50 transition-all duration-300 ease-in-out">
              <motion.div className="relative z-10 p-10" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <div className="flex items-center gap-2.5">
                  <motion.div whileHover={{rotate: 360}} transition={{duration: 0.6}}>
                    <Network className="w-6 h-6 text-cyan-500" />
                  </motion.div>
                  <h3 className="text-[15px] font-medium text-white tracking-wide">AutoML</h3>
                </div>
                <p className="mt-6 text-[13.5px] leading-[21px] text-[#979797]">
                  Leverage <span className="text-white">automated machine learning</span> to optimize model architecture and hyperparameters.
                </p>
                <motion.div className="mt-6 flex items-center gap-3">
                  <motion.div className="flex items-center gap-2" whileHover={{scale: 1.05}} transition={{duration: 0.2}}>
                    <span className="text-[13px] text-white">PyTorch</span>
                  </motion.div>
                  <motion.div className="flex items-center gap-2" whileHover={{scale: 1.05}} transition={{duration: 0.2}}>
                    <span className="text-[13px] text-white">TensorFlow</span>
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div className="absolute inset-0 flex items-center justify-center" initial={{opacity: 0, scale: 0.8}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.5, delay: 0.3}}>
                <div className="w-48 h-48 relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-xl transform rotate-45 opacity-30"
                    animate={{rotate: [45, 225, 45]}}
                    transition={{duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear"}}
                  />
                </div>
              </motion.div>
            </Link>
          </div>

          {/* APIs Card */}
          <div className="col-span-3">
            <Link href="/api" className="group block h-[375px] relative overflow-hidden rounded-xl bg-[#1C1C1C] border border-[#2E2E2E] hover:border-cyan-500/50 transition-all duration-300 ease-in-out">
              <motion.div className="relative z-10 p-10" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                <div className="flex items-center gap-2.5">
                  <motion.div whileHover={{scale: 1.2}} transition={{duration: 0.3}}>
                    <FileJson className="w-6 h-6 text-cyan-500" />
                  </motion.div>
                  <h3 className="text-[15px] font-medium text-white tracking-wide">Model APIs</h3>
                </div>
                <p className="mt-6 text-[13.5px] leading-[21px] text-[#979797]">
                  Access <span className="text-white">pre-trained models</span> via simple REST APIs.
                </p>
              </motion.div>
              <motion.div className="absolute inset-x-10 bottom-10 space-y-2" initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.5, delay: 0.2}}>
                {["/v1/predict", "/v1/train", "/v1/optimize"].map((endpoint, index) => (
                  <motion.div
                    key={endpoint}
                    className="flex items-center gap-2"
                    whileHover={{x: 5}}
                    transition={{duration: 0.2}}
                    initial={{opacity: 0, x: -10}}
                    animate={{opacity: 1, x: 0}}
                    custom={index}
                    variants={{
                      animate: (i) => ({
                        transition: {delay: i * 0.1}
                      })
                    }}
                  >
                    <div className="w-4 h-4 bg-[#2E2E2E] rounded-sm flex items-center justify-center">
                      <motion.div className="w-2 h-2 bg-cyan-500 rounded-sm" whileHover={{scale: 1.5}} transition={{duration: 0.2}} />
                    </div>
                    <div className="text-[12px] font-mono text-[#979797]">{endpoint}</div>
                  </motion.div>
                ))}
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export type CursorProps = {
  children: React.ReactNode
  className?: string
  springConfig?: SpringOptions
  attachToParent?: boolean
  transition?: Transition
  variants?: {
    initial: Variant
    animate: Variant
    exit: Variant
  }
  onPositionChange?: (x: number, y: number) => void
}

export function Cursor({children, className, springConfig, attachToParent, variants, transition, onPositionChange}: CursorProps) {
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(!attachToParent)

  useEffect(() => {
    if (typeof window !== "undefined") {
      cursorX.set(window.innerWidth / 2)
      cursorY.set(window.innerHeight / 2)
    }
  }, [cursorX, cursorY]) // Added cursorX and cursorY as dependencies

  useEffect(() => {
    if (!attachToParent) {
      document.body.style.cursor = "none"
    } else {
      document.body.style.cursor = "auto"
    }

    const updatePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      onPositionChange?.(e.clientX, e.clientY)
    }

    document.addEventListener("mousemove", updatePosition)

    return () => {
      document.removeEventListener("mousemove", updatePosition)
    }
  }, [cursorX, cursorY, onPositionChange])

  const cursorXSpring = useSpring(cursorX, springConfig || {duration: 0})
  const cursorYSpring = useSpring(cursorY, springConfig || {duration: 0})

  useEffect(() => {
    const handleVisibilityChange = (visible: boolean) => {
      setIsVisible(visible)
    }

    if (attachToParent && cursorRef.current) {
      const parent = cursorRef.current.parentElement
      if (parent) {
        parent.addEventListener("mouseenter", () => {
          parent.style.cursor = "none"
          handleVisibilityChange(true)
        })
        parent.addEventListener("mouseleave", () => {
          parent.style.cursor = "auto"
          handleVisibilityChange(false)
        })
      }
    }

    return () => {
      if (attachToParent && cursorRef.current) {
        const parent = cursorRef.current.parentElement
        if (parent) {
          parent.removeEventListener("mouseenter", () => {
            parent.style.cursor = "none"
            handleVisibilityChange(true)
          })
          parent.removeEventListener("mouseleave", () => {
            parent.style.cursor = "auto"
            handleVisibilityChange(false)
          })
        }
      }
    }
  }, [attachToParent])

  return (
    <motion.div
      ref={cursorRef}
      className={cn("pointer-events-none fixed left-0 top-0 z-50", className)}
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%"
      }}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div initial="initial" animate="animate" exit="exit" variants={variants} transition={transition}>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const MouseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={26} height={31} fill="none" {...props}>
      <g clipPath="url(#a)">
        <path fill={"#22c55e"} fillRule="evenodd" strokeLinecap="square" strokeWidth={2} d="M21.993 14.425 2.549 2.935l4.444 23.108 4.653-10.002z" clipRule="evenodd" className="stroke-cyan-200" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill={"#22c55e"} d="M0 0h26v31H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
