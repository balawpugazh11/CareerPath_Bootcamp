import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BootcampDetail from './pages/BootcampDetail';
import Enrollment from './pages/Enrollment';
import StudentDashboard from './pages/student/Dashboard';
import LessonViewer from './pages/student/LessonViewer';
import AssignmentSubmission from './pages/student/AssignmentSubmission';
import MentorDashboard from './pages/mentor/MentorDashboard';
import MentorReview from './pages/mentor/MentorReview';
import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/bootcamp/:id" element={<BootcampDetail />} />
            <Route path="/bootcamp/:id/enroll" element={<Enrollment />} />
            <Route path="/dashboard" element={<StudentDashboard />} />
            <Route path="/learn/:bootcampId" element={<LessonViewer />} />
            <Route path="/learn/:bootcampId/assignment" element={<AssignmentSubmission />} />
            <Route path="/mentor" element={<MentorDashboard />} />
            <Route path="/mentor/review/:reviewId" element={<MentorReview />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
