import { deleteShift } from "../api/api";

export default function ShiftTable({ shifts, token, onDelete, role }) {
  return (
    <>
      <h3>Shift List</h3>
      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Date</th>
            <th>Time</th>
            {role === "admin" && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {shifts.map(s => (
            <tr key={s._id}>
              <td>
  {s.employeeId?.name}
  <div style={{ fontSize: "12px", color: "#666" }}>
    {s.employeeId?.employeeCode}
  </div>
</td>

              <td>{s.date}</td>
              <td>{s.startTime} – {s.endTime}</td>
              {role === "admin" && (
                <td>
                  <button
                    className="action-btn"
                    onClick={() => deleteShift(s._id, token).then(onDelete)}
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

