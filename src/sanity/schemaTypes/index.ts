import { type SchemaTypeDefinition } from 'sanity';

import { blockContentType } from './blockContentType';
import { blogPostType } from './blogPostType';
import { landingPageType } from './landingPageType';
import { caseStudyType } from './caseStudyType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, blogPostType, landingPageType, caseStudyType],
};
