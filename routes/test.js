let express = require("express");
let router = express.Router();
let testRoute = require("../controllers/testController");
let auth = require("../middlewares/auth");

router.post("/test", auth, testRoute);
module.exports = router;