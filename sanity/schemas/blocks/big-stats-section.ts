import { defineField, defineType } from "sanity";
import { BarChart3 } from "lucide-react";

export default defineType({
  name: "big-stats-section",
  type: "object",
  title: "Big Stats Section",
  icon: BarChart3,
  fields: [
    defineField({
      name: "title",
      type: "string",
      description: "Title for the stats section",
    }),
    defineField({
      name: "description",
      type: "text",
      description: "Description text for the stats section",
    }),
    defineField({
      name: "stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "value",
              type: "number",
              description: "Numeric value to display",
            }),
            defineField({
              name: "label",
              type: "string",
              description: "Label for the stat",
            }),
            defineField({
              name: "prefix",
              type: "string",
              description: "Optional prefix (like $, €)",
            }),
            defineField({
              name: "suffix",
              type: "string",
              description: "Optional suffix (like %, +)",
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
      statsCount: "stats.length",
    },
    prepare({ title, statsCount }) {
      return {
        title: "Big Stats Section",
        subtitle: `${title ? title + " - " : ""}${statsCount || 0} stats`,
      };
    },
  },
}); 