const express = require("express");
const { Signup, Signin } = require("../Controller/UserCTL")
const userRouter = express.Router();

userRouter.post("/signup", Signup);
userRouter.post("/sign_in", Signin);

userRouter.post("/test", (req, res) => {
    console.log("test!!!!");
    res.send("test!!!!");
});


module.exports = userRouter;
