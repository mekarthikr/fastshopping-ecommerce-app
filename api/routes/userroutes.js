const express = require("express");
const {
  getUsers,
  getUser,
  addUser,
  editUser,
  deleteUser,
  loginUser,
  getCartDetails,
  // getCategoryProduct,
  // authenticateToken
} = require("../controller/usercontroller");

const {authenticateToken,authenticateUserToken}=require("../middleware/accessauth")

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.get("/:id",authenticateUserToken, getUser);
userRouter.post("/", addUser);
userRouter.put("/:id",authenticateUserToken, editUser);
userRouter.post("/login", loginUser);
userRouter.delete("/", deleteUser);
userRouter.get("/cart/:id",authenticateUserToken, getCartDetails);
// userRouter.get("/cart/:id", getCategoryProduct);

module.exports = userRouter;


// axiosInstance({ url: `users/${id}`, method: "get", data: id })