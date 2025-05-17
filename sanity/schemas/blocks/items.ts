import { defineType, defineField } from "sanity";
import { LayoutGrid } from "lucide-react";

export default defineType({
  name: "items",
  type: "object",
  title: "Items Grid",
  description:
    "A grid layout with items that have icons, titles, and descriptions",
  icon: LayoutGrid,
  fields: [
    defineField({
      name: "padding",
      type: "section-padding",
    }),
    defineField({
      name: "colorVariant",
      type: "color-variant",
      description: "Select a background color variant",
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Section Title",
      description: "Main title for the items section (optional)",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Section Description",
      description: "Brief description text below the section title (optional)",
      rows: 3,
    }),
    defineField({
      name: "columns",
      type: "string",
      title: "Column Layout",
      description: "Number of columns in grid",
      options: {
        list: [
          { title: "One Column", value: "one" },
          { title: "Two Columns", value: "two" },
          { title: "Three Columns", value: "three" },
          { title: "Four Columns", value: "four" },
        ],
      },
      initialValue: "four",
    }),
    defineField({
      name: "items",
      type: "array",
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
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              type: "text",
              title: "Description",
              rows: 2,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "icon",
              type: "string",
              title: "Icon",
              description: "Choose an icon for this item",
              options: {
                list: [
                  { title: "Arrow Right", value: "arrow-right" },
                  { title: "Check Circle", value: "check-circle" },
                  { title: "Clock", value: "clock" },
                  { title: "Cloud", value: "cloud" },
                  { title: "Code", value: "code" },
                  { title: "Credit Card", value: "credit-card" },
                  { title: "Dollar Sign", value: "dollar-sign" },
                  { title: "Download", value: "download" },
                  { title: "Globe", value: "globe" },
                  { title: "Heart", value: "heart" },
                  { title: "Help Circle", value: "help-circle" },
                  { title: "Home", value: "home" },
                  { title: "Image", value: "image" },
                  { title: "Layers", value: "layers" },
                  { title: "Lightbulb", value: "lightbulb" },
                  { title: "Mail", value: "mail" },
                  { title: "Message Circle", value: "message-circle" },
                  { title: "Mic", value: "mic" },
                  { title: "Monitor", value: "monitor" },
                  { title: "Moon", value: "moon" },
                  { title: "Palette", value: "palette" },
                  { title: "Pen Tool", value: "pen-tool" },
                  { title: "Percent", value: "percent" },
                  { title: "Phone", value: "phone" },
                  { title: "Play", value: "play" },
                  { title: "Shield", value: "shield" },
                  { title: "Shopping Cart", value: "shopping-cart" },
                  { title: "Star", value: "star" },
                  { title: "Sun", value: "sun" },
                  { title: "Zap", value: "zap" },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "description",
              media: "icon",
            },
            prepare({ title, subtitle, media }) {
              // Map the icon string to an actual Lucide React icon component
              let IconComponent = LayoutGrid;
              
              // Return preview object
              return {
                title: title || "Untitled Item",
                subtitle: subtitle,
                media: IconComponent,
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    select: {
      title: "title",
      itemsCount: "items.length",
    },
    prepare({ title, itemsCount = 0 }) {
      return {
        title: title || "Items Grid",
        subtitle: `${itemsCount} item${itemsCount === 1 ? "" : "s"}`,
        media: LayoutGrid,
      };
    },
  },
});
