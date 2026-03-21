# Bootcamp Platform - Fullstack

This is a fullstack bootcamp management platform with a Node.js/Express backend and a React/Vite frontend.

## Project Structure

```
.
├── BOOTCAMP-BACKEND-INTEGRATION/  - Node.js/Express backend API
│   ├── src/
│   │   ├── server.js             - Main server entry point
│   │   ├── config/               - Database configuration
│   │   ├── controllers/          - Request handlers
│   │   ├── middleware/           - Express middleware
│   │   ├── models/               - MongoDB models
│   │   ├── routes/               - API routes
│   │   └── utils/                - Utility functions
│   ├── package.json
│   └── .env.example              - Environment variables template
│
└── CareerPath_Bootcamp-frontend-ui/  - React/Vite frontend application
    └── frontend/
        ├── src/
        │   ├── components/       - React components
        │   ├── pages/           - Page components
        │   ├── App.jsx          - Main app component
        │   └── main.jsx         - Entry point
        ├── package.json
        └── vite.config.js       - Vite configuration
```

## Setup Instructions

### Backend
```bash
cd BOOTCAMP-BACKEND-INTEGRATION
cp .env.example .env
npm install
npm start
```

### Frontend
```bash
cd CareerPath_Bootcamp-frontend-ui/frontend
npm install
npm run dev
```

## Environment Variables

Create `.env` files in each project directory using the provided `.env.example` files as templates.

## Git Branch

This project is on the `fullstack` branch. Use this branch for fullstack development.
