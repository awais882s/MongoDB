const express = require("express");
const dbConect = require("./mongodb");
const app = express();

app.get("/", (req, res) => {
    res.send({ name: "awais" });
})

app.listen(4000);