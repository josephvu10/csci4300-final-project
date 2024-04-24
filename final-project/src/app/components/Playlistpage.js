'use client'
import React, { useState } from 'react';
import './Playlistpage.css';

const Playlistpage = () => {
  // dummy array 
  const playlist = ['Song 1', 'Song 2', 'Song 3'];

  const handleSongClick = (song) => {
    console.log('click click'); 
  };

  return (
    <div className="playlist-container">
      <h2 className="playlist-header">Playlist</h2>
      <div className="search-container">
         <form action="/search">
            <input type="text" placeholder="Search.." name="search" />
         </form>
      </div>
      <div className="grid-container">
        {playlist.map((song, index) => (
          <button
            key={index}
            className="grid-item"
            onClick={() => handleSongClick(song)}
          >
            {song}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Playlistpage;
