import { defineType, defineField } from "sanity"
import { GalleryThumbnails } from "lucide-react"

export default defineType({
  name: "feature-card",
  type: "object",
  title: "Feature Card",
  icon: GalleryThumbnails,
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }) {
      return {
        title: title || "Feature Card",
        subtitle: "Feature with cards grid",
        media: GalleryThumbnails,
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
      name: "heading",
      type: "string",
      title: "Heading",
      group: "content",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      group: "content",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Feature Image/GIF",
      description: "An image or animated GIF to illustrate the feature",
      group: "content",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "cards",
      type: "array",
      title: "Feature Cards",
      group: "content",
      of: [
        {
          type: "object",
          title: "Card",
          fields: [
            defineField({
              name: "header",
              type: "string",
              title: "Card Header",
            }),
            defineField({
              name: "subheader",
              type: "text",
              title: "Card Subheader",
            }),
            defineField({
              name: "icon",
              type: "string",
              title: "Icon",
              options: {
                list: [
                  { title: "Store", value: "store" },
                  { title: "Globe", value: "globe" },
                  { title: "Users", value: "users" },
                  { title: "Bar Chart", value: "bar-chart" },
                  { title: "Layout", value: "layout" },
                  { title: "Play Circle", value: "play-circle" },
                ],
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