const express = require("express");
const {
  getProducts,
  getProduct,
  addProduct,
  editProduct,
  deleteProduct,
  getCategoryProduct,
} = require("../controller/productcontroller");
const { authenticateToken } = require("../middleware/accessauth");
const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.get("/:id", getProduct);
productRouter.post("/", addProduct);
productRouter.put("/:id", editProduct);
productRouter.delete("/:id", deleteProduct);
productRouter.get("/", getCategoryProduct);

module.exports = productRouter;
