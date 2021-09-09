const jwt = require("jsonwebtoken");

const Authentication = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.json("no token");
  }
  const SECRET = process.env.SECRET;
  const token = req.headers.authorization.split(" ").pop();
  jwt.verify(token, SECRET),
    (err, result) => {
      if (err) {
        res.json("forbidden");
      } else {
        req.token = result;
        next();
      }
    };
};

module.exports = Authentication;
