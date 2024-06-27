let express = require("express");
let router = express.Router();
let registerController = require("../../controllers/userControllers/registerController");

router.post("/register", registerController);
module.exports = router;