import { useState, FormEvent } from 'react';

export default function NewPost() {
  const [content, setContent] = useState('');

  const submitPost = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Post content:', content);

    try {
        const body = { content };
        console.log('Post body: ', body);
        await fetch(`api/post/create`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
    } catch (error) {
        console.log(error);
    }

  };

  return (
    <div className="pt-20">
      <h1>NewPost</h1>

      <form onSubmit={submitPost} className="flex flex-col">
        <textarea
          autoFocus
          onChange={(e) => setContent(e.target.value)}
          className="text-black"
          value={content}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
