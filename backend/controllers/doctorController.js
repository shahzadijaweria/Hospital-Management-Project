const DoctorService = require('../services/doctorService');

const createNewDoctor = async (req, res) => {
    try {
        const create = await DoctorService.createDoctor(req.body)
        return res.status(200).json({ status: 200, data: create, message: "Doctor created Successfully" });

    } catch (error) {
        return res.status(400).json({ status: 400, data: ' ', message: err.message });
    }
}

const viewAllDoctors = async (req, res) => {
    try {
        let viewDoctor, id;

        req.query.id ? id = req.query.id : id = null
        viewDoctor = await DoctorService.fetchAllDoctors(id)

        return res.status(200).json({ status: 200, data: viewDoctor, message: "Doctors fetched Successfully" });
    }
    catch (err) {
        return res.status(400).json({ status: 400, data: ' ', message: err.message });
    }
}

const updateDoctor = async (req, res) => {
    try {
        let update = await DoctorService.updateDoctor(req.params.id, req.body)

        return res.status(200).json({ status: 200, data: update, message: "Doctor updated Successfully" });
    }
    catch (err) {
        return res.status(400).json({ status: 400, data: ' ', message: err.message });
    }
}

const deleteDoctor = async (req, res) => {
    try {

        let id = parseInt(req.params.id)
        let delDoctor = await DoctorService.deleteDoctor(req.params.id)

        return res.status(200).json({ status: 200, data: delDoctor, message: "Doctor deleted Successfully" });
    }
    catch (err) {
        return res.status(400).json({ status: 400, data: ' ', message: err.message });
    }
}

module.exports = {
    createNewDoctor,
    viewAllDoctors,
    updateDoctor,
    deleteDoctor
}