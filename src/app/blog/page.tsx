import { Metadata } from 'next';

import BlogPageContent from '@/components/BlogPage/BlogPageContent';

export const metadata: Metadata = {
  title: 'Tag Operations | Blog',
  description:
    'Discover expert insights on operations support, including the rise of fractional work and the risks of siloed technology. Learn how to optimize workflows, enhance workforce flexibility, and integrate seamless systems for improved business efficiency and growth.',
};

export default function BlogPage() {
  return <BlogPageContent />;
}
