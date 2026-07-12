const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  analyzeReport,
} = require("../controllers/aiController");

router.post(
  "/analyze",
  authMiddleware,
  analyzeReport
);

module.exports = router;