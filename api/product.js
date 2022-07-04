const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    name:String,
    price:String,
    color:String,
    imageurl:String
})

module.exports=mongoose.model("product",productSchema)