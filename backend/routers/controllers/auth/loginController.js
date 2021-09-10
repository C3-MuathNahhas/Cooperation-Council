const loginModel = require("../../../db/models/userSchema");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const bcrypt = require("bcrypt");

<<<<<<< HEAD:backend/routers/controllers/auth/login.js
const Login = (req, res) => {
  const email = req.body.email.tolowercase();
  const password = req.body.password;
=======
const Login=(req,res)=>{
    const email=req.body.email.toLowerCase();
    const password=req.body.password
>>>>>>> 2935c3a402c9e483f3fef1afe105a7534f2c1d8c:backend/routers/controllers/auth/loginController.js

  loginModel
    .findOne({ email: email })
    .then((result) => {
      if (!result) {
        res.json("email not found ");
      }
      const valid = bcrypt.compareSync(password, result.password);
      if (!valid) {
        res.json("password error");
      } else {
        const payload = {
          userId: result.userId,
          firstName: result.firstName,
        };
        const SECRET = process.env.SECRET;
        const options = {
          expiresIn: "60m",
        };
        const token = jwt.sign(payload, SECRET, options);
        //   console.log(token)
        res.status(200);
        res.json({ success: true, massage: " you logged in", token: token });
      }
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = { Login };
