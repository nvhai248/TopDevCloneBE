const express = require('express');
const router = express.Router();

const adminRoute = require('./adminRoute');
const employerRoute = require('./employerRoute');
const userRoute = require('./userRoute');
const otherRote = require('./othersRoute');

router.use('/admin', adminRoute);
router.use('/employer', employerRoute);
router.use('/user', userRoute);
router.use('/others', otherRote);

module.exports = router;
