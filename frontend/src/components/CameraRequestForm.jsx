import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      navigate("/dashboard"); // ✅ מעבר למסך המצלמות
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white font-inter">
      <div className="bg-[#111827] p-8 rounded-2xl shadow-lg w-[90%] max-w-md">
        <h2 className="text-xl font-semibold mb-6 text-center">Camera Access Request</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="region"
            placeholder="Region"
            value={form.region}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-[#1F2937] text-white border border-gray-700"
            required
          />
          <input
            type="text"
            name="settlements"
            placeholder="Settlements"
            value={form.settlements}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-[#1F2937] text-white border border-gray-700"
            required
          />
          <input
            type="text"
            name="officer"
            placeholder="Security Officer + Phone"
            value={form.officer}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-[#1F2937] text-white border border-gray-700"
            required
          />
          <textarea
            name="details"
            placeholder="Bottom of Access Request"
            value={form.details}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 rounded-lg bg-[#1F2937] text-white border border-gray-700"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#2563EB] hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
