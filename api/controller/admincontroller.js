const express= require('express')
const mongoose=require('mongoose')
const app=express()
const Admin=require('../model/adminmodel')
const jwt=require('jsonwebtoken')
require('dotenv').config()

const loginAdmin=async(req,res)=>{
    const {email,password}=req.body
    console.log(req.body);
    try{
        const admin=await Admin.findOne({email:req.body.email})
        console.log(admin)
        if(admin==null)
        {
            throw "user not found"
        }
        if(req.body.password==admin.password)
        {
            // const result = jwt.sign({id : admin.id},process.env.ACCESS_TOKEN)
            // console.log(result)
            // res.json({Token : result})
            res.send("admin logged in")
        }
        else
        {
            throw "wrong password"
        }
    }
    catch(err){
        res.send(err)
    }
}

module.exports={
    loginAdmin
}