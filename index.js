const { MongoClient } = require("mongodb");
// *============or=======================
// // const mongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://admin:admin@cluster0.cfg2fvd.mongodb.net/test";

const dataBase = "e-comm";
const client = new MongoClient(url);

const dbConnect = async () => {
    let result = await client.connect();
    let db = result.db(dataBase);
    return db.collection("products");
    // let response = await collection.find({}).toArray();
    // console.log(response);

}

dbConnect().then((res) => {
    res.find().toArray().then((data) => {
        console.log(data);
    })
});
console.log(dbConnect());

const main = () => {
    console.log("main function called ")
}



// This code give by Chatgpt
// const { MongoClient } = require('mongodb');

// // Connect to MongoDB
// const uri = "";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//     if (err) {
//         console.log("Error connecting to MongoDB: ", err);
//     } else {
//         console.log("Connected to MongoDB!");

//         // Select the database and collection
//         const db = client.db("e-comm");
//         const collection = db.collection("products");

//         // Retrieve all documents in the collection
//         collection.find({}).toArray((err, documents) => {
//             if (err) {
//                 console.log("Error retrieving documents: ", err);
//             } else {
//                 console.log("Documents: ", documents);

//                 // Close the connection
//                 client.close();
//             }
//         });
//     }
// });