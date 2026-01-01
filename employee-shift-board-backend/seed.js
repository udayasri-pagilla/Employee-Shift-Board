require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./src/models/User");

mongoose.connect(process.env.MONGO_URI);

async function seed() {
  await User.deleteMany();

  const hashed = await bcrypt.hash("HireMe@2025!", 10);

  await User.create({
    email: "hire-me@anshumat.org",
    password: hashed,
    role: "admin"
  });

  console.log("Seed user created");
  process.exit();
}

seed();
