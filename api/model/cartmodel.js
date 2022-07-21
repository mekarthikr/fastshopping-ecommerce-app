const mongoose = require("mongoose")
const cartSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    require: true
  },
  productid: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
    require: false
  },
  quantity: {
    type: Number,
    default: 1,
    require: false
  }
})

module.exports = mongoose.model("Cart", cartSchema)