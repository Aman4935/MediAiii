const mongoose = require("mongoose");

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    return;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    isConnected = conn.connections[0].readyState === 1;

    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Connection Failed");
    console.error(err.message);
    throw err;
  }
};

module.exports = connectDB;