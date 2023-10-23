const User = require("../Model/UserMDL");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const moment = require("moment")

const Signup = async (req, res) => {
    console.log(req.body);
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
                Email: req.body.eMail,
                password: hashedPassword,
            });
            newuser.save();
            res.status(200).send(`User ${newuser.Email} registered successfully!`);
        }
    } catch (error) {
        console.log(error);
    }
};

const Signin = async (req, res) => {
    try {
        let user;
        if (req.body.eMail) {
            user = await User.findOne({ Email: req.body.eMail });
            if (user) {
                const passwordMatch = await bcrypt.compare(req.body.pAss, user.password);
                if (passwordMatch) {
                    res.status(200).send(`User ${user.Email} registered successfully!`);
                }
                else
                    return res.send("Password Dont Matched");
            }
            else if (!user) {
                return res.json("Email not found");
            }
        }
    }
    catch (err) {

    }

}
module.exports = {
    Signup, Signin
}