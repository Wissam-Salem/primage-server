let express = require("express");
let router = express.Router();
let getImagesController = require("../../controllers/imagesController/getImagesController");
let auth = require("../../middlewares/auth");

router.get("/get-images", auth, getImagesController);
module.exports = router;