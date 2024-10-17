import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Website')
    .items([
      S.documentTypeListItem('blogPost').title('Blog Posts'),
      S.documentTypeListItem('caseStudy').title('Case Studies'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['blogPost', 'caseStudy'].includes(item.getId()!)
      ),
    ]);
