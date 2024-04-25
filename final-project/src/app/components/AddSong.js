'use client'
import { useState } from 'react';
import React from 'react';
import Card from './Card';
import Song from './song/page'; 

const addSong = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredArtist, setEnteredArtist] = useState('');

  const addSongHandler = (event) => {
    event.preventDefault();
    props.onAddSong({
      title: enteredTitle, 
      artist: enteredArtist
    });

    setEnteredTitle('');
    setEnteredArtist('');
  };

  return (
    <Card className="input">
      <form onSubmit={addSongHandler}>
        <label>Title</label>
        <input
          id="title"
          type="text"
          placeholder="Title"
          value={enteredTitle}
          onChange={(event) => setEnteredTitle(event.target.value)}
        />

        <label>Artist</label>
        <input
          id="artist"
          type="text"
          placeholder="Artist"
          value={enteredArtist}
          onChange={(event) => setEnteredArtist(event.target.value)}
        />

        <button type="submit" className="addSongBtn">Add Song</button>
      </form>
    </Card>
  );
};

export default addSong;