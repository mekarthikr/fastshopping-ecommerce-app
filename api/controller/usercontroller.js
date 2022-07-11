const User = require("../model/usermodel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.send("Error" + err);
  }
};

const getCartDetails = async (req, res) => {
  try {
    const users = await User.findById(req.params.id)
      .populate("cart.productid")
      .select("cart");
    res.json(users);
  } catch (err) {
    res.send("Error" + err);
  }
};

const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.json(user);
  } catch (err) {
    res.send("Error" + err);
  }
};

const addUser = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      throw "email already exisiting";
    }
    user = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      phonenumber: req.body.phonenumber,
    });
    const data = await user.save();
    const message = "Succesfully signed up";
    res.status(201).json({ success: message });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

const editUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    const data = await user.save();
    const message="User Modified Successfully : Login to continue"
    //res.send("User Modified Successfully : Login to continue");
    res.status(202).json({message :message})
  } catch (err) {
    res.send("Error" + err);
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findByIdAndDelete(req.params.id);
  } catch (err) {
    res.send("Error" + err);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user == null) {
      throw "user not found";
    }
    if (req.body.password == user.password) {
      const result = jwt.sign(
        { id: user.id, role: "user" },
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

const increaseQuantity = async (req, res) => {
  // const userid = req.query.user;
  // const productid = req.query.product;
  // let user = await User.findById(userid)  
  // console.log(user.cart[0])
  // res.status(200)

};

module.exports = {
  getUser,
  getUsers,
  loginUser,
  deleteUser,
  editUser,
  addUser,
  getCartDetails,
  increaseQuantity
};
