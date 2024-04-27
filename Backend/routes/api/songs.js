const express = require('express'); 
const router = express.Router(); 

const bodyParser = require('body-parser'); 
const Song = require('../../models/Song')
const auth = require('../../middleware/auth');
const User = require('../../models/User');

module.exports = router;

router.post('/', auth, bodyParser.json(), (req,res) => {
    console.log(res.locals.userid)
    console.log(req.body); 
    Song.create(req.body)
    .then((song) => res.json({ msg: 'Song added successfuly'}))
    .catch((err) => res.status(400).json({ error: 'Unable to add this song'})); 


}); 

router.get(':/id', (req, res) => {
    Song.findById(req.params.id)
    .then((song) => res.json(song))
    .catch((err) => res.status(404).json({ noitemfound: 'No Song found'})); 
}); 

router.get('/', (req, res) => {
    Song.find()
    .then((songs) => res.json(songs))
    .catch((err) => res.status(404).json({ noitemsfound: 'Not Songs found'})); 
}); 

router.put('/:id', bodyParser.json(), (req, res) => {
    Song.findByIdAndUpdate(req.params.id, req.body)
    .then((song) => res.json({ msg: 'Updated successfully'}))
    .catch((err) => res.status(400).json({ error: 'Unable to update the database'})); 
}); 

router.delete('/:id', (req, res) => {
    Song.findByIdAndDelete(req.params.id)
    .then((song) => res.json({ msg: 'Item entry deleted successfully'}))
    .catch((err) => res.status(404).json({ error: 'No such a song'})); 
}); 