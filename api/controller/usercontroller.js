const express= require('express')
const mongoose=require('mongoose')
const app=express()
const userRouter=express.Router()
const User=require('../model/usermodel')
const jwt=require('jsonwebtoken')
require('dotenv').config()

const getUsers=async (req,res)=>{
    try{
        const users=await User.find()
        res.json(users)
        
    }
    catch(err)
    {
        res.send('Error'+err)
    }
}

const getUser=async (req,res)=>{
    const id=req.params.id;
    try{
       const user=await User.findById(req.params.id)
        res.json(user)
        
    }
    catch(err)
    {
        res.send('Error'+err)
    }
}

const addUser=async (req,res)=>{ //completed
    
    
    try{
        let user=await User.findOne({email:req.body.email})
        if(user)
        {
            throw "email already exisiting"
        }
       user=new User({firstname:req.body.firstname,lastname:req.body.lastname,email:req.body.email,password:req.body.password,phonenumber:req.body.phonenumber})
        const data=await user.save()
        const message="Succesfully signed up"
        console.log(message)
        res.status(201).json({success:message})
    }
    catch(err)
    {
        console.log(err)
        res.status(400).json({error:err})
    }
}

const editUser=async (req,res)=>{
    const id=req.params.id;
    console.log("id");
    try{
        const user=await User.findByIdAndUpdate(req.params.id,req.body)
        const data=await user.save()
        console.log(data)
        res.send("modified")
    }
    catch(err)
    {
        res.send('Error'+err)
    }
}

const deleteUser=async (req,res)=>{
    const id=req.params.id;
    try{
        const user=await User.findByIdAndDelete(req.params.id)
    }
    catch(err)
    {
        res.send('Error'+err)
    }
}

const loginUser=async(req,res)=>{
    const {email,password}=req.body
    console.log(req.body);
    try{
        const user=await User.findOne({email:req.body.email})
        // console.log(user)
        if(user==null)
        {
            throw "user not found"
        }
        if(req.body.password==user.password)
        {
            const result = jwt.sign({id : user.id,role:"user"},process.env.ACCESS_TOKEN)
            console.log(result)
            const message="Succesfully logged in"
            console.log(message)
            res.status(200).json({success:message,token:result})
        }
        else
        {
            throw "wrong password"
        }
    }
    catch(error){
        console.log(error)
        res.status(404).json({error:error})
    }
}

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
    getUser,getUsers,loginUser,deleteUser,editUser,addUser,authenticateToken
}