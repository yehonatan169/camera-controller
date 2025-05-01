const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

// נתיב: GET /api/cameras
router.get("/cameras", (req, res) => {
  const filePath = path.join(__dirname, "../db.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("❌ Failed to read db.json:", err);
      return res.status(500).json({ error: "Failed to load cameras" });
    }

    try {
      const cameras = JSON.parse(data);
      res.json(cameras);
    } catch (parseErr) {
      console.error("❌ Invalid JSON format:", parseErr);
      res.status(500).json({ error: "Invalid data format" });
    }
  });
});

module.exports = router;