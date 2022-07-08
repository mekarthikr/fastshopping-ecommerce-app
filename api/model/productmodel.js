const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  color: { type: String, required: true },
  imageurl: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String },
});

module.exports = mongoose.model("Product", productSchema);
