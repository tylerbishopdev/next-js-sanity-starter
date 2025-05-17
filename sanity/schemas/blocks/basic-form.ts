import { defineField, defineType } from "sanity";

export default defineType({
  name: "basic-form",
  title: "Basic Form",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: "Form heading text",
      initialValue: "Quick Contact",
    }),
    defineField({
      name: "padding",
      title: "Section Padding",
      type: "string",
      options: {
        list: [
          { title: "Small", value: "sm" },
          { title: "Medium", value: "md" },
          { title: "Large", value: "lg" },
          { title: "Extra Large", value: "xl" },
          { title: "None", value: "none" },
        ],
      },
      initialValue: "lg",
    }),
    defineField({
      name: "colorVariant",
      title: "Color Variant",
      type: "string",
      options: {
        list: [
          { title: "Default", value: "default" },
          { title: "Muted", value: "muted" },
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
          { title: "Accent", value: "accent" },
          { title: "Card", value: "card" },
          { title: "Background", value: "background" },
          { title: "Destructive", value: "destructive" },
        ],
      },
      initialValue: "default",
    }),
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }) {
      return {
        title: title || "Basic Form",
        subtitle: "Basic subscription form",
        media: () => "✉️",
      };
    },
  },
});
