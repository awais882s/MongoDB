const dbConnect = require("./mongodb");

const insert = async () => {
    const db = await dbConnect();
    let result = await db.insertOne(
        { name: "Muhammad Awais s", city: "Arifwala", rollno: 15424, role: "engineer" }
    );
    console.log(result)

}
insert();
