const dbConnect = require("./mongodb");

const update = async () => {
    let db = await dbConnect();
    let result = await db.updateOne(
        { name: "HeartBeat" },
        { $set: { name: "Soni Chasmato love", rollno: 883 } }
    )
    console.log(result);
}
update();