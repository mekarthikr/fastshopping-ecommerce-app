const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phonenumber: { type: String },
  cart: [{
      productid: { type: mongoose.Types.ObjectId, ref: "Product" },
      quantity: { type: Number },
    }],
});

module.exports = mongoose.model("User", userSchema);
