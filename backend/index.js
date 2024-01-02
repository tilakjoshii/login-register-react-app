const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
dotenv.config({path: './.env'});
const db = process.env.DATABASE;

// mongoose.connect(db).then(() => {
//     console.log('Connected to MongoDB');
// }).catch((err) => {
//     console.error(`Error connecting to MongoDB: ${err}`);
// })
main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect(db)
       .then(() => console.log('Connected to MongoDB'))
}
// app.use((req, res, next) => {
//   console.log("hello world");
//   return res.json({ msg: "tilak joshi" });
// })
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
