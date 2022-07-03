const express= require('express')
const mongoose=require('mongoose')
const app=express()

const userRouter=require('./routes/user')
app.use(express.json())
app.use('/users',userRouter)


// app.listen(3000,()=>{
//    console.log("listening in 3000");
// })

// app.get('/user',(req,res)=>{
//     res.json({mssg:"Welcome to the api"})
// })


const User=require('./user');
const product=require('./product')

const connect_string="mongodb+srv://karthik:yH9WpQBFZkV1g129@cluster0.xahhd.mongodb.net/fastshopping"



mongoose.connect(connect_string,()=>{
    console.log("connect")
    // run()
    ,error=>{
        console.log(error)
    }
})




async function run()
{
    try{
        const useradded=await User.create({firstname:"{type:String}",
        lastname:"{type:String}",
        email:"{type:String}",
        password:"{type:String}",
        phonenumber:"{type:String}",
        cart:[{"productid":111,"quantity":2},{"productid":111,"quantity":2},{"productid":111,"quantity":2}]})
    // const useradded = new User({firstname:"String"})
    // await useradded.save()
    console.log(useradded)
    }
    catch(error)
    {
console.log(error.message)
    }
    
}

app.listen(3000,()=>{
    console.log("server running")
})