const dbConnect = require("./mongodb");

const deleteData = async () => {
    let db = await dbConnect();
    let result = await db.deleteMany(
        { name: "Solutions point" },
    )
    console.log(result);
    if (result.acknowledged) {
        console.log("Data has Been Deleted");

    }
}

deleteData();