const mongoose = require("mongoose");
const db = process.env.DATABASE;
// method 1 for connection to the database...........

//  mongoose.connect(db).then(() => {
//      console.log('Connected to MongoDB');
//  }).catch((err) => {
//      console.error(`Error connecting to MongoDB: ${err}`);
//  })

// method 2 for connection to the database......
main().catch((err) => console.log("connection fail............."+"  "+err));

async function main() {
  await mongoose.connect(db).then(() => console.log("Connected to MongoDB"));
}
