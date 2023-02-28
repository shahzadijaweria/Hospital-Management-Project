const Doctor = require('../models/doctorModel');
const Patient = require('../models/patientModel');

const createDoctor = async (body) => {
    try {
        delete (body._id)
        const response = await Doctor.create(body)
        return response
    }
    catch (err) {
        throw Error(err)
    }
}

const fetchAllDoctors = async (id) => {
    try {
        let findDoctor;
        id == null ? findDoctor = await Doctor.find() : findDoctor = await Doctor.findOne({ _id: id });
        return findDoctor;
    }
    catch (err) {
        throw Error(err)
    }
}

const updateDoctor = async (id, body) => {
    try {
        let updateDoctor = await Doctor.findByIdAndUpdate({ _id: id }, { $set: body }, { new: true });
        return updateDoctor;
    }
    catch (err) {
        throw Error(err)
    }
}

const deleteDoctor = async (id) => {
    try {
        // if doctor is deleted, set null to doctorId of all respective patients of that particular doctor
        let findPatient = await Patient.find({ doctorId: id });
        if (findPatient.length != 0) {
            findPatient.map(async item => {
                let updatePatient = await Patient.findByIdAndUpdate({ _id: item._id }, { $set: { doctorId: null } }, { new: true });
            })
        }
        let deleteDoctor = await Doctor.findByIdAndDelete({ _id: id }, { new: true });
        return deleteDoctor;
    }
    catch (err) {
        throw Error(err)
    }
}

module.exports = {
    createDoctor,
    fetchAllDoctors,
    updateDoctor,
    deleteDoctor
}
