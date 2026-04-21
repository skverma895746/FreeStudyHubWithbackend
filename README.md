# 📚 FreeStudyHub

FreeStudyHub is a web-based platform where students can access **batch-wise study materials** like 9th, B.Tech, etc.

In this project, study materials are uploaded manually to Google Drive and their links are stored in the database for easy access.

---

## 🚀 Features

* 📂 Batch-wise study materials (9th, B.Tech, etc.)
* 🔗 Google Drive file links integration
* ⚡ Fast data fetching using Express API
* 📤 Contact form
* 💾 MongoDB database

---

## 🛠️ Tech Stack

### 🌐 Frontend

* HTML
* CSS
* JavaScript

### 🧠 Backend

* Node.js
* Express.js

### 🗄️ Database

* MongoDB
* Mongoose

### ☁️ File Storage

* Google Drive (Manual Upload)

---

## 📁 Project Structure

```id="proj1"
FreeStudyHub/
│
├── frontend/
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── assets/
│
├── backend/
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── controllers/
│   │   └── db/
│   │
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ☁️ Google Drive Folder Structure

```id="drive1"
FreeStudyHub/
│
├── 9th/
│   ├── Maths/
│   ├── Science/
│
├── BTech/
│   ├── CSE/
│   ├── ECE/
│
└── Notes/
```

---

## 🔄 How It Works

```id="flow1"
Admin uploads file manually to Google Drive
        ↓
Copy file sharing link
        ↓
Store link in MongoDB database
        ↓
Frontend fetches data via API
        ↓
Users click and access file
```

---

## 🌐 API Endpoints

### Get Materials

```id="api1"
GET /api/materials
```

### Add Material (Manual link entry)

```id="api2"
POST /api/materials
```

---

## 🧠 What I Learned

* REST API using Express.js
* MongoDB integration with Mongoose
* Handling frontend-backend communication
* Using Google Drive as file storage

---

## 🔮 Future Improvements

* ☁️ Direct file upload (Google Drive API)
* 🔐 Admin login system
* 🔎 Search & filter materials
* 📱 Responsive UI

---

## 👨‍💻 Author

**Sandeep Verma**

---

⭐ Star this repo if you like it!
