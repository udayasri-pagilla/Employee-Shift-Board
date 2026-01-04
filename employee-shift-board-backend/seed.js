require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("./src/models/User");
const Employee = require("./src/models/Employee");
const Shift = require("./src/models/Shift");

mongoose.connect(process.env.MONGO_URI);

async function seed() {
  try {
    console.log("Seeding production data...");

    // Clear existing data
    await User.deleteMany();
    await Employee.deleteMany();
    await Shift.deleteMany();

    // -------- ADMIN USER --------
    const adminPassword = await bcrypt.hash("HireMe@2025!", 10);

    const adminUser = await User.create({
      email: "hire-me@anshumat.org",
      password: adminPassword,
      role: "admin"
    });

    const adminEmployee = await Employee.create({
      name: "Admin User",
      employeeCode: "101",
      department: "Engineering",
      userId: adminUser._id
    });

    // -------- NORMAL USER --------
    const userPassword = await bcrypt.hash("User@123", 10);

    const normalUser = await User.create({
      email: "user@anshumat.org",
      password: userPassword,
      role: "user"
    });

    const normalEmployee = await Employee.create({
      name: "Normal User",
      employeeCode: "102",
      department: "Operations",
      userId: normalUser._id
    });

    console.log(" Seed completed");
    console.log("Admin login:");
    console.log("  email: hire-me@anshumat.org");
    console.log("  password: HireMe@2025!");
    console.log("Normal user login:");
    console.log("  email: user@anshumat.org");
    console.log("  password: User@123");

    process.exit();
  } catch (err) {
    console.error("Seed failed", err);
    process.exit(1);
  }
}

seed();

