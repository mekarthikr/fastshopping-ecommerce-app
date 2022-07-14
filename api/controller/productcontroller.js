const Product = require("../model/productmodel");
const User = require("../model/usermodel");
require("dotenv").config();

const getAdminProducts = async(req,res)=>
{
  console.log("came")
  // const productPerPage=1
  try {
      const products = await Product.find();
//console.log({products})
      res.json({ products });
    // }
  } catch (err) {
    res.send("Error:" + err);
  }
}

const getProducts = async (req, res) => {
  const productPerPage=2
  try {
    const query = req.query.category;
    console.log(query)

    if (query === undefined) {
      let pages = req.query.pages || 1;
      const skip=(pages-1)*productPerPage;
      const count=await Product.estimatedDocumentCount()
      console.log(pages)
      const products = await Product.find().limit(productPerPage).skip(skip);
      const pageCount=count/productPerPage
      // res.json({ products });
      res.send( {
        Pagination:{
          count,
          pageCount
        },
        products
      })
    } 
    else {
      let pages = req.query.pages || 1;
      const skip=(pages-1)*productPerPage;
      const count=await Product.count({ category: query })
      const products = await Product.find({ category: query}).limit(productPerPage).skip(skip);
      console.log("count",count)
      const pageCount=count/productPerPage
      // res.json({ products });
      res.send( {
        Pagination:{
          count,
          pageCount
        },
        products
      })
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
    const find = await User.find({"cart.productid":id}).count()
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

module.exports = {
  getProduct,
  getProducts,
  deleteProduct,
  editProduct,
  addProduct,
  getCategoryProduct,
  getAdminProducts
};
