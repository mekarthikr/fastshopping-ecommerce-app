const express = require("express");
const { getUser,  addUser,  editUser,  loginUser} = require("../controller/usercontroller");
const {  authenticateUserToken } = require("../middleware/accessauth");

const userRouter = express.Router();

userRouter.get("/:id",  getUser);
userRouter.post("/", addUser);
userRouter.put("/:id", authenticateUserToken, editUser);
userRouter.post("/login", loginUser);

module.exports = userRouter;

