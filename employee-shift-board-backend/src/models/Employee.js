const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: String,
  employeeCode: String,
  department: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Employee", employeeSchema);
