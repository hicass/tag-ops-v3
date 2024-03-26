'use client';
import * as postHandler from '../../utilities/post-handler';
import { useEffect, useState } from 'react';
import { Post } from '@prisma/client';
import moment from 'moment';

export type ExplorePostsProps = {
  currentPost?: Post;
  prevPostId?: number;
  nextPostId?: number;
};

export default function ExplorePosts() {
  const [postProps, setPostProps] = useState<ExplorePostsProps>({});
  const post = postProps.currentPost;

  useEffect(() => {
    async function fetchProps() {
      const postProps = await postHandler.getLatest();
      setPostProps(postProps);
    }

    fetchProps();
  }, []);

  const handlePrev = async () => {
    const previousPostsProps = await postHandler.findPost(postProps.prevPostId);
    setPostProps(previousPostsProps);
  };

  const handleNext = async () => {
    const nextPostsProps = await postHandler.findPost(postProps.nextPostId);
    setPostProps(nextPostsProps);
  };

  return (
    <div className="flex flex-col items-center w-1/2 pt-20">
      <>
        <p>{moment(post?.taggedDate).format('MMMM Do YYYY')}</p>
        <p className="mt-10 p-4 w-full post">{post?.content}</p>

        <div className="flex justify-between w-full my-10">
          <button
            onClick={handlePrev}
            className={`explore-button ${
              !postProps.prevPostId && 'opacity-30 pointer-events-none'
            }`}
            disabled={!postProps.prevPostId}
          >
            Previous
          </button>

          <button
            onClick={handleNext}
            className={`explore-button ${
              !postProps.nextPostId && 'opacity-30 pointer-events-none'
            }`}
            disabled={!postProps.nextPostId}
          >
            Next
          </button>
        </div>
      </>
    </div>
  );
}
