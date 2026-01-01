import { useEffect, useState } from "react";
import { getShifts } from "../api/api";
import ShiftForm from "../components/ShiftForm";
import ShiftTable from "../components/ShiftTable";

export default function Dashboard({ token, role }) {
  const [shifts, setShifts] = useState([]);

  const load = async () => {
    const res = await getShifts(token);
    setShifts(res.data);
  };

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    if (token) load();
  }, [token]);

  return (
    <div className="app-container">
      <div className="header">
        <h2>Employee Shift Board</h2>
        <button className="logout-btn" onClick={logout}>Logout</button>
      </div>

      {role === "admin" && (
        <div className="card">
          <ShiftForm token={token} onAdd={load} />
        </div>
      )}

      <div className="card">
        <ShiftTable shifts={shifts} token={token} onDelete={load} role={role} />
      </div>
    </div>
  );
}

