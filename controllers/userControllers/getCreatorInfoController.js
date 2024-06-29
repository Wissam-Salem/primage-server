const Images = require("../../models/Images");
let Users = require("../../models/Users");

let getCreatorInfoController = async (req, res) => {
    try {
        let { account } = req.body;
        let findUser = await Users.findOne({ username: account });
        let images = await Images.find({ "user.username": account });
        let user = {
            username: findUser.username,
            pfp: findUser.pfp,
            bio: findUser.bio
        }
        console.log("Creator info has been sent");
        res.json({ success: true, user, images, message: "Creator info has been sent" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error! please try again" });
    }
}

module.exports = getCreatorInfoController;