const express = require("express");
const dbConect = require("./mongodb");
const app = express();
// get method to get data from database
app.get("/", async (req, res) => {
    let data = await dbConect();
    let result = await data.find({}).toArray();
    console.log(result);
    res.send(result);
})
// post methods is use to save data in database

app.post("/", (req, res) => {
    res.send({ name: "awais" });
});
app.listen(4000);