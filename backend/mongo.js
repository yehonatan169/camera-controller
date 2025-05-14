// 📁 backend/db.js
const mongoose = require("mongoose");
require("dotenv").config(); // ✅ חובה לטעון את .env כאן

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // ✅ הדפסה מאשרת שם מסד נתונים
    console.log("✅ Connected to MongoDB");
    console.log("📦 Connected to DB:", mongoose.connection.name);
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
