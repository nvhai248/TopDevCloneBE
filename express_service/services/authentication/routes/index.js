const express = require('express');
const router = express.Router();

const adminRoute = require('./adminRoute');
const employerRoute = require('./employerRoute');
const userRoute = require('./userRoute');

router.use('/admin', adminRoute);
router.use('/employer', employerRoute);
router.use('/user', userRoute);

module.exports = router;
