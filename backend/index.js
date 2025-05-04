// 📁 backend/index.js

const express = require("express");
const expressWs = require("express-ws");
const cors = require("cors");
const { streamHandler } = require("./stream");
const cameraRoutes = require("./routes/cameras");

const app = express();
expressWs(app); // 🎥 Enable WebSocket support

app.use(cors()); // ✅ Allow requests from frontend (important!)
app.use(express.json()); // ✅ Parse JSON request bodies

// 📌 Mount /api routes (including /api/cameras)
app.use("/api", cameraRoutes);

// 🎥 WebSocket route for camera stream
app.ws("/stream", streamHandler);

// 🚀 Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
