import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AlumniDashboard from './pages/AlumniDashboard';
import StudentDashboard from './pages/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ProfilePage from './pages/ProfilePage';
import MentorshipPage from './pages/MentorshipPage';
import EventsPage from './pages/EventsPage';
import JobsPage from './pages/JobsPage';
import CommunityPage from './pages/CommunityPage';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
import './App.css';

function AppContent() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/dashboard" />} />
          <Route path="/register" element={!user ? <RegisterPage /> : <Navigate to="/dashboard" />} />
          
          {/* Protected Routes */}
          <Route 
            path="/dashboard" 
            element={
              user ? (
                user.role === 'alumni' ? <AlumniDashboard /> :
                user.role === 'student' ? <StudentDashboard /> :
                user.role === 'admin' ? <AdminDashboard /> :
                <Navigate to="/" />
              ) : (
                <Navigate to="/login" />
              )
            } 
          />
          <Route path="/profile" element={user ? <ProfilePage /> : <Navigate to="/login" />} />
          <Route path="/mentorship" element={user ? <MentorshipPage /> : <Navigate to="/login" />} />
          <Route path="/events" element={user ? <EventsPage /> : <Navigate to="/login" />} />
          <Route path="/jobs" element={user ? <JobsPage /> : <Navigate to="/login" />} />
          <Route path="/community" element={user ? <CommunityPage /> : <Navigate to="/login" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <Router>
          <AppContent />
        </Router>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;