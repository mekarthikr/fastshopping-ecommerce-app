const jwt = require("jsonwebtoken");
require("dotenv").config();

/* AUTHENTICATE TOKEN */

// const authenticateToken = async (req, res, next) => {
//   const authHeader = req.header("Authorization");
//   if (authHeader == null) {
//     return res.send("no token");
//   }
//   jwt.verify(authHeader, process.env.ACCESS_TOKEN, (err, token) => {
//     if (err) {
//       res.send("Invalid Token");
//     } 
//     else {
//       console.log("has token");
//       next();
//     }
//   });
// };

/* AUTHENTICATE ADMIN TOKEN */

const authenticateAdminToken = async (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (authHeader == null) {
    return res.status(401).json({message:"You dont have access"});
  }
  jwt.verify(authHeader, process.env.ACCESS_TOKEN, (err, token) => {
    if (token.role === "admin") {
      next();
    } 
    else {
      res.status(401).json({message:"You dont have access"});
    }
  });
};

/* AUTHENTICATE USER TOKEN */

const authenticateUserToken = async (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (authHeader == null) {
    res.status(401).json({message:"You dont have access"});
  }
  jwt.verify(authHeader, process.env.ACCESS_TOKEN, (err, token) => {
    if (token.role === "user") {
      next();
    }
    else {
      res.status(401).json({message:"You dont have access"});
    }
  });
};

module.exports = {
  authenticateAdminToken,
  authenticateUserToken,
};
