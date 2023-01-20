// const { MongoClient } = require("mongodb");

// // *============or=======================

// // const mongoClient = require("mongodb").MongoClient;


// const url = "mongodb://localhost:27017";
// const dataBase = "e-comm";
// const client = new MongoClient(url);



// async function getData() {
//     let result = await client.connect();
//     let db = result.db(dataBase);
//     let collection = db.collection("products");
//     let response = await collection.find({}).toArray();
//     console.log(response);
// }

// getData();





const { MongoClient } = require('mongodb');

// Connect to MongoDB
const uri = "mongodb+srv://admin:admin@cluster0.dvpabex.mongodb.net/test";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    if (err) {
        console.log("Error connecting to MongoDB: ", err);
    } else {
        console.log("Connected to MongoDB!");

        // Select the database and collection
        const db = client.db("e-comm");
        const collection = db.collection("products");

        // Retrieve all documents in the collection
        collection.find({}).toArray((err, documents) => {
            if (err) {
                console.log("Error retrieving documents: ", err);
            } else {
                console.log("Documents: ", documents);

                // Close the connection
                client.close();
            }
        });
    }
});