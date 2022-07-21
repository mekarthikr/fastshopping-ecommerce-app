const User = require("../model/usermodel");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")


// const getUsers = async (req, res) => {
// 	try {
// 		const users = await User.find();
// 		res.json(users);
// 	} catch (err) {
// 		res.send("Error" + err);
// 	}
// };

const getUser = async (req, res) => {
	const id = req.params.id;
	try {
		const user = await User.findById(id);
		res.status(200).json(user);
	} catch (err) {
		res.status(400).json({
			error: error
		});
	}
};

const addUser = async (req, res) => {
	try {
		let user = await User.findOne({	email: req.body.email});
		if (user) {
			throw "Email already exisiting";
		}
		user = new User({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			email: req.body.email,
			password: req.body.password,
			phonenumber: req.body.phonenumber,
			role: req.body.role
		});
		const data = await user.save();
		const message = "Succesfully signed up";
		res.status(201).json({success: message});
	} catch (error) {
		res.status(400).json({
			error: error
		});
	}
};

const editUser = async (req, res) => {
	const id = req.params.id;
	try {
		const user = await User.findByIdAndUpdate(req.params.id, req.body);
		const data = await user.save();
		const message = "User Modified Successfully : Login to continue"
		res.status(201).json({message: message})
	} catch (err) {
		res.status(404).json({Error:err});
	}
};

/* DELETE THE USER DETAILS */

// const deleteUser = async (req, res) => {
// 	const id = req.params.id;
// 	try {
// 		const user = await User.findByIdAndDelete(req.params.id);
// 	} catch (err) {
// 		res.send("Error" + err);
// 	}
// };

const loginUser = async (req, res) => {
	try {
		const user = await User.findOne({email: req.body.email});
		if (user == null) {
			throw "user not found";
		}
		if (user.role !== req.body.role) {
			throw "This user has no permission to access this part"
		}
		if (req.body.password == user.password) {
			const result = jwt.sign({id: user.id,role: user.role},process.env.ACCESS_TOKEN);
			const message = "Succesfully logged in";
			res.status(200).json({success: message,token: result});
		} else {
			throw "wrong password";
		}
	} catch (error) {
		res.status(400).json({	error: error});
	}
};

module.exports = {
	getUser,
	loginUser,
	editUser,
	addUser
};