const express = require('express');
const router = express.Router();
const apiAuthController = require('../controllers/auth');

module.exports = router;

router.post('/register', apiAuthController.register);
router.post('/login', apiAuthController.login);

