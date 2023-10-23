const express = require("express");
const { Signup } = require("../Controller/UserCTL")
const userRouter = express.Router();

userRouter.post("/signup", Signup);


module.exports = userRouter;
