const express = require("express");
// const {  getProducts,  getProduct,  addProduct,  editProduct,  deleteProduct,  getCategoryProduct,getAdminProducts} = require("../controller/productcontroller");
const { addToCart,removeFromCart,getCartProducts,clearUserCart } = require("../controller/cartcontroller");
const {  authenticateToken,  authenticateAdminToken,} = require("../middleware/accessauth");

const cartRoute = express.Router();

cartRoute.post("/addtocart", addToCart);
cartRoute.post("/removefromcart", removeFromCart);
cartRoute.get("/:id", getCartProducts);
cartRoute.delete("/:id", clearUserCart);

module.exports = cartRoute;