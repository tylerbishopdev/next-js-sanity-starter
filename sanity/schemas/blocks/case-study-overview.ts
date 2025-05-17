import { defineField, defineType } from "sanity";
import { colorVariant } from "./shared/color-variant";

export default defineType({
	name: "case-study-overview",
	title: "Case Study Overview",
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
			name: "content",
			title: "Content",
			description: "Rich text content for the case study overview",
			type: "array",
			of: [
				{
					type: "block",
					styles: [
						{ title: 'Normal', value: 'normal' },
						{ title: 'H2', value: 'h2' },
						{ title: 'H3', value: 'h3' },
						{ title: 'H4', value: 'h4' },
						{ title: 'Quote', value: 'blockquote' }
					],
					lists: [
						{ title: 'Bullet', value: 'bullet' },
						{ title: 'Numbered', value: 'number' }
					],
					marks: {
						decorators: [
							{ title: 'Strong', value: 'strong' },
							{ title: 'Emphasis', value: 'em' },
							{ title: 'Code', value: 'code' },
							{ title: 'Underline', value: 'underline' },
							{ title: 'Strike', value: 'strike-through' }
						]
					}
				},
				{ type: "image" }
			]
		}),
	],
	preview: {
		prepare() {
			return {
				title: "Case Study Overview",
			};
		},
	},
}); 