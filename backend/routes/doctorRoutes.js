const express = require('express');
const doctorController = require('../controllers/doctorController');
const router = express.Router();


router.post('/doctors', doctorController.createNewDoctor);

router.get('/doctors', doctorController.viewAllDoctors);

router.patch('/doctors/:id', doctorController.updateDoctor);

router.delete('/doctors/:id', doctorController.deleteDoctor);

module.exports = router;