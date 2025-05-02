# ⏱️ Attendance Tracker Web App

Welcome to our simple **Attendance Tracker Web App** – a simple tool to manage attendance records. 

---

## 🚀 Project Overview

This is a simple full-stack application built with **React (Vite)** on the frontend and **Express.js + MongoDB** on the backend. It allows users to:

- **Time In** by entering their name (CREATE)
- **View ongoing and completed records** (READ)
- **Time Out** to complete an attendance (UPDATE)
- **Delete completed attendance logs** (DELETE)

This web app implements CRUD operations!
---

## 📁 App Structure

### 🟦 Frontend (React)

| Section              | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| `Header`             | Displays the app title and time-in input form                              |
| `Incomplete Records` | Shows all users who have timed in but not yet timed out                    |
| `Completed Records`  | Lists all attendance entries with both time-in and time-out                |
| `Delete Modal`       | Confirms deletion of an attendance record before removing it permanently   |

---

### 🟨 Backend (Express.js)

Not shown here, but the backend handles:

- `GET /api/attendance` – Fetch all attendance records  
- `POST /api/attendance` – Add a new time-in record  
- `PUT /api/attendance/:id` – Mark time-out for a specific record  
- `DELETE /api/attendance/:id` – Delete a specific completed record  

All data is stored in a **MongoDB** collection.

---

## 👥 Meet the Team

| Name              | Role            |
|-------------------|-----------------|
| 🧑 Shaina Karillyn G. Pagarigan | Project Manager  |
| 🧑 Aerrol Kyle B. Santos | Project Manager |
| 🧑 Christian Eliseo N. Isip   | Full-Stack Developer |
| 🧑 Roylyn Dicdican | Frontend Developer |
| 🧑 Lorenz Genesis Reyes    | UI/UX Designer |
| 🧑 Rizalyne Asaldo   | UI/UX Designer |
| 🧑 Krystel Magpayo   | SQA  |

---

## 🛠️ Tech Stack

- **Frontend:** React + Vite + Tailwind CSS  
- **Backend:** Node.js + Express.js  
- **Database:** MongoDB  (localstorage)
- **HTTP Requests:** Axios

---

## 📸 Preview
![image](https://github.com/user-attachments/assets/3cbdd219-a9c6-4c71-b554-14da385ed776)



