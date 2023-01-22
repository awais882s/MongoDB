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


// convert data in JSON format
app.use(express.json());

app.post("/", (req, res) => {
    console.log(req.body)
    res.send({ name: "awais" });
});
app.listen(4000);