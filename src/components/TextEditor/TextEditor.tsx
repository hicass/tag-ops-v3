import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

import * as postHandler from '../../utilities/post-handler';
import DatePickerComponent from './DatePickerComponent/DatePickerComponent';

import { Editor } from '@tinymce/tinymce-react';

export default function TextEditor({
  action,
  postData,
  setPostProps,
  setDisableButtons,
  setTxtEditorActive,
  setActiveView,
  setExplorePostProps,
  setDirty,
}: any) {
  const [newTaggedDate, setNewTaggedDate] = useState(postData.taggedDate);
  const editorRef = useRef<any>(null);

  useEffect(() => setDirty(false), [postData.content]);

  const getTextEditorContent = () => {
    const content = editorRef.current.getContent();

    setDirty(false);
    editorRef.current.setDirty(false);

    return content;
  };

  const processPost = async (publishedStatus: boolean) => {
    const content = getTextEditorContent();

    const newPostData = {
      content: content,
      taggedDate: newTaggedDate,
      published: publishedStatus,
    };

    const createdPostProps = await postHandler.submitPost(newPostData);
    return createdPostProps;
  };

  const post = async () => {
    const publishedStatus = true;
    const postProps = await processPost(publishedStatus);

    setExplorePostProps(postProps);
    setActiveView('explore');
  };

  const draft = async () => {
    const publishedStatus = false;
    processPost(publishedStatus);
    // TODO: Update where this redirects
    setActiveView('all');
  };

  const updatePost = async () => {
    const content = getTextEditorContent();

    const updatedPostData = {
      content: content,
      taggedDate: newTaggedDate,
    };
    const updatedPostProps = await postHandler.updatePost(
      updatedPostData,
      postData.id
    );
    setPostProps(updatedPostProps);
    setTxtEditorActive(false);
  };

  const closeEditor = () => {
    setDisableButtons(false);
    setTxtEditorActive(false);
  };

  return (
    <>
      <DatePickerComponent
        taggedDate={postData.taggedDate}
        setNewTaggedDate={setNewTaggedDate}
      />

      <div className="form flex flex-col items-end my-2 p-4 w-full gap-2">
        {action === 'update' ? (
          <button className="w-full flex justify-end" onClick={closeEditor}>
            {' '}
            <Image src="/icons/x.svg" alt="Edit Icon" width={20} height={20} />
          </button>
        ) : (
          <button
            onClick={draft}
            type="submit"
            className="flex justify-end w-min opacity-40 hover:opacity-100 "
          >
            Draft
          </button>
        )}

        <div className="w-full">
          <Editor
            apiKey={process.env.NEXT_PUBLIC_EDITOR_KEY}
            initialValue={postData.content}
            onInit={(evt, editor) => (editorRef.current = editor)}
            onDirty={() => setDirty(true)}
            init={{
              height: 400,
              menubar: false,
              statusbar: false,
              icons: 'small',
              plugins: [
                'advlist',
                'autolink',
                'lists',
                'link',
                'charmap',
                'preview',
                'anchor',
                'visualblocks',
                'code',
                'insertdatetime',
                'media',
                'table',
                'code',
              ],
              toolbar:
                'blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist | ',
            }}
          />
        </div>

        {action === 'update' ? (
          <div className="mt-2 flex justify-end">
            <button onClick={updatePost} type="submit" className="form-button">
              Submit
            </button>
          </div>
        ) : (
          <div className="mt-4 flex justify-end">
            <button onClick={post} type="submit" className="form-button">
              Post
            </button>
          </div>
        )}
      </div>
    </>
  );
}
