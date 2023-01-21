const dbConnect = require("./mongodb");

const insert = async () => {
    const db = await dbConnect();
    console.log(db);
}
insert();
