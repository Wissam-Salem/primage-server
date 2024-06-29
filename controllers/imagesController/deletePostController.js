let Images = require("../../models/Images");

let deletePostController = async (req, res) => {
    try {
        let { post } = req.body;
        let image = await Images.findOneAndDelete({ url: post });
        console.log("Post has been deleted successfully");
        res.json({ success: true, message: "Post has been deleted successfully" });
    } catch (error) {
        console.log("Error! please try again");
        res.json({ success: false, message: "Error! please try again" });
    }
}

module.exports = deletePostController;