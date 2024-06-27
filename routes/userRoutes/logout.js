let express = require("express");
let router = express.Router();
let logoutController = require("../../controllers/userControllers/logoutController");
let auth = require("../../middlewares/auth");

router.get("/logout", auth, logoutController);
module.exports = router;