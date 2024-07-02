let Images = require("../../models/Images");

let deletePostController = async (req, res) => {
    try {
        let { username } = res.locals.user;
        let { post } = req.body;
        console.log(post);
        let deleteImage = await Images.findOneAndDelete({ "user.username": username, url: post });
        console.log(deleteImage);
        if (deleteImage) {
            console.log("Post has been deleted successfully");
            res.json({ success: true, message: "Post has been deleted successfully" });
        }
    } catch (error) {
        console.log("Error! please try again");
        res.json({ success: false, message: "Error! please try again" });
    }
}

module.exports = deletePostController;