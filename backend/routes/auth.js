const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const route = express.Router();
const { body, validationResult } = require("express-validator");
require("../DB/connection");
const User = require("../models/registerUser");
const JWT_SECRET_KEY = process.env.JWT_SECRET;
app.use(cookieParser());
route.get("/", (req, res) => {
  res.send("Hello World!");
});
// const validationMiddleware =
// route 1 for register user
route.post(
  "/register",
  [
    body("name", "enter a valid name").isLength({ min: 3 }),
    body("email", "enter a valid email").isEmail(),
    body("password", "pass length should be at least 8 character").isLength({
      min: 8,
    }), // Use the correct field name here
  ],
  async (req, res) => {

    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(422).json({ errors: result.array() });
    }
    try {
      const { name, email, password, cpassword } = req.body;

      // Check if the user already exists
      let existingUser = await User.findOne({ email: email });
     if (existingUser) {
       return res.status(400).json({ error: "Sorry, email is already in use" });
     } else if (password !== cpassword) {
       return res.status(400).json({ error: "Passwords don't match" });
     }


      // Hash the passwords
      const salt = await bcrypt.genSaltSync(10);
      const securepassword = await bcrypt.hashSync(password, salt);
      const securecpassword = await bcrypt.hashSync(cpassword, salt);
      //creating auth token
      const data = {
        user: {
          name: name,
          email: email,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET_KEY);
      console.log(authToken);
      res.json({ authToken });
      // Create the user with hashed passwords
      const user = await User.create({
        name: name,
        email: email,
        password: securepassword, // Use the hashed password
        cpassword: securecpassword, // Use the hashed password
        tokens: [{ token: authToken }],
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Error occurred");
    }
  }
);
// route 2 for login user
// route.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password) {
//       res.status(400).json({ error: "Please provide an email and password" });
//     }
//     const userLogin = await User.findOne({ email: email });
//     if (userLogin) {
//       const isMatchPass = await bcrypt.compare(password, userLogin.password);
//       if (!isMatchPass) {
//         res.status(400).json({ user: "enter valid credientials pass" });
//       } else {
//         res.status(200).json({ user: "user signin successfully" });
//         const data = {
//           user: {
//             id: userLogin.id,
//           },
//         };
//         const authToken = jwt.sign(data, JWT_SECRET_KEY);
//         console.log(authToken);
//         // res.json({ authToken });
//         // res.cookie('hlo', 'tilak');
     
//         res.cookie("tilak", authToken, {
//           expires: new Date(Date.now() + 60000),
//           httpOnly: true,
//         });
//       }
//     } else {
//       res.status(400).json({ user: "enter valid credientials email" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("enternal server Error occurred: error");
//   }
// });
route.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Please provide an email and password" });
    }

    const userLogin = await User.findOne({ email: email });

    if (!userLogin) {
      return res.status(400).json({ user: "Enter valid credentials email" });
    }

    const isMatchPass = await bcrypt.compare(password, userLogin.password);

    if (!isMatchPass) {
      return res.status(400).json({ user: "Enter valid credentials password" });
    }

    // Set the cookie before sending the response
    const data = {
      user: {
        _id: userLogin._id,
        name: userLogin.name,
        email: userLogin.email,
        password: userLogin.password,
      },
    };
    const authToken = jwt.sign(data, JWT_SECRET_KEY);

    res.cookie("tilak", authToken, {
      expires: new Date(Date.now() + 60000),
      httpOnly: true,
      secure: true, // Set to true if using HTTPS
      sameSite: "None", // Use this for cross-site requests
    });

    // Send the success response
    res.status(200).json({ user: "User signed in successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error occurred");
  }
});
// for authentication user to homePgage
// route.get("/homePage", authTentication, async (req, res) => {
// console.log("helo form authentication")
// })

module.exports = route;
