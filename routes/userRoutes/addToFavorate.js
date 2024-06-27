let express = require("express");
let router = express.Router();
let addToFavorateController = require("../../controllers/userControllers/addToFavorateController");
let auth = require("../../middlewares/auth");

router.post("/add-to-favorate", auth, addToFavorateController);
module.exports = router;