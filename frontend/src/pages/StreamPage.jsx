import { useState, useEffect } from "react";
import axios from "axios";

function StreamPage() {
  const [cameras, setCameras] = useState([]);
  const [selectedCameraId, setSelectedCameraId] = useState(null);
  const [streamUrl, setStreamUrl] = useState("");

  useEffect(() => {
    axios.get("/api/cameras")
      .then(res => setCameras(res.data))
      .catch(() => alert("Failed to load cameras"));
  }, []);

  const handleTakeOver = () => {
    if (!selectedCameraId) return;

    // נשלחת בקשת GET לשרת כדי לקבל את כתובת ה-Stream
    axios.get(`/api/stream/${selectedCameraId}`)
      .then(res => setStreamUrl(res.data.streamUrl))
      .catch(() => alert("Failed to fetch stream"));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Select Camera to Stream</h2>

      <div className="max-w-sm">
        <select
          className="w-full border p-2 rounded"
          onChange={(e) => setSelectedCameraId(e.target.value)}
          defaultValue=""
        >
          <option disabled value="">-- Choose a camera --</option>
          {cameras.map((cam) => (
            <option key={cam.id} value={cam.id}>
              {cam.name}
            </option>
          ))}
        </select>
      </div>

      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={handleTakeOver}
      >
        Take Over & View Stream
      </button>

      {streamUrl && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Live Stream</h3>
          <video src={streamUrl} controls autoPlay className="w-full max-w-2xl border rounded shadow" />
        </div>
      )}
    </div>
  );
}

export default StreamPage;
