'use client';
import { useState, FormEvent } from 'react';
import * as postHandler from '../../utilities/post-handler';

export default function NewPost({ setActiveView }: any) {
  const [postData, setPostData] = useState({
    content: '',
  });

  const submitPost = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const createdPost = await postHandler.submitPost(postData);
    console.log('Post created: ', createdPost);
    setActiveView('all');
  };

  return (
    <div className="flex flex-col items-center w-1/2 pt-20">
      <form
        onSubmit={submitPost}
        className="flex flex-col my-10 w-full p-4 form  m-3"
      >
        <textarea
          autoFocus
          className="p-2 mb-6"
          value={postData.content}
          onChange={(e) =>
            setPostData({ ...postData, content: e.target.value })
          }
        />

        <div className="flex justify-between">
          <button type="submit" className="form-button">
            Draft
          </button>
          <button type="submit" className="form-button">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}
