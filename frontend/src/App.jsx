import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import StreamPage from "./pages/StreamPage.jsx";

function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="flex gap-4 mb-6">
          <Link to="/" className="text-blue-600 hover:underline">Stream</Link>
          <Link to="/dashboard" className="text-blue-600 hover:underline">Dashboard</Link>
        </nav>

        <Routes>
          <Route path="/" element={<StreamPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
