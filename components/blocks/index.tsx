import { PAGE_QUERYResult } from "@/sanity.types"
import Hero1 from "@/components/blocks/hero/hero-1"
import Hero2 from "@/components/blocks/hero/hero-2"
import MainHero from "@/components/blocks/hero/main-hero"
import SectionHeader from "@/components/blocks/section-header"
import SplitRow from "@/components/blocks/split/split-row"
import GridRow from "@/components/blocks/grid/grid-row"
import ThreeGrid from "@/components/blocks/grid/three-grid"
import ThreeGridAnimated from "@/components/blocks/grid/three-grid-animated"
import FeaturesStaggered from "@/components/blocks/grid/features-staggered"
import Carousel1 from "@/components/blocks/carousel/carousel-1"
import TimelineRow from "@/components/blocks/timeline/timeline-row"
import Cta1 from "@/components/blocks/cta/cta-1"
import LogoCloud1 from "@/components/blocks/logo-cloud/logo-cloud-1"
import LogoCloud2 from "@/components/blocks/logo-cloud/logo-cloud-2"
import FAQs from "@/components/blocks/faqs"
import FormNewsletter from "@/components/blocks/forms/newsletter"
import ContactForm from "@/components/blocks/forms/contact-form"
import BasicForm from "@/components/blocks/forms/basic-form"
import AllPosts from "@/components/blocks/all-posts"
import BigStatsSection from "@/components/blocks/big-stats-section"
import SocialProof from "@/components/blocks/social-proof"
import FeatureCard from "@/components/blocks/feature-card"
import FlexColumns from "@/components/blocks/flex-columns"
import StatsCard from "@/components/blocks/stats-card"
import Cards from "@/components/blocks/cards"
import TabbedContent from "@/components/blocks/tabbed-content"
import TabbedFeatures from "@/components/blocks/tabbed-features"
import About from "@/components/blocks/template/about"
import FullRow from "@/components/blocks/full-row"
import Items from "@/components/blocks/items/items"

import RichTextRow from "@/components/blocks/rich-text-row"


import Carousel2 from "@/components/blocks/carousel/carousel-2"
// Case study components
import CaseStudyComponents from "./case-study"
import ContactPage from "@/components/blocks/custom/contact-page"
import CustomBlock from "./custom/custom"

type Block = NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number]

const availableCustomComponents = {
  "contact-page": ContactPage,
  "custom-block": CustomBlock,
  // Add more components here as needed in the future
}

// Component mapping for rendering blocks
const ComponentMap: Record<string, React.ComponentType<any>> = {
  "hero-1": Hero1,
  "hero-2": Hero2,
  "main-hero": MainHero,
  "section-header": SectionHeader,
  "split-row": SplitRow,
  "grid-row": GridRow,
  "three-grid": ThreeGrid,
  "three-grid-animated": ThreeGridAnimated,
  "features-staggered": FeaturesStaggered,
  "full-row": FullRow,
  "rich-text-row": RichTextRow,
  "feature-card": FeatureCard,
  "stats-card": StatsCard,
  items: Items,
  "carousel-1": Carousel1,
  "carousel-2": Carousel2,
  "timeline-row": TimelineRow,
  "cta-1": Cta1,
  "logo-cloud-1": LogoCloud1,
  "logo-cloud-2": LogoCloud2,
  faqs: FAQs,
  "form-newsletter": FormNewsletter,
  "contact-form": ContactForm,
  "basic-form": BasicForm,
  "all-posts": AllPosts,
  "big-stats-section": BigStatsSection,
  "social-proof": SocialProof,
  "flex-columns": FlexColumns,
  cards: Cards,
  "tabbed-content": TabbedContent,
  "tabbed-features": TabbedFeatures,
  about: About,
  "contact-page": ContactPage,

  "custom-block": (blockProps: any) => <CustomBlock {...blockProps} selectedComponent={blockProps.selectedComponent} components={availableCustomComponents} />,
  ...CaseStudyComponents
}

// Function to check if a block has a valid type
const isValidBlock = (block: any): boolean => {
  return block && typeof block === "object" && typeof block._type === "string" && block._type.trim() !== ""
}

export default function Blocks({ blocks }: { blocks: Block[] }) {
  // Filter out invalid blocks
  const validBlocks =
    blocks?.filter((block) => {
      if (!isValidBlock(block)) {
        // Less verbose warning - just log the fact we found an invalid block
        console.warn("Block with undefined or invalid type detected")
        return false
      }
      return true
    }) || []

  return (
    <>
      {validBlocks.map((block, i) => {
        const _blockType = (block as any)._type
        const Component = ComponentMap[_blockType]

        if (!Component) {
          // Fallback for development/debugging of new component types
          console.warn(`No component implemented for block type: ${_blockType}`)
          return <div data-type={_blockType} key={(block as any)._key || Math.random().toString()} />
        }

        return <Component {...(block as any)} key={(block as any)._key || Math.random().toString()} />
      })}
    </>
  )
}
