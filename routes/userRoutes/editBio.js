let express = require("express");
let router = express.Router();
let editBioController = require("../../controllers/userControllers/editBioController");
let auth = require("../../middlewares/auth");

router.post("/edit-bio", auth, editBioController);
module.exports = router;