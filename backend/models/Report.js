const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({

    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    reportName: {
        type: String,
        required: true
    },

    reportUrl: {
        type: String,
        required: true
    },

    publicId: {
        type: String,
        required: true
    },
    fileType: {
  type: String,
  required: true,
},

}, { timestamps: true });

module.exports = mongoose.model("Report", reportSchema);