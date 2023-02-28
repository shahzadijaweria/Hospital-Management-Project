const express = require('express');
const patientController = require('../controllers/patientController');
const router = express.Router();


router.post('/patients', patientController.createNewPatient);

router.get('/patients', patientController.viewAllPatients);

router.patch('/patients/:id', patientController.updatePatient);

router.delete('/patients/:id', patientController.deletePatient);

module.exports = router;