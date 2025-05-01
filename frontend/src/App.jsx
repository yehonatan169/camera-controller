import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import StreamPage from "./pages/StreamPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/stream" element={<StreamPage />} />
      </Routes>
    </Router>
  );
}

export default App;