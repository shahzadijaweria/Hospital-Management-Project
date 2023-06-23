const patientService = require('../services/patientService');

const createNewPatient = async (req, res) => {
    try {
        const create = await patientService.createPatient(req.body)
        return res.status(200).json({ status: 200, data: create, message: "Patient created Successfully" });

    } catch (err) {
        return res.status(400).json({ status: 400, data: ' ', message: err.message });
    }
}

const viewAllPatients = async (req, res) => {
    try {
        let viewPatient, id;

        req.query.id ? id = req.query.id : id = null
        viewPatient = await patientService.fetchAllPatients(id)

        return res.status(200).json({ status: 200, data: viewPatient, message: "Patients fetched Successfully" });
    }
    catch (err) {
        return res.status(400).json({ status: 400, data: ' ', message: err.message });
    }
}

const updatePatient = async (req, res) => {
    try {
        let update = await patientService.updatePatient(req.params.id, req.body)

        return res.status(200).json({ status: 200, data: update, message: "Patient updated Successfully" });
    }
    catch (err) {
        return res.status(400).json({ status: 400, data: ' ', message: err.message });
    }
}

const deletePatient = async (req, res) => {
    try {

        let id = parseInt(req.params.id)
        let delPatient = await patientService.deletePatient(req.params.id)

        return res.status(200).json({ status: 200, data: delPatient, message: "Patient deleted Successfully" });
    }
    catch (err) {
        return res.status(400).json({ status: 400, data: ' ', message: err.message });
    }
}

module.exports = {
    createNewPatient,
    viewAllPatients,
    updatePatient,
    deletePatient
}