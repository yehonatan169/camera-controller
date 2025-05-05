// 📁 frontend/src/components/Dashboard.jsx

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Dashboard() {
  const [cameras, setCameras] = useState([]); // 🎯 Store camera list from backend

  useEffect(() => {
    // 🔄 Fetch cameras from backend when the component loads
    fetch(`${import.meta.env.VITE_API_URL}/api/cameras`)
      .then((res) => res.json())
      .then((data) => setCameras(data)) 
      .catch((err) => console.error("❌ Failed to load cameras:", err));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="text-4xl text-red-500 font-bold mb-4">בדיקה של Tailwind</div>

      <header className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-4 text-center">
        <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
      </header>

      <h1 className="text-xl mt-4 mb-2">מערכת ניהול מצלמות</h1>

      {/* ⬇️ Dropdown of available cameras */}
      <select className="border p-2 rounded w-full max-w-xs mb-4">
        {cameras.map((camera) => (
          <option key={camera.id} value={camera.id}>
            {camera.name}
          </option>
        ))}
      </select>

      {/* 🔗 Navigation buttons */}
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <Link
          to="/stream"
          className="bg-blue-600 text-white px-6 py-3 rounded text-center hover:bg-blue-700"
        >
          צפייה במצלמות (Stream)
        </Link>

        {/* ניתן להוסיף עוד ניווטים בעתיד */}
        {/* <Link to="/settings" className="bg-gray-600 ...">הגדרות</Link> */}
      </div>
    </div>
  );
}

export default Dashboard;
