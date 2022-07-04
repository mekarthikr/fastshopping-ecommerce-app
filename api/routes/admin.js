const express= require('express')
const mongoose=require('mongoose')
const app=express()
const adminRouter=express.Router()
const adminSchema=require('../admin')


adminRouter.post('/login',async(req,res)=>{
    
    try{
        admin=await adminSchema.findOne({email:req.body.email})
        if(admin==null)
        {
            throw "admin not found"
        }
        if(req.body.password==admin.password)
        {
            res.send("success")
        }
        else{
            throw "wrong password"
        }

    }
    catch(err){
        res.send(err)
    }
})

module.exports=adminRouter