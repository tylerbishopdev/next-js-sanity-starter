import { defineType, defineField } from "sanity";
import { Puzzle } from "lucide-react";

// Only including partners-header component as requested
const COMPONENT_OPTIONS = [
	{ title: "Partners Header", value: "partners-header" },
	{ title: "Contact Page", value: "contact-page" },
	{ title: "CSR Infographic", value: "csr-infographic" },
	{ title: "Cloud Page", value: "cloud-page" },
	{ title: "Custom Setup Block", value: "custom-setup-block" },
	// Add more components here as needed in the future
];

export default defineType({
	name: "custom-block",
	type: "object",
	title: "Custom Block",
	icon: Puzzle,
	fields: [
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
			name: "selectedComponent",
			type: "string",
			title: "Component",
			description: "Select which component to display in this block.",
			options: {
				list: COMPONENT_OPTIONS,
			},
			validation: (Rule) => Rule.required(),
		}),
	],
	preview: {
		select: {
			component: "selectedComponent",
		},
		prepare({ component })
		{
			const found = COMPONENT_OPTIONS.find((opt) => opt.value === component);
			return {
				title: "Custom Block",
				subtitle: found ? found.title : "No component selected",
				media: Puzzle,
			};
		},
	},
});

// To add new components, add them to COMPONENT_OPTIONS above and to the components map in the React code. 