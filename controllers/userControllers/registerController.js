let Users = require("../../models/Users");
let bcrypt = require("bcrypt");

let registerController = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        if ((username === undefined || email === undefined || password === undefined) || (username === "" || email === "" || password === "")) {
            console.log("All fields are required !");
            res.json({ success: false, message: "All fields are required !" });
        } else {
            let findUser = await Users.findOne({ username });
            if (findUser) {
                res.json({ success: false, message: "Wrong username or email !" });
            } else {
                let hashed = await bcrypt.hash(password, 10)
                let user = new Users({ username, email, password: hashed });
                user.save().then(() => {
                    console.log("User registered successfully");
                    res.json({ success: true, message: "User registered successfully" });
                }).catch((error) => {
                    console.log(error);
                    res.json({ success: false, message: "Error! please try again" });
                })
            }
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error !" });
    }
}

module.exports = registerController;