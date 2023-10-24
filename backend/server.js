const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;
const UserRT = require('./Router/UserRT')
require('./Config/db');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/users", UserRT);
app.listen(port, () => console.log("server started at 5000"));