import { FC } from 'react';

import Header from './Header';
import BlogCards from './BlogCards';
import ClientsServed from '../ClientsServed/ClientsServed';

const BlogPageContent: FC = () => {
  return (
    <main className="flex flex-col items-center w-full gap-8 md:gap-10 relative">
      <Header />
      <BlogCards />
      <ClientsServed />
    </main>
  );
};

export default BlogPageContent;
