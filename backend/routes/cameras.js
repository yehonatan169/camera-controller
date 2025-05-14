const express = require("express");
const router = express.Router(); // ✅ Creates a mini router for /api paths
const fs = require("fs");
const path = require("path");

// ✅ GET /api/cameras - returns list of cameras from db.json
router.get("/cameras", (req, res) => {
  const filePath = path.join(__dirname, "../db.json"); // 🔍 Path to the mock data file

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("❌ Failed to read db.json:", err);
      return res.status(500).json({ error: "Failed to load cameras" }); // ⛔ Handle file read error
    }

    try {
      const parsed = JSON.parse(data); // ✅ Parse the full db.json
      res.json(parsed.cameras); // ✅ only send the array part
      console.log("✅ Cameras loaded successfully:", parsed.cameras); // ✅ Log success
    } catch (parseErr) {
      console.error("❌ Invalid JSON format:", parseErr);
      res.status(500).json({ error: "Invalid data format" }); // ⛔ Handle broken JSON
    }
  });
});

module.exports = router;
