import { CaseIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const caseStudyType = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title is required.'),
    }),
    defineField({
      name: 'title',
      title: 'Case Study Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title is required.'),
    }),
    defineField({
      name: 'companyLogo',
      title: 'Company Logo',
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
      name: 'slug',
      type: 'slug',
      options: {
        source: 'companyName',
        slugify: (input) =>
          `/case-studies/${input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)}`,
      },
      description:
        'Please ensure the slugs always start with /case-studies/...',
      validation: (Rule) => Rule.required().error('Slug is required.'),
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'array',
      of: [
        {
          name: 'highlight',
          title: 'Highlight',
          type: 'string',
          validation: (Rule) =>
            Rule.required()
              .error('Highlight is required.')
              .max(80)
              .error('Preview must be 80 characters or less.'),
        },
      ],
      validation: (Rule) => Rule.required().error('Overview is required.'),
    }),
    defineField({
      name: 'snapshot',
      type: 'object',
      fields: [
        defineField({
          name: 'industry',
          title: 'Industry',
          type: 'string',
          validation: (Rule) => Rule.required().error('Industry is required.'),
        }),
        defineField({
          name: 'location',
          title: 'Location',
          type: 'string',
          validation: (Rule) => Rule.required().error('Location is required.'),
        }),
        defineField({
          name: 'companySize',
          title: 'Company Size',
          type: 'string',
          validation: (Rule) =>
            Rule.required().error('Company Size is required.'),
        }),
        defineField({
          name: 'yearFounded',
          title: 'Year Founded',
          type: 'string',
          validation: (Rule) =>
            Rule.required().error('Year Founded is required.'),
        }),
        defineField({
          name: 'solution',
          title: 'Solution',
          type: 'string',
          validation: (Rule) => Rule.required().error('Solution is required.'),
        }),
        defineField({
          name: 'about',
          title: 'About',
          type: 'text',
          validation: (Rule) => Rule.required().error('About is required.'),
        }),
      ],
      validation: (Rule) => Rule.required().error('Snapshot is required.'),
    }),
    defineField({
      name: 'problem',
      type: 'blockContent',
      validation: (Rule) => Rule.required().error('Problem is required.'),
    }),
    defineField({
      name: 'results',
      type: 'blockContent',
      validation: (Rule) => Rule.required().error('Results is required.'),
    }),
    defineField({
      name: 'testimonial',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Name',
          type: 'string',
          validation: (Rule) => Rule.required().error('Name is required.'),
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required().error('Title is required.'),
        }),
        defineField({
          name: 'body',
          type: 'text',
          validation: (Rule) =>
            Rule.required().error('Testimonial body is required.'),
        }),
      ],
      validation: (Rule) => Rule.required().error('Testimonial is required.'),
    }),
    defineField({
      name: 'preview',
      type: 'text',
      validation: (Rule) => Rule.required().error('Preview is required.'),
    }),
  ],
});
