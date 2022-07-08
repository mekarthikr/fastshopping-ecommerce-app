const jwt = require('jsonwebtoken')
require('dotenv').config()

const authenticateToken = async (req, res, next) => {
    const authHeader = req.header("Authorization")
    console.log(authHeader)
    if (authHeader == null) {
        return res.send("no token")
    }
    jwt.verify(authHeader, process.env.ACCESS_TOKEN, (err, token) => {
        if (err) {
            res.send("Invalid Token")
            //next()
        }
        else {
            // console.log(id)
            console.log("has token")
            next()
        }
        console.log("has")
    })
}

const authenticateAdminToken = async (req, res, next) => {
    const authHeader = req.header("Authorization")
    console.log("authToken",authHeader)
    if (authHeader == null) {
        return res.send("no token")
    }
    jwt.verify(authHeader, process.env.ACCESS_TOKEN, (err, token) => {
        if (token.role==="admin") {
           // res.send("Invalid Token")
            next()
        }
        else {
            res.send("Invalid Token")
           // next()
        }
        console.log("has invalid token")
    })
}

const authenticateUserToken = async (req, res, next) => {
    const authHeader = req.header("Authorization")
    console.log("interseptor",authHeader)
    if (authHeader == null) {
        return res.send("no token")
    }
    jwt.verify(authHeader, process.env.ACCESS_TOKEN, (err, token) => {
        console.log(token.role)
        if (token.role==="user") {
            //res.send("Invalid Token")
            next()
        }
        else {
            console.log("invalid token")
            //next()
        }
        console.log("has")
    })
}
module.exports = {
    authenticateToken,
    authenticateAdminToken,
    authenticateUserToken
}