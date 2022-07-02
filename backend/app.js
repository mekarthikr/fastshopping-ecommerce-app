// const express= require('express')

// const app=express()

// app.listen(3000,()=>{
//    console.log("listening in 3000");
// })

// app.get('/user',(req,res)=>{
//     res.json({mssg:"Welcome to the api"})
// })

const mongoose=require('mongoose')
const User=require('./user');
const product=require('./product')

const connect_string="mongodb+srv://karthik:yH9WpQBFZkV1g129@cluster0.xahhd.mongodb.net/fastshopping"

mongoose.connect(connect_string,()=>{
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

