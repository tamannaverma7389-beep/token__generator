const express = require("express");
require('dotenv').config();
const path = require("path");
const { connectMongoDb } = require("./connection");
const routes= require('./routes/index');
const cookieParser = require("cookie-parser");
const {authMiddleware,
     loginController,
     registerController} = require("./middleware/auth");



const app = express();
const PORT = 4000;

connectMongoDb();
console.log('Mongodb is connected');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use("/api", routes);
app.use("/", authMiddleware,
     loginController,
     registerController, routes )

app.listen(PORT, () => console.log(`server started at PORT:${PORT}`));