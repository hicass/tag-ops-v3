'use client';
import { useContext, useState } from 'react';

interface Post {
  authorId: number;
  content: string;
  createdAt: string;
  id: number;
  published: boolean;
  taggedDate: string;
  updatedAt: string;
}

export default function AllPosts() {
  const [postIdxStart, setPostIdxStart] = useState<number>(0);
  const [postIdxEnd, setPostsIdxEnd] = useState<number>(5)
  // TODO: Update post loading...
  const postFeed = [{
    id: 1,
    authorId: 1,
    content: 'STRING',
    createdAt: new Date(),
    published: false,
    taggedDate: new Date(),
    updatedAt: new Date()
  }]

  const handlePrev = () => {
    setPostIdxStart(prevPostIdxStart => prevPostIdxStart - 5);
    setPostsIdxEnd(prevPostIdxEnd => prevPostIdxEnd - 5);
  }

  const handleNext = () => {
    setPostIdxStart(prevPostsIdxStart => prevPostsIdxStart + 5);
    setPostsIdxEnd(prevPostIdxEnd => prevPostIdxEnd + 5);
  }

  return (
    <div className="flex flex-col items-center w-1/2 pt-20">
      {postFeed.length ? (
        <div>
          {postFeed.slice(postIdxStart, postIdxEnd).map((post, idx) => (
            <div key={idx}>
              <p>January 1, 2057</p>
              <p className="mb-10 p-4 w-full post">{post.content}</p>
            </div>
          ))}

          <div className="flex justify-between w-full my-10">
            {}
            <button
              onClick={handlePrev}
              disabled={postIdxStart === 5}
              className="explore-button"
            >
              Previous
            </button>

            <button
              onClick={handleNext}
              disabled={postIdxEnd === postFeed.length}
              className="explore-button"
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <p>No Posts...</p>
      )}
    </div>
  );
}
