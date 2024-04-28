"use client";
import React, {useState} from "react";

const Song = ({ title, artist, image, link, onDelete, onEdit }) => {
  return (
    <li className="song-item">
      <div className="song-info">
        <h2>{title}</h2>
        <h3>{artist}</h3>
        <img src={image} alt="fuck"></img>
        <h3>{link}</h3>
      </div>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onEdit}>Edit </button>
    </li>
  );
};

export default Song;
