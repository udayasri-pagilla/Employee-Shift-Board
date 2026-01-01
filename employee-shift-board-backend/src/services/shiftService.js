const Shift = require("../models/Shift");

function timeToMinutes(time) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

exports.validateShift = async ({ employeeId, date, startTime, endTime }) => {
  const start = timeToMinutes(startTime);
  const end = timeToMinutes(endTime);

  // Rule 1: Minimum 4 hours
  if (end - start < 240) {
    throw new Error("Shift must be at least 4 hours long");
  }

  // Rule 2: No overlapping shifts
  const existingShifts = await Shift.find({ employeeId, date });

  for (let shift of existingShifts) {
    const existingStart = timeToMinutes(shift.startTime);
    const existingEnd = timeToMinutes(shift.endTime);

    const isOverlap = start < existingEnd && end > existingStart;
    if (isOverlap) {
      throw new Error("Shift overlaps with existing shift");
    }
  }
};
