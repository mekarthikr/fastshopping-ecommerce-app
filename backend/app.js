// const express= require('express')

// const app=express()

// app.listen(3000,()=>{
//    console.log("listening in 3000");
// })

// app.get('/user',(req,res)=>{
//     res.json({mssg:"Welcome to the api"})
// })

const mongoose=require('mongoose')
const User=require('./User');
const product=require('./product')

mongoose.connect("mongodb://localhost:27017/fastshopping",()=>{
    console.log("connect")
    run(),error=>{
        console.log(error)
    }
})




async function run()
{
    const useradded = new User({firstname:"String"})
    await useradded.save()
    console.log(useradded)
}

