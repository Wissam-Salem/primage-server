let Images = require("../../models/Images");

let getImagesController = async (req, res) => {
    try {
        let images = await Images.find();
        console.log(images);
        res.json({ success: true, images, message: "Images has been sent " });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error! please try again" });
    }
}

module.exports = getImagesController;