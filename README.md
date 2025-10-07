# Logan Tackett – Developer Portfolio

### 🌐 Live Site  
[**logantackett.dev**](https://logantackett.dev/)

---

## 🧭 Overview

This portfolio showcases selected full-stack and interactive software projects built by **Logan Tackett**, a **B.S. in Computer Science graduate (Sept 2025)** with strong foundations in **mathematics**, **software engineering**, and **system design**.

Each project was chosen to highlight different aspects of practical engineering:
- **Scalable backend design and authentication**
- **Frontend UX and interactivity**
- **3D visualization and algorithmic problem solving**
- **Statistical modeling and simulation**

The portfolio itself is a **React + Vite + Tailwind** single-page app, built for clean presentation, fast load times, and easy expansion.

---

## 🚀 Featured Projects

### 🧠 Brainstorming Dashboard  
**Live:** [https://simplebrainstorm.com](https://simplebrainstorm.com)  
**Repo:** [github.com/LoganTackett1/brainstorming-dashboard](https://github.com/LoganTackett1/brainstorming-dashboard)

A collaborative web app for creating and sharing idea boards.  
Users can add cards, upload images, and share boards by email or link with custom access levels.  
Includes a draggable light/dark theme preview and demo credentials for exploration.  

**Stack:**  
- **Frontend:** React (TypeScript, Tailwind, React-Draggable)  
- **Backend:** Go (Golang) + MySQL  
- **Auth:** JWT + bcrypt with user and access-control tables  
- **Hosting:** AWS S3 + Lightsail  
- **Deploy:** Dockerized for portability  

**Highlights:**  
- Full-stack CRUD architecture with persistent data and user auth  
- Secure board sharing (tokenized or user-based access)  
- Clean UX with real-time interactivity and custom themes  

---

### 🧩 Rubik’s Cube 3D  
**Live:** [https://logantackett1.github.io/rubiks-threejs/](https://logantackett1.github.io/rubiks-threejs/)  
**Repo:** [github.com/LoganTackett1/rubiks-threejs](https://github.com/LoganTackett1/rubiks-threejs)

A fully interactive 3D Rubik’s Cube built with **Three.js** — not an image, but a live, manipulable cube running in-browser.  
Supports reset, scramble, and auto-solve using **Kociemba’s two-phase algorithm** via the `cubejs` library.

**Stack:**  
- **Frontend:** Three.js + cubejs  
- **Backend:** None (static client app)  
- **Deployment:** GitHub Pages  

**Highlights:**  
- Real-time 3D interaction with Euler/quaternion-based rotation  
- Works on desktop and mobile  
- Demonstrates math, geometry, and state management skills  

---

### 🎲 Simulation Playground  
**Live:** [chance-lab-frontend.onrender.com/](https://chance-lab-frontend.onrender.com/)  
**Repo:** [github.com/LoganTackett1/chance-lab](https://github.com/LoganTackett1/chance-lab)

A data-driven simulation platform that models slot and sports betting outcomes using configurable probabilistic logic.  
Users can run large batches of simulations, visualize performance metrics, and persist results for comparison.

**Stack:**  
- **Backend:** ASP.NET Core (C#) + MongoDB Atlas  
- **Frontend:** React + Vite + Tailwind  
- **Deployment:** Dockerized backend + Render static frontend  

**Highlights:**  
- Real-time simulation execution and statistical reporting (RTP, variance)  
- Organized, modular service layer with REST endpoints  
- Emphasizes data integrity and scalability  

---

## 🧩 Portfolio Tech Stack

- **Frontend:** React + Vite + Tailwind CSS  
- **Build & Hosting:** GitHub Pages (gh-pages)  
- **Version Control:** Git + GitHub  
- **Design Goals:**  
  - Minimal, clean layout focused on readability  
  - Modular components for easy expansion  
  - Optimized build and load performance  

---

## 📬 Contact

- **Email:** [logantackettwork@gmail.com](mailto:logantackettwork@gmail.com)  
- **LinkedIn:** [linkedin.com/in/logantackett1](https://www.linkedin.com/in/logantackett1/)
- **GitHub:** [github.com/LoganTackett1](https://github.com/LoganTackett1)  

---

### ⚙️ Setup & Deployment

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build production bundle
npm run build

# Deploy to GitHub Pages
npm run deploy
```

---

## 🧾 License
This portfolio and its source code are open for viewing and learning.  
© 2025 Logan Tackett. All rights reserved.
