import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login"; // ✅ הוספנו ייבוא
import CameraRequestForm from "./components/CameraRequestForm";
import Dashboard from "./components/Dashboard";
import StreamPage from "./components/StreamPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* 🔐 דף התחברות */}
        <Route path="/request" element={<CameraRequestForm />} /> {/* 📋 טופס בקשה */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* 📷 רשימת מצלמות */}
        <Route path="/stream" element={<StreamPage />} /> {/* 📺 צפייה */}
      </Routes>
    </Router>
  );
}

export default App;
