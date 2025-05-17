"use client"

import { useEffect, useRef, useState } from "react"
import { SphereMask } from "@/components/ui/magicui/sphere-mask-notext"
import Particles from "@/components/ui/magicui/particles"
import { cn } from "@/lib/utils"
import { PAGE_QUERYResult } from "@/sanity.types"

// Explicitly define stat type to match what Sanity generates
export interface Stat
{
	_key: string
	value: number
	label: string
	prefix?: string
	suffix?: string
}

// Due to the generated type issues, manually define the props to match Sanity schema
export interface BigStatsSectionProps
{
	_type: "big-stats-section"
	_key: string
	title?: string
	description?: string
	stats?: Stat[]
	padding?: string
	colorVariant?: string
}

const formatValue = (value: number) =>
{
	if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`
	if (value >= 1000) return `${(value / 1000).toFixed(1)}K`
	return value.toString()
}

const CountingNumber = ({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) =>
{
	const [displayValue, setDisplayValue] = useState("0")

	useEffect(() =>
	{
		const duration = 2000 // 2 seconds
		const startTime = Date.now()
		const startValue = 0

		const updateValue = () =>
		{
			const now = Date.now()
			const elapsedTime = now - startTime

			if (elapsedTime < duration)
			{
				const progress = elapsedTime / duration
				const currentValue = Math.floor(startValue + progress * (value - startValue))
				setDisplayValue(`${prefix || ""}${formatValue(currentValue)}${suffix || ""}`)
				requestAnimationFrame(updateValue)
			} else
			{
				setDisplayValue(`${prefix || ""}${formatValue(value)}${suffix || ""}`)
			}
		}

		requestAnimationFrame(updateValue)

		return () => setDisplayValue(`${prefix || ""}${formatValue(value)}${suffix || ""}`)
	}, [value, prefix, suffix])

	return <span>{displayValue}</span>
}

export default function BigStatsSection({ title, description, stats = [], padding, colorVariant }: BigStatsSectionProps)
{
	return (
		<section className={cn("relative overflow-hidden mx-auto justify-center align-middle lg:mx-auto px-4 md:px-8 lg:px-0", padding, colorVariant)}>
			<div className="absolute inset-0" />
			<SphereMask />
			<div className="relative max-w-6xl px-4 sm:px-6 lg:px-0 mb-10 pt-20 mx-auto">
				<div className="mx-auto max-w-2xl lg:max-w-none">
					<div className="text-center">
						<h2 className=" tracking-tight pb-2.5">{title}</h2>
						<p className="mt-0 font-light tracking-tight text-foreground text-base">{description}</p>
					</div>

					<dl className="mt-16 p-2 px-4 grid grid-cols-1 gap-4 overflow-hidden text-center sm:grid-cols-2 lg:grid-cols-3">
						{stats?.map((stat: Stat) => (
							<div key={stat._key} className="flex flex-col border bg-gradient-to-tr from-muted/20 to-muted-5 border-border p-4 backdrop-blur-xl rounded-lg">
								<dt className="text-xs font-light leading-4 text-foreground/70">{stat.label}</dt>
								<dd className="order-first text-[36px] font-mono  py-0 w-full mb-0 mx-auto tracking-tighter text-gradient-primary font-bold ">
									<CountingNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
			<Particles className="absolute inset-0 -z-10" quantity={120} ease={45} size={0.35} staticity={50} color={"#415f41"} />
		</section>
	)
} 