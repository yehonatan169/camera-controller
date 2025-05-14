import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles.css'; // ✅ Import your global styles

function Dashboard() {
  const [cameras, setCameras] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/cameras`)
      .then((res) => res.json())
      .then((data) => setCameras(data))
      .catch((err) => console.error("❌ Failed to load cameras:", err));
  }, []);

  const handleView = (cameraId) => {
    navigate(`/stream/${cameraId}`);
  };

  return (
    <div className="container-center" style={{ flexDirection: "column", padding: "1.5rem" }}>
      <div className="dashboard-title">📷 Camera List</div>

      <div className="camera-list">
        {cameras.map((camera) => (
          <div key={camera._id} className="camera-item">
            <div>
              <div>{camera.name}</div>
              <div className="camera-status">Status: {camera.status}</div>
            </div>
            <button onClick={() => navigate(`/stream/${camera.id}`)} className="button" style={{ width: "auto" }}>
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
