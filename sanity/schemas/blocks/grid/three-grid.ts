import { defineField, defineType } from "sanity";
import { LayoutGrid } from "lucide-react";

export default defineType({
  name: "three-grid",
  type: "object",
  title: "Three Grid",
  icon: LayoutGrid,
  fields: [
    defineField({
      name: "title",
      type: "string",
      description: "Optional heading for the grid section",
    }),
    defineField({
      name: "description",
      type: "text",
      description: "Optional description text for the grid section",
    }),
    defineField({
      name: "items",
      type: "array",
      description: "Add up to 3 bento items (first item will be featured)",
      validation: (Rule) => Rule.max(3),
      of: [
        {
          type: "object",
          title: "Bento Item",
          fields: [
            defineField({
              name: "title",
              type: "string",
              description: "Title for this grid item",
            }),
            defineField({
              name: "description",
              type: "text",
              description: "Description text for this grid item",
            }),
            defineField({
              name: "content",
              type: "block-content",
              title: "Content",
              description: "Content to display in the grid item (text, images, video)",
            }),
            defineField({
              name: "link",
              type: "object",
              title: "Link",
              fields: [
                defineField({
                  name: "href",
                  type: "string",
                  title: "URL",
                }),
                defineField({
                  name: "label",
                  type: "string",
                  title: "Label",
                }),
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
      itemsCount: "items.length",
    },
    prepare({ title, itemsCount }) {
      return {
        title: "Three Grid",
        subtitle: `${title ? title + " - " : ""}${itemsCount || 0} items`,
      };
    },
  },
}); 