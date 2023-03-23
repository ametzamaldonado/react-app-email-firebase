import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Keeps track of user's login status
import { AuthProvider } from './context/AuthContext';
// Protected Route for a sign-in user
import ProtectedRoute from './navigation/ProtectedRoute';
// Components/Pages Imported
import { LoginForm, SignUpForm } from "../src/components/componentsIndex";
import Dashboard from "../src/pages/Dashboard"

function App() {

  return (
    <div className="App">
      <AuthProvider>

        {/* --------- NavBar Component would go here --------- */}
        {/* 
          As the routes are, the 'login' and 'signup' paths cannot access 'Dashboard' path without being logged in,
          BUT a logged in user can navigate to the 'login' and 'signup'
        */}
        <Routes>
          <Route exact path="/" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>

      </AuthProvider>
    </div>
  );
}

export default App;
