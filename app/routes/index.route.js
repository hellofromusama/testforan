const router = require("express").Router();

router.use("/auth", require("./auth.route.js"));

module.exports = router;