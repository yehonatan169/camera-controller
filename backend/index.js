const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ראוטים של מצלמות
const cameraRoutes = require("./routes/cameras");
app.use("/api", cameraRoutes);

// הרצת השרת
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));