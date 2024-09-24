import { defineField, defineType } from 'sanity';
import { DesktopIcon } from '@sanity/icons';

export const landingPageType = defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  icon: DesktopIcon,
  fields: [
    defineField({ name: 'versionName', title: 'Version Name', type: 'string' }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        { name: 'topText', title: 'Top text', type: 'string' },
        { name: 'botText', title: 'Bottom Text', type: 'string' },
      ],
    }),
  ],
});
