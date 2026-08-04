const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dns = require("dns");

dotenv.config();

// DNS Configuration
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const connectDB = require("./config/database");

// Routes
const authRoutes = require("./routes/authRoutes");
const reportRoutes = require("./routes/reportRoutes");
const aiRoutes = require("./routes/aiRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const chatRoutes = require("./routes/chatRoutes");
const mailTestRoute = require("./routes/mailTestRoute");
const contactRoutes = require("./routes/contactRoutes");

// Middleware
const authMiddleware = require("./middleware/authMiddleware");

// Models
const User = require("./models/User");

const app = express();

/* ==========================================
   Connect MongoDB
========================================== */
connectDB().catch((err) => {
  console.error("MongoDB Connection Error:", err);
});

/* ==========================================
   Middleware
========================================== */
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true }));

/* ==========================================
   Routes
========================================== */

app.use("/api/auth", authRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/assistant", chatRoutes);
app.use("/api/mail", mailTestRoute);
app.use("/api/contact", contactRoutes);

/* ==========================================
   Home Route
========================================== */

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 AI Healthcare Platform Backend Running Successfully",
  });
});

/* ==========================================
   Health Check
========================================== */

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend is Healthy",
  });
});

/* ==========================================
   Test Route
========================================== */

app.get("/api/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API Working Successfully",
  });
});

/* ==========================================
   Protected Profile Route
========================================== */

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
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/* ==========================================
   404 Route
========================================== */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

/* ==========================================
   Export App (Required for Vercel)
========================================== */

module.exports = app;

/* ==========================================
   Local Development Server
========================================== */

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}