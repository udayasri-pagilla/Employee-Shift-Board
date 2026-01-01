# Employee Shift Board

A minimal full-stack Employee Shift Board application built as part of the **Anshumat Foundation – Full Stack Developer Assignment**.

This project demonstrates authentication, role-based access control, and custom business rule enforcement in a real-world HR utility.

---

## 🚀 Features

### 🔐 Authentication
- JWT-based login
- Pre-seeded users (no public registration)
- Role-based access control (Admin / Normal User)

### 🧑‍💼 Employee Shift Management
- Assign shifts to employees (Admin only)
- View shifts
- Delete shifts (Admin only)

### ❗ Business Rules Enforced
- No overlapping shifts for the same employee on the same date
- Minimum shift duration of **4 hours**
- Normal users can view **only their own shifts**
- Admins can view **all shifts**

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Axios
- Plain CSS

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

---

## 🔑 Demo Login Credentials (Pre-Seeded)

> These credentials are hard-coded as required by the assignment.

Email: hire-me@anshumat.org
Password: HireMe@2025!
Role: Admin

yaml
Copy code

---

## ⚙️ Setup Instructions

### 1️⃣ Backend Setup

```bash
cd employee-shift-board-backend
npm install
Create a .env file in the backend root:

env
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Seed the demo admin user:

bash
Copy code
node seed.js
Start the backend server:

bash
Copy code
npm run dev
Backend will run at:

arduino
Copy code
http://localhost:5000
2️⃣ Frontend Setup
bash
Copy code
cd employee-shift-board-frontend
npm install
npm run dev
Frontend will run at:

arduino
Copy code
http://localhost:3000
📡 API Endpoints
Authentication
POST /api/login

Shifts
POST /api/shifts (Admin only)

GET /api/shifts

DELETE /api/shift/:id (Admin only)

All protected routes require a JWT token in the Authorization header.

🧪 Postman Collection
A Postman collection is included to test all APIs:

Login

Create Shift

Get Shifts

Delete Shift

📝 Notes for Reviewer
Business rules are enforced at the backend service layer.

Role-based access is handled using JWT middleware.

UI is intentionally kept simple as per assignment instructions.

No registration flow is provided by design (internal HR system).

📌 Author
Udayasri Pagilla
Full Stack Developer (Internship Assignment)