const express = require('express');
const dotenv = require('dotenv')

dotenv.config({
    path: '.env.local'
})


const app = express();
const port = process.env.PORT || 8086;
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors({origin: true, credentials: true}));
app.use(express.json({extended: false}));


const songs = require('./routes/api/songs');

app.use('/api/songs', songs);

const users = require('./routes/api/users');

app.use('/api/users', users);


app.get('/', (req, res) => res.send('Hello World!'));

app.get('/user/:id', (req, res) => {
    res.send(`user ${req.params.id}`);
})

const conn_str = 'mongodb+srv://josephvu1010:skRAgNSIRnFJ5wzq@webdevfinalproject.omupmnf.mongodb.net/?retryWrites=true&w=majority&appName=WebDevFinalProject';
mongoose.set('strictQuery', false);
mongoose.connect(conn_str).then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
    console.log(`MongoDB Connection Suceeded...`);
})
.catch(err => {
    console.log(`Error in DB Connection ${err}`);
});



