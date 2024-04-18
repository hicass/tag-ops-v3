import { useEffect, useState, FormEvent, useRef } from 'react';
import * as postHandler from '../../utilities/post-handler';
import { Editor } from '@tinymce/tinymce-react';
import DatePickerComponent from '../DatePickerComponent/DatePickerComponent';
import moment from 'moment';
import Image from 'next/image';

export default function TextEditor({
  action,
  postData,
  setPostProps,
  setTxtEditorActive,
  setActiveView,
  dirty,
  setDirty,
}: any) {
  const [newTaggedDate, setNewTaggedDate] = useState(postData.taggedDate);
  const editorRef = useRef<any>(null);

  useEffect(() => setDirty(false), [postData.content]);

  useEffect(() => {
    console.log(moment(newTaggedDate).format('MMMM Do, YYYY'));
  }, [newTaggedDate]);

  const submit = async () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      const newPostData = {
        content: content,
        taggedDate: newTaggedDate,
      };

      setDirty(false);
      editorRef.current.setDirty(false);

      if (action === 'post') {
        const createdPostProps = await postHandler.submitPost(newPostData);
        // TODO: Update where this redirects
        console.log(createdPostProps);
        setActiveView('all');
      }

      if (action === 'update') {
        const updatedPostProps = await postHandler.updatePost(
          newPostData,
          postData.id
        );
        console.log(updatedPostProps);
        setPostProps(updatedPostProps);
        setTxtEditorActive(false);
      }
    }
  };

  return (
    <>
      <DatePickerComponent
        taggedDate={postData.taggedDate}
        setNewTaggedDate={setNewTaggedDate}
      />

      <div className="form flex flex-col my-6 p-4 w-full gap-2">
        {action === 'update' ? (
          <button className="w-full flex justify-end" onClick={() => setTxtEditorActive(false)}>
            {' '}
            <Image src="/icons/x.svg" alt="Edit Icon" width={20} height={20} />
          </button>
        ) : (
          <></>
        )}
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

        {action === 'update' ? (
          <div className="mt-5 flex justify-end">
            <button onClick={submit} type="submit" className="form-button">
              Submit
            </button>
          </div>
        ) : (
          <div className="mt-5 flex justify-between">
            <button onClick={submit} type="submit" className="form-button">
              Draft
            </button>

            <button disabled={!dirty} type="submit" className="form-button">
              Publish
            </button>
          </div>
        )}
      </div>
    </>
  );
}
