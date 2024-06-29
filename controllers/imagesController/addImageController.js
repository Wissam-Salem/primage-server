let Images = require("../../models/Images");
let Users = require("../../models/Users");

let addImageController = async (req, res) => {
    try {
        let { url, tags } = req.body;
        let { user } = res.locals;
        if ((!url || !tags) || (url === "")) {
            res.json({ success: false, message: "Please fill all the fields !" });
            console.log("Please fill all the fields !");
        } else {
            let rawTags = tags.split(",");
            let tagsArray = rawTags.map((tag) => {
                return tag.trim();
            })
            let { username, pfp } = user;
            console.log(username, pfp);
            let image = new Images({
                url, tags: tagsArray, user: {
                    username, pfp
                }
            });
            image.save().then(() => {
                console.log("Image has been added");
                res.json({ success: true, message: "Image has been added" });
            }).catch((error) => {
                console.log(error);
                res.json({ success: false, message: "Catched an error !" })
            })
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error! please try again" });
    }
}

module.exports = addImageController;