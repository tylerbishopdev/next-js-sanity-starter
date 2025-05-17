import { defineField, defineType } from "sanity";
import { Files } from "lucide-react";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
	name: "page",
	type: "document",
	title: "Page",
	icon: Files,
	groups: [
		{
			name: "content",
			title: "Content",
		},
		{
			name: "seo",
			title: "SEO",
		},
		{
			name: "settings",
			title: "Settings",
		},
	],
	fields: [
		defineField({ name: "title", type: "string", group: "content" }),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			group: "settings",
			options: {
				source: "title",
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "blocks",
			type: "array",
			group: "content",
			of: [
				{ type: "hero-1" },
				{ type: "hero-2" },
				{ type: "main-hero" },
				{ type: "section-header" },
				{ type: "split-row" },
				{ type: "grid-row" },
				{ type: "three-grid" },
				{ type: "three-grid-animated" },
				{ type: "features-staggered" },
				{ type: "full-row" },
				{ type: "rich-text-row" },
				{ type: "feature-card" },
				{ type: "stats-card" },
				{ type: "items" },
				{ type: "carousel-1" },
				{ type: "carousel-2" },


				{ type: "timeline-row" },
				{ type: "cta-1" },
				{ type: "logo-cloud-1" },
				{ type: "logo-cloud-2" },
				{ type: "faqs" },
				{ type: "form-newsletter" },
				{ type: "contact-form" },
				{ type: "basic-form" },
				{ type: "all-posts" },
				{ type: "case-study-grid" },
				{ type: "big-stats-section" },
				{ type: "social-proof" },
				{ type: "flex-columns" },
				{ type: "cards" },
				{ type: "tabbed-content" },
				{ type: "tabbed-features" },
				{ type: "about" },
				{ type: "custom-block" },
			],
			options: {
				insertMenu: {
					groups: [
						{
							name: "hero",
							title: "Hero",
							of: ["hero-1", "hero-2", "main-hero"],
						},
						{
							name: "content",
							title: "Content",
							of: ["rich-text-row"],
						},
						{
							name: "logo-cloud",
							title: "Logo Cloud",
							of: ["logo-cloud-1", "logo-cloud-2"],
						},
						{
							name: "section-header",
							title: "Section Header",
							of: ["section-header"],
						},
						{
							name: "grid",
							title: "Grid",
							of: ["grid-row", "three-grid", "features-staggered"],
						},
						{
							name: "features",
							title: "Features",
							of: ["feature-card", "tabbed-content", "tabbed-features"],
						},
						{
							name: "template",
							title: "Templates",
							of: ["about"],
						},
						{
							name: "split",
							title: "Split",
							of: ["split-row", "flex-columns"],
						},
						{
							name: "carousel",
							title: "Carousel",
							of: ["carousel-1", "carousel-2"],
						},
						{
							name: "full-row",
							title: "Full Row",
							of: ["full-row"],
						},
						{
							name: "items",
							title: "Items Grid",
							of: ["items"],
						},
						{
							name: "timeline",
							title: "Timeline",
							of: ["timeline-row"],
						},
						{
							name: "cta",
							title: "CTA",
							of: ["cta-1"],
						},
						{
							name: "faqs",
							title: "FAQs",
							of: ["faqs"],
						},
						{
							name: "forms",
							title: "Forms",
							of: ["form-newsletter", "contact-form", "basic-form"],
						},
						{
							name: "all-posts",
							title: "All Posts",
							of: ["all-posts"],
						},
						{
							name: "case-studies",
							title: "Case Studies",
							of: ["case-study-grid"],
						},
						{
							name: "stats",
							title: "Stats",
							of: ["big-stats-section"],
						},
						{
							name: "testimonials",
							title: "Testimonials",
							of: ["social-proof"],
						},
						{
							name: "custom",
							title: "Custom",
							of: ["custom-block"],
						},
					],
					views: [
						{
							name: "grid",
							previewImageUrl: (block) => `/sanity/preview/${block}.jpg`,
						},
						{ name: "list" },
					],
				},
			},
		}),
		defineField({
			name: "meta_title",
			title: "Meta Title",
			type: "string",
			group: "seo",
		}),
		defineField({
			name: "meta_description",
			title: "Meta Description",
			type: "text",
			group: "seo",
		}),
		defineField({
			name: "noindex",
			title: "No Index",
			type: "boolean",
			initialValue: false,
			group: "seo",
		}),
		defineField({
			name: "ogImage",
			title: "Open Graph Image - [1200x630]",
			type: "image",
			group: "seo",
		}),
		orderRankField({ type: "page" }),
	],
});
