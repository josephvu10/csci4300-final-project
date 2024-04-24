'use client'
import React, { useState } from 'react';
import SearchBar from "../search/page";
import Link from 'next/link';
import './Playlistpage.css';

const Playlistpage = () => {
  // dummy array 
  const playlist = ['Playlist 1', '+'];

  return (
    <div className="playlist-container">
      
      <h2 className="playlist-header">Playlist</h2>
      <SearchBar />
      <div className="grid-container">
        <Link href='/components/song'> 
            <button className="playlist1Button"> Playlist1 </button>
          </Link>
      </div>
    </div>
  );
};

export default Playlistpage;
