import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import SignUpForm from './components/SignUpForm/SignUpForm';

function App() {
  return (
    <Router>
      {/* --------- NavBar Component would go here --------- */}

      <div className="App">
        <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
      
    </Router>
  );
}

export default App;
