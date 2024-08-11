const express = require('express');
const router = express.Router();
const apiUsersController = require('../controllers/users');

module.exports = router;

router.get('/', apiUsersController.list);

