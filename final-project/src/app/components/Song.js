"use client";
import "./editDelete.css";
import React, {useState} from "react";

const Song = ({ title, artist, image, link, onDelete, onEdit }) => {
  const [isLast, setIsLast] = useState(false);
  return (
    <li className="song-item">
      <div className="song-info">
        <div className="leftSide">
        <img src={image} alt="Album cover" style={{ width: "100px", height: "100px" }} />
        <div className="editDeleteContainer">
       
        
      </div>
        </div>
        <div className="rightSide"> 
        <h2 style={{ marginTop: "-10px" }}>{title}</h2> 
      <h3 style={{ marginTop: "-10px" }}>{artist}</h3>
        <h3 style={{ marginTop: "1px" }}>{link}</h3>
        </div>
        <button className="deleteBtn" onClick={onDelete}>Delete</button>
        <button className="editBtn" onClick={onEdit}>Edit</button>
      </div>
      {!isLast && <hr className="divideLine" />}
    </li>
  );
};

export default Song;
