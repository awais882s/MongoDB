const express = require("express");
const dbConect = require("./mongodb");
const mongodb = require("mongodb");
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
});
// Delete methods is use to delete data from database

app.delete("/:id", async (req, res) => {
    console.log(req.params.id);
    let data = await dbConect();
    let result = data.deleteOne(
        { _id: new mongodb.ObjectId(req.params.id) }
    );
    res.send(result)
})
app.listen(4000);