@echo off
cd /d %~dp0

REM Start backend
start cmd /k "cd backend && npm install && npm start"

REM Start frontend
start cmd /k "cd frontend && npm install && npm run dev"

REM Open browser to frontend (adjust port if needed)
start http://localhost:5173

exit
