const Contact = require("../models/Contact");
const sendMail = require("../config/mailer");

// ==============================
// Send Contact Message
// ==============================

exports.sendContactMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    await Contact.create({
      name,
      email,
      subject,
      message,
      ipAddress: req.ip,
    });

    // Mail to Admin
    await sendMail({
      to: process.env.EMAIL_USER,
      subject: `📩 New Contact Message - ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Subject:</strong> ${subject}</p>

        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // Auto Reply
    await sendMail({
      to: email,
      subject: "Thank you for contacting MediAI ❤️",
      html: `
        <h2>Hello ${name},</h2>

        <p>
          Thank you for contacting <strong>MediAI</strong>.
        </p>

        <p>
          We have received your message and will get back to you soon.
        </p>

        <br/>

        <p>Regards,</p>

        <h3>MediAI Team</h3>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==============================
// Get All Messages
// ==============================

exports.getAllMessages = async (req, res) => {
  try {

    const messages = await Contact.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      messages,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};