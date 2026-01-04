const Shift = require("../models/Shift");
const Employee = require("../models/Employee");
const { validateShift } = require("../services/shiftService");

exports.createShift = async (req, res) => {
  try {
    await validateShift(req.body);
    const shift = await Shift.create(req.body);
    res.status(201).json(shift);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

exports.getShifts = async (req, res) => {
  const query = {};

  if (req.user.role === "user") {
    const emp = await Employee.findOne({ userId: req.user.id });
    query.employeeId = emp._id;
  }

  if (req.query.employee) query.employeeId = req.query.employee;
  if (req.query.date) query.date = req.query.date;

  const shifts = await Shift.find(query)
    .populate("employeeId", "name employeeCode department");
  res.json(shifts);
};

exports.deleteShift = async (req, res) => {
  await Shift.findByIdAndDelete(req.params.id);
  res.json({ message: "Shift deleted" });
};

