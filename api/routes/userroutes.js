const express=require('express')
const {getUsers,getUser,addUser,editUser,deleteUser,loginUser,authenticateToken}=require('../controller/usercontroller')

const userRouter=express.Router()

userRouter.get('/',getUsers)
userRouter.get('/:id',getUser)
userRouter.post('/',addUser)
userRouter.put('/:id',editUser)
userRouter.post('/login',loginUser)
userRouter.delete('/',deleteUser)

module.exports=userRouter