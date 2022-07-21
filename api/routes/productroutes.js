const express = require("express");
const {  getProducts,  getProduct,  addProduct,  editProduct,  deleteProduct,getAdminProducts} = require("../controller/productcontroller");
const {  authenticateAdminToken,} = require("../middleware/accessauth");

const productRouter = express.Router();

productRouter.get("/admin/",authenticateAdminToken, getAdminProducts);
productRouter.get("/",  getProducts);
productRouter.get("/:id", getProduct);
productRouter.post("/", authenticateAdminToken, addProduct);
productRouter.put("/:id", authenticateAdminToken, editProduct);
productRouter.delete("/:id", authenticateAdminToken, deleteProduct);


module.exports = productRouter;