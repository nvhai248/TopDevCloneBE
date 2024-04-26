const mongoose = require('mongoose');
const { Schema } = mongoose;

const applicationSchema = new Schema({
    jobId: {
        type: Number,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    cvUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isApprove: {
        type: Boolean,
        default: false
    }
});


module.exports = mongoose.model('Application', applicationSchema);
