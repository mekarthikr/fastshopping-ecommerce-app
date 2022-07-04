const express = require('express')
const mongoose = require('mongoose')
const app = express()
const productRouter = express.Router()
const productSchema = require('../product')

productRouter.get('/', async (req, res) => {
    try {
        const products = await productSchema.find()
        res.json(products)

    }
    catch (err) {
        res.send('Error' + err)
    }
})

productRouter.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const product = await productSchema.findById(req.params.id)
        res.json(product)

    }
    catch (err) {
        res.send('Error' + err)
    }
})

productRouter.post('/', async (req, res) => {
    try {
        product = new productSchema({ name: req.body.name, price: req.body.price, email: req.body.email, color: req.body.color, imageurl: req.body.imageurl })
        const data = await product.save()
        res.json(data)
    }
    catch (err) {
        res.send('Error' + err)
    }
})

productRouter.put('/:id',async (req,res)=>{
    const id=req.params.id;
    try{
        const product=await productSchema.findByIdAndUpdate(req.params.id,req.body)
        const data=await product.save()
        console.log(data)
        res.send(data)
    }
    catch(err)
    {
        res.send('Error'+err)
    }
})

productRouter.delete('/:id',async (req,res)=>{
    const id=req.params.id;
    try{
        const product=await productSchema.findByIdAndDelete(req.params.id)
    }
    catch(err)
    {
        res.send('Error'+err)
    }
})
module.exports = productRouter