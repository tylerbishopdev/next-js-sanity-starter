"use client"

import {useState} from "react"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {cn} from "@/lib/utils"
import Image from "next/image"
import {CircleIcon, MaximizeIcon, MinimizeIcon, XIcon} from "lucide-react"
import SectionContainer from "@/components/ui/section-container"
import {stegaClean} from "next-sanity"
import {ColorVariant, SectionPadding, Slug} from "@/sanity.types"

interface TabItem {
  _key: string
  id: Slug
  title: string
  description: string
  image: {
    asset?: {
      url?: string
      _id?: string
    }
    alt?: string
  }
}

interface TabbedContentProps {
  _type: "tabbed-content"
  _key: string
  title?: string
  description?: string
  tabs: TabItem[]
  padding?: SectionPadding
  colorVariant?: ColorVariant
  showBrowserFrame?: boolean
}

export default function TabbedContent({title, description, tabs, padding, colorVariant = "background", showBrowserFrame = true}: TabbedContentProps) {
  const color = stegaClean(colorVariant)
  const firstTabId = tabs && tabs.length > 0 ? tabs[0].id?.current || "tab-0" : "tab-0"
  const [activeTab, setActiveTab] = useState(firstTabId)

  if (!tabs || tabs.length === 0) {
    return null
  }

  return (
    <SectionContainer color={color} padding={padding}>
      {(title || description) && (
        <div className="text-center mb-10">
          {title && <h2 className=" mb-4">{title}</h2>}
          {description && <p className="max-w-4xl mx-auto text-foreground">{description}</p>}
        </div>
      )}

      <div className="w-full max-w-6xl mx-auto pt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side: Tabs and content */}
          <div className="w-full lg:w-1/3 order-2 lg:order-1">
            {/* Dynamic title and description based on active tab */}
            <div className="mb-5 p-4 border border-border rounded-md bg-bento">
              <h3 className="text-2xl font-whyte mb-3 text-foreground">{tabs.find((item) => item.id?.current === activeTab)?.title || ""}</h3>
              <p className="text-foreground leading-relaxed">{tabs.find((item) => item.id?.current === activeTab)?.description || ""}</p>
            </div>

            <Tabs defaultValue={firstTabId} className="w-full" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="flex flex-col w-full gap-1 h-auto bg-transparent p-0">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab._key}
                    value={tab.id?.current || ""}
                    className="justify-start w-full px-3 py-2 text-sm text-left text-wrap rounded data-[state=active]:bg-primary/70 data-[state=active]:text-background shadow-sm border border-border"
                  >
                    {tab.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Right side: Image that changes with tabs */}
          <div className="w-full lg:w-2/3 order-1 lg:order-2 mb-8 lg:mb-0 lg:sticky lg:top-24 self-start">
            {showBrowserFrame ? (
              <BrowserWindow>
                <div className="aspect-auto w-full min-h-[400px] max-h-[600px] relative p-2">
                  {tabs.find((item) => item.id?.current === activeTab)?.image?.asset?.url ? (
                    <Image
                      src={tabs.find((item) => item.id?.current === activeTab)?.image?.asset?.url || ""}
                      alt={tabs.find((item) => item.id?.current === activeTab)?.image?.alt || tabs.find((item) => item.id?.current === activeTab)?.title || ""}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                    />
                  ) : null}
                </div>
              </BrowserWindow>
            ) : (
              <div className="aspect-auto w-full min-h-[400px] max-h-[600px] rounded-md overflow-hidden relative p-1">
                {tabs.find((item) => item.id?.current === activeTab)?.image?.asset?.url ? (
                  <Image
                    src={tabs.find((item) => item.id?.current === activeTab)?.image?.asset?.url || ""}
                    alt={tabs.find((item) => item.id?.current === activeTab)?.image?.alt || tabs.find((item) => item.id?.current === activeTab)?.title || ""}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                  />
                ) : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

interface BrowserWindowProps {
  children: React.ReactNode
  className?: string
}

function BrowserWindow({children, className}: BrowserWindowProps) {
  return (
    <div className={cn("rounded-lg overflow-hidden border shadow-lg", className)}>
      {/* Browser Header */}
      <div className="bg-foreground/30 p-1 flex items-center border-b">
        {/* Window Controls */}
        <div className="flex space-x-2 mr-4">
          <CircleIcon key="red-circle" className="h-3 w-3 text-pink-500 fill-pink-500" />
          <CircleIcon key="yellow-circle" className="h-3 w-3 text-yellow-400 fill-yellow-400" />
          <CircleIcon key="green-circle" className="h-3 w-3 text-primary fill-primary" />
        </div>

        {/* Address Bar */}
        <div className="flex-1 bg-muted rounded h-6 flex items-center px-3 text-sm text-foreground ">example.com/product-dashboard</div>

        {/* Window Actions */}
        <div className="flex space-x-3 ml-4">
          <MinimizeIcon key="minimize" className="h-4 w-4 text-foreground" />
          <MaximizeIcon key="maximize" className="h-4 w-4 text-foreground" />
          <XIcon key="close" className="h-4 w-4 text-foreground" />
        </div>
      </div>

      {/* Browser Content */}
      <div className="bg-background p-1">{children}</div>
    </div>
  )
}
