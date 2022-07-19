const express = require("express");
const { addToCart,removeFromCart,getCartProducts } = require("../controller/cartcontroller");
const { loginAdmin } = require("../controller/usercontroller");
const adminRouter = express.Router();

adminRouter.post("/login", loginAdmin);
adminRouter.post("/addtocart",addToCart)
adminRouter.post("/removefromcart",removeFromCart)
adminRouter.get("/cart/:id",getCartProducts)


module.exports = adminRouter;