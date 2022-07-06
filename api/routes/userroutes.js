const express=require('express')
const {getUsers,getUser,addUser,editUser,deleteUser,loginUser,getCartDetails,authenticateToken}=require('../controller/usercontroller')

const userRouter=express.Router()

userRouter.get('/',getUsers)
userRouter.get('/:id',getUser)
userRouter.post('/',addUser)
userRouter.put('/:id',editUser)
userRouter.post('/login',loginUser)
userRouter.delete('/',deleteUser)
userRouter.get('/cart/:id',getCartDetails)

module.exports=userRouter