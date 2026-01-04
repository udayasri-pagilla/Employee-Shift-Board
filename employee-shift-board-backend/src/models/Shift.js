const mongoose = require("mongoose");

const shiftSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "employee" },
  date: { type: String, required: true },
  startTime: String,
  endTime: String
});

module.exports = mongoose.model("Shift", shiftSchema);
