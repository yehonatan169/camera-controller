import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../styles.css'; // ✅ Import the custom CSS



function StreamPage() {
  const { id } = useParams();
  const [camera, setCamera] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;
    axios.get(`${import.meta.API_URL}/api/cameras/${id}`)
      .then((res) => setCamera(res.data))
    axios.get(`${import.meta.API_URL}/api/cameras`)
      .then((res) => {
        if (Array.isArray(res.data)) {
          setCameras(res.data);
        } else {
          console.warn("Expected array, got:", res.data);
          setCameras([]);
        }
      })
      .catch((err) => {
        console.error("❌ Failed to load camera:", err);
        setError("Camera not found or error fetching data.");
      });
  }, [id]);

  if (error) {
    return (
      <div className="container-center">
        <p>{error}</p>
      </div>
    );
  }

  if (!camera) {
    return (
      <div className="container-center">
        <p>Loading camera details...</p>
      </div>
    );
  }

  return (
    <div className="container-center" style={{ flexDirection: "column", padding: "1.5rem" }}>
      <div className="card" style={{ width: "100%", maxWidth: "768px" }}>
        <h1>Camera Stream: {camera.name}</h1>
        <p className="text-muted">Status: {camera.status}</p>
        <p className="text-muted">Stream URL: {camera.streamUrl || "N/A"}</p>

        {camera.streamUrl ? (
          <video
            src={camera.streamUrl}
            controls
            autoPlay
            className="video-player"
          />
        ) : (
          <div style={{ color: "red" }}>No stream URL available for this camera.</div>
        )}
      </div>
    </div>
  );
}

export default StreamPage;
