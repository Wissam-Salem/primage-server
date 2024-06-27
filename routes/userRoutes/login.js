let express = require("express");
let router = express.Router();
const loginController = require("../../controllers/userControllers/loginController");

router.post("/login", loginController);
module.exports = router;