let express = require("express");
let router = express.Router();
let deletePostController = require("../../controllers/imagesController/deletePostController");
let auth = require("../../middlewares/auth");

router.post("/delete-post", auth, deletePostController);
module.exports = router;
