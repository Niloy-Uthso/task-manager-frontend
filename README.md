# React + Vite Task Manager Frontend

This is the frontend for the Task Manager App, built with React, Vite, Tailwind CSS, and DaisyUI. It connects to a backend API built with Next.js, Node.js, and MongoDB, and handles authentication via Firebase.

## 📋 Key Features

* User Authentication (Firebase)
* Add, View, Update, and Delete Tasks
* Dashboard with Task Statistics
* Blog Section
* Responsive Design
* Dark/Light Mode Support

## 🚀 Live Demo

🔗 **Live Site:** https://event-explorer-d9d7f.web.app/

## 🔗 Backend Repository

This frontend communicates with a backend API built using **Express.js**, **Node.js**, and **MongoDB**.

🔗 **Backend Repository:** https://github.com/Niloy-Uthso/task-manager-backend

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* React Router
* React Hook Form
* Firebase Authentication
* Tailwind CSS
* DaisyUI
* Recharts
* SweetAlert2

### Backend

* Express.js
* Node.js
* MongoDB
* REST API

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <this repository url>
cd <your-frontend-folder>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment Variables

Create a `.env` file in the root directory and after installing the firebase add the following:

```env
VITE_apiKey=YOUR_FIREBASE_API_KEY
VITE_authDomain=YOUR_FIREBASE_AUTH_DOMAIN
VITE_projectId=YOUR_FIREBASE_PROJECT_ID
VITE_storageBucket=YOUR_FIREBASE_STORAGE_BUCKET
VITE_messagingSenderId=YOUR_FIREBASE_SENDER_ID
VITE_appId=YOUR_FIREBASE_APP_ID

VITE_API_URL=YOUR_BACKEND_API_URL
```

### 4. Run the Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## 🚢 Deployment

### Build the Project

```bash
npm run build
```

### Deploy to Firebase Hosting

```bash
firebase deploy
```

## 📂 Project Features Overview

### Authentication

* Email & Password Login/Register
* Protected Routes
* Firebase Authentication Integration

### Task Management

* Create New Tasks
* View All Tasks
* Update Existing Tasks
* Delete Tasks
* Filter Tasks by Status

### Dashboard

* Task Statistics
* Visual Data Representation with Recharts
* User-Friendly Interface

### Blog Section

* Informative articles and resources
* Responsive blog layout

## 👨‍💻 Author

**Niloy Sarkar Uthso**

 
