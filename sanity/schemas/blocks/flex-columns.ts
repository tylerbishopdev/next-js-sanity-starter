import { defineField, defineType } from "sanity";
import { colorVariant } from "./shared/color-variant";
import { STACK_ALIGN } from "./shared/layout-variants";

export default defineType({
  name: "flex-columns",
  type: "object",
  title: "Image Columns",
  fields: [
    defineField({
      name: "columns",
      type: "array",
      title: "Image Columns",
      description: "Add one image for centered layout, two for side-by-side layout (maximum 2 images)",
      validation: (Rule) => Rule.max(2),
      of: [
        {
          type: "object",
          name: "column",
          title: "Image Column",
          fields: [
            defineField({
              name: "lightImage",
              type: "image",
              title: "Light Mode Image",
              description: "Image to display in light mode (supported formats: JPG, PNG, WebP, AVIF)",
              options: {
                accept: "image/jpeg,image/png,image/webp,image/avif"
              },
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative text",
                  validation: (Rule) => Rule.required(),
                }
              ]
            }),
            defineField({
              name: "darkImage",
              type: "image",
              title: "Dark Mode Image",
              description: "Image to display in dark mode (optional, supported formats: JPG, PNG, WebP, AVIF)",
              options: {
                accept: "image/jpeg,image/png,image/webp,image/avif"
              },
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative text",
                  validation: (Rule) => Rule.required(),
                }
              ]
            })
          ]
        }
      ]
    }),
    defineField({
      name: "stackAlign",
      type: "string",
      title: "Content Alignment",
      options: {
        list: STACK_ALIGN,
        layout: "radio"
      },
      initialValue: "center"
    }),
    defineField({
      name: "colorVariant",
      type: "color-variant"
    }),
    defineField({
      name: "padding",
      type: "section-padding"
    })
  ],
  preview: {
    prepare() {
      return {
        title: "Image Columns",
        subtitle: "Image layout component"
      };
    },
  },
}); 