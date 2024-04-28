"use client";
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
    <div>
      <h1>Edit Song</h1>
      <form onSubmit={editSongHandler}>
        <label>Title</label>
        <input
          id="title"
          type="text"
          placeholder="Title"
          value={enteredTitle}
          onChange={(event) => setTitle(event.target.value)}
        />

        <label>Artist</label>
        <input
          id="artist"
          type="text"
          placeholder="Artist"
          value={enteredArtist}
          onChange={(event) => setArtist(event.target.value)}
        />

        <label>Image</label>
        <input
          id="image"
          type="text"
          placeholder="Image Link"
          value={enteredImage}
          onChange={(event) => setImage(event.target.value)}
        />

        <label>Link</label>
        <input
          id="link"
          type="text"
          placeholder="Song Link"
          value={enteredLink}
          onChange={(event) => setLink(event.target.value)}
        />

        <button type="submit" className="editSongBtn">
          Edit Song
        </button>
      </form>
    </div>
  );
};

export default Edit;
