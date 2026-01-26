const express = require("express");
require('dotenv').config();
const path = require("path");
const { connectMongoDb } = require("./connection");
const routes= require('./routes/index');
const cookieParser = require("cookie-parser");
const {logReqRes} = require("./middleware/auth");

const app = express();
const PORT = 4000;

connectMongoDb();
console.log('Mongodb is connected');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(logReqRes("log.txt"));

app.use("/api", routes);

app.listen(PORT, () => console.log(`server started at PORT:${PORT}`));