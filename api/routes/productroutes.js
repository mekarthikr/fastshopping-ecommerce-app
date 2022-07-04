const express=require('express')
const {getProducts,getProduct,addProduct,editProduct,deleteProduct}=require('../controller/productcontroller')
const productRouter=express.Router()

productRouter.get('/',getProducts)
productRouter.get('/:id',getProduct)
productRouter.post('/',addProduct)
productRouter.put('/:id',editProduct)
productRouter.delete('/',deleteProduct)

module.exports=productRouter