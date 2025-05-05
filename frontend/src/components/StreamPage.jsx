import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_URL = "https://camera-backend-ovtr.onrender.com";

function StreamPage() {
  const { id } = useParams();
  const [camera, setCamera] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    axios.get(`${API_URL}/api/cameras/${id}`)
      .then((res) => setCamera(res.data))
      .catch((err) => {
        console.error("❌ Failed to load camera:", err);
        setError("Camera not found or error fetching data.");
      });
  }, [id]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>{error}</p>
      </div>
    );
  }

  if (!camera) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>Loading camera details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Camera Stream: {camera.name}</h1>

        <p className="mb-2 text-gray-400">Status: {camera.status}</p>
        <p className="mb-4 text-gray-400">Stream URL: {camera.streamUrl || "N/A"}</p>

        {camera.streamUrl ? (
          <video
            src={camera.streamUrl}
            controls
            autoPlay
            className="w-full max-w-2xl rounded border"
          />
        ) : (
          <div className="text-red-500">No stream URL available for this camera.</div>
        )}
      </div>
    </div>
  );
}

export default StreamPage;
