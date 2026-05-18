# DevTrack

DevTrack is a modern project management platform inspired by Jira, Trello, Linear, and Notion.

Built with a professional full stack architecture using React, FastAPI, PostgreSQL, and modern SaaS UI concepts.

---

# Features

- Authentication with JWT
- Protected routes
- Modern dashboard UI
- Kanban board system
- Drag and drop tasks
- Projects management
- Analytics dashboard
- Responsive layout
- FastAPI backend
- PostgreSQL database
- REST API integration

---

# Tech Stack

## Frontend

- React
- Vite
- TailwindCSS
- Axios
- React Router
- Recharts

## Backend

- FastAPI
- SQLAlchemy
- PostgreSQL
- JWT Authentication
- Uvicorn

---

# Project Structure

```txt
DevTrack
│
├── backend
│   ├── app
│   ├── routes
│   ├── models
│   ├── schemas
│   └── services
│
└── frontend
    ├── src
    ├── components
    ├── pages
    ├── services
    └── router
```

---

# Installation

## Backend

```bash
cd backend

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Backend running:

```txt
http://127.0.0.1:8000
```

Swagger docs:

```txt
http://127.0.0.1:8000/docs
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend running:

```txt
http://localhost:5173
```

---

# Screens

- Login page
- Dashboard
- Analytics
- Kanban board
- Projects sidebar
- Create task modal
- Create project modal
