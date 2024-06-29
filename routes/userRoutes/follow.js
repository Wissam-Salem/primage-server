let express = require("express");
let router = express.Router();
let auth = require("../../middlewares/auth");
let followController = require("../../controllers/userControllers/followController");

router.post("/follow", auth, followController);
module.exports = router;