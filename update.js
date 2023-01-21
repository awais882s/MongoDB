const dbConnect = require("./mongodb");

const update = async () => {
    let db = await dbConnect();
    console.log(db);
}
update();