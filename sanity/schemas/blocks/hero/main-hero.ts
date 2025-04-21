import { defineType, defineField } from "sanity"
import { Laptop } from "lucide-react"

export default defineType({
  name: "main-hero",
  type: "object",
  title: "Main Hero",
  icon: Laptop,
  preview: {
    select: {
      title: "heroheading1",
    },
    prepare({ title }) {
      return {
        title: title || "Main Hero",
        subtitle: "Hero section with animated image",
        media: Laptop,
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
      name: "preherobold",
      type: "string",
      title: "Pre-Heading (Bold)",
      description: "Short text displayed above the main heading",
      group: "content",
    }),
    defineField({
      name: "heroheading1",
      type: "string",
      title: "Main Heading",
      description: "Primary heading text (large)",
      group: "content",
    }),
    defineField({
      name: "heroheading2",
      type: "string",
      title: "Secondary Heading",
      description: "Secondary heading text below the main heading",
      group: "content",
    }),
    defineField({
      name: "heroDescription",
      type: "text",
      title: "Description",
      description: "Short description text below the headings",
      group: "content",
    }),
    defineField({
      name: "heroButtonText",
      type: "string",
      title: "Button Text",
      description: "Text for the CTA button",
      group: "content",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Hero Image",
      description: "Image displayed in the hero section with animation",
      group: "content",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "padding",
      type: "string",
      title: "Padding",
      group: "settings",
      options: {
        list: [
          { title: "None", value: "" },
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