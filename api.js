const express = require("express");
const dbConect = require("./mongodb");
const app = express();

app.get("/", async (req, res) => {
    let data = await dbConect();
    let result = await data.find({}).toArray();
    console.log(result);
    res.send(result);
})

app.listen(4000);