const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const userRouter = require("./routes/userroutes");
const productRouter = require("./routes/productroutes");
const adminRouter = require("./routes/adminroutes");

const app = express();
// app.use(express.json());
app.use(cors());

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());

//app.use(bodyParser.json({ limit: "10000kb", extended: true }));
//app.use(bodyParser.urlencoded({ limit: "10000kb", extended: true }));

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});
// app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb'}));
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/admin", adminRouter);

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