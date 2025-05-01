import { useEffect, useState } from "react";
import axios from "axios";
import CameraCard from "../components/CameraCard";

function Dashboard() {
  const [cameras, setCameras] = useState([]);

  // טעינת המצלמות מה-Backend
  useEffect(() => {
    axios.get("/api/cameras") // כתובת ה-API שלך
      .then(res => setCameras(res.data))
      .catch(err => console.error("Failed to load cameras:", err));
  }, []);

  // תפעול לחיצה על Take Over
  const handleTakeOver = (id) => {
    axios.patch(`/api/cameras/${id}`, { status: "in-use" })
      .then(() => alert(`Camera ${id} taken over!`))
      .catch(() => alert(`Failed to take over camera ${id}`));
  };
  
  return (
    <div className="grid gap-6 p-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {cameras.map(cam => (
        <CameraCard key={cam.id} camera={cam} onTakeOver={handleTakeOver} />
      ))}
    </div>
  );
}

export default Dashboard;
