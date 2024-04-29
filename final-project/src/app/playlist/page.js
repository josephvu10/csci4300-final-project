"use client";
import "./Song.css";
import NavigationBar from "../components/navBar";
import SearchBar from "../components/search";
import SongList from "../components/SongList";
import React, { useState, useEffect } from "react";
import AddSong from "../components/AddSong";
import { useRouter } from "next/navigation";

import axios from "axios";

import { API_URL } from "../../constants";
import { useUserCtx } from "../context/UserContext";

const Song = () => {
  const { userData, logout } = useUserCtx();
  const [songs, setSongs] = useState([]);
  const router = useRouter();

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

  useEffect(() => {
    if (!userData || !userData.token) return;
    axios
      .get(`${API_URL}/api/songs/playlist`, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((resp) => {
        console.log(resp.data);
        setSongs(resp.data.songs);
      })
      .catch(console.error);
  }, [userData]);

  const deleteSongHandler = (songData, e) => {
    const tempArr = songs;

    axios
      .delete(`${API_URL}/api/songs/${songData.id}`, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((resp) => {
        const result = tempArr.filter((s) => s.id !== songData.id);
        setSongs(result);
      })
      .catch((error) => {
        console.error(error);
        if (error.response) {
          console.error(error.response.data);
        }
      });
  };

  const editSongHandler = (songData, e) => {
    // instead of doing below, reroute to new page instead.
    router.push(`/editSong?id=${songData.id}`);
  };

  const handleGoToHome = () => {
    // Redirect to the index page (home)
    router.push("/");
  };

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <>
      <header className="header">
        <a href="/" className="homeLink" onClick={handleGoToHome}>
          <img src="/Images/logo2.png" alt="Company logo" className="logo" />
        </a>
        <a href="/" className="logoutBtn" onClick={handleLogout}>
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
          <SongList
            songs={songs}
            onDeleteSong={deleteSongHandler}
            onEditSong={editSongHandler}
          />
        </div>
      </div>
    </>
  );
};

export default Song;
