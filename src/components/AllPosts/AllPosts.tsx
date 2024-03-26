'use client';
import * as postHandler from '../../utilities/post-handler';
import { useEffect, useState } from 'react';
import { Post } from '@prisma/client';
import moment from 'moment';

export type PostsBatchProps = {
  prevPostId?: number;
  postsBatch?: Array<Post>;
  nextPostId?: number;
};

export default function AllPosts() {
  const [postsBatchProps, setPostsBatchProps] = useState<PostsBatchProps>({});
  const [cursorId, setCursorId] = useState<number>();
  const postsFeed = postsBatchProps.postsBatch!;

  useEffect(() => {
    async function fetchProps() {
      const postsBatchProps = await postHandler.getBatchOfPosts();
      setCursorId(postsBatchProps.postsBatch[4].id);
      setPostsBatchProps(postsBatchProps);
    }
    fetchProps();
  }, []);

  const handlePrev = async () => {
    const prevPostsBatchProps = await postHandler.getPrevBatchProps(cursorId);
    const newCursorId = prevPostsBatchProps.postsBatch[0].id;
    setCursorId(newCursorId);
    setPostsBatchProps(prevPostsBatchProps);
  };

  const handleNext = async () => {
    const nextPostsBatchProps = await postHandler.getNextBatchProps(cursorId);
    const lastBatchIdx = nextPostsBatchProps.postsBatch.length - 1;
    const newCursorId = nextPostsBatchProps.postsBatch[lastBatchIdx].id;
    setCursorId(newCursorId);
    setPostsBatchProps(nextPostsBatchProps);
  };

  return (
    <div className="flex flex-col items-center w-1/2 pt-20">
      {postsFeed?.length ? (
        <div className="w-full">
          {postsFeed.map((post, idx) => (
            <div key={idx}>
              <p>{moment(post?.taggedDate).format('MMMM Do YYYY')}</p>
              <p className="mb-8 p-4 post max-h-20 overflow-hidden text-ellipsis">
                {post.content}
              </p>
            </div>
          ))}

          <div className="flex justify-between w-full my-10">
            <button
              onClick={handlePrev}
              className={`explore-button ${
                !postsBatchProps.prevPostId && 'opacity-30 pointer-events-none'
              }`}
              disabled={!postsBatchProps.prevPostId}
            >
              Previous
            </button>

            <button
              onClick={handleNext}
              className={`explore-button ${
                !postsBatchProps.nextPostId && 'opacity-30 pointer-events-none'
              }`}
              disabled={!postsBatchProps.nextPostId}
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
