const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify SMTP on server start
transporter.verify((error) => {
  if (error) {
    console.error("❌ SMTP Verify Error:", error);
  } else {
    console.log("✅ SMTP Server Ready");
  }
});

const sendMail = async ({ to, subject, html }) => {
  try {
    const info = await transporter.sendMail({
      from: `"MediAI" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    });

    console.log("================================");
    console.log("✅ Email Sent Successfully");
    console.log("To        :", to);
    console.log("Subject   :", subject);
    console.log("Accepted  :", info.accepted);
    console.log("Rejected  :", info.rejected);
    console.log("Message ID:", info.messageId);
    console.log("Response  :", info.response);
    console.log("================================");

    return info;
  } catch (error) {
    console.error("================================");
    console.error("❌ Email Sending Failed");
    console.error(error);
    console.error("================================");

    throw error;
  }
};

module.exports = sendMail;