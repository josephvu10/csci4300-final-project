const express = require('express');
const app = express();
const port = process.env.PORT || 8085;
const mongoose = require('mongoose');
const cors = require('cors');

const items = require('./routes/api/items');

app.use('/api/items', items);

app.use(cors({origin: true, credentials: true}));
app.use(express.json({extended: false}));

app.get('/user/:id', (req, res) => {
    res.send(`user ${req.params.id}`);
})

const conn_str = 'mongodb+srv://josephvu1010:ZO03GH5Xczz3Q5tO@demo-cluster.dqfpiqh.mongodb.net/?retryWrites=true&w=majority&appName=demo-cluster';
mongoose.set('strictQuery', false);
mongoose.connect(conn_str).then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
    console.log(`MongoDB Connection Suceeded...`);
})
.catch(err => {
    console.log(`Error in DB Connection ${err}`);
});

const users = require('./routes/api/users');

app.use( '/api/users', users);

