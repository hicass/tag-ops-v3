import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Website')
    .items([
      S.documentTypeListItem('blogPost').title('Blog Posts'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['blogPost'].includes(item.getId()!)
      ),
    ]);
