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
    res.send("Data has been added");
});
// put methods is use to update database 


app.put("/:name", async (req, res) => {
    console.log(req.body);
    let data = await dbConect();
    let result = await data.updateOne(
        { name: req.params.name },
        { $set: req.body }
    );
    console.log("data updateed")
    res.send({ name: "Data Updated" })
})
app.listen(4000);