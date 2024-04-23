'use client'
import './Song.css';
import NavBar from 'NavBar.js';
import PlayBar from 'PlayBar.js';
import React, { useState } from'react';

const Song = () => { //hello friends, i need help with how to show my page in react...
    return ( //make header and playbar at the bottom as individual react components
        <div>
            <div className="songs-container">
                <div className="song-header"> 
                    <header className="song-header">
                        <h1>SoundPalette</h1>
                        <button className='login-button'>Login</button>
                    </header>
                </div>
                <div className="song-card">
                    <h2>Song</h2>
                    <div className="img">
                        <img src="https://m.media-amazon.com/images/I/51M5a2vdU1L._UXNaN_FMjpg_QL85_.jpg"></img>
                    </div>
                    <h3 className="title">Title: Super Shy</h3>
                    <p>Artist: New Jeans</p>
                    <p>Album: </p>
                    <div className='add-song-button'>
                        <button className='add-song-btn'>Add to Playlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Song;