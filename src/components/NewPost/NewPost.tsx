import { useState, FormEvent } from 'react';
import * as postAPI from '../../app/utilities/post-api';

export default function NewPost() {
  const [postData, setPostData] = useState({
    content: '',
  });

  const sendPost = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Post content:', postData);

    const submittedPost = await postAPI.submitPost(postData);

    console.log('SUBMITTED POST: ', submittedPost);
  };

  return (
    <div className="pt-20">
      <h1>NewPost</h1>

      <form onSubmit={sendPost} className="flex flex-col">
        <textarea
          autoFocus 
          className="text-black"
          value={postData.content}
          onChange={(e) =>
            setPostData({ ...postData, content: e.target.value })
          }
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
