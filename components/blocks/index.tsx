import { PAGE_QUERYResult } from "@/sanity.types";
import Hero1 from "@/components/blocks/hero/hero-1";
import Hero2 from "@/components/blocks/hero/hero-2";
import MainHero from "@/components/blocks/hero/main-hero";
import SectionHeader from "@/components/blocks/section-header";
import SplitRow from "@/components/blocks/split/split-row";
import GridRow from "@/components/blocks/grid/grid-row";
import ThreeGrid from "@/components/blocks/grid/three-grid";
import ThreeGridAnimated from "@/components/blocks/grid/three-grid-animated";
import FeaturesStaggered from "@/components/blocks/grid/features-staggered";
import Carousel1 from "@/components/blocks/carousel/carousel-1";
import Carousel2 from "@/components/blocks/carousel/carousel-2";
import TimelineRow from "@/components/blocks/timeline/timeline-row";
import Cta1 from "@/components/blocks/cta/cta-1";
import LogoCloud1 from "@/components/blocks/logo-cloud/logo-cloud-1";
import LogoCloud2 from "@/components/blocks/logo-cloud/logo-cloud-2";
import FAQs from "@/components/blocks/faqs";
import FormNewsletter from "@/components/blocks/forms/newsletter";
import AllPosts from "@/components/blocks/all-posts";
import BigStatsSection from "@/components/blocks/big-stats-section";
import SocialProof from "@/components/blocks/social-proof";
import FeatureCard from "@/components/blocks/feature-card";
import FlexColumns from "@/components/blocks/flex-columns";
import StatsCard from "@/components/blocks/stats-card";
import Cards from "@/components/blocks/cards";
import TabbedContent from "@/components/blocks/tabbed-content";

type Block = NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number];

// Map all components you need
const componentMap: Record<string, React.ComponentType<any>> = {
	"hero-1": Hero1,
	"hero-2": Hero2,
	"main-hero": MainHero,
	"section-header": SectionHeader,
	"split-row": SplitRow,
	"grid-row": GridRow,
	"three-grid": ThreeGrid,
	"three-grid-animated": ThreeGridAnimated,
	"features-staggered": FeaturesStaggered,
	"carousel-1": Carousel1,
	"carousel-2": Carousel2,
	"timeline-row": TimelineRow,
	"cta-1": Cta1,
	"logo-cloud-1": LogoCloud1,
	"logo-cloud-2": LogoCloud2,
	"faqs": FAQs,
	"form-newsletter": FormNewsletter,
	"all-posts": AllPosts,
	"big-stats-section": BigStatsSection,
	"social-proof": SocialProof,
	"feature-card": FeatureCard,
	"flex-columns": FlexColumns,
	"stats-card": StatsCard,
	"cards": Cards,
	"tabbed-content": TabbedContent,
};

export default function Blocks({ blocks }: { blocks: Block[] })
{
	return (
		<>
			{blocks?.map((block) =>
			{
				let Component;

				// Handle special cases until typegen is updated
				if ((block as any)._type === "big-stats-section")
				{
					Component = BigStatsSection;
				} else if ((block as any)._type === "three-grid")
				{
					Component = ThreeGrid;
				} else if ((block as any)._type === "three-grid-animated")
				{
					Component = ThreeGridAnimated;
				} else if ((block as any)._type === "social-proof")
				{
					Component = SocialProof;
				} else if ((block as any)._type === "features-staggered")
				{
					Component = FeaturesStaggered;
				} else if ((block as any)._type === "feature-card")
				{
					Component = FeatureCard;
				} else if ((block as any)._type === "main-hero")
				{
					Component = MainHero;
				} else if ((block as any)._type === "flex-columns")
				{
					Component = FlexColumns;
				} else if ((block as any)._type === "stats-card")
				{
					Component = StatsCard;
				} else if ((block as any)._type === "cards")
				{
					Component = Cards;
				} else if ((block as any)._type === "tabbed-content")
				{
					Component = TabbedContent;
				} else
				{
					Component = componentMap[block._type];
				}

				if (!Component)
				{
					// Fallback for development/debugging of new component types
					console.warn(
						`No component implemented for block type: ${block._type}`
					);
					return <div data-type={block._type} key={block._key} />;
				}
				return <Component {...(block as any)} key={block._key} />;
			})}
		</>
	);
}
