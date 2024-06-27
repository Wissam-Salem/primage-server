let express = require("express");
let router = express.Router();
let changePfpController = require("../../controllers/userControllers/changePfpController");
let auth = require("../../middlewares/auth");

router.post("/change-pfp", auth, changePfpController);
module.exports = router;