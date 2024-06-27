let express = require("express");
let router = express.Router();
let getFavorateImagesController = require("../../controllers/imagesController/getFavorateImagesController");
let auth = require("../../middlewares/auth");

router.get("/get-favorate-images", auth, getFavorateImagesController);
module.exports = router;