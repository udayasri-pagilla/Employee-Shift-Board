require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("./src/models/User");
const Employee = require("./src/models/Employee");

mongoose.connect(process.env.MONGO_URI);

async function seed() {
  try {
    console.log("Seeding data...");

    // Clear existing data
    await User.deleteMany();
    await Employee.deleteMany();

    // Create Admin User
    const hashedPassword = await bcrypt.hash("HireMe@2025!", 10);

    const adminUser = await User.create({
      email: "hire-me@anshumat.org",
      password: hashedPassword,
      role: "admin"
    });

    // Create Employees
    const employees = await Employee.insertMany([
      {
        name: "Udayasri",
        employeeCode: "101",
        department: "Engineering",
        userId: adminUser._id
      },
      {
        name: "Test Employee",
        employeeCode: "102",
        department: "HR"
      }
    ]);

    console.log("Seed completed successfully");
    console.log("Admin User ID:", adminUser._id);
    console.log("Employee IDs:");
    employees.forEach(e =>
      console.log(`${e.name} → ${e._id}`)
    );

    process.exit();
  } catch (err) {
    console.error("Seeding failed", err);
    process.exit(1);
  }
}

seed();
