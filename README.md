# CareerPath Bootcamp

Full-stack bootcamp platform with a React/Vite frontend and an Express/MongoDB backend.

## Project Structure

```text
.
|-- frontend/  - React application
`-- backend/   - Express API
```

## Setup

### Node Version

Use Node.js 22 LTS for this project. The current frontend Vite setup may fail on Node 25 on Windows with an `esbuild` `spawn EPERM` error.

### Backend

```bash
cd backend
copy .env.example .env
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Notes

Use `backend/.env.example` to create the backend `.env` file.
