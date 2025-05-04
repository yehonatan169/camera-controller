import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import StreamPage from "./components/StreamPage";

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