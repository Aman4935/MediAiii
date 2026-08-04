const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dns = require("dns");

dotenv.config();

// DNS
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const connectDB = require("./config/database");

const authRoutes = require("./routes/authRoutes");
const reportRoutes = require("./routes/reportRoutes");
const aiRoutes = require("./routes/aiRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const chatRoutes = require("./routes/chatRoutes");
const mailTestRoute = require("./routes/mailTestRoute");
const contactRoutes = require("./routes/contactRoutes");

const authMiddleware = require("./middleware/authMiddleware");
const User = require("./models/User");

const app = express();

// =======================
// Database Connection
// =======================
connectDB();

// =======================
// Middleware
// =======================
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =======================
// Routes
// =======================
app.use("/api/auth", authRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/assistant", chatRoutes);
app.use("/api/mail", mailTestRoute);
app.use("/api/contact", contactRoutes);

// =======================
// Home
// =======================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 AI Healthcare Platform Backend is Running!",
  });
});

// =======================
// Test API
// =======================
app.get("/api/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API Working Successfully",
  });
});

// =======================
// Profile
// =======================
app.get("/api/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// =======================
// Export for Vercel
// =======================
module.exports = app;

// =======================
// Local Development Only
// =======================
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}