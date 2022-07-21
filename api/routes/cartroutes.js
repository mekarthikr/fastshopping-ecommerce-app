const express = require("express");
const { addToCart,removeFromCart,getCartProducts,clearUserCart } = require("../controller/cartcontroller");
const {  authenticateToken,  authenticateAdminToken, authenticateUserToken,} = require("../middleware/accessauth");

const cartRoute = express.Router();

cartRoute.post("/addtocart",authenticateUserToken, addToCart);
cartRoute.post("/removefromcart",authenticateUserToken, removeFromCart);
cartRoute.get("/:id",authenticateUserToken, getCartProducts);
cartRoute.delete("/:id",authenticateUserToken ,clearUserCart);

module.exports = cartRoute;