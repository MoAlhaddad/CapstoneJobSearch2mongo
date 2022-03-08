const express = require("express");

const app = express();
const db = require("./db.js")

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Node JS Server started'));
