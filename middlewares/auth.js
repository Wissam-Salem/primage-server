let Users = require("../models/Users");
let jwt = require('jsonwebtoken');
require("dotenv").config();

let auth = async (req, res, next) => {
    try {
        let token = req.cookies.AUTH;
        if (token) {
            jwt.verify(token, process.env.SECRET_KEY, async (error, payload) => {
                if (error) {
                    var error = new Error("Error in decoding token !");
                    next(error);
                } else {
                    let { username } = payload;
                    console.log(username);
                    let user = await Users.findOne({ username });
                    res.locals.user = user;
                    next();
                }
            })
        } else {
            var error = new Error("Token is missing !");
            next(error);
        }
    } catch (error) {
        next(error)
    }
}

module.exports = auth;