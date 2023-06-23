const mongoose = require('mongoose')
const doctor = require('./doctorModel')
const { Schema } = mongoose
const patientSchema = new Schema({
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: doctor,
    },
    First_Name: {
        type: String,
        require: true,
    },
    Last_Name: {
        type: String,
        require: true,
    },
    Date_of_Birth: {
        type: String,
        require: true,
    },
    Cnic: {
        type: String,
        require: true,
    },
    Phone_Number: {
        type: String,
        require: true,
    },
    Address: {
        type: String,
        require: true,
    },
    Disease: {
        type: String,
        require: true,
    },
    isVisitedBofore: {
        type: String,
        require: true,
    },
    infoProvided: {
        type: Boolean,
        require: true,
    },
    City: {
        type: String,
        require: true,
    }
}, { timestamps: true })
const Patient = mongoose.model("patient", patientSchema)
module.exports = Patient