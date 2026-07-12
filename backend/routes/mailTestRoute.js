const express = require("express");
const router = express.Router();

const sendMail = require("../config/mailer");

router.get("/test", async (req, res) => {
  try {
    await sendMail({
      to: process.env.EMAIL_USER,
      subject: "🎉 MediAI Email Test",
      html: `
        <h2>Email Working Successfully 🚀</h2>
        <p>If you're reading this, Nodemailer is configured correctly.</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Test email sent successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;