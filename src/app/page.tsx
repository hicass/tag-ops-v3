'use client';
import { useSession, signOut } from 'next-auth/react';
import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
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
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <main className="flex flex-col items-center m-10">
        <Header />
        {session ? (
          <>
            <nav className="absolute top-10 left-10 flex flex-col items-start">
              <button onClick={() => signOut()} className="nav-button">
                Logout
              </button>
              <button
                onClick={() => setActiveView('explore')}
                className={`nav-button ${
                  activeView === 'explore' && 'opacity-30'
                }`}
              >
                Explore
              </button>
              <button
                onClick={() => setActiveView('new')}
                className={`nav-button ${activeView === 'new' && 'opacity-30'}`}
              >
                New
              </button>
              <button
                onClick={() => setActiveView('all')}
                className={`nav-button ${activeView === 'all' && 'opacity-30'}`}
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
