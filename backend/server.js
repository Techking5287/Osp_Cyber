const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;
const UserRT = require('./Router/UserRT')
require('./Config/db');
const cors = require('cors');

const app = express();

const folderName = __dirname + '/Files';

app.use(cors());
app.use(express.json());
app.get('/download_intro1', (req, res) => {
    try {
        res.download(folderName + '/Intro1.mp4', (err) => {
            if (err) {
                res.end("error: " + err);
            }
        })
    }
    catch (error) {
        res.end("couldn't connect");
    }
})
app.get('/download_introv2', (req, res) => {
    try {
        res.download(folderName + '/Intro2.mp4', (err) => {
            if (err) {
                res.end("error: " + err);
            }
        })
    }
    catch (error) {
        res.end("couldn't connect");
    }
})
app.use("/api/users", UserRT);
app.listen(port, () => console.log("server started at 5000"));