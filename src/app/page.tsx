import { useState } from 'react';
import prisma from '../database/prisma';

export default async function Home() {
  const posts = await prisma.post.findMany({
    where: { published: false }
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{posts[3].content}</h1>
    </main>
  );
}
