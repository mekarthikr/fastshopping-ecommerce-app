const Product = require("../model/productmodel");
const Cart = require("../model/cartmodel");
require("dotenv").config();

const getAdminProducts = async (req, res) => {
	try {
		const products = await Product.find();
		res.json({
			products
		});
	} catch (err) {
		res.status(404).json("Error:" + err);
	}
}

const getProducts = async (req, res) => {
	const productPerPage = 6
	try {
		const query = req.query.category;
		let pages = req.query.pages || 1;
		const skip = (pages - 1) * productPerPage;
		if (query === undefined) {
			const count = await Product.estimatedDocumentCount()
			const products = await Product.find().limit(productPerPage).skip(skip);
			const pageCount = Math.ceil(count / productPerPage)
			res.status(200).json({Pagination: {	count,pageCount	},products})
		} else {
			const count = await Product.count({category: query})
			const products = await Product.find({category: query}).limit(productPerPage).skip(skip);
			const pageCount = Math.ceil(count / productPerPage)
			res.send({Pagination: {count,pageCount},products})
		}
	} catch (err) {
		res.status(404).send("Error" + err);
	}
};

const getProduct = async (req, res) => {
	const id = req.params.id;
	try {
		const product = await Product.findById(req.params.id);
		res.status(200).json(product);
	} catch (err) {
		res.status(404).send("Error" + err);
	}
};


const addProduct = async (req, res) => {
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
		res.status(201).json(data);
	} catch (err) {
		res.status(400).send("Error" + err);
	}
};

const editProduct = async (req, res) => {
	const id = req.params.id;
	try {
		const product = await Product.findByIdAndUpdate(req.params.id, req.body);
		const data = await product.save();
		res.status(200).send("modified");
	} catch (err) {
		res.status(404).send("Error" + err);
	}
};

const deleteProduct = async (req, res) => {
	const id = req.params.id;
	try {
		const find = await Cart.find({"productid": id}).count()
		if (find === 0) {
			const product = await Product.findByIdAndDelete(req.params.id);
			res.status(200).send("Product Deleted Successfully");
		} else {
			res.status(400).send("This Product cannot be deleted")
		}
	} catch (err) {
		res.status(400).send("Error" + err);
	}
};

module.exports = {
	getProduct,
	getProducts,
	deleteProduct,
	editProduct,
	addProduct,
	getAdminProducts
};