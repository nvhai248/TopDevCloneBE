const express = require('express');
const router = express.Router();

const otherController = require('../controllers/otherController.js');

router.post('/refresh', otherController.refreshToken);

module.exports = router;
