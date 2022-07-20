const User = require("../model/usermodel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

/* GET ALL USER DETAILS */

const getUsers = async (req, res) => {
	try {
		const users = await User.find();
		res.json(users);
	} catch (err) {
		res.send("Error" + err);
	}
};

/* GET THE CART DETAILS OF A USER */

const getCartDetails = async (req, res) => {
	try {
		const users = await User.findById(req.params.id).populate("cart.productid")
			.select("cart");
		res.json(users);
	} catch (err) {
		res.send("Error" + err);
	}
};

/* GET THE DETAILS OF A PERTICULAR USER */

const getUser = async (req, res) => {
	const id = req.params.id;
	try {
		const user = await User.findById(id);
		res.json(user);
	} catch (err) {
		res.send("Error" + err);
	}
};

/* REGISTER A NEW USER */

const addUser = async (req, res) => {
	try {
		let user = await User.findOne({ email: req.body.email });
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
		res.status(201).json({ success: message });
	} catch (error) {
		res.status(400).json({ error: error });
	}
};

/* EDIT THE USER DETAILS */

const editUser = async (req, res) => {
	const id = req.params.id;
	try {
		const user = await User.findByIdAndUpdate(req.params.id, req.body);
		const data = await user.save();
		const message = "User Modified Successfully : Login to continue"
		//res.send("User Modified Successfully : Login to continue");
		res.status(202).json({ message: message })
	} catch (err) {
		res.send("Error" + err);
	}
};

/* DELETE THE USER DETAILS */

const deleteUser = async (req, res) => {
	const id = req.params.id;
	try {
		const user = await User.findByIdAndDelete(req.params.id);
	} catch (err) {
		res.send("Error" + err);
	}
};

/* USER LOGIN */

const loginUser = async (req, res) => {
	const { email, password } = req.body;
	console.log(req.body)
	try {
		const user = await User.findOne({ email: req.body.email });
		if (user == null) {
			throw "user not found";
		}

		if (user.role !== req.body.role) {
			throw "This user has no permission to access this part"
		}

		if (req.body.password == user.password) {
			const result = jwt.sign(
				{ id: user.id, role: user.role },
				process.env.ACCESS_TOKEN
			);
			const message = "Succesfully logged in";
			res.status(200).json({ success: message, token: result });
		} else {
			throw "wrong password";
		}
	} catch (error) {
		res.status(404).json({ error: error });
	}
};

/* ADMIN LOGIN */

const loginAdmin = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await User.findOne({ email: req.body.email });
		if (user == null) {
			throw "user not found";
		}

		if (user.role !== 'admin') {
			throw "you are not allowed to access this site"
		}

		if (req.body.password == user.password) {
			const result = jwt.sign(
				{ id: user.id, role: user.role },
				process.env.ACCESS_TOKEN
			);
			const message = "Succesfully logged in";
			res.status(200).json({ success: message, token: result });
		} else {
			throw "wrong password";
		}
	} catch (error) {
		res.status(404).json({ error: error });
	}
};

/* CLEAR THE USERS CART */

const clearCart = async (req, res) => {
	const id = req.params.id;
	try {
		const user = await User.findByIdAndUpdate(id, { $set: { cart: [] } });
		res.status(200).json({ success: "cart cleared successsfully" });
	}
	catch (error) {
		res.status(404).json({ error: error });

	}
}

/* EXPORTS */

module.exports = {
	getUser,
	getUsers,
	loginUser,
	deleteUser,
	editUser,
	addUser,
	getCartDetails,
	clearCart,
	loginAdmin
};
