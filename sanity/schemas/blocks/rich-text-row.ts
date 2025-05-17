import { defineField, defineType } from "sanity";
import { TextIcon } from "lucide-react";
import { SECTION_WIDTH } from "./shared/layout-variants";

export default defineType({
	name: "rich-text-row",
	title: "Rich Text Row",
	type: "object",
	icon: TextIcon,
	fields: [
		defineField({
			name: "title",
			type: "string",
			title: "Title",
			description: "Optional title for the rich text section",
		}),
		defineField({
			name: "content",
			type: "block-content",
			title: "Content",
			description: "Rich text content with full editing capabilities",
		}),
		defineField({
			name: "colorVariant",
			type: "color-variant",
			title: "Background Color",
		}),
		defineField({
			name: "padding",
			type: "section-padding",
			title: "Section Padding",
		}),
		defineField({
			name: "width",
			type: "string",
			title: "Container Width",
			options: {
				list: SECTION_WIDTH,
				layout: "radio",
			},
			initialValue: "default",
		}),
		defineField({
			name: "textAlign",
			type: "string",
			title: "Text Alignment",
			options: {
				list: [
					{ title: "Left", value: "left" },
					{ title: "Center", value: "center" },
					{ title: "Right", value: "right" },
				],
				layout: "radio",
			},
			initialValue: "left",
		}),
	],
	preview: {
		select: {
			title: "title",
		},
		prepare({ title })
		{
			return {
				title: title || "Rich Text Row",
				subtitle: "Full rich text content block",
				media: TextIcon,
			};
		},
	},
}); 