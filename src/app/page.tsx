'use client';
import { useSession, signOut } from 'next-auth/react';
import { useState } from 'react';
import Header from '../components/Header/Header';
import ExplorePosts from '../components/ExplorePosts/ExplorePosts';
import NewPost from '../components/NewPost/NewPost';
import AllPosts from '../components/AllPosts/AllPosts';

export default function Home() {
  const { data: session, status } = useSession();
  const [activeView, setActiveView] = useState('explore');

  console.log('Auth status: ', status);

  const renderView = () => {
    switch (activeView) {
      case 'explore':
        return <ExplorePosts />;
      case 'new':
        return <NewPost />;
      case 'all':
        return <AllPosts />
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center m-10">
      <Header />
      {session ? (
        <>
          <nav className="absolute top-10 left-10 flex flex-col items-start">
            <button onClick={() => signOut()}>Logout</button>
            <button onClick={() => setActiveView('explore')}>Explore</button>
            <button onClick={() => setActiveView('new')}>New</button>
            <button onClick={() => setActiveView('all')}>All</button>
          </nav>

          {renderView()}
        </>
      ) : (
        <ExplorePosts />
      )}
    </main>
  );
}
