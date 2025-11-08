import React from 'react';
import { Routes, Route } from 'react-router-dom';

// --- Page Imports ---
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PlanTripPage from './pages/PlanTripPage';

// --- Component Imports ---
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/plan" element={<PlanTripPage />} />
          
          {/* You will add more routes for other pages here later */}
          {/* e.g., <Route path="/explore" element={<ExplorePage />} /> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
