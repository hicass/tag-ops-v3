'use client';

import { useState } from 'react';

import { findPost } from '../../utilities/post-handler';
import PostComponent from '../PostComponent/PostComponent';

export default function ExplorePosts({ explorePostProps, setExplorePostProps }: any) {
  const [disableButtons, setDisableButtons] = useState(false);
  const post = explorePostProps?.currentPost;

  const handlePrev = async () => {
    const previousPostsProps = await findPost(explorePostProps.prevPostId);
    setExplorePostProps(previousPostsProps);
  };

  const handleNext = async () => {
    const nextPostsProps = await findPost(explorePostProps.nextPostId);
    setExplorePostProps(nextPostsProps);
  };

  return (
    <>
      {post ? (
        <div className="flex flex-col items-center mt-20 max-w-xs sm:w-3/4 sm:max-w-none lg:w-1/2 lg:max-w-1/2 2xl:w-1/3">
          <PostComponent
            post={post}
            setDisableButtons={setDisableButtons}
            setPostProps={setExplorePostProps}
          />

          <div className="flex justify-between w-full my-10">
            <button
              onClick={handlePrev}
              className={`explore-button ${
                (!explorePostProps.prevPostId && 'opacity-30 pointer-events-none') ||
                (disableButtons && 'opacity-30 pointer-events-none')
              }`}
              disabled={!explorePostProps.prevPostId && disableButtons}
            >
              Previous
            </button>

            <button
              onClick={handleNext}
              className={`explore-button ${
                (!explorePostProps.nextPostId && 'opacity-30 pointer-events-none') ||
                (disableButtons && 'opacity-30 pointer-events-none')
              }`}
              disabled={!explorePostProps.nextPostId && disableButtons}
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
