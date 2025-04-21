import React from "react"
import Link from "next/link"

interface BentoItem {
  title: string
  description: string
  link?: {
    href: string
    label: string
  }
  component: React.ReactNode
}

interface ThreeGridProps {
  items: BentoItem[]
  children?: React.ReactNode
}

const BentoBox: React.FC<{item: BentoItem; className?: string}> = ({item, className}) => {
  return (
    <div className={`border border-foreground/20 bg-gradient-to-tl from-foreground/5 to-input/10 rounded-xl p-2 ${className}`}>
      <div className="lg:h-4/5 flex flex-col justify-between">
        <div className="flex-grow flex flex-col justify-center">
          <div className="mb-0">{item.component}</div>
          <div className="px-6 lg:px-10">
            <h3 className="mb-0 text-pretty">{item.title}</h3>
            <p className="leading-7 text-muted max-w-3xl">{item.description}</p>
          </div>
        </div>
        {item.link && (
          <Link href={item.link.href} className="bg-muted/10 text-sm font-semibold rounded-full text-accent/75 shadow hover:bg-accent/30 hover:text-primary s px-2 pb-2 mb-4 pt-2 text-center w-28  mx-8 inline-flex items-center justify-center mt-4">
            {item.link.label}
          </Link>
        )}
      </div>
    </div>
  )
}

const ThreeGrid: React.FC<ThreeGridProps> = ({items = [], children}) => {
  if (items.length === 0) {
    return null
  }

  return (
    <section className="w-full max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 z-40">
        <BentoBox item={items[0]} className="md:col-span-2 md:row-span-2 z-40 pb-2" />
        {items[1] && <BentoBox item={items[1]} className="pb-2" />}
        {items[2] && <BentoBox item={items[2]} />}
      </div>
      {children}
    </section>
  )
}

export default ThreeGrid
