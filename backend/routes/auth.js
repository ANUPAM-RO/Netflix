const verify = require("../verifyToken");
const express = require('express');

const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/check', verify, authController.checkUser);

module.exports = router;