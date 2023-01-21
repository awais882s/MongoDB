const dbConnect = require("./mongodb");

const update = async () => {
    let db = await dbConnect();
    let result = await db.updateMany(
        { name: "Soni Chasmato lovely update data" },
        { $set: { name: "Solutions point", rollno: 883 } }
    )
    console.log(result);
}
update();