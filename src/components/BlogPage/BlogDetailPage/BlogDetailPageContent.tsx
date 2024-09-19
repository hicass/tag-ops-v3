'use client';
import { FC } from 'react';
import { Blog } from '@/app/blog/[id]/page';

import Header from './Header';
import ContentBlocks from './ContentBlocks';
import ClientsServed from '@/components/ClientsServed/ClientsServed';

const BlogDetailPageContent: FC<Blog> = ({
  title,
  author,
  date,
  contentBlocks,
}) => {
  return (
    <main className="flex flex-col items-center gap-10 relative overflow-hidden">
      <Header title={title} author={author} date={date} />
      <ContentBlocks contentBlocks={contentBlocks} />
      <ClientsServed />
    </main>
  );
};

export default BlogDetailPageContent;
