const Product = require("../model/productmodel");
const User = require("../model/usermodel");
const Cart = require("../model/cartmodel");
require("dotenv").config();


/* GET PRODUCTS FOR ADMIN PANEL */

const getAdminProducts = async(req,res)=>
{
	try {
		const products = await Product.find();
		res.json({ products });
	} 
	catch (err) {
		res.send("Error:" + err);
	}
}

/* GET PRODUCTS FOR USER (INCLUDES PAGINATION AND PRODUCTS SPLIT IN CATEGORY) */

const getProducts = async (req, res) => {
  const productPerPage=6 
  	try {
    	const query = req.query.category;
    	let pages = req.query.pages || 1;
    	const skip=(pages-1)*productPerPage;
		if (query === undefined) {
			const count=await Product.estimatedDocumentCount()
			const products = await Product.find().limit(productPerPage).skip(skip);
			const pageCount=Math.ceil(count/productPerPage)
			res.send( { Pagination:{ count, pageCount }, products })
		} 
		else {
			const count=await Product.count({ category: query })
			const products = await Product.find({ category: query}).limit(productPerPage).skip(skip);
			const pageCount=Math.ceil(count/productPerPage)
			res.send( { Pagination:{ count, pageCount}, products})
		}
  	} 
  catch (err) {
    	res.send("Error" + err);
  	}
};

/* GET PRODUCTS ACCORDING TO THE CATEGORY */

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

/* ADD A NEW PRODUCT */

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

/* EDIT THE PRODUCT DETAILS */

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

/* DELETE THE PRODUCT */

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const find = await Cart.find({"productid":id}).count()
    if(find===0)
    {
      const product = await Product.findByIdAndDelete(req.params.id);    
      res.send("Product Deleted Successfully");
    }
    else
    {
      res.send("This Product cannot be deleted")
    }
  } catch (err) {
    res.send("Error" + err);
  }
};

/* EXPORTS */

module.exports = {
  getProduct,
  getProducts,
  deleteProduct,
  editProduct,
  addProduct,
  getCategoryProduct,
  getAdminProducts
};
