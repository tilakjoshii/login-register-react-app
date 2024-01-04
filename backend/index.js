const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
dotenv.config({ path: './.env' });
// database connection
require('./DB/connection');

app.use(express.json()); // middleware for parsing json data in request body
// port detch form .env
const port = process.env.PORT;
// models required form models
// const User = require('./models/registerUser');
app.use("/contact", (req, res) => {
  res.cookie("helo", "tilak joshi")
  res.send("tilak joshi is a good boy")
})
app.use(require("./routes/auth"));
app.listen(port, () => {
  console.log(`app listening on port ${port}/`);
  console.log("flow this link: " + " " + "http://localhost:" + port);
});
