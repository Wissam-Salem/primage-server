let Users = require("../../models/Users");

let removeFromFavorateController = async (req, res) => {
    try {
        let { image } = req.body;
        console.log(image);
        let { username } = res.locals.user;
        let user = await Users.findOneAndUpdate({ username }, { $pull: { favorates: image } });
        console.log("Image has been removed from favorates");
        res.json({ success: true, message: "Image has been removed from favorates" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error! please try again" });
    }
}

module.exports = removeFromFavorateController;