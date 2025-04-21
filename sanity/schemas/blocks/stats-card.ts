import { defineField, defineType } from "sanity";
import { BarChart3Icon } from "lucide-react";

export default defineType({
  name: "stats-card",
  type: "object",
  title: "Stats Card",
  icon: BarChart3Icon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      description: "Main heading for the stats card"
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      description: "Brief description text"
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      description: "Image to display alongside content",
      options: {
        hotspot: true
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          description: "Important for SEO and accessibility"
        }
      ]
    }),
    defineField({
      name: "metrics",
      type: "array",
      title: "Metrics",
      description: "Add metrics with percentages",
      of: [
        {
          type: "object",
          title: "Metric",
          fields: [
            defineField({
              name: "label",
              type: "string",
              title: "Label",
              description: "Metric title"
            }),
            defineField({
              name: "sublabel",
              type: "string",
              title: "Sub-label",
              description: "Additional description for the metric"
            }),
            defineField({
              name: "percentage",
              type: "number",
              title: "Percentage",
              description: "Percentage value (e.g., 84 for 84%)",
              validation: Rule => Rule.min(0).max(100)
            }),
            defineField({
              name: "barWidth",
              type: "string",
              title: "Bar Width",
              description: "Optional custom width for the progress bar (e.g., '84%')",
            }),
          ]
        }
      ]
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
      metricsCount: "metrics.length",
      media: "image"
    },
    prepare({ title, metricsCount, media }) {
      return {
        title: "Stats Card",
        subtitle: `${title || "Untitled"} - ${metricsCount || 0} metrics`,
        media
      };
    },
  },
}); 