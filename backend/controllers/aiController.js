const Report = require("../models/Report");
const { analyzeMedicalReport } = require("../services/groqService");
const { extractTextFromPDF } = require("../services/pdfService");
const { extractTextFromImage } = require("../services/ocrService");

// ================= Analyze Report =================

const analyzeReport = async (req, res) => {
  try {
    const { reportId } = req.body;

    if (!reportId) {
      return res.status(400).json({
        success: false,
        message: "Report ID is required",
      });
    }

    // Find Report
    const report = await Report.findById(reportId);

    if (!report) {
      return res.status(404).json({
        success: false,
        message: "Report not found",
      });
    }

    // Check Ownership
    if (report.patient.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized Access",
      });
    }

    let extractedText = "";

    // ================= PDF =================

    if (report.fileType === "application/pdf") {
      extractedText = await extractTextFromPDF(report.reportUrl);
    }

    // ================= Images =================

    else if (
      report.fileType === "image/jpeg" ||
      report.fileType === "image/jpg" ||
      report.fileType === "image/png"
    ) {
      extractedText = await extractTextFromImage(report.reportUrl);
    }

    // ================= Unsupported =================

    else {
      return res.status(400).json({
        success: false,
        message: "Unsupported file type",
      });
    }

    if (!extractedText || extractedText.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "No readable text found in report",
      });
    }

    // ================= AI Analysis =================

    const analysis = await analyzeMedicalReport(extractedText);

    res.status(200).json({
      success: true,
      reportName: report.reportName,
      analysis,
    });

  } catch (error) {
    console.error("AI Controller Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  analyzeReport,
};