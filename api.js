const express = require("express");
const dbConect = require("./mongodb");
const app = express();

app.get("/", async (req, res) => {
    let data = await dbConect();
    data = await data.find({}).toArray();
    console.log(data);
    res.send({ name: "awais" });
})

app.listen(4000);