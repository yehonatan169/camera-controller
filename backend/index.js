const express = require("express");
const expressWs = require('express-ws');

const cors = require("cors");
const {streamHandler} = require("./stream")
const app = express();
expressWs(app);
app.use(cors());
app.use(express.json());

// ראוטים של מצלמות
const cameraRoutes = require("./routes/cameras");
app.use("/api", cameraRoutes);
app.ws("/stream",streamHandler);

// הרצת השרת
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅Server running on port ${PORT}`));