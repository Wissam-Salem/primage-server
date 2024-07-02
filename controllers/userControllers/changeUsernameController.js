const Images = require("../../models/Images");
let Users = require("../../models/Users");
let jwt = require("jsonwebtoken");
let createToken = (username) => {
    return jwt.sign({ username }, process.env.SECRET_KEY, {
        expiresIn: "2d"
    });
}

let changeUsernameController = async (req, res) => {
    try {
        let { newUsername } = req.body;
        let { username } = res.locals.user;
        if (newUsername === undefined || newUsername === "" || newUsername === username) {
            console.log("Please enter a valid username !");
            res.json({ success: false, message: "Please enter a valid username !" });
        } else {
            let findUser = await Users.findOne({ newUsername });
            if (findUser) {
                console.log("Please enter a valid username !");
                res.json({ success: false, message: "Please enter a valid username !" });
            } else {
                let user = await Users.findOneAndUpdate({ username }, { username: newUsername });
                let images = await Images.updateMany({ "user.username": username }, { $set: { "user.username": newUsername } });
                console.log("Username has been updated succesfully");
                let token = createToken(newUsername);
                res.cookie("AUTH", token, {
                    maxAge: 500000
                });
                res.json({ success: true, message: "Username has been updated" });
            }

        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error! please try again" });
    }
}

module.exports = changeUsernameController;