const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const userRouter = require("./routes/userroutes");
const productRouter = require("./routes/productroutes");
// const adminRouter = require("./routes/adminroutes");
const cartRoute = require("./routes/cartroutes");

const app = express();

app.use(cors());

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

app.use("/users", userRouter);
app.use("/products", productRouter);
// app.use("/admin", adminRouter);
app.use("/cart", cartRoute);

const connect_string =
	"mongodb+srv://karthik:yH9WpQBFZkV1g129@cluster0.xahhd.mongodb.net/fastshopping";

mongoose.connect(connect_string, () => {
	console.log("connect"),
		(error) => {
			console.log(error);
		};
});

app.listen(5000, () => {
	console.log("server running at 5000");
});