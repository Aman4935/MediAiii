const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");

const {
  uploadReport,
  getReports,
  deleteReport,
} = require("../controllers/reportController");

// Upload Report
router.post(
    "/upload",
    authMiddleware,
    upload.single("report"),
    uploadReport
);

// Get All Reports
router.get(
    "/",
    authMiddleware,
    getReports
);
router.delete(
  "/:id",
  authMiddleware,
  deleteReport
);

module.exports = router;