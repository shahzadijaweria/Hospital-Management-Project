const Patient = require('../models/patientModel');

const createPatient = async (body) => {
    try {
        delete (body._id)
        const response = await Patient.create(body)
        return response
    }
    catch (err) {
        throw Error(err)
    }
}

const fetchAllPatients = async (id) => {
    try {
        let findPatient;
        id == null ? findPatient = await Patient.find() : findPatient = await Patient.findOne({ _id: id });
        return findPatient;
    }
    catch (err) {
        throw Error(err)
    }
}

const updatePatient = async (id, body) => {
    try {
        let updatePatient = await Patient.findByIdAndUpdate({ _id: id }, { $set: body }, { new: true });
        return updatePatient;
    }
    catch (err) {
        throw Error(err)
    }
}

const deletePatient = async (id) => {
    try {
        let deletePatient = await Patient.findByIdAndDelete({ _id: id }, { new: true });
        return deletePatient;
    }
    catch (err) {
        throw Error(err)
    }
}

module.exports = {
    createPatient,
    fetchAllPatients,
    updatePatient,
    deletePatient
}
