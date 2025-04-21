import { defineField, defineType } from "sanity";
import { BadgeCheck } from "lucide-react";

export default defineType({
  name: "social-proof",
  type: "object",
  title: "Social Proof",
  icon: BadgeCheck,
  fields: [
    defineField({
      name: "title",
      type: "string",
      description: "Optional heading for the social proof section",
    }),
    defineField({
      name: "description",
      type: "text",
      description: "Optional description text for the section",
    }),
    defineField({
      name: "testimonials",
      type: "array",
      description: "Add testimonials with customer details and stats",
      of: [
        {
          type: "object",
          title: "Testimonial",
          fields: [
            defineField({
              name: "image",
              type: "image",
              title: "Person Image",
              description: "Person's profile image (ideally circular)",
            }),
            defineField({
              name: "name",
              type: "string",
              description: "Person's name",
            }),
            defineField({
              name: "position",
              type: "string",
              description: "Person's job title or position",
            }),
            defineField({
              name: "companyLogo",
              type: "image",
              title: "Company Logo",
              description: "Company logo image",
            }),
            defineField({
              name: "companyName",
              type: "string",
              description: "Name of the company",
            }),
            defineField({
              name: "quote",
              type: "text",
              description: "Testimonial quote from the person",
            }),
            defineField({
              name: "stats",
              type: "array",
              description: "Add supporting statistics",
              of: [
                {
                  type: "object",
                  title: "Statistic",
                  fields: [
                    defineField({
                      name: "value",
                      type: "string",
                      description: "Value or number (e.g., '98%', '2x', etc.)",
                    }),
                    defineField({
                      name: "label",
                      type: "string",
                      description: "Primary label (e.g., 'Increase in Conversion')",
                    }),
                    defineField({
                      name: "subLabel",
                      type: "string",
                      description: "Secondary label or explanation",
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "padding",
      type: "section-padding",
    }),
    defineField({
      name: "colorVariant",
      type: "color-variant",
    }),
  ],
  preview: {
    select: {
      title: "title",
      testimonialCount: "testimonials.length",
    },
    prepare({ title, testimonialCount }) {
      return {
        title: "Social Proof",
        subtitle: `${title ? title + " - " : ""}${testimonialCount || 0} testimonials`,
      };
    },
  },
}); 