const mongoose = require('mongoose'); 

const SongSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    }, 
    artist: {
        type: String, 
    }, 
    image: {
        type: String, 
    },
    link: {
        type: String
    }
}); 

module.exports = Song = mongoose.model('song', SongSchema);