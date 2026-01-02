# Docker Test App 🚀

This project demonstrates how to **dockerize a Node.js application** and connect it with **MongoDB** using **Docker Compose**.  
It is created for learning and understanding core Docker concepts such as **Dockerfile**, **Docker images**, **containers**, **Docker Compose**, and **volumes**.

---

## 📌 Features

- Node.js + Express backend
- MongoDB database
- Mongo Express UI for database management
- Dockerized application
- Docker Compose for multi-container setup

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Docker
- Docker Compose

---

## 📂 Project Structure

docker-testapp/
│
├── Dockerfile
├── docker-compose.yml / mongodb.yaml
├── server.js
├── package.json
├── package-lock.json
└── README.md


---

## 🐳 Docker Concepts Used

- **Dockerfile** – Builds the Node.js application image  
- **Docker Image** – Blueprint of the application  
- **Docker Container** – Running instance of the image  
- **Docker Compose** – Runs multiple containers together  
- **Volumes** –  Used for MongoDB data persistence  

---

## ▶️ How to Run the Project

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/nikhilshinde45/docker-testapp.git
cd docker-testapp

Start MongoDB and Mongo Express using Docker Compose
docker compose up -d

Run the Node.js Application (Local)
npm install
npm start


The application will run at: 
http://localhost:3000

🌐 Access URLs
Service	URL
Node App	http://localhost:3000

Mongo Express	http://localhost:8081