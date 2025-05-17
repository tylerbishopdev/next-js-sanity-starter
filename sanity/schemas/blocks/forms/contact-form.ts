import { defineField, defineType } from "sanity";
import { MessageSquare } from "lucide-react";

export default defineType({
	name: "contact-form",
	type: "object",
	title: "Form: Contact",
	description:
		"A complete contact form with name, email, and message fields using Formspree integration.",
	icon: MessageSquare,
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
			initialValue: "Send a Message",
		}),
		defineField({
			name: "formspreeId",
			type: "string",
			title: "Formspree ID",
			description: "Your Formspree form ID (e.g., xaygkaee)",
			initialValue: "xaygkaee",
			validation: (Rule) => Rule.required(),
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
				title: title || "Contact Form",
				subtitle: "Contact form with Formspree integration",
				media: MessageSquare,
			};
		},
	},
}); 