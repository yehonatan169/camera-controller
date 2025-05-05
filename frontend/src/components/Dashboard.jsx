import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    navigate(`/stream/${cameraId}`); // ⬅️ שולח את מזהה המצלמה
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="text-center text-2xl font-bold mb-6">📷 Camera List</div>

      <div className="grid gap-4 max-w-md mx-auto">
        {cameras.map((camera) => (
          <div
            key={camera._id}
            className="bg-[#1F2937] p-4 rounded-xl shadow-md flex justify-between items-center"
          >
            <div>
              <div className="font-semibold">{camera.name}</div>
              <div className="text-sm text-gray-400">Status: {camera.status}</div>
            </div>
            <button
              onClick={() => handleView(camera._id)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
