'use client';
import { useState } from 'react';
import TextEditor from '../TextEditor/TextEditor';

export default function NewPost({ setActiveView }: any) {
  const [postData, setPostData] = useState({
    content: '',
    taggedDate: new Date(),
  });
  const [dirty, setDirty] = useState(false);

  return (
    <div className="flex flex-col items-center mt-20 w-3/4 sm:w-3/4 sm:max-w-none lg:w-1/2 lg:max-w-1/2 2xl:w-1/3">
      <TextEditor
        action='post'
        postData={postData}
        setActiveView={setActiveView}
        dirty={dirty}
        setDirty={setDirty}
      />
    </div>
  );
}
