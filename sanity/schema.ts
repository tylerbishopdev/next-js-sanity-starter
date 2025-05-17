import { type SchemaTypeDefinition } from "sanity";
// documents
import page from "./schemas/documents/page";
import post from "./schemas/documents/post";
import author from "./schemas/documents/author";
import category from "./schemas/documents/category";
import faq from "./schemas/documents/faq";
import testimonial from "./schemas/documents/testimonial";
import caseStudy from "./schemas/documents/case-study";

// Schema UI shared objects
import blockContent from "./schemas/blocks/shared/block-content";
import link from "./schemas/blocks/shared/link";
import { colorVariant } from "./schemas/blocks/shared/color-variant";
import { buttonVariant } from "./schemas/blocks/shared/button-variant";
import sectionPadding from "./schemas/blocks/shared/section-padding";
// Schema UI objects
import hero1 from "./schemas/blocks/hero/hero-1";
import hero2 from "./schemas/blocks/hero/hero-2";
import mainHero from "./schemas/blocks/hero/main-hero";
import sectionHeader from "./schemas/blocks/section-header";
import splitRow from "./schemas/blocks/split/split-row";
import splitContent from "./schemas/blocks/split/split-content";
import splitCardsList from "./schemas/blocks/split/split-cards-list";
import splitCard from "./schemas/blocks/split/split-card";
import splitImage from "./schemas/blocks/split/split-image";
import splitInfoList from "./schemas/blocks/split/split-info-list";
import splitInfo from "./schemas/blocks/split/split-info";
import gridCard from "./schemas/blocks/grid/grid-card";
import pricingCard from "./schemas/blocks/grid/pricing-card";
import gridPost from "./schemas/blocks/grid/grid-post";
import gridRow from "./schemas/blocks/grid/grid-row";
import threeGrid from "./schemas/blocks/grid/three-grid";
import threeGridAnimated from "./schemas/blocks/grid/three-grid-animated";
import featuresStaggered from "./schemas/blocks/grid/features-staggered";

// Case Study blocks
import caseStudyHero from "./schemas/blocks/case-study-hero";
import caseStudyOverview from "./schemas/blocks/case-study-overview";


import caseStudyResults from "./schemas/blocks/case-study-results";
import caseStudyGallery from "./schemas/blocks/case-study-gallery";

import caseStudyGrid from "./schemas/blocks/case-study-grid";

import carousel1 from "./schemas/blocks/carousel/carousel-1";
import carousel2 from "./schemas/blocks/carousel/carousel-2";
import timelineRow from "./schemas/blocks/timeline/timeline-row";
import timelinesOne from "./schemas/blocks/timeline/timelines-1";
import cta1 from "./schemas/blocks/cta/cta-1";
import logoCloud1 from "./schemas/blocks/logo-cloud/logo-cloud-1";
import logoCloud2 from "./schemas/blocks/logo-cloud/logo-cloud-2";
import faqs from "./schemas/blocks/faqs";
import newsletter from "./schemas/blocks/forms/newsletter";
import contactForm from "./schemas/blocks/forms/contact-form";
import basicForm from "./schemas/blocks/forms/basic-form";
import allPosts from "./schemas/blocks/all-posts";
import bigStatsSection from "./schemas/blocks/big-stats-section";
import socialProof from "./schemas/blocks/social-proof";
import featureCard from "./schemas/blocks/feature-card";
import flexColumns from "./schemas/blocks/flex-columns";
// Import the stats-card schema
import statsCard from "./schemas/blocks/stats-card";
// Import the cards schema
import cards from "./schemas/blocks/cards";
// Import the tabbed-content schema
import tabbedContent from "./schemas/blocks/tabbed-content";
// Import the tabbed-features schema
import tabbedFeatures from "./schemas/blocks/tabbed-features";
// Import the about template
import about from "./schemas/blocks/template/about";
// Import the full-row component
import fullRow from "./schemas/blocks/full-row";
// Import the items component
import items from "./schemas/blocks/items";
import customBlock from "./schemas/blocks/custom";
// Import rich text row
import richTextRow from "./schemas/blocks/rich-text-row";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		// documents
		page,
		post,
		author,
		category,
		faq,
		testimonial,
		caseStudy,
		// shared objects
		blockContent,
		link,
		colorVariant,
		buttonVariant,
		sectionPadding,
		// blocks
		hero1,
		hero2,
		mainHero,
		sectionHeader,
		splitRow,
		splitContent,
		splitCardsList,
		splitCard,
		splitImage,
		splitInfoList,
		splitInfo,
		gridRow,
		gridPost,
		gridCard,
		pricingCard,
		threeGrid,
		threeGridAnimated,
		featuresStaggered,

		// case study blocks
		caseStudyHero,
		caseStudyOverview,

		caseStudyResults,
		caseStudyGallery,


		caseStudyGrid,

		carousel1,
		carousel2,
		timelineRow,
		timelinesOne,
		cta1,
		logoCloud1,
		logoCloud2,
		faqs,
		newsletter,
		contactForm,
		basicForm,
		allPosts,
		bigStatsSection,
		socialProof,
		featureCard,
		flexColumns,
		statsCard,
		cards,
		tabbedContent,
		tabbedFeatures,
		about,
		fullRow,
		items,
		customBlock,
		richTextRow,
	],
};
