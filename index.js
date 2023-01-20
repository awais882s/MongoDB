const { mongoClient } = require("mongodb");
// *============or=======================

// const mongoClient = require("mongodb").MongoClient;


const url = "mongodb://localhost:27017";
const dataBase = "e-comm";
const client = new mongoClient(url);



