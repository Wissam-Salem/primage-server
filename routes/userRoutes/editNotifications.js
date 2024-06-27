let express = require("express");
let router = express.Router();
let editNotificationsController = require("../../controllers/userControllers/editNotificationsController");
let auth = require("../../middlewares/auth");

router.post("/edit-notifications", auth, editNotificationsController);
module.exports = router;