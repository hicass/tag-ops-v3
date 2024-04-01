'use client';
import * as postHandler from '../../utilities/post-handler';
import { useEffect, useState, FormEvent } from 'react';
import { Post } from '@prisma/client';
import moment from 'moment';

export type PostsBatchProps = {
  prevPostId?: number;
  postsBatch?: Array<Post>;
  nextPostId?: number;
};

type CursorIds = {
  prev: number;
  next: number;
};

export default function AllPosts() {
  const [postsBatchProps, setPostsBatchProps] = useState<PostsBatchProps>({});
  const [prevCursorId, setPrevCursorId] = useState<CursorIds['prev']>();
  const [nextCursorId, setNextCursorId] = useState<CursorIds['next']>();
  const [filterDate, setFilterDate] = useState('');
  const postsFeed = postsBatchProps.postsBatch!;

  const cursorGenerator = (
    postsBatchArr: PostsBatchProps['postsBatch']
  ): CursorIds => {
    const lastPostIdx = postsBatchArr!.length - 1;
    const cursorIds = {
      prev: postsBatchArr![lastPostIdx].id,
      next: postsBatchArr![0].id,
    };

    return cursorIds;
  };

  const setState = async (props: PostsBatchProps) => {
    const { prev, next } = cursorGenerator(props.postsBatch);

    setPrevCursorId(prev);
    setNextCursorId(next);
    setPostsBatchProps(props);
  };

  useEffect(() => {
    async function initProps() {
      const postsBatchProps = await postHandler.getBatchOfPosts();

      setState(postsBatchProps);
    }

    initProps();
  }, []);

  const filterPosts = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filteredPostsBatchProps = await postHandler.getFilteredBatchProps(filterDate);
    console.log(filteredPostsBatchProps);

    setState(filteredPostsBatchProps);
  }

  const handlePrev = async () => {
    const prevPostsBatchProps = await postHandler.getPrevBatchProps(
      prevCursorId
    );

    setState(prevPostsBatchProps);
  };

  const handleNext = async () => {
    const nextPostsBatchProps = await postHandler.getNextBatchProps(
      nextCursorId
    );

    setState(nextPostsBatchProps);
  };

  return (
    <div className="flex flex-col items-center w-1/2 pt-20">
      <form className="mb-6" onSubmit={filterPosts}>
        <label className="pr-2">Showing from</label>
        <input
          autoFocus
          type="text"
          className="p-2"
          placeholder="All time..."
          value={filterDate}
          onChange={(e) =>
            setFilterDate(e.target.value)
          }
        />
        <button type="submit" className="form-button">
          Search
        </button>
      </form>

      {postsFeed?.length ? (
        <div className="w-full">
          {postsFeed.map((post, idx) => (
            <div key={idx}>
              <p>{moment(post?.taggedDate).format('MMMM Do, YYYY')}</p>
              <p className="mb-8 p-4 post max-h-20 overflow-hidden truncate">
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
