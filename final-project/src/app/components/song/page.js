'use client'
import './Song.css';
import NavigationBar from "../navBar/page";
import SearchBar from "../search/page";
import React, { useState } from'react';
import SongList from '../SongList'
import AddSong from '../AddSong'
import Hdr from '../Hdr'

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

    return ( 
        <div>
            <div className="songs-container">
                <div className="song-header"> 
                    <header className="song-header">
                        <h1>SoundPalette</h1>
                        <button className='login-button'>Login</button>
                    </header>
                </div>
                <div className="song-card">
                    <SearchBar /> 
                        <Hdr />
                        <AddSong onAddSong={addSongHandler} />
                        <SongList songs={songs} />
                </div>
            </div>
        </div>
    );
};

export default Song;