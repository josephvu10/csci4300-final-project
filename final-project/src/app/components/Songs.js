'use client'
import './Song.css';
import NavBar from 'NavBar.js';
import PlayBar from 'PlayBar.js';
import React, { useState } from'react';

const Songs = () => { //hello friends, i need help with how to show my page in react...
    return (
        <div className="songs-container">
            <NavBar />
            <img src="https://static.wikia.nocookie.net/rhythmhive/images/7/7b/Get_Up_cover.jpg/revision/latest?cb=20230831203447">Insert Song Image</img>
            <h3 className="title">Title: Super Shy</h3>
            <p>Artist: New Jeans</p>
            <p>Album: </p>
            <div className='add-song-button'>
                <button className='add-song-btn'>Add Song</button>
            </div>
            <PlayBar />
        </div>
    );
};

export default Songs;