const mongoose = require('mongoose')
const { Schema } = mongoose
const doctorSchema = new Schema({
    First_Name: {
        type: String,
        require: true,
    },
    Last_Name: {
        type: String,
        require: true,
    },
    Username: {
        type: String,
        require: true,
    },
    Password: {
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
        unique: true,
    },
    Phone_Number: {
        type: String,
        require: true,
        unique: true,
    },
    Address: {
        type: String,
        require: true,
    },
    Specialization: {
        type: String,
        require: true,
    },
    City: {
        type: String,
        require: true,
    },
    Info_Provided: {
        type: Boolean,
        require: true,
    },
    Work_Experience: {
        type: String,
        require: true,
    },
}, { timestamps: true })
const Doctor = mongoose.model("doctor", doctorSchema)
module.exports = Doctor