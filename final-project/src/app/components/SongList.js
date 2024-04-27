'use client'

import React from 'react';
import Song from './Song';
import Card from './Card';
import './SongList.css';

const SongList = props => {

    return (
        <Card className="songs">
            <ul>
                {props.songs.map((song) => (
                    <Song
                    key={song.id}
                    id={song.id}
                    title={song.title}
                    artist={song.artist}
                    />
                ))}
            </ul>
            
        </Card>
    );
};

export default SongList;