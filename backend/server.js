const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const dns = require("dns");
dotenv.config();
// Change DNS
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const connectDB = require("./config/database");
const authRoutes = require("./routes/authRoutes");
const reportRoutes = require("./routes/reportRoutes");
const aiRoutes = require("./routes/aiRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const authMiddleware = require("./middleware/authMiddleware");
const chatRoutes = require("./routes/chatRoutes");
const mailTestRoute = require("./routes/mailTestRoute");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/assistant", chatRoutes);
app.use("/api/mail", mailTestRoute);
app.use("/api/contact", contactRoutes);

// Home Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "🚀 AI Healthcare Platform Backend is Running!"
    });
});

// Test Route
app.get("/api/test", (req, res) => {
    res.status(200).json({
        success: true,
        message: "API Working Successfully"
    });
});

// Start Server
const PORT = process.env.PORT || 5000;
const User = require("./models/User");

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
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});