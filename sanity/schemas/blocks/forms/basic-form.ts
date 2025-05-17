import { defineField, defineType } from "sanity";
import { FormInput } from "lucide-react";

export default defineType({
	name: "basic-form",
	type: "object",
	title: "Form: Basic",
	description:
		"A simple form with name and email fields using Formspree integration.",
	icon: FormInput,
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
			name: "heading",
			type: "string",
			title: "Heading",
			description: "Form heading text",
			initialValue: "Quick Contact",
		}),
		defineField({
			name: "formspreeId",
			type: "string",
			title: "Formspree ID",
			description: "Your Formspree form ID (e.g., mrbgqbql)",
			initialValue: "mrbgqbql",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "buttonText",
			type: "string",
			title: "Button Text",
			initialValue: "Subscribe",
		}),
		defineField({
			name: "redirectUrl",
			type: "string",
			title: "Redirect URL",
			description: "URL to redirect after successful form submission (e.g., /thankyou)",
			initialValue: "/thankyou",
		}),
	],
	preview: {
		select: {
			title: "heading",
		},
		prepare({ title })
		{
			return {
				title: title || "Basic Form",
				subtitle: "Basic form with Formspree integration",
				media: FormInput,
			};
		},
	},
}); 