'use client'
import './Song.css';
import NavigationBar from "../navBar/page";
import SearchBar from "../search/page";
import React, { useState } from'react';
import SongList from '../SongList'
import AddSong from '../AddSong'
//import Hdr from '../Hdr'
import { useRouter } from 'next/router';

const Song = () => { 

    const [songs, setSongs] = useState([]);

    const addSongHandler = (songData) => {
    if (songData.title.trim() === '') {
      return;
    }
    setSongs((prevSongs) => {
      return[...prevSongs, {id: Math.random().toString, ...songData}];
    });
  };

  const handleGoToHome = () => {
    // Redirect to the index page (home)
    const router = useRouter();
    router.push('/');
  };

  return ( 
    <>
    <header className="header">
      <a href="/" className="homeLink" onClick={handleGoToHome}>
        <img src="/Images/logo2.png" alt="Company logo" className="logo" />
      </a>
      <a href="/" className="logoutBtn" onClick={handleGoToHome}>Logout</a>
    </header>

    <div className="hdr">
     <h1>Your Playlist</h1>
    </div>
    
    <div className="songs-container">
      <div className="song-card">
        <AddSong onAddSong={addSongHandler} />
        <SongList songs={songs} />
      </div>
    </div>
  </>
);
};

export default Song;