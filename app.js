const express = require("express");
const path = require("path");
const http = require('http');
const fs = require('fs');
const app = express();
const bodyparser = require('body-parser');

const hostname = '127.0.0.1';
const port = 8000;

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/profileei');
}
const eiSchema = new mongoose.Schema({
    name: String,
    email: String,
});
const eiprofile = mongoose.model('eiprofile', eiSchema);

app.use('/static', express.static('static'));
app.use(express.urlencoded());
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.status(200).render('index.pug');
})

app.get('/tour', (req, res) => {
    res.status(200).render('tour.pug');
})

app.get('/discography', (req, res) => {
    res.status(200).render('discography.pug');
})

app.get('/register', (req, res) => {
    res.status(200).render('register.pug');
})
app.post('/register', (req, res) => {
    var mydata = new eiprofile(req.body);
    mydata.save().then(() => {
        res.status(200).render('register.pug')
    }).catch(() => {
        res.status(400).send("form have not submitted")
    })
})

app.get('/videos', (req, res) => {
    res.status(200).render('videos.pug');
})

app.get('/singles', (req, res) => {
    res.status(200).render('singles.pug');
})
app.get('/albums', (req, res) => {
    res.status(200).render('albums.pug');
})
app.get('/album1', (req, res) => {
    res.status(200).render('album1.pug');
})
app.get('/album2', (req, res) => {
    res.status(200).render('album2.pug');
})
app.get('/album3', (req, res) => {
    res.status(200).render('album3.pug');
})
app.get('/album4', (req, res) => {
    res.status(200).render('album4.pug');
})
app.get('/album5', (req, res) => {
    res.status(200).render('album5.pug');
})
app.get('/album6', (req, res) => {
    res.status(200).render('album6.pug');
})
app.get('/album7', (req, res) => {
    res.status(200).render('album7.pug');
})
app.get('/album8', (req, res) => {
    res.status(200).render('album8.pug');
})
app.get('/album9', (req, res) => {
    res.status(200).render('album9.pug');
})
app.get('/album10', (req, res) => {
    res.status(200).render('album10.pug');
})
app.get('/album11', (req, res) => {
    res.status(200).render('album11.pug');
})
app.get('/album12', (req, res) => {
    res.status(200).render('album12.pug');
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});