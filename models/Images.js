let mongoose = require("mongoose");
let imagesSchema = new mongoose.Schema({
        url: String,
        tags: [String],
        user: {
                username: String,
                pfp: String
        }
});
let Images = mongoose.model("image", imagesSchema);

module.exports = Images;