import { defineField, defineType } from "sanity";
import { FileText } from "lucide-react";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: FileText,
  groups: [
    {
      name: "content",
      title: "Content",
    },
    {
      name: "seo",
      title: "SEO",
    },
    {
      name: "settings",
      title: "Settings",
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "settings",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      group: "content",
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      group: "settings",
      to: { type: "author" },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      group: "settings",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      group: "settings",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "block-content",
      group: "content",
    }),
    defineField({
      name: "meta_title",
      title: "Meta Title",
      type: "string",
      group: "seo",
    }),
    defineField({
      name: "meta_description",
      title: "Meta Description",
      type: "text",
      group: "seo",
    }),
    defineField({
      name: "noindex",
      title: "No Index",
      type: "boolean",
      initialValue: false,
      group: "seo",
    }),
    defineField({
      name: "ogImage",
      title: "Open Graph Image - [1200x630]",
      type: "image",
      group: "seo",
    }),
    // Display date field for user-friendly date formatting
    defineField({
      name: "displayDate",
      title: "Display Date",
      description:
        "The formatted date to display on the post (e.g., 'February 28, 2024')",
      type: "string",
      group: "settings",
    }),
    // Publication date field for sorting and filtering
    defineField({
      name: "publishedAt",
      title: "Published At",
      description: "The official publication date and time",
      type: "datetime",
      group: "settings",
    }),
    // External link field if this content is syndicated from elsewhere
    defineField({
      name: "link",
      title: "External Link",
      description: "Optional: URL where this content was originally published",
      type: "url",
      group: "settings",
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "image",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
