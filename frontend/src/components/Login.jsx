import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import '../styles.css';

export default function Login() {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [scanStatus, setScanStatus] = useState("Ready to scan...");
  const [videoStarted, setVideoStarted] = useState(false);
  const [scanApproved, setScanApproved] = useState(false); // ✅ New state
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const handleScanFace = async () => {
    setScanStatus("🔍 Scanning...");
    setVideoStarted(true);
    setScanApproved(false);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }

      // ✅ Auto-approve after 3 seconds
      setTimeout(() => {
        setScanStatus("✅ Scan Approved");
        setScanApproved(true);
      }, 3000);

    } catch (err) {
      console.error("Camera access denied:", err);
      setScanStatus("❌ Could not access camera");
      setVideoStarted(false);
      setScanApproved(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        navigate("/request");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Server error");
    }
  };

  return (
    <div className="container-center">
      <div className="card">
        <h2>Emergency Camera Access</h2>
        <form onSubmit={handleSubmit} className="form-group">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="input"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            required
          />

          {/* Face Recognition Camera UI */}
          <div
            style={{
              marginTop: "1.5rem",
              marginBottom: "1rem",
              textAlign: "center",
              backgroundColor: "#0d1117",
              border: "1px solid #30363d",
              borderRadius: "0.5rem",
              padding: "1rem"
            }}
          >
            {videoStarted ? (
              <video
                ref={videoRef}
                style={{
                  width: "90%",
                  height: "240px",
                  border: "2px dashed #58a6ff",
                  borderRadius: "0.5rem",
                  objectFit: "cover",
                  backgroundColor: "#161b22"
                }}
                muted
                autoPlay
              />
            ) : (
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="Anonymous Preview"
                style={{
                  width: "90%",
                  height: "240px",
                  border: "2px dashed #58a6ff",
                  borderRadius: "0.5rem",
                  objectFit: "cover",
                  backgroundColor: "#161b22"
                }}
              />
            )}

            <button
              type="button"
              className="button"
              style={{ marginTop: "1rem" }}
              onClick={handleScanFace}
            >
              Scan Face
            </button>

            <p style={{ marginTop: "0.5rem", color: scanApproved ? "#28a745" : "#8b949e" }}>
              {scanStatus}
            </p>
          </div>

          <button type="submit" className="button">Log In</button>
        </form>
      </div>
    </div>
  );
}
