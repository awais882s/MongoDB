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

app.post("/", async (req, res) => {
    console.log(req.body);
    let data = await dbConect();
    let result = await data.insertMany(req.body);
    res.send(result);
});
// put methods is use to update database 


app.put("/", (req, res) => {
    res.send({ name: "awais iqbal" })
})
app.listen(4000);