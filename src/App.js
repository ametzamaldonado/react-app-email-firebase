import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Keeps track of user's login status
import { AuthProvider } from './context/AuthContext';
// Protected Route for a sign-in user
import ProtectedRoute from './navigation/ProtectedRoute';
// Components/Pages Imported
import { LoginForm, SignUpForm } from "../src/components/componentsIndex";
import Home from "../src/pages/LoggedInPages/Home"

function App() {

  return (
    <div className="App">
      <AuthProvider>

        {/* --------- NavBar Component would go here --------- */}
        {/* 
          As the routes are, the 'login' and 'signup' paths cannot access 'Home' path without being logged in,
          BUT a logged in user can navigate to the 'login' and 'signup'
        */}
        <Routes>
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path='/Home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        </Routes>

      </AuthProvider>
    </div>
  );
}

export default App;
