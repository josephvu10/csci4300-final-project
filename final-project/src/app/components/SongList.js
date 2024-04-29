'use client'

import React from 'react';
import Song from './Song';
import Card from './Card';
import './SongList.css';

const SongList = ({songs, onEditSong, onDeleteSong}) => {

    return (
        <div className="song-list-container">
        <Card className="songs">
            <ul>
                {songs.map((song, idx) => {

                    const oldDel = onDeleteSong
                    const boundDel = (...args) => {
                        oldDel(song, ...args)
                    }

                    const oldEdit = onEditSong
                    const boundEdit = (...args) => {
                        oldEdit(song, ...args)
                    }

                   return <Song
                    key={idx}
                    id={song.id}
                    title={song.title}
                    artist={song.artist}
                    image={song.image}
                    link={song.link}
                    onDelete={boundDel}
                    onEdit={boundEdit}
                    />
})}
            </ul>
            
        </Card>
        </div>
    );
};

export default SongList;