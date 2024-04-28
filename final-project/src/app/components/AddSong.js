"use client";
import { useState } from "react";
import React from "react";
import Card from "./Card";

const addSong = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredArtist, setEnteredArtist] = useState("");
  const [enteredImage, setEnteredImage] = useState("");
  const [enteredLink, setEnteredLink] = useState("");

  const addSongHandler = (event) => {
    event.preventDefault();
    props.onAddSong({
      title: enteredTitle,
      artist: enteredArtist,
      image: enteredImage,
      link: enteredLink
    });

    setEnteredTitle("");
    setEnteredArtist("");
    setEnteredImage("");
    setEnteredLink("");
  };

  return (
    <Card className="searchSongs">
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

        <label>Image</label>
        <input
          id="image"
          type="text"
          placeholder="Image Link"
          value={enteredImage}
          onChange={(event) => setEnteredImage(event.target.value)}
        />

        <label>Link</label>
        <input
          id="link"
          type="text"
          placeholder="Song Link"
          value={enteredLink}
          onChange={(event) => setEnteredLink(event.target.value)}
        />

        <button type="submit" className="addSongBtn">
          Add Song
        </button>
      </form>
    </Card>
  );
};

export default addSong;
