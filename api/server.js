const express = require('express')
const mongoose = require('mongoose')
const app = express()
const jwt = require('jsonwebtoken')
const cors = require('cors')
const userRouter = require('./routes/userroutes')
const productRouter = require('./routes/productroutes')
const adminRouter = require('./routes/adminroutes')
app.use(express.json())
app.use(cors())
app.use('/users', userRouter)
app.use('/products', productRouter)
app.use('/admin', adminRouter)

const connect_string="mongodb+srv://karthik:yH9WpQBFZkV1g129@cluster0.xahhd.mongodb.net/fastshopping"

mongoose.connect(connect_string, () => {
    console.log("connect")
        , error => {
            console.log(error)
        }
})

app.listen(5000, () => {
    console.log("server running at 3000")
})