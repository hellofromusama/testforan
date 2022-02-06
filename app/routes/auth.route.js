const router = require('express').Router()
const authCtrl = require("../controllers/auth.controller.js");

router.post('/register', authCtrl.register);

module.exports = router