const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendMail = async ({ to, subject, html }) => {
  try {
    console.log("=================================");
    console.log("📧 Sending Mail");
    console.log("FROM :", process.env.EMAIL_USER);
    console.log("TO   :", to);
    console.log("SUBJECT :", subject);
    console.log("=================================");

    const info = await transporter.sendMail({
      from: `"MediAI" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    });

    console.log("✅ Email Sent Successfully");
    console.log("Accepted :", info.accepted);
    console.log("Rejected :", info.rejected);
    console.log("Response :", info.response);
    console.log("MessageID:", info.messageId);

    return info;
  } catch (error) {
    console.log("============== ERROR ==============");
    console.log(error);
    console.log("===================================");
    throw error;
  }
};

module.exports = sendMail;