const mongoose = require("mongoose");
const { Schema } = mongoose;

const registerUser = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  tokens: [{
    token: {
      type: String,
      required: true,
    },
  }],
});
const User = mongoose.model("USER", registerUser);
module.exports = User;