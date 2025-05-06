import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import CameraRequestForm from "./components/CameraRequestForm";
import Dashboard from "./components/Dashboard";
import AuthenticatedLayout from "./components/AuthenticatedLayout";
import LiveCam from "./components/LiveCam";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/request"
          element={
            <AuthenticatedLayout>
              <CameraRequestForm />
            </AuthenticatedLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <AuthenticatedLayout>
              <Dashboard />
            </AuthenticatedLayout>
          }
        />
        
        <Route
          path="/stream/cam-1"
          element={
            <AuthenticatedLayout>
              <LiveCam />
            </AuthenticatedLayout>
          }/>
      </Routes>
    </Router>
  );
}

export default App;
