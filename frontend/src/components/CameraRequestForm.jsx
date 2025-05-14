import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player"; // ✅ Lottie import
import '../styles.css';

export default function CameraRequestForm() {
  const [form, setForm] = useState({
    region: "",
    settlements: "",
    officer: "",
    details: "",
  });

  const [isWaiting, setIsWaiting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.region && form.settlements) {
      setIsWaiting(true);
      setTimeout(() => {
        window.alert("Your request was approved ✅");
        navigate("/dashboard");
      }, 5000);
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="container-center">
      <div className="card">
      {isWaiting ? (
        <>
          <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
            Waiting for Supervisor Approval...
          </h2>
          <Player
            autoplay
            loop
            controls={false}
            src="https://assets10.lottiefiles.com/packages/lf20_usmfx6bp.json"
            style={{ height: '300px', width: '300px', margin: '0 auto' }}
          />
        </>
      ) : (

          <>
            <h2>Camera Access Request</h2>
            <form onSubmit={handleSubmit} className="form-group">
              <h1>Select a Region</h1>
              <select name="region" value={form.region} onChange={handleChange} className="input">
                <option value="">Select Region</option>
                <option>הנגב המערבי</option>
                <option>גליל עליון</option>
                <option>רמת הגולן</option>
                <option>ירושלים ואזור יהודה</option>
                <option>שומרון</option>
                <option>עמק הירדן</option>
                <option>הנגב והערבה</option>
              </select>

              <select name="settlements" value={form.settlements} onChange={handleChange} className="input">
                <option value="">Select Settlement</option>
                <option>הר החרמון</option>
                <option>קצרין</option>
                <option>מרום הגולן</option>
              </select>

              <button type="submit" className="button">Submit Request</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
