'use client'
import React from 'react';

const Song = (props) => {

    return (    
        <li key={props.id} className="song-item">
        <div className="song-info">
            <h2>{props.title}</h2>
            <h3>{props.artist}</h3>
        </div>
        <button>Delete</button>
        <button>Edit </button>
        </li>
    )
}

export default Song;