// 📁 backend/routes/auth.js
const express = require("express");
const router = express.Router();
const User = require("../models/Users");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("🟡 Email received:", email);

  try {
    const user = await User.findOne({ email: email.toLowerCase().trim() });
    console.log("🔵 User found:", user);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    return res.json({ success: true, message: "Login successful" });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
