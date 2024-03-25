'use client';
import { useSession, signOut } from 'next-auth/react';
import { useState } from 'react';
import Header from '../components/Header/Header';
import ExplorePosts from '../components/ExplorePosts/ExplorePosts';
import NewPost from '../components/NewPost/NewPost';
import AllPosts from '../components/AllPosts/AllPosts';

export default function Home() {
  const { data: session } = useSession();
  const [activeView, setActiveView] = useState('explore');

  const renderView = () => {
    switch (activeView) {
      case 'explore':
        return <ExplorePosts />;
      case 'new':
        return <NewPost setActiveView={setActiveView} />;
      case 'all':
        return <AllPosts />;
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center m-10">
      <Header />
      {session ? (
        <>
          <nav className="absolute top-10 left-10 flex flex-col items-start">
            <button onClick={() => signOut()} className="nav-button">
              Logout
            </button>
            <button
              onClick={() => setActiveView('explore')}
              className="nav-button"
            >
              Explore
            </button>
            <button onClick={() => setActiveView('new')} className="nav-button">
              New
            </button>
            <button onClick={() => setActiveView('all')} className="nav-button">
              All
            </button>
          </nav>

          {renderView()}
        </>
      ) : (
        <ExplorePosts />
      )}
    </main>
  );
}
