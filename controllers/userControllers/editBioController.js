let Users = require("../../models/Users");

let editBioController = async (req, res) => {
    try {
        let { newBio } = req.body;
        let { username } = res.locals.user;
        let user = await Users.findOneAndUpdate({ username }, { bio: newBio });
        console.log("User bio has been edited");
        res.json({ success: true, message: "User bio has beed edited" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error! please try again" });
    }
}

module.exports = editBioController;