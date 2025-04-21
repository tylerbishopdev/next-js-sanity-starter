import { defineType, defineField } from "sanity"
import { ColumnsIcon } from "lucide-react"

export default defineType({
  name: "features-staggered",
  type: "object",
  title: "Features Staggered",
  icon: ColumnsIcon,
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "Features Staggered",
        subtitle: "Features Staggered Grid",
        media: ColumnsIcon,
      }
    },
  },
  groups: [
    {
      name: "content",
      title: "Content",
    },
    {
      name: "settings",
      title: "Settings",
    },
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      group: "content",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      group: "content",
    }),
    defineField({
      name: "features",
      type: "array",
      title: "Features",
      group: "content",
      of: [
        {
          type: "object",
          title: "Feature",
          fields: [
            defineField({
              name: "title",
              type: "string",
              title: "Title",
            }),
            defineField({
              name: "description",
              type: "text",
              title: "Description",
            }),
            defineField({
              name: "image",
              type: "image",
              title: "Image",
              options: {
                hotspot: true,
              },
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "padding",
      type: "string",
      title: "Padding",
      group: "settings",
      initialValue: "py-12",
      options: {
        list: [
          { title: "Small", value: "py-8" },
          { title: "Medium", value: "py-12" },
          { title: "Large", value: "py-20" },
        ],
      },
    }),
    defineField({
      name: "colorVariant",
      type: "string",
      title: "Color Variant",
      group: "settings",
      options: {
        list: [
          { title: "Default", value: "" },
          { title: "Muted", value: "bg-muted" },
        ],
      },
    }),
  ],
}) 