'use client';
import { FC } from 'react';
import { Blog } from '@/app/blog/[slug]/page';

import Header from './Header';
import Body from './Body';
import ClientsServed from '@/components/ClientsServed/ClientsServed';

const BlogDetailPageContent: FC<Blog> = ({
  title,
  author,
  publishedAt,
  body,
}) => {
  return (
    <main className="flex flex-col items-center gap-10 relative overflow-hidden">
      <Header title={title} author={author} publishedAt={publishedAt} />
      <Body body={body} />
      <ClientsServed />
    </main>
  );
};

export default BlogDetailPageContent;
