let express = require("express");
let router = express.Router();
let searchImageController = require("../../controllers/imagesController/searchImageController");
let auth = require("../../middlewares/auth");

router.post("/search", auth, searchImageController);
module.exports = router;