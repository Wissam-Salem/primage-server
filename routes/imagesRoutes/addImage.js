let express = require("express");
let router = express.Router();
let addImageController = require("../../controllers/imagesController/addImageController");
let auth = require("../../middlewares/auth");

router.post("/add-image", auth, addImageController);
module.exports = router;