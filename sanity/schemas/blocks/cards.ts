import { defineField, defineType } from "sanity";
import { LayoutGrid } from "lucide-react";

export default defineType({
	name: "cards",
	title: "Cards",
	type: "object",
	icon: LayoutGrid,
	fields: [
		defineField({
			name: "title",
			type: "string",
			title: "Title",
			description: "Main title displayed above the cards"
		}),
		defineField({
			name: "description",
			type: "text",
			title: "Description",
			description: "Optional description text displayed below the title"
		}),
		defineField({
			name: "padding",
			type: "section-padding",
		}),
		defineField({
			name: "colorVariant",
			type: "color-variant",
			title: "Color Variant",
			description: "Select a background color variant",
		}),
		defineField({
			name: "cards",
			type: "array",
			title: "Cards",
			description: "Add cards to be displayed in the grid",
			of: [
				{
					type: "object",
					title: "Card",
					fields: [
						defineField({
							name: "title",
							type: "string",
							title: "Card Title",
							validation: (Rule) => Rule.required(),
						}),
						defineField({
							name: "description",
							type: "text",
							title: "Card Description",
							validation: (Rule) => Rule.required(),
						}),
						defineField({
							name: "image",
							type: "image",
							title: "Card Image",
							description: "Image displayed at the top of the card",
							fields: [
								{
									name: "alt",
									type: "string",
									title: "Alternative Text",
								},
							],
							validation: (Rule) => Rule.required(),
						}),
						defineField({
							name: "actionText",
							type: "string",
							title: "Action Button Text",
							description: "Text for the action button",
							initialValue: "Learn more",
						}),
						defineField({
							name: "actionUrl",
							type: "string",
							title: "Action URL",
							description: "URL for the action button",
						}),
					],
					preview: {
						select: {
							title: "title",
							media: "image",
						},
						prepare({ title, media })
						{
							return {
								title: title || "Card",
								media,
							};
						},
					},
				},
			],
		}),
	],
	preview: {
		select: {
			title: "title",
			cardCount: "cards.length",
		},
		prepare({ title, cardCount = 0 })
		{
			return {
				title: "Cards",
				subtitle: title ? `${title} (${cardCount} cards)` : `${cardCount} cards`,
			};
		},
	},
}); 