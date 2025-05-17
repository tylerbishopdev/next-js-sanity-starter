import { defineField, defineType } from "sanity"

export default defineType({
	name: "tabbed-features",
	title: "Tabbed Features",
	type: "object",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "text",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "tabs",
			title: "Feature Tabs",
			type: "array",
			of: [
				{
					type: "object",
					name: "tab",
					title: "Tab",
					fields: [
						defineField({
							name: "title",
							title: "Tab Title",
							type: "string",
							validation: (Rule) => Rule.required(),
						}),
						defineField({
							name: "content",
							title: "Tab Content",
							type: "array",
							of: [{ type: "block" }],
							validation: (Rule) => Rule.required(),
						}),
						defineField({
							name: "image",
							title: "Tab Image",
							type: "image",
							options: {
								hotspot: true,
							},
							fields: [
								{
									name: "alt",
									title: "Alt Text",
									type: "string",
								},
							],
						}),
					],
					preview: {
						select: {
							title: "title",
							media: "image",
						},
					},
				},
			],
			validation: (Rule) => Rule.required().min(1),
		}),
		defineField({
			name: "colorVariant",
			title: "Color Variant",
			type: "string",
			options: {
				list: [
					{ title: "Default", value: "" },
					{ title: "Muted", value: "bg-muted" },
					{ title: "Primary", value: "bg-primary text-primary-foreground" },
				],
			},
		}),
		defineField({
			name: "padding",
			title: "Section Padding",
			type: "object",
			fields: [
				defineField({
					name: "top",
					title: "Padding Top",
					type: "boolean",
					initialValue: true,
				}),
				defineField({
					name: "bottom",
					title: "Padding Bottom",
					type: "boolean",
					initialValue: true,
				}),
			],
		}),
	],
	preview: {
		select: {
			title: "title",
		},
		prepare({ title })
		{
			return {
				title: title || "Tabbed Features",
				subtitle: "Tabbed Features Block",
				media: () => "��",
			}
		},
	},
}) 