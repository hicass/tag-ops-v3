import { DocumentTextIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const blogPostType = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title is required.'),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input) =>
          `/blog/${input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)}`,
      },
      description: 'Please ensure the slugs always start with /blog/...',
      validation: (Rule) => Rule.required().error('Slug is required.'),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (Rule) => Rule.required().error('Author is required.'),
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      validation: (Rule) =>
        Rule.required().error('Published date is required.'),
    }),
    defineField({
      name: 'preview',
      title: 'Preview',
      type: 'text',
      validation: (Rule) =>
        Rule.required()
          .error('Preview is required.')
          .max(200)
          .error('Preview must be 200 characters or less.'),
      description:
        'This will be the description displayed on the blogs preview card, no more than 200 characters please.',
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
      validation: (Rule) => Rule.required().error('Title is required.'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
});
