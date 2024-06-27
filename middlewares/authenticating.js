let Users = require("../models/Users");
let jwt = require('jsonwebtoken');
require("dotenv").config();

let authenticating = async (req, res) => {
    try {
        let token = req.cookies.AUTH;
        if (token) {
            jwt.verify(token, process.env.SECRET_KEY, async (error, payload) => {
                if (error) {
                    console.log("Error in decoding token !");
                    res.json({ success: false, message: "Error! please try again" });
                } else {
                    let { username } = payload;
                    console.log(username);
                    let user = await Users.findOne({ username });
                    if (user) {
                        let sendUser = { username, pfp: user.pfp, bio: user.bio, notifications: user.notifications };
                        console.log("User authenticated");
                        res.json({ success: true, sendUser, message: "User authenticated" });
                    } else {
                        console.log("User is not found !");
                        res.cookie("AUTH", "", {
                            maxAge: 1
                        });
                        res.json({ success: false, message: "User is not found !" });
                    }
                }
            });
        } else {
            console.log("Token is missing !");
            res.json({ success: false, message: "Token is missing !" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error while authenticating !" });
    }
}

module.exports = authenticating;