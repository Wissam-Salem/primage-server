let express = require("express");
let router = express.Router();
let changeUsernameController = require("../../controllers/userControllers/changeUsernameController");
let auth = require("../../middlewares/auth");

router.post("/change-username", auth, changeUsernameController);
module.exports = router;