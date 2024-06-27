let Users = require("../../models/Users");
let jwt = require("jsonwebtoken");
require("dotenv").config();
let bcrypt = require("bcrypt");
let createToken = (username) => {
    return jwt.sign({ username }, process.env.SECRET_KEY, {
        expiresIn: "2d"
    });
}

let loginController = async (req, res) => {
    try {
        let { username, password } = req.body;
        if ((username === undefined || password === undefined) || (username === "" || password === "")) {
            console.log("All fields are required !");
            res.json({ success: false, message: "All fields are required !" });
        } else {
            let findUser = await Users.findOne({ username });
            if (findUser) {
                let comparePassword = await bcrypt.compare(password, findUser.password);
                let token = createToken(findUser.username);
                if (comparePassword) {
                    console.log("User logged in successfully");
                    res.cookie("AUTH", token, {
                        maxAge: 500000
                    })
                    res.json({ success: true, message: "User logged in successfully" });
                } else {
                    res.json({ success: false, message: "Wrong username or password !" });
                }
            } else {
                res.json({ success: false, message: "Wrong username or password !" });
            }
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error !" });
    }
}

module.exports = loginController;