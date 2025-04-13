# Práctica DevOps - Aplicación Fullstack con Docker

## Descripción
Aplicación fullstack con:
- Frontend: React con Nginx
- Backend: Node.js/Express
- Base de datos: MongoDB

## Estructura
practica1/
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── Dockerfile
│   ├── README.md
│   ├── package.json
│   ├── package-lock.json
│   ├── node_modules/
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── src/
│       ├── App.js
│       ├── App.css
│       ├── App.test.js
│       ├── index.js
│       ├── index.css
│       ├── logo.svg
│       └── serviceWorker.js
├── .gitignore
└── README.md

## Base de datos:
docker run -d --name database --network fullstack-network -v mongo_data:/data/db mongo:5.0

## Backend:
cd backend
docker build -t my-backend .
docker run -d --name backend --network fullstack-network -p 3000:3000 my-backend

## frontend:
cd frontend
docker build -t my-frontend .
docker run -d --name frontend --network fullstack-network -p 80:80 my-frontend
