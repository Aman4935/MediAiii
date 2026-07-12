const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  bookAppointment,
  getAppointments,
  cancelAppointment,
  updateAppointmentStatus,
} = require("../controllers/appointmentController");

// Book Appointment
router.post("/book", authMiddleware, bookAppointment);

// Get User Appointments
router.get("/", authMiddleware, getAppointments);

// Update Appointment Status
router.patch(
  "/:id/status",
  authMiddleware,
  updateAppointmentStatus
);

// Cancel Appointment
router.patch(
  "/:id/cancel",
  authMiddleware,
  cancelAppointment
);

module.exports = router;