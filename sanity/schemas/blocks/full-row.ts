import { defineField, defineType } from "sanity";
import { Rows3 } from "lucide-react";

export default defineType({
  name: "full-row",
  title: "Full Row",
  type: "object",
  icon: Rows3,
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
      name: "items",
      type: "array",
      title: "Row Items",
      of: [
        {
          type: "object",
          name: "item",
          title: "Item",
          fields: [
            defineField({
              name: "title",
              type: "string",
              title: "Title",
              validation: rule => rule.required()
            }),
            defineField({
              name: "image",
              type: "image",
              title: "Image",
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative Text",
                }
              ],
              validation: rule => rule.required()
            }),
            defineField({
              name: "icon",
              type: "string",
              title: "Icon",
              options: {
                list: [
                  { title: "Globe", value: "globe" },
                  { title: "Lightning", value: "zap" },
                  { title: "Bar Chart", value: "bar-chart" }
                ],
                layout: "radio"
              }
            }),
            defineField({
              name: "revenueRange",
              type: "string",
              title: "Revenue Range",
              description: "Example: $0–$2,499 /mo"
            }),
            defineField({
              name: "support",
              type: "string",
              title: "Support Level",
              description: "Example: Live chat and community support"
            }),
            defineField({
              name: "featuredBenefits",
              type: "array",
              title: "Featured Benefits",
              description: "Add up to 3 key benefits (displayed as cards)",
              of: [{ type: "string" }],
              validation: rule => rule.max(3)
            }),
            defineField({
              name: "additionalBenefits",
              type: "block-content",
              title: "Additional Benefits",
              description: "These will be shown in a collapsible section"
            })
          ],
          preview: {
            select: {
              title: "title",
              media: "image"
            }
          }
        }
      ]
    })
  ],
  preview: {
    select: {
      items: "items"
    },
    prepare({ items }) {
      const itemCount = items?.length || 0;
      return {
        title: "Full Row",
        subtitle: `${itemCount} item${itemCount === 1 ? "" : "s"}`
      };
    }
  }
});
