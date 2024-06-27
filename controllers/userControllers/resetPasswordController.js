let Users = require("../../models/Users");
let bcrypt = require("bcrypt");

let resetPasswordController = async (req, res) => {
    try {
        let { newPassword, confirmPassword } = req.body;
        let { username } = res.locals.user;
        if (newPassword === undefined || newPassword === "") {
            console.log("Password is weak !");
            res.json({ success: false, message: "Password is weak !" });
        } else if (confirmPassword !== newPassword) {
            console.log("Passwords didn't match !");
            res.json({ success: false, message: "Passwords didn't match !" });
        }

        else {
            let hashed = await bcrypt.hash(newPassword, 10);
            let user = await Users.findOneAndUpdate({ username }, { password: hashed });
            console.log("Password has changed successfully");
            res.json({ success: true, message: "Password has changed successfully" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error! please try again" });
    }
}

module.exports = resetPasswordController;