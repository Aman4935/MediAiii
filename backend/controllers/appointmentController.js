const Appointment = require("../models/Appointment");
const User = require("../models/User");
const sendMail = require("../config/mailer");

// ===============================
// Book Appointment
// ===============================

const bookAppointment = async (req, res) => {
  try {
    const {
      doctorName,
      specialization,
      appointmentDate,
      appointmentTime,
      problem,
    } = req.body;

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const appointment = await Appointment.create({
      patient: req.user.id,
      doctorName,
      specialization,
      appointmentDate,
      appointmentTime,
      problem,
    });

    // ===============================
    // Send Response Immediately
    // ===============================

    res.status(201).json({
      success: true,
      message: "Appointment Booked Successfully",
      appointment,
    });

    // ===============================
    // Send Emails in Background
    // ===============================

    // Patient Email
    sendMail({
      to: user.email,
      subject: "❤️ Appointment Confirmed | MediAI",
      html: `
      <div style="font-family:Arial;padding:30px;background:#f5f7fb">
        <div style="max-width:600px;margin:auto;background:white;border-radius:15px;overflow:hidden">

          <div style="background:#2563eb;color:white;padding:25px;text-align:center">
            <h1>MediAI</h1>
            <h2>Appointment Confirmed ✅</h2>
          </div>

          <div style="padding:30px">

            <h3>Hello ${user.fullName},</h3>

            <p>Your appointment has been booked successfully.</p>

            <hr>

            <p><b>Doctor:</b> ${doctorName}</p>
            <p><b>Specialization:</b> ${specialization}</p>
            <p><b>Date:</b> ${appointmentDate}</p>
            <p><b>Time:</b> ${appointmentTime}</p>
            <p><b>Problem:</b> ${problem}</p>

            <hr>

            <p>
              Thank you for choosing
              <strong>MediAI</strong>.
            </p>

          </div>

        </div>
      </div>
      `,
    }).catch((err) => {
      console.error("Patient Mail Error:", err);
    });

    // Admin Email
    sendMail({
      to: process.env.EMAIL_USER,
      subject: "📅 New Appointment Booked",
      html: `
      <h2>New Appointment</h2>

      <p><b>Patient:</b> ${user.fullName}</p>
      <p><b>Email:</b> ${user.email}</p>

      <p><b>Doctor:</b> ${doctorName}</p>
      <p><b>Specialization:</b> ${specialization}</p>

      <p><b>Date:</b> ${appointmentDate}</p>
      <p><b>Time:</b> ${appointmentTime}</p>
      <p><b>Problem:</b> ${problem}</p>
      `,
    }).catch((err) => {
      console.error("Admin Mail Error:", err);
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
// ===============================
// Get My Appointments
// ===============================

const getAppointments = async (req, res) => {
  try {

    const appointments = await Appointment.find({
      patient: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      appointments,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
// ===============================
// Cancel Appointment
// ===============================

const cancelAppointment = async (req, res) => {
  try {

    const appointment = await Appointment.findOneAndUpdate(
      {
        _id: req.params.id,
        patient: req.user.id,
      },
      {
        status: "Cancelled",
      },
      {
        new: true,
      }
    );

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    // Send response immediately
    res.status(200).json({
      success: true,
      message: "Appointment Cancelled Successfully",
      appointment,
    });

    // Send cancellation email in background
    User.findById(req.user.id)
      .then((user) => {
        if (!user) return;

        return sendMail({
          to: user.email,
          subject: "❌ Appointment Cancelled | MediAI",
          html: `
            <div style="font-family:Arial;padding:30px;background:#f5f7fb">
              <div style="max-width:600px;margin:auto;background:#fff;padding:30px;border-radius:12px">
                <h2 style="color:#dc2626;">Appointment Cancelled</h2>

                <p>Hello <b>${user.fullName}</b>,</p>

                <p>Your appointment has been cancelled successfully.</p>

                <hr>

                <p><b>Doctor:</b> ${appointment.doctorName}</p>
                <p><b>Date:</b> ${appointment.appointmentDate}</p>
                <p><b>Time:</b> ${appointment.appointmentTime}</p>

                <hr>

                <p>Thank you for using <b>MediAI</b>.</p>
              </div>
            </div>
          `,
        });
      })
      .catch((err) => {
        console.error("Cancel Mail Error:", err);
      });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
// ===============================
// Update Appointment Status
// ===============================

const updateAppointmentStatus = async (req, res) => {
  try {

    const { status } = req.body;

    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      {
        status,
      },
      {
        new: true,
      }
    );

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    res.status(200).json({
      success: true,
      appointment,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ===============================
// Exports
// ===============================

module.exports = {
  bookAppointment,
  getAppointments,
  cancelAppointment,
  updateAppointmentStatus,
};