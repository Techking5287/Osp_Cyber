const User = require("../Model/UserMDL");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const moment = require("moment")


const Signup = async (req, res) => {
    // console.log(req.body);
    const hashedPassword = bcrypt.hashSync(req.body.pAssword);
    try {
        const user = await User.findOne({ email: req.body.eMail });
        if (user) {
            res.send("UserEmail already exists!");
        }
        else {
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
    // console.log(req.body)
    let user;
    try {
        if (req.body.eMail) {
            user = await User.findOne({ Email: req.body.eMail });
            if (user) {
                const passwordMatch = await bcrypt.compare(req.body.pAssword, user.password);
                if (!passwordMatch) {
                    return res.send("Password dont Matched");
                }
                else {
                    const token = jwt.sign({ userId: user._id }, "bear");
                    const obj = {
                        success: `User ${user.Email} logined successfully!`,
                        token: token,
                    };
                    res.json(obj);
                }
            }
            else if (!user) {
                return res.send("Email not found");
            }
        }
    }
    catch (err) {
        console.log(err.data, "err")
    }

}

module.exports = {
    Signup, Signin
}