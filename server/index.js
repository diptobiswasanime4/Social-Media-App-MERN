"use strict";
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.get("/", (req, res) => {
    res.send("Home Page");
});
app.listen(PORT, () => {
    console.log(`App running on PORT ${PORT}`);
});
