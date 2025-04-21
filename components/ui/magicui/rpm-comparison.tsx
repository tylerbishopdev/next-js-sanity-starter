"use client"

import React from "react"
import Image from "next/image"

interface RPMMetric {
  label: string
  sublabel: string
  percentage: number
  barWidth?: string
}

interface RPMComparisonProps {
  metrics: {
    identified: RPMMetric
    nonIdentified: RPMMetric
    unknownTraffic: RPMMetric
  }
  className?: string
}

const RPMBar: React.FC<{metric: RPMMetric}> = ({metric}) => (
  <div className="space-y-0">
    <div className="space-y-1">
      <div className=" font-semibold text-foreground">{metric.label}</div>
      <div className=" font-mono text-muted">{metric.sublabel}</div>
    </div>
    <div className="relative h-7">
      <div className="absolute inset-1 bg-gradient-to-r from-primary to-color-3 rounded-full transition-all duration-500" style={{width: metric.barWidth || "100%"}} />
      <div className="absolute text-accent font-mono right-0 top-1/2 -translate-y-1/2 text-bold  whitespace-nowrap pl-2">+{metric.percentage}%</div>
    </div>
  </div>
)

const RPMComparison: React.FC<RPMComparisonProps> = ({metrics, className = ""}) => {
  if (!metrics || !metrics.identified || !metrics.nonIdentified) {
    return <div>Loading...</div> // Or any other fallback UI
  }

  return (
    <div className=" justify-center items-center  flex max-w-6xl px-4 mx-auto ">
      <div className="justify-items-center  w-full p-4 border border-border rounded-2xl py-12 mb-6 bg-gradient-to-tr from-input/20 to-muted/10">
        <div className="lg:flex lg:items-center lg:justify-between mb-10">
          <div className="lg:w-1/3 lg:pr-6 flex lg:justify-end">
            <Image src="/assets/ezid-lg.png" alt="RPM Comparison" width={600} height={400} className="w-1/2 lg:w-2/3 my-4 mx-auto lg:mx-0" />
          </div>
          <div className="lg:w-2/3 lg:text-left max-w-2xl">
            <h2 className=" mx-auto lg:mx-0 text-center lg:text-left">The Easiest Way To Increase Revenue From Lists & Registered Users</h2>
            <p className=" w-3/4">Our Revenue Management Platform (RPM) allows you to increase revenue from your lists and registered users with ease and transparency.</p>
          </div>
        </div>
        <div className={`flex flex-col gap-3.5 py-4 px-5 mt-10 max-w-4xl mx-auto rounded text-muted ${className}`}>
          <RPMBar
            metric={{
              ...metrics.identified,
              barWidth: "84%"
            }}
          />
          <RPMBar
            metric={{
              ...metrics.nonIdentified,
              barWidth: "63%"
            }}
          />
          <RPMBar
            metric={{
              ...metrics.unknownTraffic,
              barWidth: "50%"
            }}
          />
          <h6 className="pt-6 px-6 text-sm mb-6 text-accent tracking-normal">+ Impact of using ezID on ad rates paid for the audience</h6>
        </div>
      </div>
    </div>
  )
}

export default RPMComparison
