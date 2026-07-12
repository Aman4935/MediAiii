const cloudinary = require("../config/cloudinary");
const Report = require("../models/Report");

// ================= Upload Report =================
const uploadReport = async (req, res) => {
    try {

        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "AI-Healthcare-Reports",
            resource_type: "auto"
        });

        const report = await Report.create({
            patient: req.user.id,
            reportName: req.file.originalname,
            reportUrl: result.secure_url,
            publicId: result.public_id,
            fileType: req.file.mimetype,
        });

        res.json({
            success: true,
            message: "Report Uploaded Successfully",
            report
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// ================= Get My Reports =================
const getReports = async (req, res) => {

    try {

        const reports = await Report.find({
            patient: req.user.id
        });

        res.status(200).json({
            success: true,
            reports
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};
// ================= Delete Report =================
const deleteReport = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);

    if (!report) {
      return res.status(404).json({
        success: false,
        message: "Report not found",
      });
    }

    // Ensure the logged-in user owns the report
    if (report.patient.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    // Delete from Cloudinary
    await cloudinary.uploader.destroy(report.publicId);

    // Delete from MongoDB
    await Report.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Report deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  uploadReport,
  getReports,
  deleteReport,
};