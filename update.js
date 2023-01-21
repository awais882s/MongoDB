const dbConnect = require("./mongodb");

const update = async () => {
    let db = await dbConnect();
    let result = await db.updateMany(
        { name: "Muhammad Awais s" },
        { $set: { name: "Soni Chasmato lovely update data", rollno: 883 } }
    )
    console.log(result);
}
update();