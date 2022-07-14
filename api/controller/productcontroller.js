const Product = require("../model/productmodel");
require("dotenv").config();

const getProducts = async (req, res) => {
  try {
    const query = req.query.category;
    if (query === undefined) {
      const products = await Product.find();
      res.json({ products });
    } else {
      const products = await Product.find({ category: req.query.category });
      res.json({ products });
    }
  } catch (err) {
    res.send("Error" + err);
  }
};

const getCategoryProduct = async (req, res) => {
  try {
    const products = await Product.find({ category: req.query.category });
    res.json({ products });
  } catch (err) {
    res.send("Error" + err);
  }
};

const getProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.send("Error" + err);
  }
};

const addProduct = async (req, res) => {
 // console.log(req)
  try {
    let product = new Product({
      name: req.body.name,
      price: req.body.price,
      color: req.body.color,
      imageurl: req.body.imageurl,
      category: req.body.category,
      description: req.body.description,
    });
    const data = await product.save();
    res.json(data);
  } catch (err) {
    res.send("Error" + err);
  }
};

const editProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    const data = await product.save();
    res.send("modified");
  } catch (err) {
    res.send("Error" + err);
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
  } catch (err) {
    res.send("Error" + err);
  }
};

module.exports = {
  getProduct,
  getProducts,
  deleteProduct,
  editProduct,
  addProduct,
  getCategoryProduct,
};
