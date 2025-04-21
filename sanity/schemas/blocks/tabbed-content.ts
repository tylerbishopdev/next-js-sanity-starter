import { defineField, defineType } from "sanity";
import { Layout } from "lucide-react";

export default defineType({
	name: "tabbed-content",
	title: "Tabbed Content",
	type: "object",
	icon: Layout,
	fields: [
		defineField({
			name: "title",
			type: "string",
			title: "Title",
			description: "Main title displayed above the tabbed content"
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
			name: "showBrowserFrame",
			type: "boolean",
			title: "Show Browser Frame",
			description: "Show a browser window frame around images",
			initialValue: true,
		}),
		defineField({
			name: "tabs",
			type: "array",
			title: "Tabs",
			description: "Add tabs to display in the tabbed interface",
			of: [
				{
					type: "object",
					title: "Tab",
					fields: [
						defineField({
							name: "id",
							type: "slug",
							title: "Tab ID",
							description: "A unique identifier for this tab (e.g., 'dashboard', 'analytics')",
							validation: (Rule) => Rule.required(),
							options: {
								source: "title",
								maxLength: 200,
							},
						}),
						defineField({
							name: "title",
							type: "string",
							title: "Tab Title",
							description: "Title for this tab",
							validation: (Rule) => Rule.required(),
						}),
						defineField({
							name: "description",
							type: "text",
							title: "Tab Description",
							description: "Description of this tab content",
							validation: (Rule) => Rule.required(),
						}),
						defineField({
							name: "image",
							type: "image",
							title: "Tab Image",
							description: "Image displayed for this tab",
							fields: [
								{
									name: "alt",
									type: "string",
									title: "Alternative Text",
								},
							],
							validation: (Rule) => Rule.required(),
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
								title: title || "Tab",
								media,
							};
						},
					},
				},
			],
			validation: (Rule) => Rule.min(1).error("At least one tab is required"),
		}),
	],
	preview: {
		select: {
			title: "title",
			tabCount: "tabs.length",
		},
		prepare({ title, tabCount = 0 })
		{
			return {
				title: "Tabbed Content",
				subtitle: title ? `${title} (${tabCount} tabs)` : `${tabCount} tabs`,
			};
		},
	},
}); 