const express= require('express')
const mongoose=require('mongoose')
const app=express()
const Admin=require('../model/adminmodel')
const jwt=require('jsonwebtoken')
require('dotenv').config()

const loginAdmin=async(req,res)=>{
    const {email,password}=req.body
    try{
        const admin=await Admin.findOne({email:req.body.email})
        if(admin==null)
        {
            throw "user not found"
        }
        if(req.body.password==admin.password)
        {
            const result = jwt.sign({id : admin.id},process.env.ACCESS_TOKEN)
            res.status(200).json({success:"Admin logged in",token:result})
        }
        else
        {
            throw "wrong password"
        }
    }
    catch(error){
        res.status(404).json({error:error})
    }
}

module.exports={
    loginAdmin
}