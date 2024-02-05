import prisma from '../database/prisma';
import AllPosts from '../components/PostsFeed';

interface Post {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  content: string;
  taggedDate: Date;
  published: boolean;
  authorId: number;
}

export default async function Home() {
  const posts = await prisma.post.findMany({
    where: { published: false }
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AllPosts posts={posts}/>
    </main>
  );
}
