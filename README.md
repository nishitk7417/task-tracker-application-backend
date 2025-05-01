# 📝 Task Tracker Application

A full-stack task and project management application where users can sign up, create projects, manage tasks, and mark their progress. Built using **MERN Stack**, deployed on **Render** (Backend) and **Vercel** (Frontend).

---

## 🌐 Live Demo

- 🔗 **Frontend**: [https://task-tracker-application-frontend.vercel.app](https://task-tracker-application-frontend.vercel.app)
- 🔗 **Backend**: [https://task-tracker-application-backend.onrender.com](https://task-tracker-application-backend.onrender.com)

---


---

## 🛠️ Tech Stack

### Frontend:
- React.js (Vite)
- Tailwind CSS
- Axios
- React Router

### Backend:
- Node.js + Express.js
- MongoDB (via Mongoose)
- JWT Authentication
- CORS and cookie-parser

---

## 🔐 Features

- User authentication (Login & Signup)
- Create up to 4 projects per user
- Add, edit, update, and delete tasks
- Status management for tasks (pending / completed)
- Project deletion with task cleanup
- Protected routes and role-based access
- Fully responsive design

---

## 🚀 Deployment

### Backend (Render)

1. Push `backend/` folder to a GitHub repo.
2. Go to [Render](https://render.com), create a new Web Service.
3. Connect your GitHub repo and choose the `backend/` folder.
4. Add the following environment variables:

#### `.env`
PORT=
MONGODB_URI=
CORS_ORIGIN=

ACCESS_TOKEN_SECRET=
ACCESS_TOKEN_EXPIRY=
REFRESH_TOKEN_SECRET=
REFRESH_TOKEN_EXPIRY=
(see in env.sample)

5. Set **Build Command**: `npm install`
6. Set **Start Command**: `npm run dev` (i use nodemon in it)

---

5. Set **Build Command**: `npm install`
6. Set **Start Command**: `node index.js` (or whatever your main file is)

---

### Frontend (Vercel)

1. Push `frontend/` folder to GitHub.
2. Go to [Vercel](https://vercel.com), import your GitHub project.
3. In **Vercel Project Settings**, add this env variable:

#### `.env`
VITE_API_BASE_URL=https://your-render-url.onrender.com (see on .env.example)

4. Vercel will auto-detect it's a Vite project and deploy.

---

## 🧪 Run Locally

### Backend:

```bash
cd backend
npm install
npm run dev

### Frontend:
cd frontend
npm install
npm run dev

