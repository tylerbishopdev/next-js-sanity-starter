import { defineField, defineType } from "sanity";
import { colorVariant } from "./shared/color-variant";

export default defineType({
	name: "case-study-grid",
	title: "Case Study Grid",
	type: "object",
	fields: [
		defineField({
			name: "colorVariant",
			title: "Color Variant",
			type: "color-variant",
		}),
		defineField({
			name: "padding",
			title: "Section Padding",
			type: "section-padding",
		}),
		defineField({
			name: "title",
			title: "Section Title",
			type: "string",
			initialValue: "Our Case Studies",
		}),
		defineField({
			name: "subtitle",
			title: "Subtitle",
			type: "string",
		}),
		defineField({
			name: "itemsPerPage",
			title: "Items Per Page",
			type: "number",
			initialValue: 6,
			validation: (Rule) => Rule.min(1).max(12),
		}),
		defineField({
			name: "showFilters",
			title: "Show Category Filters",
			type: "boolean",
			initialValue: true,
		}),
		defineField({
			name: "tags",
			title: "Filter by Tags",
			type: "array",
			of: [{ type: "string" }],
			description: "Leave empty to show all case studies or specify tags to filter by",
			options: {
				layout: "tags",
			},
		}),
	],
	preview: {
		select: {
			title: "title",
			subtitle: "subtitle",
		},
		prepare({ title, subtitle })
		{
			return {
				title: title || "Case Study Grid",
				subtitle: subtitle || "Displays a paginated grid of case studies",
			};
		},
	},
}); 