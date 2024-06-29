let Images = require("../../models/Images");

let searchImageController = async (req, res) => {
    try {
        let { search } = req.body;
        console.log(search);
        let findImages = await Images.find({ tags: search });
        console.log(findImages);
        res.json({ succes: true, images: findImages, message: "Images search has been sent" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error! please try again" });
    }
}

module.exports = searchImageController;