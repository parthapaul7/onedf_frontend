// src/App.jsx
import React from 'react';
import './input.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/Landing';
import RegistrationForm from './components/RegistrationForm';
import DashboardPage from './components/Dashboard';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" exact element={<><Navbar/><LandingPage/></>}/>
        <Route path='/dashboard' element={<><Navbar/><DashboardPage/></>}/>
        <Route path="/registration" element={<RegistrationForm/>} />
      </Routes>
    </Router>
  );
};

export default App;

