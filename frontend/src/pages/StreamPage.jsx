import { useEffect, useState } from "react";
import axios from "axios";

// כתובת ה-API של השותף (עדכן בהתאם)
const API_URL = "https://polite-dragons-fold.loca.lt";

function StreamPage() {
  const [cameras, setCameras] = useState([]);
  const [selectedCameraId, setSelectedCameraId] = useState(null);
  const [streamUrl, setStreamUrl] = useState("");

  useEffect(() => {
    axios.get(`${API_URL}/api/cameras`)
      .then((res) => {
        if (Array.isArray(res.data)) {
          setCameras(res.data);
        } else {
          console.warn("Expected array, got:", res.data);
          setCameras([]);
        }
      })
      .catch((err) => {
        console.error("Failed to load cameras:", err);
        alert("Failed to load cameras");
      });
  }, []);

  const handleTakeOver = () => {
    if (!selectedCameraId || selectedCameraId === "--") return;

    if (selectedCameraId === "ALL") {
      setStreamUrl("");
    } else {
      setStreamUrl(`${API_URL}/api/stream/${selectedCameraId}`);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Select Camera to Stream</h1>

      <div className="mb-4">
        <select
          className="w-full border p-2 rounded max-h-48 overflow-y-scroll"
          size={5}
          onChange={(e) => setSelectedCameraId(e.target.value)}
        >
          <option value="--">-- Choose a camera --</option>
          <option value="ALL">🎥 Load All Cameras</option>
          {cameras.map((cam) => (
            <option key={cam.id} value={cam.id}>
              {cam.id}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleTakeOver}
        >
          Take Over & View Stream
        </button>
      </div>

      <div className="mt-6">
        {selectedCameraId === "ALL" ? (
          cameras.map((cam) => (
            <div key={cam.id} className="mt-6">
              <h3 className="font-semibold mb-2">{cam.name}</h3>
              <video
                src={`${API_URL}/api/stream/${cam.id}`}
                controls
                autoPlay
                className="w-full max-w-lg rounded border"
              />
            </div>
          ))
        ) : streamUrl ? (
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Live Stream</h3>
            <video
              src={streamUrl}
              controls
              autoPlay
              className="w-full max-w-2xl rounded border"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default StreamPage;