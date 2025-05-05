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
          <input
            type="text"
            name="region"
            placeholder="Region"
            value={form.region}
            onChange={handleChange}
            className="input"
            required
          />
          <input
            type="text"
            name="settlements"
            placeholder="Settlements"
            value={form.settlements}
            onChange={handleChange}
            className="input"
            required
          />
          <input
            type="text"
            name="officer"
            placeholder="Security Officer + Phone"
            value={form.officer}
            onChange={handleChange}
            className="input"
            required
          />
          <textarea
            name="details"
            placeholder="Bottom of Access Request"
            value={form.details}
            onChange={handleChange}
            rows={3}
            className="input"
            required
          />
          <button type="submit" className="button">Submit Request</button>
        </form>
      </div>
    </div>
  );
}
