"use client";
import "./editDelete.css";
import React, {useState} from "react";

const Song = ({ title, artist, image, link, onDelete, onEdit }) => {
  return (
    <li className="song-item">
      <div className="song-info">
        <h2>{title}</h2>
        <h3>{artist}</h3>
        <img src={image} alt="Album cover" style={{ width: "200px", height: "200px" }} />
        <h3>{link}</h3>
      </div>
      <div className="editDeleteContainer">
        <button className="deleteBtn" onClick={onDelete}>Delete</button>
        <button className="editBtn" onClick={onEdit}>Edit</button>
      </div>
    </li>
  );
};

export default Song;
