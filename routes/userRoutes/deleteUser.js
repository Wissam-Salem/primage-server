let express = require("express");
let router = express.Router();
let deleteUserController = require("../../controllers/userControllers/deleteUserController");
let auth = require("../../middlewares/auth");

router.get("/delete-user", auth, deleteUserController);
module.exports = router;