# 🔍 HireLens AI

> Transform your job search with AI-powered resume analysis, ATS optimization, skill gap detection, and personalized interview preparation.

HireLens AI is a full-stack Generative AI application built with React.js, Node.js, Express.js, MongoDB, and Gemini AI. The platform helps job seekers improve their hiring chances by analyzing resumes, evaluating job descriptions, identifying missing skills, generating ATS-friendly resumes, and creating tailored interview questions.

Designed as a production-ready SaaS application, HireLens AI combines secure authentication, AI-powered insights, resume intelligence, and PDF generation into a seamless career preparation experience.

---

## 🚀 Features

### 🔐 Authentication & Security

* User Registration & Login
* JWT-Based Authentication
* Protected Routes
* Token Blacklisting for Secure Logout
* Persistent User Sessions

### 📄 Resume Analysis

* Resume Upload & Processing
* Skill Extraction from Resume
* Resume Strength Assessment
* AI-Powered Resume Insights

### 🎯 Skill Gap Detection

* Analyze Job Descriptions
* Compare Required Skills Against Resume
* Identify Missing Skills
* Personalized Improvement Suggestions

### 🤖 AI Interview Preparation

* Generate Role-Specific Interview Questions
* Technical & Behavioral Question Sets
* AI-Powered Interview Reports
* Save and Access Previous Reports

### 📑 ATS Resume Generator

* ATS-Friendly Resume Creation
* AI-Optimized Content Suggestions
* Dynamic PDF Generation using Puppeteer
* Download Professional Resume PDFs

### 📊 User Dashboard

* View Recent Reports
* Manage Resume Analyses
* Track Interview Preparation Progress

---

## 🏗️ Architecture

```text
User
 │
 ▼
React Frontend
 │
 ▼
Express REST APIs
 │
 ├── Authentication Service
 ├── Resume Analysis Engine
 ├── Skill Gap Detection Engine
 ├── Interview Question Generator
 ├── PDF Generation Service
 └── Gemini AI Integration
 │
 ▼
MongoDB Database
```

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* React Router
* Context API
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* MongoDB Atlas

### AI & Processing

* Google Gemini AI
* Zod Validation

### Authentication

* JWT
* Token Blacklisting

### File Handling

* Multer

### PDF Generation

* Puppeteer

---

## 📂 Project Structure

```bash
HireLens-AI/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── context/
│   └── services/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── services/
│   ├── validators/
│   └── config/
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/hirelens-ai.git
cd hirelens-ai
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend directory:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key
```

---

## 🔄 Application Workflow

### Resume Analysis

1. Upload your resume.
2. AI extracts skills and key information.
3. Resume is analyzed against job requirements.
4. Insights and recommendations are generated.

### Skill Gap Detection

1. Paste a job description.
2. AI identifies required skills.
3. Resume skills are compared.
4. Missing skills and improvement suggestions are provided.

### Interview Preparation

1. AI analyzes the target role.
2. Personalized interview questions are generated.
3. Reports are saved for future access.

### ATS Resume Generation

1. Existing resume is processed.
2. AI optimizes content for ATS systems.
3. Professional PDF resume is generated.

---

## 🎯 Key Highlights

* End-to-End Full Stack Application
* Generative AI Integration with Gemini
* Secure Authentication System
* Resume Intelligence & Analysis
* Skill Gap Detection Engine
* ATS Resume Optimization
* Dynamic PDF Generation
* Production-Ready Architecture

---

## 📚 Learning Outcomes

Through this project, I gained experience in:

* Full Stack MERN Development
* Generative AI Integration
* Prompt Engineering
* JWT Authentication & Security
* File Upload Management
* REST API Design
* MongoDB Data Modeling
* PDF Generation using Puppeteer
* Building Scalable SaaS Applications

---

## 🚀 Future Enhancements

* AI Mock Interview Simulator
* Voice-Based Interview Practice
* Job Recommendation Engine
* ATS Scoring Dashboard
* Resume Version Control
* Recruiter Portal
* Real-Time Feedback System
* Multi-Language Support

---

## 👨‍💻 Author

**Aditya Patel**

Computer Science Student | MERN Stack Developer | AI Enthusiast

GitHub: https://github.com/Aadi-patel04

LinkedIn:https://www.linkedin.com/in/adityapatel004

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.
