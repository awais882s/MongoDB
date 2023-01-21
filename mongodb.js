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


// // * To handke promise 1st way to resolve the promise
// dbConnect().then((res) => {
//     res.find().toArray().then((data) => {
//         console.log(data);
//     })
// });
// console.log(dbConnect());
// * Second Method is use to resolve the promise
const main = async () => {

    let data = await dbConnect();
    data = await data.find({}).toArray();
    console.log(data);
    console.log("main function called ")
}
main();

module.exports = dbConnect;