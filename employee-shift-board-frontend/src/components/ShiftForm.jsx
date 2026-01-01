import { useState } from "react";
import { createShift } from "../api/api";

export default function ShiftForm({ token, onAdd }) {
  const [data, setData] = useState({
    employeeId: "",
    date: "",
    startTime: "",
    endTime: ""
  });
  const [error, setError] = useState("");

  const submit = async () => {
    try {
      await createShift(data, token);
      setError("");
      onAdd();
    } catch (e) {
      setError(e.response?.data?.message || "Error");
    }
  };

  return (
    <div className="shift-form">
      <h3>Assign Shift</h3>

      <div className="form-grid">
        <input
          placeholder="Employee ID"
          onChange={e => setData({ ...data, employeeId: e.target.value })}
        />
        <input
          type="date"
          onChange={e => setData({ ...data, date: e.target.value })}
        />
        <input
          type="time"
          onChange={e => setData({ ...data, startTime: e.target.value })}
        />
        <input
          type="time"
          onChange={e => setData({ ...data, endTime: e.target.value })}
        />
      </div>

      {/* Button moved to its own row */}
      <div className="form-actions">
        <button className="primary" onClick={submit}>
          Create Shift
        </button>
      </div>

      {error && <p className="error">{error}</p>}
    </div>
  );
}


