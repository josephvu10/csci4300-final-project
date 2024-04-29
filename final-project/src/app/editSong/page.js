"use client";
import "./editSong.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useUserCtx } from "../context/UserContext";

import { API_URL } from "../../constants";

const Edit = ({ searchParams }) => {
  const { userData, ready } = useUserCtx();
  const id = searchParams.id;
  const router = useRouter();
  useEffect(() => {
    if (!ready) return;

    if (!userData.token) {
      router.push("/");
    }
    axios
      .get(`${API_URL}/api/songs/${id}`, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((resp) => {
        setTitle(resp.data.title);
        setArtist(resp.data.artist);
        setImage(resp.data.image);
        setLink(resp.data.link);
      })
      .catch((error) => {
        console.error(error);
        if (error.response) {
          console.error(error.response.data);
        }
      });
  }, [id, ready]);

  const [enteredTitle, setTitle] = useState("");
  const [enteredArtist, setArtist] = useState("");
  const [enteredImage, setImage] = useState("");
  const [enteredLink, setLink] = useState("");

  const editSongHandler = (event) => {
    event.preventDefault();

    axios
      .put(
        `${API_URL}/api/songs/${id}`,
        {
          title: enteredTitle,
          artist: enteredArtist,
          image: enteredImage,
          link: enteredLink,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userData.token}`,
          },
        }
      )
      .then((resp) => {
        console.log('success')
        router.push('/playlist')
      })
      .catch((err) => {
        console.error(err);
        if (err.response) console.error(err.response.data);
      });
  };

  return (
    <>
    <div className="editSongContainer">
    <div className="editSongHeader"> Changed your mind? </div> 
    <form onSubmit={editSongHandler}>
    <div className="editSongCard">
    <h1 className="editSongSub"> Edit Song Details</h1>
        <div className="formNewLine">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Title"
            value={enteredTitle}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className="formNewLine">
          <label htmlFor="artist">Artist</label>
          <input
            id="artist"
            type="text"
            placeholder="Artist"
            value={enteredArtist}
            onChange={(event) => setArtist(event.target.value)}
          />
        </div>

        <div className="formNewLine">
          <label htmlFor="image">Image</label>
          <input
            id="image"
            type="text"
            placeholder="Image Link"
            value={enteredImage}
            onChange={(event) => setImage(event.target.value)}
          />
        </div>

        <div className="formNewLine">
          <label htmlFor="link">Link</label>
          <input
            id="link"
            type="text"
            placeholder="Song Link"
            value={enteredLink}
            onChange={(event) => setLink(event.target.value)}
          />
        </div> 
    </div>
    <button type="submit" className="editSongBtn">
          Submit Changes
        </button>
      </form>
    </div>
    </>
  );
};


export default Edit;
