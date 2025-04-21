"use client";
import SectionContainer from "@/components/ui/section-container";
import { stegaClean } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Fragment } from "react";
import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react"
import { PAGE_QUERYResult } from "@/sanity.types";

type LogoCloud1Props = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number],
  { _type: "logo-cloud-1" }
>;

export default function LogoCloud1({
  padding,
  colorVariant,
  title,
  images,
}: LogoCloud1Props) {
  const color = stegaClean(colorVariant);

  return (
    <SectionContainer
      color={color}
      padding={padding}
      className="overflow-hidden"
    >
      {title && (
        <h2 className="text-base  font-medium tracking-tighter text-center mb-4 animate-fade-up [animation-delay:100ms] opacity-0">
          <ShieldCheck className="inline-block h-5 w-5 mb-1 mr-0.5 pt-0.5 text-background " fill="#4DAAE5" /> {title}
        </h2>
      )}
      <div className="flex relative  border-x-4   border-border/50 overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:bg-linear-to-r before:from-primary/5 before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:bg-linear-to-l after:from-primary/5 after:to-transparent after:content-['']">
        <motion.div
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          animate={{
            x: ["0%", "-45%"],
          }}
          className="flex w-max gap-24 pr-24"
        >
          {[...new Array(2)].map((_, arrayIndex) => (
            <Fragment key={arrayIndex}>
              {images?.map((image, index) => (
                <div
                  key={`${image.asset?._id}-${arrayIndex}-${index}`}
                  className="shrink-0 w-28 h-28 flex items-center justify-center mx-auto"
                >
                  <Image
                    src={urlFor(image).url()}
                    className="grayscale invert dark:invert-0 dark:grayscale-0"
                    alt={image.alt || ""}
                    priority={arrayIndex === 0 && index < 3}
                    placeholder={
                      image?.asset?.metadata?.lqip &&
                        image?.asset?.mimeType !== "image/svg+xml"
                        ? "blur"
                        : undefined
                    }
                    blurDataURL={image?.asset?.metadata?.lqip || ""}
                    width={image.asset?.metadata?.dimensions?.width || 280}
                    height={image?.asset?.metadata?.dimensions?.height || 100}
                  />
                </div>
              ))}
            </Fragment>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  );
}
