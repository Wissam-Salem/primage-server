let express = require("express");
let router = express.Router();
let auth = require("../../middlewares/auth");
let unfollowController = require("../../controllers/userControllers/unfollowController");

router.post("/unfollow", auth, unfollowController);
module.exports = router;