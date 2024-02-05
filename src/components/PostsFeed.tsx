'use client';
import { useEffect, useState } from 'react';

interface Post {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  content: string;
  taggedDate: Date;
  published: boolean;
  authorId: number;
}

export default function AllPosts({ posts }: { posts: Post[] }) {
  const [currentPostIdx, setCurrentPostIdx] = useState<number>(0);

  const handleNext = () => {
    setCurrentPostIdx((prevIndex) => (prevIndex + 1) % posts.length);
  };

  const handlePrev = () => {
    setCurrentPostIdx(
      (prevIndex) => (prevIndex - 1 + posts.length) % posts.length
    );
  };

  return (
    <div>
      <h1>All Posts</h1>
      <p>{posts[currentPostIdx].content}</p>
      <div>
        <button onClick={handlePrev} disabled={currentPostIdx === 0}>
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentPostIdx === posts.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
