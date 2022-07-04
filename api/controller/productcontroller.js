const express= require('express')
const mongoose=require('mongoose')
const app=express()
// const ProductRouter=express.Router()
const Product=require('../model/productmodel')
const jwt=require('jsonwebtoken')
require('dotenv').config()

const getProducts=async (req,res)=>{
    try{
        const products=await Product.find()
        res.json(products)
        
    }
    catch(err)
    {
        res.send('Error'+err)
    }
}

const getProduct=async (req,res)=>{
    const id=req.params.id;
    try{
       const product=await Product.findById(req.params.id)
        res.json(product)
        
    }
    catch(err)
    {
        res.send('Error'+err)
    }
}

const addProduct=async (req,res)=>{   
    try{
        // let product=await Product.findOne({email:req.body.email})
        // if(product)
        // {
        //     throw "email already exisiting"
        // }
        let product=new Product({name:req.body.name,price:req.body.price,color:req.body.color,imageurl:req.body.imageurl})
        const data=await product.save()
        res.json(data)
    }
    catch(err)
    {
        res.send('Error'+err)
    }
}

const editProduct=async (req,res)=>{
    const id=req.params.id;
    console.log("id");
    try{
        const product=await Product.findByIdAndUpdate(req.params.id,req.body)
        const data=await product.save()
        console.log(data)
        res.send("modified")
    }
    catch(err)
    {
        res.send('Error'+err)
    }
}

const deleteProduct=async (req,res)=>{
    const id=req.params.id;
    try{
        const product=await Product.findByIdAndDelete(req.params.id)
    }
    catch(err)
    {
        res.send('Error'+err)
    }
}

// const loginProduct=async(req,res)=>{
//     const {email,password}=req.body
//     console.log(req.body);
//     try{
//         const product=await Product.findOne({email:req.body.email})
//         console.log(Product)
//         if(Product==null)
//         {
//             throw "Product not found"
//         }
//         if(req.body.password==Product.password)
//         {
//             const result = jwt.sign({id : Product.id},process.env.ACCESS_TOKEN)
//             // console.log(Product.id)
//             console.log(result)
//             res.json({Token : result})
//             // res.send("hello")
//         }
//         else
//         {
//             throw "wrong password"
//         }
//     }
//     catch(err){
//         res.send(err)
//     }
// }

function authenticateToken(req,res,next)
{
    const authHeader=req.headers['authorization']
    const token=authHeader && authHeader
    console.log(token)
    if(token==null)
    {
        return res.send("no token")
    }
    jwt.verify(token,process.env.ACCESS_TOKEN,(err,id)=>{
        if(err)
        {
            res.send("Token expired")
        }
        console.log(id)

        next()
    })
}

module.exports={
    getProduct,getProducts,deleteProduct,editProduct,addProduct,authenticateToken
}