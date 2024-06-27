let Users = require("../../models/Users");

let deleteUserController = async (req, res) => {
    try {
        let { username } = res.locals.user;
        let deleteUser = await Users.findOneAndDelete({ username });
        console.log("Account has been deleted");
        res.json({ success: true });
    } catch (error) {
        console.log(error);
        res.cookie("AUTH", "", {
            maxAge: 1
        });
        res.json({ success: false, message: "Error! please try again" });
    }
}

module.exports = deleteUserController;