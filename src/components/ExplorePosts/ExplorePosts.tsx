'use client';

import { useEffect, useState } from 'react';

import * as postHandler from '../../utilities/post-handler';
import PostComponent from '../PostComponent/PostComponent';

import { Post } from '@prisma/client';

export type ExplorePostsProps = {
  currentPost?: Post;
  prevPostId?: number;
  nextPostId?: number;
};

export default function ExplorePosts() {
  const [postProps, setPostProps] = useState<ExplorePostsProps>({});
  const [disableButtons, setDisableButtons] = useState(false);
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
    <>
      {post ? (
        <div className="flex flex-col items-center mt-20 max-w-xs sm:w-3/4 sm:max-w-none lg:w-1/2 lg:max-w-1/2 2xl:w-1/3">
          <PostComponent post={post} setDisableButtons={setDisableButtons} setPostProps={setPostProps} />

          <div className="flex justify-between w-full my-10">
            <button
              onClick={handlePrev}
              className={`explore-button ${
                (!postProps.prevPostId && 'opacity-30 pointer-events-none') ||
                (disableButtons && 'opacity-30 pointer-events-none')
              }`}
              disabled={!postProps.prevPostId && disableButtons}
            >
              Previous
            </button>

            <button
              onClick={handleNext}
              className={`explore-button ${
                (!postProps.nextPostId && 'opacity-30 pointer-events-none') ||
                (disableButtons && 'opacity-30 pointer-events-none')
              }`}
              disabled={!postProps.nextPostId && disableButtons}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <p>No Posts...</p>
      )}
    </>
  );
}
