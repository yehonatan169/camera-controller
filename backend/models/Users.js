const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

// 🔧 שים לב לשם האוסף כאן 👇
module.exports = mongoose.model("user", userSchema);
