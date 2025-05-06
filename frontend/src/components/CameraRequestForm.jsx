import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles.css'; // ✅ Import your custom stylesheet

export default function CameraRequestForm() {
  const [form, setForm] = useState({
    region: "",
    settlements: "",
    officer: "",
    details: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.region && form.settlements && form.officer && form.details) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="container-center">
      <div className="card">
        <h2>Camera Access Request</h2>
        <form onSubmit={handleSubmit} className="form-group">
          <h1>Select a Region</h1>
          <select name="region" >
            
          </select>
          <h1>Select a City/Settlement</h1>
          <select name="city" >
            
          </select>

          <button type="submit" className="button">Submit Request</button>
        </form>
      </div>
    </div>
  );
}
