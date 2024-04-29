'use client';

import { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';

import Header from '../components/Header/Header';
import ExplorePosts from '../components/ExplorePosts/ExplorePosts';
import NewPost from '../components/NewPost/NewPost';
import AllPosts from '../components/AllPosts/AllPosts';

import { getLatest } from '../utilities/post-handler';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

import { Post } from '@prisma/client';

export type ExplorePostsProps = {
  currentPost?: Post;
  prevPostId?: number;
  nextPostId?: number;
};

export default function Home() {
  const { data: session } = useSession();
  const [activeView, setActiveView] = useState('explore');
  const [explorePostProps, setExplorePostProps] = useState<ExplorePostsProps>({});

  useEffect(() => {
    async function fetchProps() {
      const postProps = await getLatest();
      setExplorePostProps(postProps);
    }

    fetchProps();
  }, []);

  const renderView = () => {
    switch (activeView) {
      case 'explore':
        return <ExplorePosts explorePostProps={explorePostProps} setExplorePostProps={setExplorePostProps} />;
      case 'new':
        return <NewPost setActiveView={setActiveView} setExplorePostProps={setExplorePostProps} />;
      case 'all':
        return <AllPosts />;
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <main className="flex flex-col items-center m-10">
        <Header />
        {session ? (
          <>
            <nav className="absolute top-10 left-10 flex flex-col items-start">
              <button onClick={() => signOut()} className="nav-button opacity-30">
                Logout
              </button>
              <button
                onClick={() => setActiveView('explore')}
                className={`nav-button ${
                  activeView === 'explore' ? 'opacity-100' : 'opacity-40'
                }`}
              >
                Explore
              </button>
              <button
                onClick={() => setActiveView('new')}
                className={`nav-button ${activeView === 'new' ? 'opacity-100' : 'opacity-40'}`}
              >
                New
              </button>
              <button
                onClick={() => setActiveView('all')}
                className={`nav-button ${activeView === 'all' ? 'opacity-100' : 'opacity-40'}`}
              >
                All
              </button>
            </nav>

            {renderView()}
          </>
        ) : (
          <ExplorePosts />
        )}
      </main>
    </LocalizationProvider>
  );
}
