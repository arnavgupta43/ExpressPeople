# 📦 ExpressPeople

A lightweight, beginner-friendly RESTful API built using Node.js and Express.js to manage a list of people—**without using any external database**. This project showcases Express routes, middleware, and custom logging, making it ideal for learning and practicing backend fundamentals.

---

## 🚀 Features

- 📄 List all people
- 🔍 Get a person by ID
- 🔎 Search by name (query params)
- ➕ Add a new person (POST)
- ✏️ Update a person's name (PUT)
- ❌ Delete a person (DELETE)
- 🧱 Modular route handling
- 📝 Custom middleware for request logging

---

## 🛠️ Tech Stack

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- No database — in-memory JS array used for data storage

---

## 📁 Project Structure

---

project-root/
│
├── data/
│ └── data.js # Static people data (array of objects)
├── routes/
│ └── people.js # All people-related API routes
├── logger.js # Custom middleware logger
├── app.js # Main app setup
└── package.json

---

---

## 📌 API Endpoints

| Method | Endpoint                      | Description                        |
| ------ | ----------------------------- | ---------------------------------- |
| GET    | `/api/people`                 | Get all people                     |
| GET    | `/api/people/:id`             | Get person by ID                   |
| GET    | `/api/people/query?name=John` | Search by name                     |
| POST   | `/api/people`                 | Add a new person (JSON body)       |
| PUT    | `/api/people/:id`             | Update a person's name (JSON body) |
| DELETE | `/api/people/:id`             | Delete a person by ID              |

---

## 🤖 Future Improvements

---

- Connect to a real database like MongoDB
- Add user authentication

---
