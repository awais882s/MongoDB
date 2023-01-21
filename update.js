const dbConnect = require("./mongodb");

const update = async () => {
    let db = await dbConnect();
    let result = await db.updateOne(
        { name: "Soni Chasmato" },
        { $set: { name: "HeartBeat" } }
    )
    console.log(result);
}
update();