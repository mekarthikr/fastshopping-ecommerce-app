const express= require('express')
const mongoose=require('mongoose')
const app=express()
const userRouter=express.Router()
const userSchema=require('../user')

userRouter.get('/',async (req,res)=>{
    try{
        const users=await userSchema.find()
        res.json(users)
        
    }
    catch(err)
    {
        res.send('Error'+err)
    }
})

userRouter.get('/:id',async (req,res)=>{
    const id=req.params.id;
    try{
       const user=await userSchema.findById(req.params.id)
        res.json(user)
        
    }
    catch(err)
    {
        res.send('Error'+err)
    }
})

userRouter.post('/',async (req,res)=>{
    
    
    try{
        let user=await userSchema.findOne({email:req.body.email})
        if(user)
        {
            throw "email already exisiting"
        }
        user=new userSchema({firstname:req.body.firstname,lastname:req.body.lastname,email:req.body.email,password:req.body.password,phonenumber:req.body.phonenumber})
        const data=await user.save()
        res.json(data)
    }
    catch(err)
    {
        res.send('Error'+err)
    }
})

userRouter.put('/:id',async (req,res)=>{
    const id=req.params.id;
    try{
        // const data=await user.save()
        // res.json(data)
        const user=await userSchema.findByIdAndUpdate(req.params.id,req.body)
        const data=await user.save()
        console.log(data)
    }
    catch(err)
    {
        res.send('Error'+err)
    }
})

userRouter.delete('/:id',async (req,res)=>{
    const id=req.params.id;
    try{
        const user=await userSchema.findByIdAndDelete(req.params.id)
    }
    catch(err)
    {
        res.send('Error'+err)
    }
})

userRouter.post('/login',async(req,res)=>{
    const {email,password}=req.body
    try{
        //const user=await userSchema.findOne({email:email})
        // res.send(req.body)
        user=await userSchema.findOne({email:req.body.email})
        if(user==null)
        {
            throw "user not found"
        }
        if(req.body.password==user.password)
        {
            res.send("success")
        }
        else
        {
            throw "wrong password"
        }
    }
    catch(err){
        res.send(err)
    }
})

module.exports=userRouter