let express = require("express");
let router = express.Router();
let resetPasswordController = require("../../controllers/userControllers/resetPasswordController");
let auth = require("../../middlewares/auth");

router.post("/reset-password", auth, resetPasswordController);
module.exports = router;