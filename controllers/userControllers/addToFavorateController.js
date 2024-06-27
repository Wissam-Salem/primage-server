let Users = require("../../models/Users");

let addToFavorateController = async (req, res) => {
    try {
        let { image } = req.body;
        let { username } = res.locals.user;
        let user = await Users.findOneAndUpdate({ username }, { $push: { favorates: image } });
        console.log("Image has been added to favorates");
        res.json({ success: true, message: "Image has been added to favorates" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error! please try again" });
    }
}

module.exports = addToFavorateController;