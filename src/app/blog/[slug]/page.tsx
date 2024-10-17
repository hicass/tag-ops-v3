import { Metadata } from 'next';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';

import { PortableTextBlock } from '@portabletext/types';

import BlogDetailPageContent from '@/components/BlogPage/BlogDetailPage/BlogDetailPageContent';

export const metadata: Metadata = {
  title: 'Tag Operations | Blog',
  description:
    'Discover expert insights on operations support, including the rise of fractional work and the risks of siloed technology. Learn how to optimize workflows, enhance workforce flexibility, and integrate seamless systems for improved business efficiency and growth.',
};

export type Blog = {
  id: number;
  title: string;
  author: string;
  publishedAt: string;
  body: PortableTextBlock[];
};

export type ContentBlock = {
  title?: string;
  text?: string[];
};

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const query = `*[_type == "blogPost" && slug.current == $slug][0]`;
  const blog = await client.fetch(query, { slug: `/blog/${params.slug}` });

  if (!blog) {
    return (
      <div className="flex flex-col h-screen justify-center items-center -mt-24">
        {' '}
        <h1>Blog not found</h1>
        <Link
          href="/blog"
          className="mt-4 underline underline-offset-2 hover:text-primary md:text-lg"
        >
          Return to blogs
        </Link>
      </div>
    );
  }

  return <BlogDetailPageContent {...blog} />;
}
