import { defineField, defineType } from "sanity";
import { colorVariant } from "./shared/color-variant";

export default defineType({
	name: "case-study-results",
	title: "Case Study Results",
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
			name: "stats",
			title: "Key Metrics",
			description: "Add important metrics and results",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{ name: "value", type: "string", title: "Value" },
						{ name: "label", type: "string", title: "Label" },
					],
					preview: {
						select: {
							title: "value",
							subtitle: "label",
							_key: "_key"
						},
					},
				},
			],
		}),
	],
	preview: {
		prepare() {
			return {
				title: "Results Metrics",
			};
		},
	},
}); 