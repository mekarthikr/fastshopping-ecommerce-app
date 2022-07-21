const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config()
const userRouter = require("./routes/userroutes");
const productRouter = require("./routes/productroutes");
const cartRoute = require("./routes/cartroutes");

const app = express();

app.use(cors());

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/cart", cartRoute);

const connect_string =process.env.DB_CONNECTION_STRING;

mongoose.connect(connect_string, () => {
  console.log("connect"),
    (error) => {
      console.log("error :", error);
    };
});

app.listen(5000, () => {
  console.log("server running at 5000");
});
