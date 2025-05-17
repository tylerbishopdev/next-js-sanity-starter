import { defineField, defineType } from "sanity";
import { FileTerminal } from "lucide-react";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
	name: "caseStudy",
	type: "document",
	title: "Case Study",
	icon: FileTerminal,
	groups: [
		{
			name: "content",
			title: "Content",
		},
		{
			name: "details",
			title: "Project Details",
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
		defineField({
			name: "title",
			type: "string",
			group: "content",
			validation: (Rule) => Rule.required(),
		}),
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
			name: "client",
			title: "Client Name",
			type: "string",
			group: "details",
		}),
		defineField({
			name: "projectDate",
			title: "Project Date",
			type: "date",
			group: "details",
			options: {
				dateFormat: "YYYY-MM",
			},
		}),
		defineField({
			name: "featuredImage",
			title: "Featured Image",
			type: "image",
			group: "content",
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: "summary",
			title: "Project Summary",
			type: "text",
			rows: 3,
			group: "content",
		}),
		defineField({
			name: "tags",
			title: "Project Tags",
			type: "array",
			of: [{ type: "string" }],
			options: {
				layout: "tags",
			},
			group: "details",
		}),
		defineField({
			name: "blocks",
			type: "array",
			group: "content",
			of: [
				{ type: "case-study-hero" },
				{ type: "case-study-overview" },
				{ type: "case-study-results" },
			],
			options: {
				insertMenu: {
					groups: [
						{
							name: "case-study",
							title: "Case Study Blocks",
							of: [
								"case-study-hero",
								"case-study-overview",
								"case-study-results",
							],
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
		orderRankField({ type: "caseStudy" }),
	],
	preview: {
		select: {
			title: "title",
			client: "client",
			media: "featuredImage",
		},
		prepare({ title, client, media }) {
			return {
				title,
				subtitle: client ? `Client: ${client}` : "",
				media,
			};
		},
	},
}); 