import './Song.css';
import React from 'react';
import Card from '../UI/Card'

const Songs = () => {
    return (
       <Card className="songs">
        <img>Insert Song Image</img>
        <h3 class="title">Title:</h3>
        <p>Artist:</p>
       </Card>
    )
}