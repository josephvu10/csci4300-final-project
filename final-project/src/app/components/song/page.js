"use client";
import "./Song.css";
import NavigationBar from "../navBar/page";
import SearchBar from "../search/page";
import React, { useState } from "react";
import SongList from "../SongList";
import AddSong from "../AddSong";
import { useRouter } from "next/router";

import axios from "axios";

import { API_URL } from "../../../constants";
import { useUserCtx } from "../../context/UserContext";

const Song = () => {
  const { userData } = useUserCtx();
  const [songs, setSongs] = useState([]);

  const addSongHandler = (songData) => {
    if (songData.title.trim() === "") {
      return;
    }

    console.log(`Bearer ${userData.token}`);
    axios
      .post(
        `${API_URL}/api/songs`,

        songData, // { title, artist }

        {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);

        setSongs((prevSongs) => {
          return [...prevSongs, { id: Date.now(), ...songData }];
        });
      })
      .catch((error) => {
        console.error(error);
        if (error.response) {
          console.error(error.response.data);
        }
      });
  };

  const deleteSongHandler = (songData) => {
    const result = songData.id.filter((__, i) => i !== songData.id);
    setSongs(result);
  };

  const editSongHandler = (id) => {
    const tempArr = song;
    const selected = tempArr.filter((song) => song.id === id);
    setSelectedItem(selected[0]);
  };

  const handleGoToHome = () => {
    // Redirect to the index page (home)
    const router = useRouter();
    router.push("/");
  };

  return (
    <>
      <header className="header">
        <a href="/" className="homeLink" onClick={handleGoToHome}>
          <img src="/Images/logo2.png" alt="Company logo" className="logo" />
        </a>
        <a href="/" className="logoutBtn" onClick={handleGoToHome}>
          Logout
        </a>
      </header>

      <div className="hdr">
        <img
          src="/Images/songBanner.gif"
          alt="Square Image"
          className="squareImage"
        />
        <h1>Your Playlist</h1>
      </div>

      <div className="searchContainer">
        <SearchBar />
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
