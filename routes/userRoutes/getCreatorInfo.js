let express = require("express");
let router = express.Router();
let auth = require("../../middlewares/auth");
let getCreatorInfoController = require("../../controllers/userControllers/getCreatorInfoController");

router.post("/creator-info", auth, getCreatorInfoController);
module.exports = router;