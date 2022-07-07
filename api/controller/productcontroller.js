const express = require('express')
const mongoose = require('mongoose')
const app = express()
// const ProductRouter=express.Router()
const Product = require('../model/productmodel')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const getProducts = async (req, res) => {
    try {
        //console.log("came")
        const products = await Product.find()
        console.log(products)
        res.json({ products })

    }
    catch (err) {
        res.send('Error' + err)
    }
}

const getProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.findById(req.params.id)
        res.json(product)

    }
    catch (err) {
        res.send('Error' + err)
    }
}

const addProduct = async (req, res) => {
    try {
        // let product=await Product.findOne({email:req.body.email})
        // if(product)
        // {
        //     throw "email already exisiting"
        // }
        let product = new Product({ name: req.body.name, price: req.body.price, color: req.body.color, imageurl: req.body.imageurl, category: req.body.category })
        const data = await product.save()
        res.json(data)
    }
    catch (err) {
        res.send('Error' + err)
    }
}

const editProduct = async (req, res) => {
    const id = req.params.id;
    console.log("id");
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body)
        const data = await product.save()
        console.log(data)
        res.send("modified")
    }
    catch (err) {
        res.send('Error' + err)
    }
}

const deleteProduct = async (req, res) => {
    const id = req.params.id;
    console.log(id)
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
    }
    catch (err) {
        res.send('Error' + err)
    }
}


module.exports = {
    getProduct, getProducts, deleteProduct, editProduct, addProduct
}