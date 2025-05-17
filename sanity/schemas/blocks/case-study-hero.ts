import { defineField, defineType } from "sanity";
import { colorVariant } from "./shared/color-variant";

export default defineType({
	name: "case-study-hero",
	title: "Case Study Hero",
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
			name: "useDocumentFields",
			title: "Use fields from case study document",
			description: "When enabled, this block will automatically use title, client, and featured image from the case study document",
			type: "boolean",
			initialValue: true,
		}),
		defineField({
			name: "clientLogo",
			title: "Client Logo",
			type: "image",
		}),
	],
	preview: {
		select: {
			title: "useDocumentFields",
		},
		prepare() {
			return {
				title: "Case Study Hero (Auto-populated)",
			};
		},
	},
}); 