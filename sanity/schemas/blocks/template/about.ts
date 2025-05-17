import { defineField, defineType } from "sanity";
import { LayoutTemplate } from "lucide-react";

export default defineType({
  name: "about",
  title: "About Page",
  type: "object",
  icon: LayoutTemplate,
  fields: [
    defineField({
      name: "title",
      title: "Main Title",
      type: "string",
      description: "The main heading for the about section",
    }),
    defineField({
      name: "introText",
      title: "Introduction Text",
      type: "block-content",
      description: "Introductory text that appears below the title",
    }),
    defineField({
      name: "mission",
      title: "Mission Statement",
      type: "text",
      description: "A short mission statement that appears highlighted",
    }),
    defineField({
      name: "introImages",
      title: "Introduction Images",
      type: "array",
      of: [
        {
          type: "image",
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
        },
      ],
      description: "Images to display in the introduction section",
      validation: (rule) => rule.max(3),
    }),
    defineField({
      name: "coreValues",
      title: "Core Values",
      type: "array",
      of: [
        {
          type: "object",
          name: "value",
          fields: [
            { name: "title", type: "string", title: "Value Title" },
            { name: "description", type: "text", title: "Description" },
            { 
              name: "image", 
              type: "image", 
              title: "Value Image",
              description: "Image for this value",
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
            },
          ],
        },
      ],
      description: "List of core values to display",
    }),
    defineField({
      name: "teamSection",
      title: "Team Section",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Section Title" },
        { name: "description", type: "text", title: "Section Description" },
        {
          name: "members",
          type: "array",
          of: [
            {
              type: "object",
              name: "member",
              fields: [
                { name: "name", type: "string", title: "Name" },
                { name: "role", type: "string", title: "Role" },
                { name: "bio", type: "text", title: "Short Bio" },
                {
                  name: "image",
                  type: "image",
                  title: "Profile Image",
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
                },
              ],
            },
          ],
        },
        {
          name: "staffMembers",
          title: "Staff Members",
          type: "array",
          of: [
            {
              type: "object",
              name: "staffMember",
              fields: [
                { name: "name", type: "string", title: "Name" },
                { name: "role", type: "string", title: "Role" },
                { name: "bio", type: "text", title: "Short Bio" },
                {
                  name: "image",
                  type: "image",
                  title: "Profile Image",
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
                },
              ],
            },
          ],
        },
      ],
    }),

    defineField({
      name: "locations",
      title: "Locations",
      type: "array",
      of: [
        {
          type: "object",
          name: "location",
          fields: [
            { name: "name", type: "string", title: "Location Name" },
            { name: "address", type: "text", title: "Address" },
          ],
        },
      ],
      description: "List of office locations",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: "About Page",
        subtitle: title,
      };
    },
  },
});
