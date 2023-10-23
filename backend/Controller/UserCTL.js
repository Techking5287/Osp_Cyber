const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const moment = require("moment")

const Signup = async (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.pAssword);
    try {
        const user = await User.findOne({ email: req.body.eMail });
        if (user) {
            res.send("UserEmail already exists!");
        }
        else {
            console.log(req.body)
            const newuser = new User({
                Name: req.body.nAme,
                lastname: req.body.lName,
                Email: req.body.eMail,
                password: hashedPassword,
            });
            newuser.save();
            res.status(200).send(`User ${newuser.email} registered successfully!`);
        }
    } catch (error) {
        console.log(error);
    }
};