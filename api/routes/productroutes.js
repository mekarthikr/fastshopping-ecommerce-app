const express = require("express");
const {  getProducts,  getProduct,  addProduct,  editProduct,  deleteProduct,  getCategoryProduct,getAdminProducts} = require("../controller/productcontroller");
const {  authenticateToken,  authenticateAdminToken,} = require("../middleware/accessauth");

const productRouter = express.Router();

productRouter.get("/admin/", getAdminProducts);
productRouter.get("/", authenticateToken, getProducts);
productRouter.get("/:id", getProduct);
productRouter.post("/", authenticateAdminToken, addProduct);
productRouter.put("/:id", authenticateAdminToken, editProduct);
productRouter.delete("/:id", authenticateAdminToken, deleteProduct);
productRouter.get("/", getCategoryProduct);


module.exports = productRouter;




