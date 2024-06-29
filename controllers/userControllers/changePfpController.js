let Images = require("../../models/Images");
let Users = require("../../models/Users");

let changePfpController = async (req, res) => {
    try {
        let { newPfp } = req.body;
        let { username } = res.locals.user;
        let user = await Users.findOneAndUpdate({ username }, { pfp: newPfp });
        let images = await Images.updateMany({ "user.username": username }, { $set: { "user.pfp": newPfp } });
        console.log("User pfp has been updated");
        res.json({ success: true, message: "User pfp has beed edited" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error! please try again" });
    }
}

module.exports = changePfpController;