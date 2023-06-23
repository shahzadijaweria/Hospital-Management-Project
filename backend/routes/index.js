const express = require('express');
const router = express.Router();

const patientRoutes = require('./patientRoutes');
const doctorRoutes = require('./doctorRoutes');

router.use('', patientRoutes);
router.use('', doctorRoutes);

module.exports = router;