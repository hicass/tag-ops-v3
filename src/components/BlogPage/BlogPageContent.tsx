import { FC } from 'react';
import Link from 'next/link';

import { PortableTextBlock } from '@portabletext/types';

import Header from './Header';
import BlogCards from './BlogCards';
import ClientsServed from '../ClientsServed/ClientsServed';

interface Slug {
  current: string;
  _type: string;
}

interface BlogPost {
  _id: string;
  _updatedAt: string;
  _createdAt: string;
  _rev: string;
  _type: 'blogPost';
  title: string;
  preview: string;
  body: PortableTextBlock[];
  author: string;
  slug: Slug;
  publishedAt: string;
}

export interface BlogPostsContentProps {
  BlogPostsData: BlogPost[];
}

const BlogPageContent: FC<BlogPostsContentProps> = ({ BlogPostsData }) => {
  console.log(BlogPostsData)
  return (
    <main className="flex flex-col items-center w-full gap-8 md:gap-10 relative">
      <Header />
      {BlogPostsData[0] ? (
        <BlogCards BlogPostsData={BlogPostsData} />
      ) : (
        <div className="flex flex-col justify-center items-center my-10">
        {' '}
        <p className='text-lg'>No Blog posts found...</p>
        <Link
          href="/"
          className="mt-4 underline underline-offset-2 hover:text-primary"
        >
          Return to home
        </Link>
      </div>
      )}
      <ClientsServed />
    </main>
  );
};

export default BlogPageContent;
