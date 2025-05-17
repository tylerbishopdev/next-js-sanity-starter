import { defineField, defineType } from "sanity";
import { colorVariant } from "./shared/color-variant";

export default defineType({
	name: "case-study-gallery",
	title: "Case Study Gallery",
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
			initialValue: "Project Gallery",
		}),
		defineField({
			name: "subtitle",
			title: "Subtitle",
			type: "string",
		}),
		defineField({
			name: "images",
			title: "Gallery Images",
			type: "array",
			of: [
				{
					type: "image",
					options: {
						hotspot: true,
					},
					fields: [
						{
							name: "caption",
							type: "string",
							title: "Caption",
						},
						{
							name: "alt",
							type: "string",
							title: "Alternative text",
							description: "Important for SEO and accessibility",
						},
					],
				},
			],
			options: {
				layout: "grid",
			},
		}),
	],
	preview: {
		select: {
			title: "title",
			subtitle: "subtitle",
			media: "images.0",
		},
		prepare({ title, subtitle, media })
		{
			return {
				title: title || "Project Gallery",
				subtitle: subtitle || "",
				media,
			};
		},
	},
}); 