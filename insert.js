const dbConnect = require("./mongodb");

const insert = async () => {
    let db = await dbConnect();
    let result = await db.insertMany(
        [
            { name: "Muhammad Awais s", city: "Arifwala", rollno: 15424, role: "engineer" },
            { name: "Soni Chasmato", city: "Arifwala", rollno: 882, role: "Lovely" }
        ]
    );
    if (result.acknowledged) {
        console.log("Multiple Data is Inserted Successfully!")
    }
}

insert();