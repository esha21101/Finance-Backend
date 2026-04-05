# 💰 Finance Dashboard Backend

A backend system for managing financial records with role-based access control and dashboard analytics.

---

🔗 Live API: https://finance-backend-8y12.onrender.com/

## 🚀 Features

### 👤 User Management

* Create users with roles: ADMIN, ANALYST, VIEWER
* Role validation and error handling
* User status management (ACTIVE)

### 🔐 Role-Based Access Control

* Only ADMIN can create users and financial records
* Middleware-based authorization
* Proper error responses for unauthorized access

### 💰 Financial Records

* Create income and expense records
* Fields: amount, type, category, date, note
* Validation for required fields and types

### 📊 Dashboard Analytics

* Total income calculation
* Total expense calculation
* Net balance calculation

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* In-memory data storage (for simplicity)

---

## 📡 API Endpoints

### Users

* `GET /users` → Get all users
* `POST /users` → Create user (ADMIN only)

### Records

* `GET /records` → Get all records
* `POST /records` → Create record (ADMIN only)

### Dashboard

* `GET /dashboard/summary` → Get financial summary

---

## 🔐 Access Control

| Role    | Permissions    |
| ------- | -------------- |
| ADMIN   | Full access    |
| ANALYST | View data only |
| VIEWER  | View data only |

---

## 🧪 Testing

Tested using Thunder Client inside VS Code.

Example request:

POST /users
Headers:
role: ADMIN

Body:
{
"name": "Esha",
"role": "ADMIN"
}

---

## 💡 Notes

* Uses in-memory storage for simplicity
* Can be extended with database integration (MongoDB, PostgreSQL)

---

## 👩‍💻 Author

Esha Markam
