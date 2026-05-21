# Leave Management System

A full-stack web application for managing employee leave requests, built with React and Spring Boot.
Supports role-based workflows for both employees and HR administrators.

---

## Features

- **Employee view** — submit leave requests, track status (pending / approved / rejected)
- **HR admin view** — review, approve, or reject leave requests across all employees
- **JWT authentication** — secure login with token-based session management
- **Role-based access control** — different dashboards and permissions per user role
- **RESTful API** — clean backend endpoints for all leave operations
- **Responsive UI** — works across desktop and mobile screen sizes

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, HTML5, CSS3 |
| Backend | Spring Boot, Java |
| Database | MySQL |
| Authentication | JWT (JSON Web Tokens), Spring Security |
| API Testing | Postman |

---

## Project Structure

```
LeaveManagementSystem/
├── fullstack-front/        # React frontend
├── fullstack-backend/      # Spring Boot backend
├── fullstack_leave_detail.sql  # Database schema and seed data
└── .gitignore
```

---

## Getting Started

### Prerequisites

- Node.js (v18+)
- Java JDK 17+
- MySQL

### Backend Setup

```bash
cd fullstack-backend
# Configure your MySQL credentials in src/main/resources/application.properties
./mvnw spring-boot:run
```

### Frontend Setup

```bash
cd fullstack-front
npm install
npm start
```

### Database Setup

Import the provided SQL file into your MySQL instance:

```bash
mysql -u root -p your_database_name < fullstack_leave_detail.sql
```

The app will be running at `http://localhost:3000`

---
