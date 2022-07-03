const express= require('express')
const mongoose=require('mongoose')
const app=express()
const productRouter=express.Router()
const productSchema=require('../product')



module.exports=productRouter