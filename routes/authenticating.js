let express = require("express");
let router = express.Router();
let authenticating = require("../middlewares/authenticating");

router.get("/authenticate", authenticating);
module.exports = router;