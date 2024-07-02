let express = require("express");
let router = express.Router();
let auth = require("../../middlewares/auth");
let removeFromFavorateController = require("../../controllers/userControllers/removeFromFavorateController");

router.post("/remove-from-favorate", auth, removeFromFavorateController);
module.exports = router;