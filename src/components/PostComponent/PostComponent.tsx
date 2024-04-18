import { useEffect, useState } from 'react';
import * as postHandler from '../../utilities/post-handler';
import TextEditor from '../TextEditor/TextEditor';
import EditModal from '../EditModal/EditModal';
import parse from 'html-react-parser';
import Image from 'next/image';
import moment from 'moment';
import React from 'react';

export default function PostComponent({ post, truncate, setPostProps }: any) {
  const [postContent, setPostContent] = useState<any>();
  const [txtEditorActive, setTxtEditorActive] = useState(false);
  const [editModalActive, setEditModalActive] = useState(false);
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    async function parsePost() {
      if (post?.content) {
        const parcedPost = parse(post.content);
        setPostContent(parcedPost);
      }
    }

    parsePost();
  }, [post]);

  const handleSetPublished = async () => {
    const updatedPostProps = await postHandler.setPublished(
      post?.id,
      post?.published
    );
    setPostProps(updatedPostProps);
  };

  return (
    <>
      {txtEditorActive ? (
        <>
          <TextEditor
            action="update"
            postData={post}
            setPostProps={setPostProps}
            setTxtEditorActive={setTxtEditorActive}
            dirty={dirty}
            setDirty={setDirty}
          />
        </>
      ) : (
        <>
          <p>{moment(post?.taggedDate).format('MMMM Do, YYYY')}</p>

          {post.content ? (
            <div
              className={`post mt-10 p-4 w-full relative ${
                truncate && 'max-h-20 overflow-hidden truncate'
              }`}
            >
              <div className="w-full flex justify-end">
                <button onClick={() => setEditModalActive(!editModalActive)}>
                  <Image
                    className={` ${
                      !txtEditorActive && 'opacity-30 pointer-events-none'
                    }`}
                    src="/icons/dots.svg"
                    alt="Edit Icon"
                    width={20}
                    height={20}
                  />
                </button>
              </div>

              {editModalActive && (
                <EditModal
                  post={post}
                  editModalActive={editModalActive}
                  setEditModalActive={setEditModalActive}
                  txtEditorActive={txtEditorActive}
                  setTxtEditorActive={setTxtEditorActive}
                  handleSetPublished={handleSetPublished}
                />
              )}

              <div className="p-2">
                {postContent?.length ? (
                  postContent?.map((element: any, idx: number) => (
                    <React.Fragment key={idx}>{element}</React.Fragment>
                  ))
                ) : (
                  <React.Fragment>{postContent}</React.Fragment>
                )}
              </div>
            </div>
          ) : (
            <p>This post is empty...</p>
          )}
        </>
      )}
    </>
  );
}
