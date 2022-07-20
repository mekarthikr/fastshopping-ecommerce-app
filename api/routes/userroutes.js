const express = require("express");
const {  getUsers,  getUser,  addUser,  editUser,  deleteUser,  loginUser,  getCartDetails,clearCart, loginAdmin} = require("../controller/usercontroller");
const {  authenticateUserToken } = require("../middleware/accessauth");

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.get("/:id",  getUser);
userRouter.post("/", addUser);
userRouter.put("/:id", authenticateUserToken, editUser);
userRouter.post("/login", loginUser);
userRouter.delete("/", deleteUser);
userRouter.get("/cart/:id", getCartDetails);
userRouter.put("/cart/:id",authenticateUserToken, clearCart);
// userRouter.post("/adminlogin",loginAdmin)




module.exports = userRouter;

