let Users = require("../../models/Users");

let getFavorateImagesController = async (req, res) => {
    try {
        let { username } = res.locals.user;
        let findUser = await Users.findOne({ username });
        let favorateImages = findUser.favorates;
        console.log("Favorate images has been sent");
        res.json({ success: true, favorateImages, message: "Favorate images has been sent" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error! please try again" });
    }
}

module.exports = getFavorateImagesController;